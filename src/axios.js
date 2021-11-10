import axios from 'axios';
const instance=axios.create({
    baseURL:'https://tinder-backend-v123.herokuapp.com',
})

export default instance;