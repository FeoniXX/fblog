(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/Article.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/pages/Article.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Aside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Aside */ "./resources/assets/js/components/Aside.vue");
/* harmony import */ var _components_Notify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Notify */ "./resources/assets/js/components/Notify.vue");
/* harmony import */ var _components_ArticleItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ArticleItem */ "./resources/assets/js/components/ArticleItem.vue");
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
  name: "Article",
  components: {
    Aside: _components_Aside__WEBPACK_IMPORTED_MODULE_0__["default"],
    Notify: _components_Notify__WEBPACK_IMPORTED_MODULE_1__["default"],
    ArticleItem: _components_ArticleItem__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      type: "all",
      category: "",
      tag: "",
      keyword: "",
      categories: [],
      tags: []
    };
  },
  mounted: function mounted() {
    this.categories = this.$refs.aside.categories;
    this.tags = this.$refs.aside.tags;
    var routeName = this.$route.name;

    if (routeName === "CategoryArticle") {
      this.type = "category";
      var categoryid = parseInt(this.$route.params.id || 0);
      var cateObj = null;
      this.categories.map(function (item) {
        if (item.id === categoryid) {
          cateObj = item;
          return;
        }
      });

      if (cateObj) {
        this.category = cateObj.title;
      }
    } else if (routeName === "TagArticle") {
      this.type = "tag";
      var tagid = parseInt(this.$route.params.id || 0);
      var tagObj = null;
      this.tags.map(function (item) {
        if (item.id === tagid) {
          tagObj = item;
          return;
        }
      });

      if (tagObj) {
        this.tag = tagObj.title;
      }
    } else if (routeName === "SearchArticle") {
      this.type = "keyword";
      var keyword = this.$route.params.keyword || "";
      this.keyword = keyword;
    } else {
      this.type = "all";
    }
  },
  watch: {
    $route: function $route(to) {
      var routeName = this.$route.name;

      if (routeName === "CategoryArticle") {
        this.type = "category";
        var categoryid = parseInt(to.params.id || 0);
        var cateObj = null;
        this.categories.map(function (item) {
          if (item.id === categoryid) {
            cateObj = item;
            return;
          }
        });

        if (cateObj) {
          this.category = cateObj.title;
        }
      } else if (routeName === "TagArticle") {
        this.type = "tag";
        var tagid = parseInt(to.params.id || 0);
        var tagObj = null;
        this.tags.map(function (item) {
          if (item.id === tagid) {
            tagObj = item;
            return;
          }
        });

        if (tagObj) {
          this.tag = tagObj.title;
        }
      } else if (routeName === "SearchArticle") {
        this.type = "keyword";
        var keyword = this.$route.params.keyword || "";
        this.keyword = keyword;
      } else {
        this.type = "all";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/Article.vue?vue&type=template&id=1b2ab16e&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/pages/Article.vue?vue&type=template&id=1b2ab16e& ***!
  \************************************************************************************************************************************************************************************************************/
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
    "Row",
    { staticClass: "home", attrs: { gutter: 20 } },
    [
      _c(
        "Col",
        { staticClass: "page-main", attrs: { span: "17" } },
        [
          _c("Notify", {
            attrs: {
              type: _vm.type,
              category: _vm.category,
              tag: _vm.tag,
              keyword: _vm.keyword
            }
          }),
          _vm._v(" "),
          _c("ArticleItem"),
          _vm._v(" "),
          _c("ArticleItem"),
          _vm._v(" "),
          _c("ArticleItem"),
          _vm._v(" "),
          _c("ArticleItem")
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "Col",
        { staticClass: "page-aside", attrs: { span: "7" } },
        [_c("Aside", { ref: "aside" })],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/pages/Article.vue":
/*!***********************************************!*\
  !*** ./resources/assets/js/pages/Article.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Article_vue_vue_type_template_id_1b2ab16e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Article.vue?vue&type=template&id=1b2ab16e& */ "./resources/assets/js/pages/Article.vue?vue&type=template&id=1b2ab16e&");
/* harmony import */ var _Article_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Article.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/Article.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Article_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Article_vue_vue_type_template_id_1b2ab16e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Article_vue_vue_type_template_id_1b2ab16e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/Article.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/Article.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/assets/js/pages/Article.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Article.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/Article.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/Article.vue?vue&type=template&id=1b2ab16e&":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/pages/Article.vue?vue&type=template&id=1b2ab16e& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_template_id_1b2ab16e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Article.vue?vue&type=template&id=1b2ab16e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/Article.vue?vue&type=template&id=1b2ab16e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_template_id_1b2ab16e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_template_id_1b2ab16e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);