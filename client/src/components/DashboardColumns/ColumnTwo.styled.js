import styled from 'styled-components'

export const ColumnContainer = styled.div`
    margin-top: -1rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 10px;

`

export const FeedHeaderContainer = styled.div`
    
    width: 100%;
`

export const CreatePostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.lightteal};
    @media only screen and (min-width: 992px) {
        position: fixed;
        width: 33vw;
    }
    
`

export const ActivityHeader = styled.div`
    color: ${({ theme  }) => theme.colors.darkgrey};
    padding-top: 1rem;
    
    p {
    font-family: ${({ theme }) => theme.fonts.otherfont};
    font-size: 20px;
    margin-left: 1rem;
    margin-top: 0;
    padding: 0;

    }
    
    @media only screen and (min-width: 992px) {
        margin-top: 225px;
    }
    
`

export const FeedContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.teal };
    width: 100%;
    height:600px;
    overflow: visible;
    overflow-y: scroll;
    overscroll-behavior-y: none;
    display: flex;
    flex-direction: column;
`
