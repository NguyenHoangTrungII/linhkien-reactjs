// import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../../utils/Config';
import { timeoutPromise } from '../../utils/Tools';

export const AUTH_LOADING = 'AUTH_LOADING';
export const SIGN_UP = 'SIGN_UP';
export const LOGIN = 'LOGIN';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const EDIT_INFO = 'EDIT_INFO ';
export const UPLOAD_PROFILEPIC = 'UPLOAD_PROFILEPIC';
export const FORGET_PASSWORD = 'FORGET_PASSWORD';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_ERROR = 'RESET_ERROR';
export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';

//Create dataStorage
const saveDataToStorage = (name, data) => {
    localStorage.setItem(
        name,
        JSON.stringify({
            data,
        }),
    );
};

export const SignUp = (username, password, name, email, phone) => {
    return async (dispatch) => {
        dispatch({
            type: AUTH_LOADING,
        });
        try {
            const response = await timeoutPromise(
                fetch(`${API_URL}/user/register`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        username: username,
                        password: password,
                        name: name,
                        email: email,
                        phone: phone,
                    }),
                }),
            );
            if (!response.ok) {
                const errorResData = await response.json();
                dispatch({
                    type: AUTH_FAILURE,
                });
                throw new Error(errorResData.err);
            }
            dispatch({
                type: SIGN_UP,
            });
        } catch (err) {
            throw err;
        }
    };
};

//Login
export const Login = (username, password) => {
    return async (dispatch) => {
        dispatch({
            type: AUTH_LOADING,
        });
        // const pushToken = await AskingExpoToken();
        try {
            const response = await timeoutPromise(
                fetch(`${API_URL}/auth/login`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        username,
                        password,
                    }),
                }),
            );
            if (!response.ok) {
                const error = await response.json();

                console.log(error);
                dispatch({
                    type: AUTH_FAILURE,
                    error,
                });
                throw new Error(error.err);
            }
            const resData = await response.json();
            // console.log(resData.name);
            saveDataToStorage('user', resData);
            dispatch(setLogoutTimer(60 * 60 * 1000));
            dispatch({
                type: LOGIN,
                user: resData,
                name: resData.user.name,
                address: resData.user.address,
            });
        } catch (err) {
            throw err;
        }
    };
};

export const EditInfo = (username, name, phone, address) => {
    return async (dispatch, getState) => {
        const user = getState().auth.user;
        dispatch({
            type: AUTH_LOADING,
        });
        try {
            const response = await timeoutPromise(
                fetch(`${API_URL}/user/me`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Tokens: user.token,
                    },
                    method: 'PATCH',
                    body: JSON.stringify({
                        username: username,
                        name: name,
                        phone: phone,
                        address: address,
                    }),
                }),
            );
            if (!response.ok) {
                const errorResData = await response.json();
                dispatch({
                    type: AUTH_FAILURE,
                });

                Error(errorResData.err);
            }

            // dispatch({
            //   type: EDIT_INFO,
            //   username,
            //   name,
            //   phone,
            //   address,
            // });

            dispatch({
                type: LOGIN,
                // user: resData,
                name: name,
                address: address,
            });
        } catch (err) {
            throw err;
        }
    };
};

export const uploadAvatar = (file) => {
    return async (dispatch, getState) => {
        const user = getState().auth.user;
        dispatch({
            type: AUTH_LOADING,
        });
        try {
            console.log('đã vào nha');
            const formData = new FormData();
            formData.append('userId', user._id);
            formData.append('avatar', file);

            const response = await timeoutPromise(
                fetch(`${API_URL}/auth/photo`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Tokens: user.token,
                    },
                    method: 'POST',
                    body: formData,
                }),
            );
            if (!response.ok) {
                const errorResData = await response.json();
                dispatch({
                    type: AUTH_FAILURE,
                });

                Error(errorResData.err);
            }

            const resData = response;

            dispatch({
                type: UPLOAD_IMAGE,
                imageUrl: resData,
            });
        } catch (err) {
            throw err;
        }
    };
};

export const ResetPassword = (password) => {
    return async (dispatch, getState) => {
        const user = getState().auth.user;

        dispatch({
            type: AUTH_LOADING,
        });
        try {
            const response = await timeoutPromise(
                fetch(`${API_URL}/auth/me`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Tokens: user.token,
                    },
                    method: 'PATCH',
                    body: JSON.stringify({
                        password,
                    }),
                }),
            );
            if (!response.ok) {
                const errorResData = await response.json();
                dispatch({
                    type: AUTH_FAILURE,
                });
                throw new Error(errorResData.err);
            }
            dispatch({
                type: RESET_PASSWORD,
            });
        } catch (err) {
            throw err;
        }
    };
};

export const Logout = (password) => {
    return async (dispatch, getState) => {
        const user = getState().auth.user;

        dispatch({
            type: AUTH_LOADING,
        });
        try {
            const response = await timeoutPromise(
                fetch(`${API_URL}/auth/logout`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Tokens: user.token,
                    },
                    method: 'POST',
                }),
            );
            if (!response.ok) {
                const errorResData = await response.json();
                dispatch({
                    type: AUTH_FAILURE,
                });
                throw new Error(errorResData.err);
            }
            clearLogoutTimer();
            localStorage.removeItem('user');
            dispatch({
                type: LOGOUT,
                user: {},
            });
        } catch (err) {
            throw err;
        }
    };
};

//Logout
// export const Logout = () => {
//     return (dispatch) => {
//         clearLogoutTimer();
//         localStorage.removeItem('user');
//         dispatch({
//             type: LOGOUT,
//             user: {},
//         });
//     };
// };

//Auto log out
let timer;
const clearLogoutTimer = () => {
    if (timer) {
        clearTimeout(timer);
    }
};
const setLogoutTimer = (expirationTime) => {
    return (dispatch) => {
        timer = setTimeout(async () => {
            await dispatch(Logout());
            alert('Logout section expired');
        }, expirationTime);
    };
};
