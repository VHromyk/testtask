import axios from 'axios';

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1/'


const ApiService =  {
        page: 1,
        count: 6,
    
    getToken() {
        return axios.get('/token');
    },

    getUsers() {
        return axios.get(`/users?page=${this.page}&count=${this.count}`);
    },

    getPage() {
        return this.page;
    },

    incrementPage() {
        this.page += 1;
    },
}

export default ApiService;