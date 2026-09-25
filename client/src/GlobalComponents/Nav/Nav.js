import React from 'react';
import { StyledNavImage, StyledNavContainer, StyledNavEnd, DisappearingNavImage } from './Nav.styled';
import { PrettyButton } from '../Buttons/PrettyButton.styled';
import styled from 'styled-components';
import auth from '../../utils/auth'

export const DemoChip = styled.button`
    color: ${({ theme }) => theme.colors.darkgrey};
    font-size: 16px;
    padding: .75rem;
    margin:.5rem;
    border: .25px solid ${({ theme }) => theme.colors.lightpurple};
    border-radius: 10px;
    background:${({ theme }) => theme.colors.purple};
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.darkpurple};
        color: white;
        
    }
    &:active {
        box-shadow: 2px 2px 5px grey;
    }
`


export default function Nav({ currentPage, handlePageChange, accessPage, setCurrentAccessPage, onOpenDemo }) {
    return (
        <StyledNavContainer>
            <DisappearingNavImage onClick={() => handlePageChange('Home')} src='./assets/images/logo_karmatic.png' alt='karmatic logo' />

            {currentPage === 'Profile' ?

                <StyledNavEnd>
                    <PrettyButton href='#logout' onClick={auth.logout}>Logout</PrettyButton>
                    <PrettyButton href='#dashboard' onClick={() => handlePageChange('Dashboard')}>Dashboard</PrettyButton>
                    <DemoChip onClick={onOpenDemo}>Demo logins</DemoChip>
                    <StyledNavImage src='./assets/images/k_logo.png' alt='karmatic square logo' onClick={() => handlePageChange('Home')} />
                </StyledNavEnd>

                : currentPage === 'Dashboard' ?

                    <StyledNavEnd>
                        <PrettyButton href='#profile' onClick={() => handlePageChange('Profile')}>Profile</PrettyButton>
                        <DemoChip onClick={onOpenDemo}>Demo logins</DemoChip>
                        <StyledNavImage src='./assets/images/k_logo.png' alt='karmatic square logo' onClick={() => handlePageChange('Home')} />
                    </StyledNavEnd>

                    : currentPage === 'Login' ?

                    <StyledNavEnd>
                        <PrettyButton onClick={() => handlePageChange('SignUp')}>Sign Up</PrettyButton>
                        <DemoChip onClick={onOpenDemo}>Demo logins</DemoChip>
                        <StyledNavImage onClick={() => handlePageChange('Home')} src='./assets/images/k_logo.png' alt='karmatic square logo' />
                    </StyledNavEnd>

                    : currentPage === 'SignUp' ?

                    <StyledNavEnd>
                        <PrettyButton onClick={() => handlePageChange('Login')}>Login</PrettyButton>
                        <DemoChip onClick={onOpenDemo}>Demo logins</DemoChip>
                        <StyledNavImage onClick={() => handlePageChange('Home')} src='./assets/images/k_logo.png' alt='karmatic square logo' />
                    </StyledNavEnd>

                    :

                    <StyledNavEnd>
                        <PrettyButton onClick={() => handlePageChange('Login')}>Login</PrettyButton>
                        <PrettyButton onClick={() => handlePageChange('SignUp')}>Sign Up</PrettyButton>
                        <DemoChip onClick={onOpenDemo}>Demo logins</DemoChip>
                        <StyledNavImage src='./assets/images/k_logo.png' alt='karmatic square logo' />
                    </StyledNavEnd>

            }

        </StyledNavContainer>
    )
}