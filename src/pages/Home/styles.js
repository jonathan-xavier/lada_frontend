import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    max-width: 1080px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Sessao = styled.section`
    p {
        padding-top: 60px;
        color: #8a29be;
        font-size: 30px;
        padding-bottom: 20px;
    }
    span {
        font-size: 20px;
    }
`;

export const ContainerRight = styled.div`
    img {
        margin-left: 40px;
        height: 300px;
        margin-bottom: 30px;
        border-radius: 20px;
    }
    p {
        line-height: 26px;
        padding-right: 10px;
        width: 500px;
        text-align: end;
        padding-top: 15px;
        font-size: 20px;
    }
`;

export const Enter = styled(Link)`
    cursor: pointer;
    background: #8a29be;
    color: white;
    border-radius: 4px;
    text-decoration: none;
    float: left;
    margin-top: 40px;

    /* width: 250px; */
    padding: 10px 100px;

    font-size: 16px;
    font-weight: bold;

    &:hover {
        background: ${darken(0.03, '#8A29BE')};
    }
`;

export const Register = styled(Link)`
    padding-right: 10px;
    text-decoration: none;
    font-size: 18px;
    color: #8a29be;
    font-weight: bold;
    float: right;
    padding-top: 20px;
`;
