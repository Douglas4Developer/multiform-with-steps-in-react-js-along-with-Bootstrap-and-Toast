import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/theme';
import { useNavigate, Link } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';
import React from 'react';

export const FormStep3 = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, [dispatch, navigate, state.name]);

    const handleNextStep = () => {
        if (state.numeroAutoAvaliacao !== 0 && state.descricaoStack) {
            {/*console.log(state);*/ }
            navigate('/step4');  //Enviar para o servidor com as informações
        } else {
            alert('Preencha os dados');
        }
    }


    const handleQTDusuariosReactChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setnumeroAutoAvaliacao,
            payload: e.target.value
        });
    }

    const handledescricaoStackChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setdescricaoStack,
            payload: e.target.value
        });
    }

    return (
        <Theme>

            <C.Container>
                <p>Passo 3/5 </p>
                <h1>Muito bom {state.name}, agora nos fale sobre sua stack e skills. 🤖 </h1>
                <p> Preencha sobre sua area no desenvolvimento (Front, Back ou outros).</p>

                <hr />

                <label >
                    Qual linguagem, stack frameworks que você desenvolve? (se for mais de uma coloque separado por ponto e vírgula)
                    <input
                        type="text"
                        autoFocus
                        value={state.descricaoStack}
                        onChange={handledescricaoStackChange}
                    />

                </label>

                <label >
                    Qual nivel de experiência em numero que você se avalia?
                    <input
                        type="number"
                        value={state.numeroAutoAvaliacao}
                        onChange={handleQTDusuariosReactChange}
                    />

                </label>


                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>

            </C.Container>


        </Theme>
    );
}