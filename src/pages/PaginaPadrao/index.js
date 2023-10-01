import React from 'react';
import { Outlet } from 'react-router-dom';
import Cabecalho from '../../componentes/Header';
import Container from '../../componentes/Container';
import Rodape from '../../componentes/Footer';

function PaginaPadrao() {
    return(
        <main>
            <Cabecalho />
                <Container>
                    <Outlet />
                </Container>
            <Rodape />
        </main>
    )
}

export default PaginaPadrao