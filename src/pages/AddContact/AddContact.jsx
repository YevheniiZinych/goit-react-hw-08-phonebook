import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { animateOptions } from 'config/AnimateBackOptions/AnimateBackOptions';
import { addLocation } from 'redux/ContactsSlice/contactSlice';
import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { AddContactContainer } from './AddContact.mui.styled';
import { useEffect } from 'react';

const AddContact = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    dispatch(addLocation(location.pathname));
  }, [dispatch, location.pathname]);

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {}, []);

  return (
    <AddContactContainer disableGutters maxWidth={false}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={animateOptions}
      />
      <AddContactForm />
    </AddContactContainer>
  );
};

export default AddContact;
