import { API_CONFIG } from '../../config';

export default {
    baseUrl: API_CONFIG.API_URL + '/admin/link',
    getAdminLinks() {
        return axios.get(this.baseUrl);
    },
    getAdminLink(id) {
        return axios.get(this.baseUrl + `/${id}`);
    },
    postCreateAdminLink(data) {
        return axios.post(this.baseUrl, data);
    },
    putUpdateAdminLink(data) {
        return axios.put(this.baseUrl + `/${data.id}`, data);
    },
    deleteAdminLink(id) {
        return axios.delete(this.baseUrl + `/${id}`);
    }
}