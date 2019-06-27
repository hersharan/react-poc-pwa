import {
  FETCH_FEATURED_CAROUSEL,
  FETCH_FEATURED_CAROUSEL_SUCCESS,
  FETCH_FEATURED_CAROUSEL_FAILURE,
} from '../../helpers/actionConstants';

export default function getFeaturedCarousel(state = {
  fetchingFeaturedCarousel: false,
  fetchedFeaturedCarousel: false,
  featuredCarousel: null,
  featuredCarouselError: null,
}, action) {
  switch (action.type) {
    case FETCH_FEATURED_CAROUSEL: {
      return {
        ...state,
        fetchingFeaturedCarousel: true,
        fetchedFeaturedCarousel: false
      };
    }
    case FETCH_FEATURED_CAROUSEL_SUCCESS: {
      return {
        ...state,
        fetchingFeaturedCarousel: false,
        fetchedFeaturedCarousel: true,
        featuredCarousel: action.payload.data,
        status: action.payload.status
      };
    }
    case FETCH_FEATURED_CAROUSEL_FAILURE: {
      return {
        ...state,
        fetchedFeaturedCarousel: false,
        fetchingFeaturedCarousel: false,
        featuredCarouselError: action.payload,
      };
    }

    default:
      return state;
  }
}
