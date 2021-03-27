import Vue from 'vue';
import VueRouter from 'vue-router';

/**
 * Extends Vue to use Vue Router
 */
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./pages/Home.vue'),
        meta: {
            title: "首页",
            layout: 1
        }
    },
    {
        path: '/article/list',
        name: 'ArticleList',
        component: () => import('./pages/Article.vue'),
        meta: {
            title: "文章",
            layout: 1
        }
    },
    {
        path: '/article/category/:id',
        name: 'CategoryArticle',
        component: () => import('./pages/Article.vue'),
        meta: {
            title: "分类相关文章",
            layout: 1
        }
    },
    {
        path: '/article/tag/:id',
        name: 'TagArticle',
        component: () => import('./pages/Article.vue'),
        meta: {
            title: "标签相关文章",
            layout: 1
        }
    },
    {
        path: '/article/search/:keyword',
        name: 'SearchArticle',
        component: () => import('./pages/Article.vue'),
        meta: {
            title: "搜索相关文章",
            layout: 1
        }
    },
    {
        path: "/article/detail/:id",
        name: "ArticleDetail",
        component: () => import("./pages/Detail.vue"),
        meta: {
            title: "文章详情",
            layout: 1
        }
    },
    {
        path: '/link',
        name: 'Link',
        component: () => import('./pages/Link.vue'),
        meta: {
            title: "友链",
            layout: 1
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('./pages/About.vue'),
        meta: {
            title: "关于",
            layout: 1
        }
    },
    {
        path: '/admin',
        name: 'AdminHome',
        component: () => import('./pages/admin/Home.vue'),
        meta: {
            title: "管理首页",
            layout: 2
        }
    },
    {
        path: '/admin/login',
        name: 'AdminLogin',
        component: () => import('./pages/admin/Login.vue'),
        meta: {
            title: "管理登录",
            layout: 0
        }
    },
    {
        path: '/admin/article',
        name: 'AdminArticle',
        component: () => import('./pages/admin/Article.vue'),
        meta: {
            title: "文章管理",
            layout: 2
        }
    },
    {
        path: '/admin/article/create',
        name: 'AdminArticleCreate',
        component: () => import('./pages/admin/ArticleForm.vue'),
        meta: {
            title: "发布文章",
            layout: 0
        }
    },
    {
        path: '/admin/article/update/:id',
        name: 'AdminArticleUpdate',
        component: () => import('./pages/admin/ArticleForm.vue'),
        meta: {
            title: "编辑文章",
            layout: 0
        }
    },
    {
        path: '/admin/category',
        name: 'AdminCategory',
        component: () => import('./pages/admin/Category.vue'),
        meta: {
            title: "分类管理",
            layout: 2
        }
    },
    {
        path: '/admin/category/create',
        name: 'AdminCategoryCreate',
        component: () => import('./pages/admin/CategoryForm.vue'),
        meta: {
            title: "新建分类",
            layout: 2
        }
    },
    {
        path: '/admin/category/update/:id',
        name: 'AdminCategoryUpdate',
        component: () => import('./pages/admin/CategoryForm.vue'),
        meta: {
            title: "编辑分类",
            layout: 2
        }
    },
    {
        path: '/admin/tag',
        name: 'AdminTag',
        component: () => import('./pages/admin/Tag.vue'),
        meta: {
            title: "标签管理",
            layout: 2
        }
    },
    {
        path: '/admin/link',
        name: 'AdminLink',
        component: () => import('./pages/admin/Link.vue'),
        meta: {
            title: "友链管理",
            layout: 2
        }
    },
    {
        path: '/admin/link/create',
        name: 'AdminLinkCreate',
        component: () => import('./pages/admin/LinkForm.vue'),
        meta: {
            title: "添加友链",
            layout: 2
        }
    },
    {
        path: '/admin/link/update/:id',
        name: 'AdminLinkUpdate',
        component: () => import('./pages/admin/LinkForm.vue'),
        meta: {
            title: "编辑友链",
            layout: 2
        }
    },
    {
        path: '/admin/message',
        name: 'AdminMessage',
        component: () => import('./pages/admin/Message.vue'),
        meta: {
            title: "消息中心",
            layout: 2
        }
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title + " - FBLOG";
    } else {
        document.title = "FBLOG";
    }
    if (/^\/admin.*$/g.test(to.path) && to.path !== '/admin/login') {
        let token = localStorage.getItem("token");
        if (!token) {
            router.push({ name: "AdminLogin" });
        }
    }
    next();
});

export default router;