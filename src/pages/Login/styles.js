import styled from 'styled-components';
import backImage from '../../assets/LoginBack2.jpg';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;

    align-items: center;
    text-align: center;
    background: url(${backImage}) no-repeat center top fixed;
    background-size: cover;
`;
