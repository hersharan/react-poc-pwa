import axios from 'axios';
import { getAuthorization } from '../../helpers/authorization';

const config = getAuthorization();

function getFeauredCarousel(type) {
  return ((dispatch) => {
    dispatch({ type: 'FETCH_FEATURED_CAROUSEL' });
    axios.get(`/api/v1/featuredCarousel?_format=json&type=${type}`, config)
    .then((response) => {
      dispatch({ type: 'FETCH_FEATURED_CAROUSEL_SUCCESS', payload: response });
    })
    .catch((error) => {
      dispatch({ type: 'FETCH_FEATURED_CAROUSEL_FAILURE', payload: error.response });
      dispatch({ type: "ADD_ERROR", payload: error });
    })
  });
}

const getFeauredCarouselActions = {
  getFeauredCarousel,
};

export default getFeauredCarouselActions;
