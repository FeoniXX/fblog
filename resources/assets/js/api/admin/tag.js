import { API_CONFIG } from '../../config';

export default {
    baseUrl: API_CONFIG.API_URL + '/admin/tag',
    getAdminTags() {
        return axios.get(this.baseUrl);
    },
    postCreateAdminTag(data) {
        return axios.post(this.baseUrl, data);
    },
    deleteAdminTag(id) {
        return axios.delete(this.baseUrl + `/${id}`);
    }
}