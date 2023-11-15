import styled from "styled-components";

export const FooterContainer = styled.footer`
    & {
        background: ${(props) => props.theme.color.secundary.main};
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px 10px;
        width: 100%;
        min-height: 10vh;
        margin-top: 10%;
    }

    & p {
        color: ${(props) => props.theme.color.secundary.contrastText};
        font-size: 18px;
    }
`;
