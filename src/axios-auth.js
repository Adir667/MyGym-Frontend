import axios from "axios";

const instance = axios.create({
    BaseURL: 'http:/localhost/'
});

export default instance;