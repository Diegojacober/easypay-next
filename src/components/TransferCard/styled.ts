import styled from "styled-components";


export const Card = styled.article`
    & {
        width: 100%;
        display: flex;
        align-items: center;
        background: transparent;
        border-bottom: 1px solid #CCC;
        padding: 5px 8px;
        padding-bottom: 0;
        
        margin-bottom: 8px;
        color: ${(props) => props.theme.color.secundary.contrastText};
        transition: all ease-in .3s;
        border-radius: 5px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    &:hover{
       background: rgba(255,255,255, 0.2);
    }
`;

export const ImageArea = styled.div`
    & {

    }
`;

export const InfoArea = styled.div`
    & {
        display: flex;
        align-items: start;
        gap: 10px;
        flex: 1;
    }

    & div p{
        font-size: .9rem;
        margin-bottom: 2px;
    }

    & div small{
        font-size: 0.65rem;
        font-weight: 400;
    }
`;

export const ValueArea = styled.div`
    & {
        flex: 1;
    }

    & p {
        font-size: 1.2rem;
    }
`;
