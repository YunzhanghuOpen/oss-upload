/* eslint no-console:0 */

import React from 'react';
import ReactDOM from 'react-dom';
import Upload from 'rc-oss-upload';

const props = {
  region: '<oss region>',
  accessKeyId: '<Your accessKeyId>',
  accessKeySecret: '<Your accessKeySecret>',
  bucket: '<Your bucket name>',
  action: '/upload.do',
  onStart(file) {
    console.log('onStart', file, file.name);
  },
  onSuccess(ret) {
    console.log('onSuccess', ret);
  },
  onError(err) {
    console.log('onError', err);
  },
  beforeUpload(file) {
    return new Promise((resolve) => {
      console.log('start check');
      setTimeout(() => {
        console.log('check finshed');
        resolve(file);
      }, 3000);
    });
  },
};

const Test = React.createClass({
  render() {
    return (
      <div
        style={{
          margin: 100,
        }}
      >
        <div>
          <Upload {...props}><a>开始上传</a></Upload>
        </div>
      </div>
    );
  },
});

ReactDOM.render(<Test/>, document.getElementById('__react-content'));
