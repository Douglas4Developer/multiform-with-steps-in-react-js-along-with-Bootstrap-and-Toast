// Context, Reducer, Provider, Hook
import { createContext, ReactNode, useContext, useReducer } from 'react';
import React from 'react';

type State = {
    currentStep: number;
    name: string;
    level: number;
    email: string;
    telefone: string;
    descricaoStack: string;
    nivelDeProgramador: string;
    numeroAutoAvaliacao: number;
    tempo: string;
}
type Action = {
    type: FormActions;
    payload: any;
};
type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}
type FormProviderProps = {
    children: ReactNode
};

const initialData: State = {
    currentStep: 0,
    name: '',
    level: 0 | 1,
    email: '',
    telefone: '',
    descricaoStack: '',
    nivelDeProgramador: '',
    numeroAutoAvaliacao: 0,
    tempo:''
}

// Context
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setTelefone,
    setdescricaoStack,
    setNivelProgramacao,
    setnumeroAutoAvaliacao,
    setTempo
}
const formReducer = (state: State, action: Action) => {
    switch (action.type) {
        case FormActions.setCurrentStep:
            return { ...state, currentStep: action.payload };
        case FormActions.setName:
            return { ...state, name: action.payload };
        case FormActions.setLevel:
            return { ...state, level: action.payload };
        case FormActions.setEmail:
            return { ...state, email: action.payload };
        case FormActions.setTelefone:
            return { ...state, telefone: action.payload };
        case FormActions.setdescricaoStack:
            return { ...state, descricaoStack: action.payload };
        case FormActions.setNivelProgramacao:
            return { ...state, nivelDeProgramador: action.payload };
        case FormActions.setnumeroAutoAvaliacao:
            return { ...state, numeroAutoAvaliacao: action.payload };
        case FormActions.setTempo:
                return { ...state, tempo: action.payload };    
        default:
            return state;
    }
}

// Provider
export const FormProvider = ({ children }: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch };
    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}

// Context Hook
export const useForm = () => {
    const context = useContext(FormContext);
    if (context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider');
    }
    return context;
}