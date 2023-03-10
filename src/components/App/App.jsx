import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { fetchCurrentUser } from 'redux/Auth/operation';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { useAuth } from 'components/hooks/useAuth';
import { GlobalStyle } from 'components/GlobalStyle';
import { AnimateBack } from 'components/AnimateBack/AnimateBack';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ContactPage = lazy(() => import('../../pages/Contacts/Contacts'));
const RegisterPage = lazy(() => import('../../pages/Register/Register'));
const LoginPage = lazy(() => import('../../pages/Login/Login'));
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));
const ContactForm = lazy(() => import('../../pages/ContactForm/ContactForm'));

export default function App() {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth;

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <AnimateBack>
      {isRefreshing ? (
        'Page is loading...'
      ) : (
        <>
          <GlobalStyle />

          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute component={ContactPage} redirectTo="/login" />
                }
              />
              <Route
                path="/addcontact"
                element={
                  <PrivateRoute component={ContactForm} redirectTo="/login" />
                }
              />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    component={RegisterPage}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    component={LoginPage}
                    redirectTo="/contacts"
                  />
                }
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
    </AnimateBack>
  );
}
