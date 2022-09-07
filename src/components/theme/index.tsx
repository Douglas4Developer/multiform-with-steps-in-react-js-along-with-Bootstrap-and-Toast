import { ReactNode } from 'react';
import * as C from './styles';
import { Header } from '../Header';
import { SideBarItem } from '../sidebaritem';
import { useForm } from '../../contexts/FormContext'
import React from 'react';

//Criado uma pasta dentro do src // chamada components para armazenar nossos themes que
//servira de template para as demais telas

type Props = {
    children: ReactNode;
}

export const Theme = ({ children }: Props) => {
    const { state } = useForm();



    return (
        <C.Container>
            <C.Area>
                <Header />
                <C.Steps>
                    <C.Sidebar>
                        <C.Sidebar>
                            <SideBarItem
                                title="Pessoal"
                                description="Se identifique"
                                icon="profile"
                                path="/"
                                active={state.currentStep === 1}
                            />

                            <SideBarItem
                                title="Nível Programador"
                                description="Seu Nível"
                                icon="book"
                                path="/step2"
                                active={state.currentStep === 2}
                            />

                            <SideBarItem
                                title="Skills"
                                description="Sobre suas Skills"
                                icon="skill"
                                path="/step3"
                                active={state.currentStep === 3}
                            />

                            <SideBarItem
                                title="Contatos"
                                description="Como te achar"
                                icon="mail"
                                path="/step4"
                                active={state.currentStep === 4}
                            />

                            <SideBarItem
                                title="Finalizando"
                                description="Verificação dos dados"
                                icon="finish"
                                path="/step5"
                                active={state.currentStep === 5}
                            />

                        </C.Sidebar>
                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    );
}


