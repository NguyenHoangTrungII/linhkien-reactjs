import { FETCH_CATEGORY, CATEGORY_LOADING, CATEGORY_FAILURE } from '../actions/categoryAction';

const initialState = {
    categories: [],
    isLoading: false,
};

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case CATEGORY_FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        case FETCH_CATEGORY:
            return {
                ...state,
                categories: [...action.categories],
                isLoading: false,
            };

        default:
            return state;
    }
};
