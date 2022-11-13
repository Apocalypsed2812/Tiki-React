import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './layouts';
import { Fragment, useContext } from 'react';

import { GlobalState } from './context/GlobalState';
import ScrollToTop from '~/routes/ScrollToTop';
//import UserAPI from '~/context/UserAPI';

function App() {
    const state = useContext(GlobalState);
    const isLogin = state.UserAPI.login[0];
    const isAdmin = state.UserAPI.admin[0];
    // console.log(isLogin);
    // console.log(isAdmin);

    return (
        <Router>
            <div className="App">
                <ScrollToTop>
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;

                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page isAdmin={isAdmin} isLogin={isLogin} />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </ScrollToTop>
            </div>
        </Router>
    );
}

export default App;
