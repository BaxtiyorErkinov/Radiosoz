import axios from 'axios';

export default axios.create({
  baseURL: `http://backend.radiosoz.uz/api`,
});
