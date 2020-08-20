import React from 'react';

import { Container, Content, AnimationContainer } from './styles';

import logo from '../../assets/icon.png';

const UserSignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="Glauber Brack Logo" />
          
          <div className="sign-in-page">
            <input type="text" defaultValue="glauber@brack.com.br" />
            <input type="password" defaultValue="12345678" />
            <button>Login</button>
          </div>

        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default UserSignIn;
