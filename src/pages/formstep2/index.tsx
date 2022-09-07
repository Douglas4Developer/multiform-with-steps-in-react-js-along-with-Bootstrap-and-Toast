import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/theme';
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/selectoption';
import React from 'react';

export const FormStep2 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
    }, [dispatch, navigate, state.name]);

    const handleNextStep = () => {
        if (state.name !== '') {
            navigate('/step3');
        } else {
            alert("Preencha os dados.");
        }
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }

    const setNivelProgramacao = (nivelDeProgramador: string) => {
        dispatch({
            type: FormActions.setNivelProgramacao,
            payload: nivelDeProgramador
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/5</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha o nivel de Desenvolvimento.</p>

                <hr />

                <SelectOption
                    title="Iniciante"
                    description="Programador (Junior) ele terá tarefas com uma complexidade menor, ou seja, tarefas mais básicas, sem tantas exigências. Além disso sempre terá algum outro profissional que irá coordená-lo, dando os direcionamentos, explicando, revisando suas tarefas, para que ele possa ir aprendendo e crescendo na sua área."
                    icon="🥳"
                    selected={state.level === 0}
                    onMouseEnter ={() => setNivelProgramacao('Iniciante')}
                    onClick={()=>setLevel(1)}
                    

                />

                <SelectOption
                    title="Avançado"
                    description="Programador (Pleno ou Senior) ele terá mais participações em reuniões importantes com coordenadores e diretorias, além de receber mais atividades que exigem mais experiência profissional."
                    icon="😎"
                    selected={state.level === 1}
                    onMouseEnter ={() => setNivelProgramacao('Avançado')}
                    onClick={() => setLevel(0)}                  
                    
                />



                <Link to="/" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}