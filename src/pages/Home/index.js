import React from 'react';
import ImageHome from '../../assets/LoginBack2.jpg';
import Logo from '../../assets/Logo.png';

import { Container, Sessao, ContainerRight, Register, Enter } from './styles';

export default function Home() {
    return (
        <Container>
            <Sessao>
                <img src={Logo} alt="lada" />
                <p>Bem vindo ao Lada</p>
                <span>
                    Encontre aqui as melhores Profissionais <br /> do mercado de
                    Programação.
                </span>
                <br />

                <Enter className="button" to="/loginCompany">
                    Entrar
                </Enter>
            </Sessao>
            <ContainerRight>
                <img src={ImageHome} alt="working" />
                <p>
                    Não tem uma conta?
                    <br /> <span>Traga sua empresa para a Lada</span>
                </p>
                <Register className="button" to="/company">
                    Cadastre-se
                </Register>
            </ContainerRight>
        </Container>
    );
}
