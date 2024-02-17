import {
    FETCH_PRODUCTS,
    PRODUCT_LOADING,
    PRODUCT_FAILURE,
    FETCH_CATEGORY,
    FETCH_CATEGORYLIST,
    FETCH_PRODUCTBYNAME,
    FETCH_PRODUCTSBYID,
    FETCH_PRODUCTFILTER,
} from '../actions/productAction';

const initialState = {
    products: [],
    categories: [],
    categorieslist: [],
    productsbyname: [],
    productsbyID: [],
    productFilter: { data: [], pageIndex: 0, totalPage: 0, totalRecord: 0, totalRecordAll: 0 },
    isFirstOpen: false,
    isLoading: false,
    isLoadingSearch: false,
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case PRODUCT_FAILURE:
            return {
                ...state,
                isLoading: false,
            };

        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.products,
                isLoading: false,
            };

        case FETCH_PRODUCTSBYID: {
            return {
                ...state,
                productsbyID: [action.productsbyID],
                isLoading: false,
            };
        }

        case FETCH_PRODUCTBYNAME: {
            return {
                ...state,
                productsbyname: [...action.productsbyname],
                isLoading: false,
            };
        }
        case FETCH_PRODUCTFILTER: {
            console.log(action);
            return {
                ...state,
                productFilter: {
                    data: [...action.productFilter],
                    pageIndex: action.pageIndex,
                    totalPage: action.totalPage,
                    totalRecord: action.totalRecord,
                    totalRecordAll: action.totalRecordAll,
                },
                isLoading: false,
            };
        }
        default:
            return state;
    }
};
