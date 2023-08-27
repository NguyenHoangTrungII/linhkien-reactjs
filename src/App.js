import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouters } from '~/routes';
import BaseLayout from '~/Layout/BaseLayout';
import { Fragment } from 'react';

function App() {
    return (
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

                        // const Page = route.component;
                        // return <Route key={index} path={route.path} element={<Page />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
