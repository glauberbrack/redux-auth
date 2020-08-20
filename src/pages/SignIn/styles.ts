import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  background: #082A44;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 1px solid #fff;
  border-radius: 5px;

  height: 450px;
  width: 600px;
`;

const apperFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-50px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${apperFromLeft} 1s;
  
    
  img {
      width: 20%;
      align-items: center;
      margin-bottom: 20px;
    }


  div {
    display: flex;
    flex-direction: column;    
    align-items: center;
    width: 60%;

    input {
    display: flex;
    align-items: center;
    flex: 1;

    background: #FFF;
    border: 1px solid #B4B4B4;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 10px 15px;


    width: 100%;
    color: #7C7C7C;

    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    background: transparent;
    border: 1;
    color: #7C7C7C;

    &::placeholder {
      color: #666360;
    }
  }

  input + input {
    margin-top: 10px;
  }

  button {
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #fff;
    background: #35C8D2;
    width: 100%;
    margin-top: 16px;
    transition: background-color 0.2s;
    }
  }
`;
