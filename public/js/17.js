(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/admin/Link.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/pages/admin/Link.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AdminLink",
  data: function data() {
    return {
      columns: [{
        type: "index",
        width: 60,
        align: "center"
      }, {
        title: "站点名称",
        key: "name",
        width: 150
      }, {
        title: "站点描述",
        key: "desc"
      }, {
        title: "站点链接",
        key: "link"
      }, {
        title: "操作",
        slot: "action",
        align: "center",
        width: 150
      }]
    };
  },
  created: function created() {
    this.$store.dispatch("loadAdminLinks");
  },
  computed: {
    linksLoadStatus: function linksLoadStatus() {
      var status = this.$store.getters.getAdminLinksLoadStatus;
      this.beforeSubmit(status);
      return status;
    },
    links: function links() {
      var res = this.$store.getters.getAdminLinks;

      if (res.length > 0 && res.errcode !== 0) {
        this.$Message.error(res.message);
      }

      return res.data || [];
    },
    linkDeleteStatus: function linkDeleteStatus() {
      return this.$store.getters.getAdminLinkDeleteStatus;
    },
    linkDeleteResult: function linkDeleteResult() {
      return this.$store.getters.getAdminLinkDeleteResult;
    }
  },
  watch: {
    linkDeleteStatus: function linkDeleteStatus(status) {
      this.beforeSubmit(status);
    },
    linkDeleteResult: function linkDeleteResult(res) {
      this.afterSubmit(res);
    }
  },
  methods: {
    edit: function edit(id) {
      this.$router.push({
        name: "AdminLinkUpdate",
        params: {
          id: id
        }
      });
    },
    remove: function remove(index) {
      var _this = this;

      var id = this.links[index].id;
      this.$Modal.confirm({
        title: "确定删除本条友链吗？",
        onOk: function onOk() {
          _this.$store.dispatch("deleteAdminLink", {
            id: id
          });
        }
      });
    },
    create: function create() {
      this.$router.push({
        name: "AdminLinkCreate"
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

        for (var i in this.links) {
          if (this.links[i].id == id) {
            this.links.splice(i, 1);
            break;
          }
        }

        this.$forceUpdate();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/admin/Link.vue?vue&type=template&id=6cb543b7&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/pages/admin/Link.vue?vue&type=template&id=6cb543b7& ***!
  \***************************************************************************************************************************************************************************************************************/
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
      _c("h2", { staticClass: "i-md-content" }, [_vm._v("友链管理")]),
      _vm._v(" "),
      _c("Table", {
        attrs: { columns: _vm.columns, data: _vm.links },
        scopedSlots: _vm._u([
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
      _vm.linksLoadStatus === 1
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

/***/ "./resources/assets/js/pages/admin/Link.vue":
/*!**************************************************!*\
  !*** ./resources/assets/js/pages/admin/Link.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Link_vue_vue_type_template_id_6cb543b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Link.vue?vue&type=template&id=6cb543b7& */ "./resources/assets/js/pages/admin/Link.vue?vue&type=template&id=6cb543b7&");
/* harmony import */ var _Link_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Link.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/admin/Link.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Link_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Link_vue_vue_type_template_id_6cb543b7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Link_vue_vue_type_template_id_6cb543b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/admin/Link.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/admin/Link.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/pages/admin/Link.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Link_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Link.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/admin/Link.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Link_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/admin/Link.vue?vue&type=template&id=6cb543b7&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/pages/admin/Link.vue?vue&type=template&id=6cb543b7& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Link_vue_vue_type_template_id_6cb543b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Link.vue?vue&type=template&id=6cb543b7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/admin/Link.vue?vue&type=template&id=6cb543b7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Link_vue_vue_type_template_id_6cb543b7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Link_vue_vue_type_template_id_6cb543b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);