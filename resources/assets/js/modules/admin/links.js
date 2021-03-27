import AdminLinkApi from '../../api/admin/link';

export const links = {
    state: {
        links: [],
        linksLoadStatus: 0,

        link: {},
        linkLoadStatus: 0,

        linkCreateResult: {},
        linkCreateStatus: 0,

        linkUpdateResult: {},
        linkUpdateStatus: 0,

        linkDeleteResult: {},
        linkDeleteStatus: 0
    },
    errorData: {
        errcode: -1,
        message: 'network error'
    },
    actions: {
        loadAdminLinks({ commit }) {
            commit('setAdminLinksLoadStatus', 1);
            AdminLinkApi.getAdminLinks().then(res => {
                commit('setAdminLinks', res.data);
                commit('setAdminLinksLoadStatus', 2);
            }).catch(() => {
                commit('setAdminLinks', errorData);
                commit('setAdminLinksLoadStatus', 3);
            });
        },
        loadAdminLink({ commit }, data) {
            commit('setAdminLinkLoadStatus', 1);
            AdminLinkApi.getAdminLink(data.id).then(res => {
                commit('setAdminLink', res.data);
                if (res.data.errcode !== 0) {
                    commit('setAdminLinkLoadStatus', 3);
                } else {
                    commit('setAdminLinkLoadStatus', 2);
                }
            }).catch(() => {
                commit('setAdminLink', errorData);
                commit('setAdminLinkLoadStatus', 3);
            });
        },
        createAdminLink({ commit }, data) {
            commit('setAdminLinkCreateStatus', 1);
            AdminLinkApi.postCreateAdminLink(data).then(res => {
                commit('setAdminLinkCreateResult', res.data);
                if (res.data.errcode !== 0) {
                    commit('setAdminLinkCreateStatus', 3);
                } else {
                    commit('setAdminLinkCreateStatus', 2);
                }
            }).catch(() => {
                commit('setAdminLinkCreateResult', errorData);
                commit('setAdminLinkCreateStatus', 3);
            });
        },
        updateAdminLink({ commit }, data) {
            commit('setAdminLinkUpdateStatus', 1);
            AdminLinkApi.putUpdateAdminLink(data).then(res => {
                commit('setAdminLinkUpdateResult', res.data);
                if (res.data.errcode !== 0) {
                    commit('setAdminLinkUpdateStatus', 3);
                } else {
                    commit('setAdminLinkUpdateStatus', 2);
                }
            }).catch(() => {
                commit('setAdminLinkUpdateResult', errorData);
                commit('setAdminLinkUpdateStatus', 3);
            });
        },
        deleteAdminLink({ commit }, data) {
            commit('setAdminLinkDeleteStatus', 1);
            AdminLinkApi.deleteAdminLink(data.id).then(res => {
                commit('setAdminLinkDeleteResult', res.data);
                if (res.data.errcode !== 0) {
                    commit('setAdminLinkDeleteStatus', 3);
                } else {
                    commit('setAdminLinkDeleteStatus', 2);
                }
            }).catch(() => {
                commit('setAdminLinkDeleteResult', errorData);
                commit('setAdminLinkDeleteStatus', 3);
            });
        }
    },
    mutations: {
        setAdminLinksLoadStatus(state, status) {
            state.linksLoadStatus = status;
        },
        setAdminLinks(state, data) {
            state.links = data;
        },
        setAdminLinkLoadStatus(state, status) {
            state.linkLoadStatus = status;
        },
        setAdminLink(state, data) {
            state.link = data;
        },
        setAdminLinkCreateStatus(state, status) {
            state.linkCreateStatus = status;
        },
        setAdminLinkCreateResult(state, data) {
            state.linkCreateResult = data;
        },
        setAdminLinkUpdateStatus(state, status) {
            state.linkUpdateStatus = status;
        },
        setAdminLinkUpdateResult(state, data) {
            state.linkUpdateResult = data;
        },
        setAdminLinkDeleteStatus(state, status) {
            state.linkDeleteStatus = status;
        },
        setAdminLinkDeleteResult(state, data) {
            state.linkDeleteResult = data;
        }
    },
    getters: {
        getAdminLinks(state) {
            return state.links;
        },
        getAdminLinksLoadStatus(state) {
            return state.linksLoadStatus;
        },
        getAdminLink(state) {
            return state.link;
        },
        getAdminLinkLoadStatus(state) {
            return state.linkLoadStatus;
        },
        getAdminLinkCreateStatus(state) {
            return state.linkCreateStatus;
        },
        getAdminLinkCreateResult(state) {
            return state.linkCreateResult;
        },
        getAdminLinkUpdateStatus(state) {
            return state.linkUpdateStatus;
        },
        getAdminLinkUpdateResult(state) {
            return state.linkUpdateResult;
        },
        getAdminLinkDeleteStatus(state) {
            return state.linkDeleteStatus;
        },
        getAdminLinkDeleteResult(state) {
            return state.linkDeleteResult;
        }
    }
}