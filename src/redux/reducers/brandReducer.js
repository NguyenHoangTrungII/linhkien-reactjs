import { FETCH_BRAND, BRAND_LOADING, BRAND_FAILURE } from '../actions/brandAction';

const initialState = {
    brands: [],
    isLoading: false,
};

export const brandReducer = (state = initialState, action) => {
    switch (action.type) {
        case BRAND_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case BRAND_FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        case FETCH_BRAND:
            return {
                ...state,
                brands: [...action.brands],
                isLoading: false,
            };

        default:
            return state;
    }
};
