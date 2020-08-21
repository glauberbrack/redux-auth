import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Content, AnimationContainer } from './styles';

import logo from '../../assets/icon.png';
import { StoreState } from '../../store/createStore';
import { signInRequest } from '../../store/modules/auth/actions';

const UserSignIn: React.FC = () => {
  const { loadingSignInRequest } = useSelector((state: StoreState) => state.auth)
  const dispatch = useDispatch();
  console.log(' IS AUTHENTICATED: ', loadingSignInRequest)

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="Glauber Brack Logo" />
          
          <div className="sign-in-page">
            <input type="text" defaultValue="glauber@brack.com.br" />
            <input type="password" defaultValue="12345678" />
            <button onClick={() => dispatch(signInRequest({ email: 'glauber@brack.com.br', password: '12345678'}))}>
              {loadingSignInRequest ? 'Carregando...' : 'Sign In'}
            </button>
          </div>

        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default UserSignIn;
