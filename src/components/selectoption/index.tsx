import * as C from './styles';
import React from 'react';

type Props = {
    title: string;
    description: string;
    icon: string;
    selected: boolean;
    onMouseEnter : () => void;
    onClick: () => void;
}

export const SelectOption = ({title, description, icon, selected, onClick, onMouseEnter }: Props) => {
    return (
        <C.Container onClick={onClick} selected={selected}>
            <C.Icon  onMouseEnter ={onMouseEnter}>{icon}</C.Icon>
            <C.Info onMouseEnter ={onMouseEnter}>
                <C.Title>{title}</C.Title>
                <C.Description>{description}</C.Description>
            </C.Info>
        </C.Container>
    );
}