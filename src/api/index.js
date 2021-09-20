import axios from "axios";

export default axios.create({
    baseURL: `https://thoth-blog-api.herokuapp.com`
});