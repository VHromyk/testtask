import axios from 'axios';

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1'

const ApiService = {
    page: 1,
    count: 6,

    getUsers() {
        return axios.get(`/users?page=${this.page}&count=${this.count}`);
    },

    addUsers(data) {
        return axios.post(`/users`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },

    getPositions() {
        return axios.get(`/positions`);
    },

    getPage() {
        return this.page;
    },

    incrementPage() {
        this.page += 1;
    },
};

export default ApiService;