import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

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

    resetPage() {
        return this.page = 1;
    },

    getPage() {
        return this.page;
    },

    incrementPage() {
        this.page += 1;
    },
};

export default ApiService;