import request from './request';
import React, { PropTypes } from 'react';
import uid from './uid';

const AjaxUploader = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    multiple: PropTypes.bool,
    onStart: PropTypes.func,
    data: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.func,
    ]),
    headers: PropTypes.object,
    beforeUpload: PropTypes.func,
    withCredentials: PropTypes.bool,
  },

  getInitialState() {
    return {
      disabled: false,
      uid: uid(),
    };
  },

  onChange(e) {
    if (this.state.disabled) {
      return;
    }
    this.setState({
      disabled: true,
    });
    const files = e.target.files;
    this.uploadFiles(files);
  },

  onClick() {
    const el = this.refs.file;
    if (!el) {
      return;
    }
    el.click();
  },

  onKeyDown(e) {
    if (e.key === 'Enter') {
      this.onClick();
    }
  },

  onFileDrop(e) {
    if (e.type === 'dragover') {
      e.preventDefault();
      return;
    }

    if (this.state.disabled) {
      return;
    }

    const files = e.dataTransfer.files;
    this.uploadFiles(files);

    e.preventDefault();
  },

  uploadFiles(files) {
    const len = files.length;
    if (len > 0) {
      for (let i = 0; i < len; i++) {
        const file = files.item(i);
        file.uid = uid();
        this.upload(file);
      }
      if (this.props.multiple) {
        this.props.onStart(Array.prototype.slice.call(files));
      } else {
        this.props.onStart(Array.prototype.slice.call(files)[0]);
      }
    }
  },

  upload(file) {
    const props = this.props;
    if (!props.beforeUpload) {
      return this.post(file);
    }

    const before = props.beforeUpload(file);
    if (before && before.then) {
      before.then((processedFile) => {
        if (Object.prototype.toString.call(processedFile) === '[object File]') {
          this.post(processedFile);
        } else {
          this.post(file);
        }
      }, () => {
        this._reset();
      });
    } else if (before !== false) {
      this.post(file);
    } else {
      // fix https://github.com/ant-design/ant-design/issues/1989
      this._reset();
    }
  },

  post(file) {
    const props = this.props;
    let data = props.data;
    if (typeof data === 'function') {
      data = data(file);
    }

    request({
      action: props.action,
      filename: props.name,
      file: file,
      data: data,
      headers: props.headers,
      withCredentials: props.withCredentials,
      onProgress: e => {
        props.onProgress(e, file);
      },
      onSuccess: ret => {
        props.onSuccess(ret, file);
        this._reset();
      },
      onError: (err, ret) => {
        props.onError(err, ret, file);
        this._reset();
      },
    });
  },

  _reset() {
    this.setState({
      disabled: false,
      uid: uid(),
    });
  },

  render() {
    const props = this.props;
    return (
      <span
        onClick={this.onClick}
        onKeyDown={this.onKeyDown}
        onDrop={this.onFileDrop}
        onDragOver={this.onFileDrop}
        role="button"
        tabIndex="0"
        className={this.state.disabled ? `${this.props.prefixCls} ${props.prefixCls}-disabled` : `${this.props.prefixCls}`}
      >
          <input
            type="file"
            ref="file"
            key={this.state.uid}
            disabled={this.state.disabled}
            style={{ display: 'none' }}
            accept={props.accept}
            multiple={this.props.multiple}
            onChange={this.onChange}
          />
        {props.children}
      </span>
    );
  },
});

export default AjaxUploader;
