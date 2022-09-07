import * as C from './styles';
import logo from '../../assets/logo.png';
import React from 'react';

export const Header = () => {
    return (
        <C.Container>           
                <img className='logoHeader' src={logo}></img>
                <h1>Hello World!</h1>
                <p>Faça seu cadastro de desenvolvedor, para continuarmos com nossa aventura pelo React JS</p>        
            </C.Container>
    );
}