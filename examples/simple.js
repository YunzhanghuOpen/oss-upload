webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(181);


/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint no-console:0 */
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(35);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcOssUpload = __webpack_require__(173);
	
	var _rcOssUpload2 = _interopRequireDefault(_rcOssUpload);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var style = '\n        .rc-oss-upload-disabled {\n           opacity:0.5;\n        ';
	
	var Test = _react2.default.createClass({
	  displayName: 'Test',
	  getInitialState: function getInitialState() {
	    this.uploaderProps = {
	      action: '/upload.do',
	      data: { a: 1, b: 2 },
	      headers: {
	        Authorization: 'xxxxxxx'
	      },
	      multiple: true,
	      beforeUpload: function beforeUpload(file) {
	        console.log('beforeUpload', file.name);
	      },
	
	      onStart: function onStart(file) {
	        console.log('onStart', file.name);
	        // this.refs.inner.abort(file);
	      },
	      onSuccess: function onSuccess(file) {
	        console.log('onSuccess', file);
	      },
	      onProgress: function onProgress(step, file) {
	        console.log('onProgress', Math.round(step.percent), file.name);
	      },
	      onError: function onError(err) {
	        console.log('onError', err);
	      }
	    };
	    return {
	      destroyed: false
	    };
	  },
	  destroy: function destroy() {
	    this.setState({
	      destroyed: true
	    });
	  },
	  render: function render() {
	    if (this.state.destroyed) {
	      return null;
	    }
	    return _react2.default.createElement(
	      'div',
	      {
	        style: {
	          margin: 100
	        }
	      },
	      _react2.default.createElement(
	        'h2',
	        null,
	        '固定位置'
	      ),
	      _react2.default.createElement(
	        'style',
	        null,
	        style
	      ),
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _rcOssUpload2.default,
	          _extends({}, this.uploaderProps, { ref: 'inner' }),
	          _react2.default.createElement(
	            'a',
	            null,
	            '开始上传'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'h2',
	        null,
	        '滚动'
	      ),
	      _react2.default.createElement(
	        'div',
	        {
	          style: {
	            height: 200,
	            overflow: 'auto',
	            border: '1px solid red'
	          }
	        },
	        _react2.default.createElement(
	          'div',
	          {
	            style: {
	              height: 500
	            }
	          },
	          _react2.default.createElement(
	            _rcOssUpload2.default,
	            _extends({}, this.uploaderProps, { component: 'div', style: { display: 'inline-block' } }),
	            _react2.default.createElement(
	              'a',
	              null,
	              '开始上传2'
	            )
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'button',
	        { onClick: this.destroy },
	        'destroy'
	      )
	    );
	  }
	});
	
	_reactDom2.default.render(_react2.default.createElement(Test, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=simple.js.map