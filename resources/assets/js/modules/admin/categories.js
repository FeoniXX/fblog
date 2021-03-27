import AdminCategoryApi from '../../api/admin/category';

export const cates = {
    state: {
        cates: [],
        catesLoadStatus: 0,

        cate: {},
        cateLoadStatus: 0,

        cateCreateResult: {},
        cateCreateStatus: 0,

        cateUpdateResult: {},
        cateUpdateStatus: 0,

        cateDeleteResult: {},
        cateDeleteStatus: 0
    },
    errorData: {
        errcode: -1,
        message: 'network error'
    },
    actions: {
        loadAdminCates({ commit }) {
            commit('setAdminCatesLoadStatus', 1);
            AdminCategoryApi.getAdminCates().then(res => {
                commit('setAdminCates', res.data);
                commit('setAdminCatesLoadStatus', 2);
            }).catch(() => {
                commit('setAdminCates', errorData);
                commit('setAdminCatesLoadStatus', 3);
            });
        },
        loadAdminCate({ commit }, data) {
            commit('setAdminCateLoadStatus', 1);
            AdminCategoryApi.getAdminCate(data.id).then(res => {
                commit('setAdminCate', res.data);
                if (res.data.errcode !== 0) {
                    commit('setAdminCateLoadStatus', 3);
                } else {
                    commit('setAdminCateLoadStatus', 2);
                }
            }).catch(() => {
                commit('setAdminCate', errorData);
                commit('setAdminCateLoadStatus', 3);
            });
        },
        createAdminCate({ commit }, data) {
            commit('setAdminCateCreateStatus', 1);
            AdminCategoryApi.postCreateAdminCate(data).then(res => {
                commit('setAdminCateCreateResult', res.data);
                if (res.data.errcode !== 0) {
                    commit('setAdminCateCreateStatus', 3);
                } else {
                    commit('setAdminCateCreateStatus', 2);
                }
            }).catch(() => {
                commit('setAdminCateCreateStatus', 3);
            });
        },
        updateAdminCate({ commit }, data) {
            commit('setAdminCateUpdateStatus', 1);
            AdminCategoryApi.putUpdateAdminCate(data).then(res => {
                commit('setAdminCateUpdateResult', res.data);
                if (res.data.errcode !== 0) {
                    commit('setAdminCateUpdateStatus', 3);
                } else {
                    commit('setAdminCateUpdateStatus', 2);
                }
            }).catch(() => {
                commit('setAdminCateUpdateStatus', 3);
            });
        },
        deleteAdminCate({ commit }, data) {
            commit('setAdminCateDeleteStatus', 1);
            AdminCategoryApi.deleteAdminCate(data.id).then(res => {
                commit('setAdminCateDeleteResult', res.data);
                if (res.data.errcode !== 0) {
                    commit('setAdminCateDeleteStatus', 3);
                } else {
                    commit('setAdminCateDeleteStatus', 2);
                }
            }).catch(() => {
                commit('setAdminCateDeleteStatus', 3);
            });
        }
    },
    mutations: {
        setAdminCatesLoadStatus(state, status) {
            state.catesLoadStatus = status;
        },
        setAdminCates(state, data) {
            state.cates = data;
        },
        setAdminCateLoadStatus(state, status) {
            state.cateLoadStatus = status;
        },
        setAdminCate(state, data) {
            state.cate = data;
        },
        setAdminCateCreateStatus(state, status) {
            state.cateCreateStatus = status;
        },
        setAdminCateCreateResult(state, data) {
            state.cateCreateResult = data;
        },
        setAdminCateUpdateStatus(state, status) {
            state.cateUpdateStatus = status;
        },
        setAdminCateUpdateResult(state, data) {
            state.cateUpdateResult = data;
        },
        setAdminCateDeleteStatus(state, status) {
            state.cateDeleteStatus = status;
        },
        setAdminCateDeleteResult(state, data) {
            state.cateDeleteResult = data;
        }
    },
    getters: {
        getAdminCates(state) {
            return state.cates;
        },
        getAdminCatesLoadStatus(state) {
            return state.catesLoadStatus;
        },
        getAdminCate(state) {
            return state.cate;
        },
        getAdminCateLoadStatus(state) {
            return state.cateLoadStatus;
        },
        getAdminCateCreateStatus(state) {
            return state.cateCreateStatus;
        },
        getAdminCateCreateResult(state) {
            return state.cateCreateResult;
        },
        getAdminCateUpdateStatus(state) {
            return state.cateUpdateStatus;
        },
        getAdminCateUpdateResult(state) {
            return state.cateUpdateResult;
        },
        getAdminCateDeleteStatus(state) {
            return state.cateDeleteStatus;
        },
        getAdminCateDeleteResult(state) {
            return state.cateDeleteResult;
        }
    }
}