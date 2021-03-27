import AdminArticleApi from '../../api/admin/article';

export const articles = {
    state: {
        articles: [],
        articlesLoadStatus: 0,

        article: {},
        articleLoadStatus: 0,

        articleCreateResult: {},
        articleCreateStatus: 0,

        articleUpdateResult: {},
        articleUpdateStatus: 0,

        articleSetTopResult: {},
        articleSetTopStatus: 0,

        articleDeleteResult: {},
        articleDeleteStatus: 0,

        articleRecoverResult: {},
        articleRecoverStatus: 0
    },
    errorData: {
        errcode: -1,
        message: 'network error'
    },
    actions: {
        loadAdminArticles({ commit }, params) {
            commit('setAdminArticlesLoadStatus', 1);
            AdminArticleApi.getAdminArticles(params).then(res => {
                commit('setAdminArticles', res.data);
                commit('setAdminArticlesLoadStatus', 2);
            }).catch(() => {
                commit('setAdminArticles', errorData);
                commit('setAdminArticlesLoadStatus', 3);
            });
        },
        loadAdminArticle({ commit }, data) {
            commit('setAdminArticleLoadStatus', 1);
            AdminArticleApi.getAdminArticle(data.id).then(res => {
                commit('setAdminArticle', res.data);
                if (res.data.errcode !== 0) {
                    commit('setAdminArticleLoadStatus', 3);
                } else {
                    commit('setAdminArticleLoadStatus', 2);
                }
            }).catch(() => {
                commit('setAdminArticle', errorData);
                commit('setAdminArticleLoadStatus', 3);
            });
        },
        createAdminArticle({ commit }, data) {
            commit('setAdminArticleCreateStatus', 1);
            AdminArticleApi.postCreateAdminArticle(data).then(res => {
                commit('setAdminArticleCreateResult', res.data);
                if (res.data.errcode !== 0) {
                    commit('setAdminArticleCreateStatus', 3);
                } else {
                    commit('setAdminArticleCreateStatus', 2);
                }
            }).catch(() => {
                commit('setAdminArticleCreateStatus', 3);
            });
        },
        updateAdminArticle({ commit }, data) {
            commit('setAdminArticleUpdateStatus', 1);
            AdminArticleApi.putUpdateAdminArticle(data).then(res => {
                commit('setAdminArticleUpdateResult', res.data);
                if (res.data.errcode !== 0) {
                    commit('setAdminArticleUpdateStatus', 3);
                } else {
                    commit('setAdminArticleUpdateStatus', 2);
                }
            }).catch(() => {
                commit('setAdminArticleUpdateStatus', 3);
            });
        },
        setTopAdminArticle({ commit }, data) {
            commit('setAdminArticleSetTopStatus', 1);
            AdminArticleApi.putSetTopAdminArticle(data).then(res => {
                commit('setAdminArticleSetTopResult', res.data);
                if (res.data.errcode !== 0) {
                    commit('setAdminArticleSetTopStatus', 3);
                } else {
                    commit('setAdminArticleSetTopStatus', 2);
                }
            }).catch(() => {
                commit('setAdminArticleSetTopStatus', 3);
            });
        },
        deleteAdminArticle({ commit }, data) {
            commit('setAdminArticleDeleteStatus', 1);
            AdminArticleApi.deleteAdminArticle(data.id).then(res => {
                commit('setAdminArticleDeleteResult', res.data);
                if (res.data.errcode !== 0) {
                    commit('setAdminArticleDeleteStatus', 3);
                } else {
                    commit('setAdminArticleDeleteStatus', 2);
                }
            }).catch(() => {
                commit('setAdminArticleDeleteStatus', 3);
            });
        },
        recoverAdminArticle({ commit }, data) {
            commit('setAdminArticleRecoverStatus', 1);
            AdminArticleApi.recoverAdminArticle(data).then(res => {
                commit('setAdminArticleRecoverResult', res.data);
                if (res.data.errcode !== 0) {
                    commit('setAdminArticleRecoverStatus', 3);
                } else {
                    commit('setAdminArticleRecoverStatus', 2);
                }
            }).catch(() => {
                commit('setAdminArticleRecoverStatus', 3);
            });
        }
    },
    mutations: {
        setAdminArticlesLoadStatus(state, status) {
            state.articlesLoadStatus = status;
        },
        setAdminArticles(state, data) {
            state.articles = data;
        },
        setAdminArticleLoadStatus(state, status) {
            state.articleLoadStatus = status;
        },
        setAdminArticle(state, data) {
            state.article = data;
        },
        setAdminArticleCreateStatus(state, status) {
            state.articleCreateStatus = status;
        },
        setAdminArticleCreateResult(state, data) {
            state.articleCreateResult = data;
        },
        setAdminArticleUpdateStatus(state, status) {
            state.articleUpdateStatus = status;
        },
        setAdminArticleUpdateResult(state, data) {
            state.articleUpdateResult = data;
        },
        setAdminArticleSetTopStatus(state, status) {
            state.articleSetTopStatus = status;
        },
        setAdminArticleSetTopResult(state, data) {
            state.articleSetTopResult = data;
        },
        setAdminArticleDeleteStatus(state, status) {
            state.articleDeleteStatus = status;
        },
        setAdminArticleDeleteResult(state, data) {
            state.articleDeleteResult = data;
        },
        setAdminArticleRecoverStatus(state, status) {
            state.articleRecoverStatus = status;
        },
        setAdminArticleRecoverResult(state, data) {
            state.articleRecoverResult = data;
        }
    },
    getters: {
        getAdminArticles(state) {
            return state.articles;
        },
        getAdminArticlesLoadStatus(state) {
            return state.articlesLoadStatus;
        },
        getAdminArticle(state) {
            return state.article;
        },
        getAdminArticleLoadStatus(state) {
            return state.articleLoadStatus;
        },
        getAdminArticleCreateStatus(state) {
            return state.articleCreateStatus;
        },
        getAdminArticleCreateResult(state) {
            return state.articleCreateResult;
        },
        getAdminArticleUpdateStatus(state) {
            return state.articleUpdateStatus;
        },
        getAdminArticleUpdateResult(state) {
            return state.articleUpdateResult;
        },
        getAdminArticleSetTopStatus(state) {
            return state.articleSetTopStatus;
        },
        getAdminArticleSetTopResult(state) {
            return state.articleSetTopResult;
        },
        getAdminArticleDeleteStatus(state) {
            return state.articleDeleteStatus;
        },
        getAdminArticleDeleteResult(state) {
            return state.articleDeleteResult;
        },
        getAdminArticleRecoverStatus(state) {
            return state.articleRecoverStatus;
        },
        getAdminArticleRecoverResult(state) {
            return state.articleRecoverResult;
        }
    }
}