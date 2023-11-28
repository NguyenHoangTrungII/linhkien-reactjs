import React, { StrictMode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouters } from '~/routes';
import BaseLayout from '~/Layout/BaseLayout';
import { Fragment } from 'react';
import { Provider } from 'react-redux';

//redux
import ReduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './redux/reducers/cartReducer';
import { productReducer } from './redux/reducers/productReducer';
import { authReducer } from './redux/reducers/authReducer';
import { categoryReducer } from './redux/reducers/categoryReducer';
import { brandReducer } from './redux/reducers/brandReducer';

//redux
const rootReducer = combineReducers({
    store: productReducer,
    cart: cartReducer,
    auth: authReducer,
    category: categoryReducer,
    brand: brandReducer,
    form: formReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

function App() {
    return (
        <StrictMode>
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Routes>
                            {publicRouters.map((route, index) => {
                                let Layout = BaseLayout;
                                let ConatinerType = false;

                                if (route.layout) {
                                    Layout = route.layout;
                                } else if (route.layout === null) {
                                    Layout = React.Fragment;
                                } else if (route.layout == 'login') {
                                    Layout = route.layout;
                                    ConatinerType = true;
                                }

                                const Page = route.component;

                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout isFluidContainer={ConatinerType}>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                        </Routes>
                    </div>
                </Router>
            </Provider>
        </StrictMode>
    );
}

export default App;
