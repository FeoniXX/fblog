import AdminTagApi from "../../api/admin/tag";

export const tags = {
    state: {
        tags: [],
        tagsLoadStatus: 0,

        tagCreateResult: {},
        tagCreateStatus: 0,

        tagDeleteResult: {},
        tagDeleteStatus: 0
    },
    errorData: {
        errcode: -1,
        message: 'network error'
    },
    actions: {
        loadAdminTags({ commit }) {
            commit('setAdminTagsLoadStatus', 1);
            AdminTagApi.getAdminTags().then(res => {
                commit('setAdminTags', res.data);
                commit('setAdminTagsLoadStatus', 2);
            }).catch(() => {
                commit('setAdminTags', errorData);
                commit('setAdminTagsLoadStatus', 3);
            });
        },
        createAdminTag({ commit }, data) {
            commit('setAdminTagCreateStatus', 1);
            AdminTagApi.postCreateAdminTag(data).then(res => {
                commit('setAdminTagCreateResult', res.data);
                if (res.data.errcode === 0) {
                    commit('setAdminTagCreateStatus', 2);
                } else {
                    commit('setAdminTagCreateStatus', 3);
                }
            }).catch(() => {
                commit('setAdminTagCreateResult', errorData);
                commit('setAdminTagCreateStatus', 3);
            });
        },
        deleteAdminTag({ commit }, data) {
            commit('setAdminTagDeleteStatus', 1);
            AdminTagApi.deleteAdminTag(data.id).then(res => {
                commit('setAdminTagDeleteResult', res.data);
                if (res.data.errcode === 0) {
                    commit('setAdminTagDeleteStatus', 2);
                } else {
                    commit('setAdminTagDeleteStatus', 3);
                }
            }).catch(() => {
                commit('setAdminTagDeleteResult', errorData);
                commit('setAdminTagDeleteStatus', 3);
            });
        }
    },
    mutations: {
        setAdminTags(state, data) {
            state.tags = data;
        },
        setAdminTagsLoadStatus(state, status) {
            state.tagsLoadStatus = status;
        },
        setAdminTagCreateResult(state, data) {
            state.tagCreateResult = data;
        },
        setAdminTagCreateStatus(state, status) {
            state.tagCreateStatus = status;
        },
        setAdminTagDeleteResult(state, data) {
            state.tagDeleteResult = data;
        },
        setAdminTagDeleteStatus(state, status) {
            state.tagDeleteStatus = status;
        }
    },
    getters: {
        getAdminTags(state) {
            return state.tags;
        },
        getAdminTagsLoadStatus(state) {
            return state.tagsLoadStatus;
        },
        getAdminTagCreateResult(state) {
            return state.tagCreateResult;
        },
        getAdminTagCreateStatus(state) {
            return state.tagCreateStatus;
        },
        getAdminTagDeleteResult(state) {
            return state.tagDeleteResult;
        },
        getAdminTagDeleteStatus(state) {
            return state.tagDeleteStatus;
        }
    }
}