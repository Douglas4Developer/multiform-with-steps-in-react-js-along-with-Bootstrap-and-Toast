import { Link } from 'react-router-dom';
import * as C from './styles';
import { ReactComponent as ProfileIcon } from '../../assets/profile.svg'
import { ReactComponent as BookIcon } from '../../assets/book.svg'
import { ReactComponent as MailICon } from '../../assets/mail.svg'
import { ReactComponent as SkillIcon } from '../../assets/skill.svg'
import { ReactComponent as FinishIcon } from '../../assets/finish.svg'
import React from 'react';

type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}



export const SideBarItem = ({ title, description, icon, path, active}: Props) => {
    return (
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title> {title} </C.Title>
                    <C.Description> {description} </C.Description>
                </C.Info>

                <C.IconArea active={active}>
                   
                    {icon === 'profile' &&
                        <ProfileIcon fill='white' width={24} height={24} />
                    }
                    {icon === 'mail' &&
                        <MailICon fill='white' width={24} height={24} />
                    }
                    {icon === 'skill' &&
                        <SkillIcon fill='white' width={24} height={24} />
                    }
                    {icon === 'book' &&
                        <BookIcon fill='white' width={24} height={24} />
                    }
                    {icon === 'finish' &&
                        <FinishIcon fill='white' width={24} height={24} />
                    }
                    

                </C.IconArea>

                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    );
}