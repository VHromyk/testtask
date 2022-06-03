import axios from 'axios';

const TokenService = {
    getToken() {
        return axios.get(`/token`);
    },
    set(token) {
        axios.defaults.headers.common['Token'] = token;
    },
};


export default TokenService;