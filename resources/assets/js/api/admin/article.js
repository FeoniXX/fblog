import { API_CONFIG } from '../../config';

export default {
    baseUrl: API_CONFIG.API_URL + '/admin/article',
    getAdminArticles(param) {
        let params = {};
        for (let i in param) {
            if (param[i] instanceof Array) {
                (param[i].length > 0 && param[i][0] != undefined && param[i][0] != '') && (params[i] = param[i]);
            } else {
                params[i] = param[i];
            }
        }
        return axios.get(this.baseUrl, { params });
    },
    getAdminArticle(id) {
        return axios.get(this.baseUrl + `/${id}`);
    },
    postCreateAdminArticle(data) {
        return axios.post(this.baseUrl, data);
    },
    putUpdateAdminArticle(data) {
        return axios.put(this.baseUrl + `/${data.id}`, data);
    },
    putSetTopAdminArticle(data) {
        return axios.put(this.baseUrl + `/top/${data.id}`, data);
    },
    deleteAdminArticle(id) {
        return axios.delete(this.baseUrl + `/${id}`);
    },
    recoverAdminArticle(data) {
        return axios.put(this.baseUrl + `/recover/${data.id}`, data);
    }
}