import styled, { keyframes } from 'styled-components'

const demoFade = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`
const demoSlide = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`

export const DemoOverlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background-color: rgba(0, 0, 0, 0.65);
    animation: ${demoFade} 0.2s ease;
`

export const DemoBox = styled.div`
    position: relative;
    width: min(620px, 100%);
    max-height: min(88vh, 680px);
    overflow-y: auto;
    background-color: white;
    border: 3px solid ${({ theme }) => theme.colors.darkteal};
    border-radius: 10px;
    box-shadow: 8px 8px 0 ${({ theme }) => theme.colors.lightteal};
    padding: clamp(22px, 4vw, 40px);
    animation: ${demoSlide} 0.2s ease;
`

export const DemoCloseButton = styled.button`
    position: absolute;
    top: 14px;
    right: 14px;
    width: 38px;
    height: 38px;
    background-color: white;
    color: ${({ theme }) => theme.colors.darkgrey};
    border: 2px solid ${({ theme }) => theme.colors.lightgrey};
    border-radius: 50%;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.teal};
        color: white;
    }
    &:active {
        border: 2px solid ${({ theme }) => theme.colors.darkteal};
    }
`

export const DemoTag = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.darkpurple};
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.72rem;
    font-weight: 700;
`

export const DemoTitle = styled.h2`
    margin: 8px 0 16px;
    color: ${({ theme }) => theme.colors.darkgrey};
    font-size: clamp(1.7rem, 5vw, 2.6rem);
    line-height: 1.05;
    text-transform: uppercase;
    letter-spacing: 0.02em;
`

export const DemoLede = styled.p`
    margin: 0 0 16px;
    color: ${({ theme }) => theme.colors.darkgrey};
    font-size: 1rem;
    line-height: 1.55;
`

export const DemoPwHint = styled.p`
    margin: 0 0 20px;
    padding: 8px 12px;
    background-color: ${({ theme }) => theme.colors.lightpurple};
    border: 2px solid ${({ theme }) => theme.colors.purple};
    border-radius: 8px;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.darkgrey};
`

export const DemoPassword = styled.code`
    background-color: ${({ theme }) => theme.colors.lightteal};
    border: 1.5px solid ${({ theme }) => theme.colors.darkteal};
    border-radius: 4px;
    padding: 2px 8px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkgrey};
`

export const DemoList = styled.ul`
    list-style: none;
    margin: 0 0 24px;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const DemoRow = styled.li`
    border: 2px solid ${({ theme }) => theme.colors.lightgrey};
    border-radius: 8px;
    background-color: white;
    box-shadow: 4px 4px 0 ${({ theme }) => theme.colors.lightgrey};
    padding: 12px 14px;
    display: flex;
    flex-direction: column;
    gap: 6px;
`

export const DemoRowHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
`

export const DemoUsername = styled.span`
    font-weight: 700;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.darkgrey};
    word-break: break-all;
`

export const DemoBlurb = styled.p`
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.45;
    color: ${({ theme }) => theme.colors.darkgrey};
`

export const DemoActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    flex-wrap: wrap;
`

export const DemoSecret = styled.span`
    font-size: 0.78rem;
    color: ${({ theme }) => theme.colors.darkgrey};
`