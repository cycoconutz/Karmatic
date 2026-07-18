import React from 'react';
import { StyledFooter, Icons } from "./Footer.styled"


export default function Footer() {
    return (
        <StyledFooter>
            <Icons>
            <img src='./assets/images/instagram.png' alt='instagram icon' />
            <img src='./assets/images/twitter.png' alt='twitter icon' />
            </Icons>
            <p>
            &copy; Karmatic developed by <a href="https://www.johndyates.com">Danny Yates</a>, <a href="https://github.com/Stiltskinner">Ryan Thomas</a>, <a href="https://github.com/Tim-Zebra">Timothy Zalewski</a>, and <a href="https://github.com/billycwong19">William Wong</a>
            </p>
            

        </StyledFooter>
    );
}