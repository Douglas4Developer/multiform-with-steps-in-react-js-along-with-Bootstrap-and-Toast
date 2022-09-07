import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/theme';
import { useNavigate, Link } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import React from 'react';


export const FormStep4 = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    const options = [
        { value: '', text: '--Em quanto tempo, você já está mergulhado neste tecnologias ?--' },
        { value: '6 Meses', text: '6 Meses' },
        { value: '2 a 4 anos', text: '2 a 4 anos' },
        { value: '6 a 7 anos', text: '6 a 7 anos' },
        { value: 'Mais de 6 anos', text: 'Mais de 6 anos' },
    ];

    const [selected, setSelected] = useState(options[0].value);


    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        console.log(event.target.value)
        setSelected(event.target.value)
        dispatch({
            type: FormActions.setTempo,
            payload: event.target.value
        });

    }



    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            });
        }
    }, [dispatch, navigate, state.name]);

    const handleNextStep = () => {
        if (state.email !== '' && state.telefone !== '') {
            {/*console.log(state);*/ }
            navigate('/step5');  //Enviar para o servidor com as informações
        } else {
            alert('Preencha os dados');
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }

    const handleTelefoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setTelefone,
            payload: e.target.value
        });
    }

    const handleTempoChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setTempo,
            payload: e.target.value
        });
    }




    return (
        <Theme>

            <C.Container>
                <p>Passo 4/5 </p>
                <h1>Legal {state.name}, onde te achamos? </h1>
                <p> Preencha com seus contatos para conseguirmos entrar em contato.</p>

                <hr />

                <label >
                    Qual seu e-mail?
                    <input
                        type="email"
                        autoFocus
                        value={state.email}
                        onChange={handleEmailChange}
                    />

                </label>

                <label >
                    Qual o numero de contato ou (WhatsApp)?
                    <input
                        type="url"
                        value={state.telefone}
                        onChange={handleTelefoneChange}
                    />

                </label>

                <select className="form-select" aria-label="Default select example" value={selected} onChange={handleChange}>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.text}
                        </option>
                    ))}
                </select>



                <Link to="/step3" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>

            </C.Container>


        </Theme >
    );
}