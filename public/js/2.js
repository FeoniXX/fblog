(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/admin/CategoryForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/pages/admin/CategoryForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AdminCategoryCreate",
  data: function data() {
    return {
      rules: {
        name: [{
          required: true,
          message: "请输入分类名称",
          trigger: "blur"
        }]
      },
      submitting: false,
      formData: {
        id: 0,
        name: "",
        desc: "",
        status: 1
      }
    };
  },
  created: function created() {
    this.$route.name === "AdminCategoryUpdate" && this.$store.dispatch("loadAdminCate", {
      id: this.$route.params.id
    });
  },
  computed: {
    cateLoadStatus: function cateLoadStatus() {
      if (this.$route.name === "AdminCategoryUpdate") {
        var status = this.$store.getters.getAdminCateLoadStatus;
        this.beforeSubmit(status);
        this.formData = this.cate;
        return status;
      }

      this.$Loading.start();
      this.$Loading.finish();
      return 2;
    },
    cate: function cate() {
      if (this.$route.name === "AdminCategoryUpdate") {
        var res = this.$store.getters.getAdminCate;

        if (res.length > 0 && res.errcode !== 0) {
          this.$Message.error(res.message);
        }

        return res.data || this.formData;
      }

      return this.formData;
    },
    cateCreateStatus: function cateCreateStatus() {
      return this.$store.getters.getAdminCateCreateStatus;
    },
    cateCreateResult: function cateCreateResult() {
      return this.$store.getters.getAdminCateCreateResult;
    },
    cateUpdateStatus: function cateUpdateStatus() {
      return this.$store.getters.getAdminCateUpdateStatus;
    },
    cateUpdateResult: function cateUpdateResult() {
      return this.$store.getters.getAdminCateUpdateResult;
    }
  },
  watch: {
    cateCreateStatus: function cateCreateStatus(status) {
      this.beforeSubmit(status);
    },
    cateCreateResult: function cateCreateResult(res) {
      this.afterSubmit(res);
    },
    cateUpdateStatus: function cateUpdateStatus(status) {
      this.beforeSubmit(status);
    },
    cateUpdateResult: function cateUpdateResult(res) {
      this.afterSubmit(res);
    }
  },
  methods: {
    onSubmit: function onSubmit(name) {
      var _this = this;

      this.$refs[name].validate(function (valid) {
        if (valid) {
          _this.submitting = true;

          if (_this.$route.name === "AdminCategoryCreate") {
            _this.$store.dispatch("createAdminCate", _this.formData);
          } else {
            _this.$store.dispatch("updateAdminCate", _this.formData);
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
              name: "AdminCategory"
            });
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/admin/CategoryForm.vue?vue&type=template&id=41a0799f&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/pages/admin/CategoryForm.vue?vue&type=template&id=41a0799f& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
              _vm.$route.name === "AdminCategoryUpdate"
                ? "编辑分类"
                : "新建分类"
            ) +
            "\n  "
        )
      ]),
      _vm._v(" "),
      _c(
        "Form",
        {
          ref: "categoryForm",
          style: { width: "50%" },
          attrs: { "label-width": 80, rules: _vm.rules, model: _vm.formData }
        },
        [
          _c(
            "FormItem",
            { attrs: { label: "分类名称", prop: "name" } },
            [
              _c("Input", {
                attrs: { placeholder: "请输入分类名称" },
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
            { attrs: { label: "分类简介", prop: "desc" } },
            [
              _c("Input", {
                attrs: {
                  type: "textarea",
                  autosize: { minRows: 2, maxRows: 5 },
                  placeholder: "请输入关于分类的简单介绍内容..."
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
            { attrs: { label: "前端显示" } },
            [
              _c(
                "RadioGroup",
                {
                  model: {
                    value: _vm.formData.status,
                    callback: function($$v) {
                      _vm.$set(_vm.formData, "status", $$v)
                    },
                    expression: "formData.status"
                  }
                },
                [
                  _c("Radio", { attrs: { label: 1 } }, [_vm._v("显示")]),
                  _vm._v(" "),
                  _c("Radio", { attrs: { label: 0 } }, [_vm._v("不显示")])
                ],
                1
              )
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
                      return _vm.onSubmit("categoryForm")
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
      _vm.cateLoadStatus === 1
        ? _c("Spin", { attrs: { size: "large", fix: "" } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/pages/admin/CategoryForm.vue":
/*!**********************************************************!*\
  !*** ./resources/assets/js/pages/admin/CategoryForm.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryForm_vue_vue_type_template_id_41a0799f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryForm.vue?vue&type=template&id=41a0799f& */ "./resources/assets/js/pages/admin/CategoryForm.vue?vue&type=template&id=41a0799f&");
/* harmony import */ var _CategoryForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryForm.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/admin/CategoryForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CategoryForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoryForm_vue_vue_type_template_id_41a0799f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoryForm_vue_vue_type_template_id_41a0799f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/admin/CategoryForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/admin/CategoryForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/pages/admin/CategoryForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/admin/CategoryForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/admin/CategoryForm.vue?vue&type=template&id=41a0799f&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/pages/admin/CategoryForm.vue?vue&type=template&id=41a0799f& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryForm_vue_vue_type_template_id_41a0799f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryForm.vue?vue&type=template&id=41a0799f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/admin/CategoryForm.vue?vue&type=template&id=41a0799f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryForm_vue_vue_type_template_id_41a0799f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryForm_vue_vue_type_template_id_41a0799f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);