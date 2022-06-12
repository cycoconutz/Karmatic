import styled from 'styled-components'

export const StyledHomeInfoContainer = styled.div`
    width: 80%;
    background-color: white;
    box-shadow: 5px 5px ${({ theme }) => theme.colors.lightpurple};
    border-radius: 25px;

    @media only screen and (min-width: 992px) {
        width: 100%;
    }
`

export const StyledHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin: 1rem 2rem;

    @media only screen and (min-width: 992px) {
        flex-direction: row;
    }
`

export const StyledHomeLogo = styled.img`
    height: 100px;
    margin: 0 1rem;
`

export const Rows = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    width: 90%;

    p {
        background-color: ${({ theme }) => theme.colors.lightgrey};
        border-radius: 30px;
        padding: 1rem;
        width: 75%;
        height: 180px;
        line-height: 1.5;
        font-family: 'Nunito Sans', sans-serif;
        height:fit-content;
        }

    img {
        margin: 1rem 1rem;
    }
    
    @media only screen and (min-width: 992px) {
        flex-direction: row;
        p {
            height:fit-content;
        }

    }
`