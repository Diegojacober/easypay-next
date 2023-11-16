import styled from "styled-components";

export const Container = styled.article`
    & {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        user-select: none;
    }
`;

export const CardArea = styled.div`
    & {
        border: 1px solid red;
        width: 85%;
    }
`;

export const Button = styled.button`
    & {
        color: ${(props) => props.theme.color.secundary.contrastText};
        background: transparent;
        border: none;
        font-size: .7rem;
        font-weight: 400;
    }

    & div {
        background: #A43D3D;
        padding: 8px;
        border-radius: 50%;
    }
`;
