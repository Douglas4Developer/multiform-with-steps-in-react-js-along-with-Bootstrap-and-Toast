import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/theme';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Icon } from '../../components/selectoption/styles';

export const FormStep5 = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    const notify = ()=>{        
        toast.success('Cadastro feito com sucesso!')     
        console.log(state)
    }
    
    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 5
            });
        }
    }, [dispatch, navigate, state.name]);


    return (
        <Theme>

            <C.Container>
                <p>Passo 5/5 </p>
                <h1>Quase lá {state.name}! </h1>
                <p> Verifique os seus dados se estão corretos.</p>

                <hr />

                <div className="card" >
                    <img src="https://tm.ibxk.com.br/2021/09/13/13170558127368.jpg?ims=1120x420" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-name">Nome: {state.name}</h5> 
                        <p className="card-text">Nível: {state.nivelDeProgramador} </p>
                        <p className="card-text">E-mail: {state.email}</p>
                        <p className="card-text">Stack: {state.descricaoStack}</p>
                        <p className="card-text">Auto Avaliação (nota pessoal): {state.numeroAutoAvaliacao}</p>
                        <p className="card-text">Número de Telefone: {state.telefone}</p>
                        <p className="card-text">Tempo na área: {state.tempo}</p>
                    </div>
                </div>


                <Link to="/" className="backButton">Corrigir</Link>
                <button onClick={notify}>Finalizar!</button>

                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

            </C.Container>


        </Theme >
    );
}