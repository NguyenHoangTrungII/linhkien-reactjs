import {
    AUTH_LOADING,
    LOGIN,
    LOGOUT,
    EDIT_INFO,
    UPLOAD_PROFILEPIC,
    SIGN_UP,
    AUTH_FAILURE,
    FORGET_PASSWORD,
    RESET_PASSWORD,
    UPLOAD_IMAGE,
} from '../actions/authAction';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import UserMessages from '../../messages/user';

const initialState = {
    user: {},
    notification: {},
    isLoading: false,
    error: {},
};

export const authReducer = (state = initialState, action) => {
    //set user if token doesn't expire yet
    const userInformation = async () => {
        const getUser = await localStorage.getItem('user');
        if (!getUser) {
            return initialState;
        }
        const parsedUser = await JSON.parse(getUser);
        return (initialState.user = parsedUser.data);
    };
    userInformation();

    switch (action.type) {
        case AUTH_LOADING: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case LOGIN:
            return {
                user: action.user,
                name: action.name,
                address: action.address,
                // notification: UserMessages['user.login.success'],
                isLoading: false,
            };
        case SIGN_UP: {
            return {
                ...state,
                isLoading: false,
            };
        }
        case AUTH_FAILURE:
            console.log(action);
            return {
                ...state,
                error: action.error,
                isLoading: false,
            };

        case LOGOUT:
            return {
                ...state,
                user: {},
                // notification: UserMessages['user.logout.sucesss'],
                isLoading: false,
            };
        case FORGET_PASSWORD:
            return {
                ...state,
                isLoading: false,
            };
        case RESET_PASSWORD:
            return {
                ...state,
                isLoading: false,
            };
        case EDIT_INFO:
            state.user.username = action.username;
            state.user.password = action.password;
            state.user.phone = action.phone;
            state.user.address = action.address;
            //Return ...state.user make the comp rerender
            return {
                ...state,
                user: {
                    ...state.user,
                },
                isLoading: false,
            };
        case UPLOAD_IMAGE:
            // state.user.profilePicture = action.profilePic;
            return {
                // ...state,
                // user: {
                //     ...state.user,
                // },
                isLoading: false,
            };
        default:
            return state;
    }
};
