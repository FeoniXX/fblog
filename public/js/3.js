(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/admin/LinkForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/pages/admin/LinkForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AdminLinkCreate",
  data: function data() {
    return {
      rules: {
        name: [{
          required: true,
          message: "请输入友链名称",
          trigger: "blur"
        }],
        desc: [{
          required: true,
          message: "请输入站点描述内容",
          trigger: "blur"
        }],
        link: [{
          required: true,
          message: "请输入站点链接",
          trigger: "blur"
        }]
      },
      submitting: false,
      formData: {
        id: 0,
        name: "",
        desc: "",
        link: ""
      }
    };
  },
  created: function created() {
    this.$route.name === "AdminLinkUpdate" && this.$store.dispatch("loadAdminLink", {
      id: this.$route.params.id
    });
  },
  computed: {
    linkLoadStatus: function linkLoadStatus() {
      if (this.$route.name === "AdminLinkUpdate") {
        var status = this.$store.getters.getAdminLinkLoadStatus;
        this.beforeSubmit(status);
        this.formData = this.link;
        return status;
      }

      this.$Loading.start();
      this.$Loading.finish();
      return 2;
    },
    link: function link() {
      if (this.$route.name === "AdminLinkUpdate") {
        var res = this.$store.getters.getAdminLink;

        if (res.length > 0 && res.errcode !== 0) {
          this.$Message.error(res.message);
        }

        return res.data || this.formData;
      }

      return this.formData;
    },
    linkCreateStatus: function linkCreateStatus() {
      return this.$store.getters.getAdminLinkCreateStatus;
    },
    linkCreateResult: function linkCreateResult() {
      return this.$store.getters.getAdminLinkCreateResult;
    },
    linkUpdateStatus: function linkUpdateStatus() {
      return this.$store.getters.getAdminLinkUpdateStatus;
    },
    linkUpdateResult: function linkUpdateResult() {
      return this.$store.getters.getAdminLinkUpdateResult;
    }
  },
  watch: {
    linkCreateStatus: function linkCreateStatus(status) {
      this.beforeSubmit(status);
    },
    linkCreateResult: function linkCreateResult(res) {
      this.afterSubmit(res);
    },
    linkUpdateStatus: function linkUpdateStatus(status) {
      this.beforeSubmit(status);
    },
    linkUpdateResult: function linkUpdateResult(res) {
      this.afterSubmit(res);
    }
  },
  methods: {
    onSubmit: function onSubmit(name) {
      var _this = this;

      this.$refs[name].validate(function (valid) {
        if (valid) {
          _this.submitting = true;

          if (_this.$route.name === "AdminLinkCreate") {
            _this.$store.dispatch("createAdminLink", _this.formData);
          } else {
            _this.$store.dispatch("updateAdminLink", _this.formData);
          }
        }
      });
    },
    beforeSubmit: function beforeSubmit(status) {
      if (status === 1) {
        this.$Loading.start();
      } else if (status === 2) {
        this.$Loading.finish();
      } else if (status === 3) {
        this.$Loading.error();
      }
    },
    afterSubmit: function afterSubmit(res) {
      var _this2 = this;

      if (res.errcode !== 0) {
        this.$Message.error(res.message);
      } else {
        this.$Message.success({
          content: res.message,
          onClose: function onClose() {
            _this2.$router.push({
              name: "AdminLink"
            });
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/admin/LinkForm.vue?vue&type=template&id=0aa80b1b&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/pages/admin/LinkForm.vue?vue&type=template&id=0aa80b1b& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Card",
    [
      _c("h2", { staticClass: "i-md-content" }, [
        _vm._v(
          "\n    " +
            _vm._s(
              _vm.$route.name === "AdminLinkUpdate" ? "编辑友链" : "添加友链"
            ) +
            "\n  "
        )
      ]),
      _vm._v(" "),
      _c(
        "Form",
        {
          ref: "linkForm",
          style: { width: "50%" },
          attrs: { "label-width": 80, rules: _vm.rules, model: _vm.formData }
        },
        [
          _c(
            "FormItem",
            { attrs: { label: "站点名称", prop: "name" } },
            [
              _c("Input", {
                attrs: { placeholder: "请输入站点名称" },
                model: {
                  value: _vm.formData.name,
                  callback: function($$v) {
                    _vm.$set(_vm.formData, "name", $$v)
                  },
                  expression: "formData.name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "FormItem",
            { attrs: { label: "站点描述", prop: "desc" } },
            [
              _c("Input", {
                attrs: {
                  type: "textarea",
                  autosize: { minRows: 2, maxRows: 5 },
                  placeholder: "请输入站点描述内容..."
                },
                model: {
                  value: _vm.formData.desc,
                  callback: function($$v) {
                    _vm.$set(_vm.formData, "desc", $$v)
                  },
                  expression: "formData.desc"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "FormItem",
            { attrs: { label: "站点链接", prop: "link" } },
            [
              _c("Input", {
                attrs: { placeholder: "请输入站点链接" },
                model: {
                  value: _vm.formData.link,
                  callback: function($$v) {
                    _vm.$set(_vm.formData, "link", $$v)
                  },
                  expression: "formData.link"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "FormItem",
            [
              _c(
                "Button",
                {
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      return _vm.onSubmit("linkForm")
                    }
                  }
                },
                [_vm._v("提交")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.linkLoadStatus === 1
        ? _c("Spin", { attrs: { size: "large", fix: "" } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/pages/admin/LinkForm.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/pages/admin/LinkForm.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LinkForm_vue_vue_type_template_id_0aa80b1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkForm.vue?vue&type=template&id=0aa80b1b& */ "./resources/assets/js/pages/admin/LinkForm.vue?vue&type=template&id=0aa80b1b&");
/* harmony import */ var _LinkForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkForm.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/admin/LinkForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LinkForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LinkForm_vue_vue_type_template_id_0aa80b1b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LinkForm_vue_vue_type_template_id_0aa80b1b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/admin/LinkForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/admin/LinkForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/pages/admin/LinkForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LinkForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/admin/LinkForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/admin/LinkForm.vue?vue&type=template&id=0aa80b1b&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/pages/admin/LinkForm.vue?vue&type=template&id=0aa80b1b& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkForm_vue_vue_type_template_id_0aa80b1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LinkForm.vue?vue&type=template&id=0aa80b1b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/admin/LinkForm.vue?vue&type=template&id=0aa80b1b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkForm_vue_vue_type_template_id_0aa80b1b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkForm_vue_vue_type_template_id_0aa80b1b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);