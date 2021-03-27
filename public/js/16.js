(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/admin/Category.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/pages/admin/Category.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AdminCategory",
  data: function data() {
    return {
      columns: [{
        type: "index",
        width: 60,
        align: "center"
      }, {
        title: "分类名称",
        key: "name",
        width: 150
      }, {
        title: "分类简介",
        key: "desc"
      }, {
        title: "前台是否显示",
        slot: "status",
        width: 150,
        align: "center"
      }, {
        title: "文章数",
        key: "count",
        width: 100
      }, {
        title: "操作",
        slot: "action",
        align: "center",
        width: 150
      }]
    };
  },
  created: function created() {
    this.$store.dispatch("loadAdminCates");
  },
  computed: {
    catesLoadStatus: function catesLoadStatus() {
      var status = this.$store.getters.getAdminCatesLoadStatus;
      this.beforeSubmit(status);
      return status;
    },
    cates: function cates() {
      var res = this.$store.getters.getAdminCates;

      if (res.length > 0 && res.errcode !== 0) {
        this.$Message.error(res.message);
      }

      return res.data || [];
    },
    cateDeleteStatus: function cateDeleteStatus() {
      return this.$store.getters.getAdminCateDeleteStatus;
    },
    cateDeleteResult: function cateDeleteResult() {
      return this.$store.getters.getAdminCateDeleteResult;
    }
  },
  watch: {
    cateDeleteStatus: function cateDeleteStatus(status) {
      this.beforeSubmit(status);
    },
    cateDeleteResult: function cateDeleteResult(res) {
      this.afterSubmit(res);
    }
  },
  methods: {
    edit: function edit(id) {
      this.$router.push({
        name: "AdminCategoryUpdate",
        params: {
          id: id
        }
      });
    },
    remove: function remove(index) {
      var _this = this;

      var id = this.cates[index].id;
      this.$Modal.confirm({
        title: "确定删除本条分类吗？",
        onOk: function onOk() {
          _this.$store.dispatch("deleteAdminCate", {
            id: id
          });
        }
      });
    },
    create: function create() {
      this.$router.push({
        name: "AdminCategoryCreate"
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
      if (res.errcode !== 0) {
        this.$Message.error(res.message);
      } else {
        this.$Message.success(res.message);
        var id = res.data.id;

        for (var i in this.cates) {
          if (this.cates[i].id == id) {
            this.cates.splice(i, 1);
            break;
          }
        }

        this.$forceUpdate();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/admin/Category.vue?vue&type=template&id=79dcd78a&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/pages/admin/Category.vue?vue&type=template&id=79dcd78a& ***!
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
      _c("h2", { staticClass: "i-md-content" }, [_vm._v("分类管理")]),
      _vm._v(" "),
      _c("Table", {
        attrs: { columns: _vm.columns, data: _vm.cates },
        scopedSlots: _vm._u([
          {
            key: "status",
            fn: function(ref) {
              var row = ref.row
              return [
                _c(
                  "Tag",
                  { attrs: { color: row.status ? "green" : "default" } },
                  [_vm._v(_vm._s(row.status ? "显示" : "不显示"))]
                )
              ]
            }
          },
          {
            key: "action",
            fn: function(ref) {
              var row = ref.row
              var index = ref.index
              return [
                _c(
                  "Button",
                  {
                    staticStyle: { "margin-right": "5px" },
                    attrs: { type: "primary", size: "small" },
                    on: {
                      click: function($event) {
                        return _vm.edit(row.id)
                      }
                    }
                  },
                  [_vm._v("编辑")]
                ),
                _vm._v(" "),
                _c(
                  "Button",
                  {
                    attrs: { type: "error", size: "small" },
                    on: {
                      click: function($event) {
                        return _vm.remove(index)
                      }
                    }
                  },
                  [_vm._v("删除")]
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _vm.catesLoadStatus === 1
        ? _c("Spin", { attrs: { size: "large", fix: "" } })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "Button",
        {
          staticClass: "create-new-btn",
          attrs: { type: "primary" },
          on: { click: _vm.create }
        },
        [_vm._v("新建")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/pages/admin/Category.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/pages/admin/Category.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Category_vue_vue_type_template_id_79dcd78a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Category.vue?vue&type=template&id=79dcd78a& */ "./resources/assets/js/pages/admin/Category.vue?vue&type=template&id=79dcd78a&");
/* harmony import */ var _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/admin/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Category_vue_vue_type_template_id_79dcd78a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Category_vue_vue_type_template_id_79dcd78a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/admin/Category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/admin/Category.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/pages/admin/Category.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/admin/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/admin/Category.vue?vue&type=template&id=79dcd78a&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/pages/admin/Category.vue?vue&type=template&id=79dcd78a& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_79dcd78a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=template&id=79dcd78a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/admin/Category.vue?vue&type=template&id=79dcd78a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_79dcd78a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_79dcd78a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);