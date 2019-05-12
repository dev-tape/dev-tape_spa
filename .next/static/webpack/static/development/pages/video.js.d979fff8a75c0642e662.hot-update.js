webpackHotUpdate("static/development/pages/video.js",{

/***/ "./pages/video.js":
/*!************************!*\
  !*** ./pages/video.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-bootstrap-grid */ "./node_modules/styled-bootstrap-grid/dist/index.js");
/* harmony import */ var styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_var__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config/var */ "./config/var.js");
/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/header/Header */ "./components/header/Header.js");
/* harmony import */ var _components_section_Section__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/section/Section */ "./components/section/Section.js");
/* harmony import */ var _components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/sidebar/Sidebar */ "./components/sidebar/Sidebar.js");
/* harmony import */ var _components_player_Player__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/player/Player */ "./components/player/Player.js");
/* harmony import */ var _components_title_Title__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/title/Title */ "./components/title/Title.js");
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/button/Button */ "./components/button/Button.js");
/* harmony import */ var _components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/tooltip/Tooltip */ "./components/tooltip/Tooltip.js");
/* harmony import */ var _components_videoCard_VideoCard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/videoCard/VideoCard */ "./components/videoCard/VideoCard.js");
/* harmony import */ var _components_hashtag_Hashtag__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/hashtag/Hashtag */ "./components/hashtag/Hashtag.js");






var _jsxFileName = "/home/anat2906/projects/JS/PA_individual_project/pages/video.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n      * {\n        font-family: \"Roboto\", sans-serif;\n      }\n\n      body {\n        background: white;\n        color: ", ";\n      }\n\n      a {\n        text-decoraton: none;\n        color: inherit;\n        cursor: pointer;\n      }\n      \n      .slick-next:before {\n        font-size: 30px;\n        color: ", ";\n        content: \"\u27AD\";\n        transform: translateX(-50%);\n        position: absolute;\n        line-height: 0;\n        display: none;\n      }\n      .slick-prev:before {\n        transform: translateX(-50%);\n        position: absolute;\n        line-height: 0;\n        font-size: 30px;\n        color: ", ";\n        content: \"\u27AD\";\n        transform: translateX(-50%);\n        margin-top: -50%;\n        display: none;\n      }\n      .slick-prev {\n        transform: scaleX(-1);\n      }\n      \n      @keyframes shadow {\n        0% {\n          background-position: 0% 50%;\n        }\n        50% {\n          background-position: 100% 50%;\n        }\n        100% {\n          background-position: 0% 50%;\n        }\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
















var Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["createGlobalStyle"])(_templateObject(), _config_var__WEBPACK_IMPORTED_MODULE_9__["colors"].dark_1, _config_var__WEBPACK_IMPORTED_MODULE_9__["colors"].dark_3, _config_var__WEBPACK_IMPORTED_MODULE_9__["colors"].dark_3);
var gridTheme = {
  col: {
    padding: 5
  },
  container: {
    padding: 5
  }
};
var DateSection = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "video__DateSection",
  componentId: "cv7kgv-0"
})(["display:flex;align-items:end;p{font-family:\"PT Mono\";font-size:15px;font-weight:700;margin-right:0.5em;}span{color:", ";font-family:\"PT Mono\";font-size:13px;}"], _config_var__WEBPACK_IMPORTED_MODULE_9__["colors"].dark_2);
var AuthorSection = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "video__AuthorSection",
  componentId: "cv7kgv-1"
})(["display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid ", ";padding-bottom:1em;img{width:35px;height:35px;margin-right:0.5em;}h6{margin:0;font-family:\"Roboto\",sans-serif;font-size:16px;}"], _config_var__WEBPACK_IMPORTED_MODULE_9__["colors"].shadow);
var ViewsSection = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "video__ViewsSection",
  componentId: "cv7kgv-2"
})(["display:flex;align-items:center;padding:1em 0;"]);
var VideoInfo = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(_components_videoCard_VideoCard__WEBPACK_IMPORTED_MODULE_17__["FInfo"]).withConfig({
  displayName: "video__VideoInfo",
  componentId: "cv7kgv-3"
})(["img{width:20px;height:20px;}span{16px;}"]);
var Description = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].p.withConfig({
  displayName: "video__Description",
  componentId: "cv7kgv-4"
})(["font-size:16px;"]);

var VideoPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(VideoPage, _Component);

  function VideoPage() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VideoPage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(VideoPage).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(VideoPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Global, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_8__["GridThemeProvider"], {
        gridTheme: gridTheme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_header_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("main", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        className: "d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        xs: 9,
        sm: 9,
        md: 9,
        lg: 9,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_section_Section__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_player_Player__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_title_Title__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "Video Title"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DateSection, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "Published at"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "25/09/2019")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(AuthorSection, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "d-flex align-items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "static/icons/svg/user.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Username")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, "Follow")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ViewsSection, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_16__["default"], {
        content: "Views",
        className: "mr-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(VideoInfo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "static/icons/svg/tv.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "2750")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_16__["default"], {
        content: "Likes",
        className: "mr-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(VideoInfo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "static/icons/svg/favourite.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "200")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_16__["default"], {
        content: "Comments",
        className: "mr-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(VideoInfo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "static/icons/svg/chat-alt.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "35")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_16__["default"], {
        content: "Collections",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(VideoInfo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "static/icons/svg/star.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, "10"))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "Some video description In some cases you might want to change which tag or component a styled component renders. This is common when building a navigation bar for example, where there are a mix of anchor links and buttons but they should be styled identically."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_hashtag_Hashtag__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "#development"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_hashtag_Hashtag__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "#node_js"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_hashtag_Hashtag__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "#js"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_hashtag_Hashtag__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, "#js_conf_eu"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_hashtag_Hashtag__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "#ryan_dahl"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_section_Section__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_12__["StyledSidebar"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_12__["SectionTitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, "Recommended"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "static/icons/svg/happy-face.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_videoCard_VideoCard__WEBPACK_IMPORTED_MODULE_17__["VideoCard"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      })))))))));
    }
  }]);

  return VideoPage;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (VideoPage);

/***/ })

})
//# sourceMappingURL=video.js.d979fff8a75c0642e662.hot-update.js.map