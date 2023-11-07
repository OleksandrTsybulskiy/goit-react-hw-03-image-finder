import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const ApiKey = '39311617-8fcbc1db2cff6d5dc5c37136f';

export const getImages = async (query, page = 1) => {
  const params = {
    key: ApiKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page: page,
  };
  const response = await axios.get('/', {params});

  return response.data;
};
