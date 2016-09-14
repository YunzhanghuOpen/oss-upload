webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(35);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcOssUpload = __webpack_require__(173);
	
	var _rcOssUpload2 = _interopRequireDefault(_rcOssUpload);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var props = {
	  region: '<oss region>',
	  accessKeyId: '<Your accessKeyId>',
	  accessKeySecret: '<Your accessKeySecret>',
	  bucket: '<Your bucket name>',
	  action: '/upload.do',
	  onStart: function onStart(file) {
	    console.log('onStart', file, file.name);
	  },
	  onSuccess: function onSuccess(ret) {
	    console.log('onSuccess', ret);
	  },
	  onError: function onError(err) {
	    console.log('onError', err);
	  },
	  beforeUpload: function beforeUpload(file) {
	    return new Promise(function (resolve) {
	      console.log('start check');
	      setTimeout(function () {
	        console.log('check finshed');
	        resolve(file);
	      }, 3000);
	    });
	  }
	}; /* eslint no-console:0 */
	
	var Test = _react2.default.createClass({
	  displayName: 'Test',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      {
	        style: {
	          margin: 100
	        }
	      },
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _rcOssUpload2.default,
	          props,
	          _react2.default.createElement(
	            'a',
	            null,
	            '开始上传'
	          )
	        )
	      )
	    );
	  }
	});
	
	_reactDom2.default.render(_react2.default.createElement(Test, null), document.getElementById('__react-content'));

/***/ }
]);
//# sourceMappingURL=beforeUpload.js.map