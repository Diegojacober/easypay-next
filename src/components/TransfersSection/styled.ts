import styled from "styled-components";

export const Container = styled.section`
    & {
        width: 100%;
    }
`;

export const Title = styled.h2`
    & {
        color: ${(props) => props.theme.color.primary.main};
        padding: 15px 0;
        border-bottom: 1px solid ${(props) => props.theme.color.primary.main};
        font-size: 40px;
        margin-bottom: 20px;
    }
`;

export const Loader = styled.span`
    & {
        width: 48px;
        height: 48px;
        border: 2px solid ${(props) => props.theme.color.secundary.main};
        border-radius: 50%;
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
        margin-left: 50%;
    }
    &::after, &::before {
        content: '';  
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        background:  ${(props) => props.theme.color.primary.main}; 
        width: 6px;
        height: 6px;
        transform: translate(150%, 150%);
        border-radius: 50%;
    }
    &::before {
        left: auto;
        top: auto;
        right: 0;
        bottom: 0;
        transform: translate(-150%, -150%);
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
`
