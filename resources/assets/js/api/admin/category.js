import { API_CONFIG } from '../../config';

export default {
    baseUrl: API_CONFIG.API_URL + '/admin/category',
    getAdminCates() {
        return axios.get(this.baseUrl);
    },
    getAdminCate(id) {
        return axios.get(this.baseUrl + `/${id}`);
    },
    postCreateAdminCate(data) {
        return axios.post(this.baseUrl, data);
    },
    putUpdateAdminCate(data) {
        return axios.put(this.baseUrl + `/${data.id}`, data);
    },
    deleteAdminCate(id) {
        return axios.delete(this.baseUrl + `/${id}`);
    }
}