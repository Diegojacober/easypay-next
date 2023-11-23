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
        border: 1px solid  ${(props) => props.theme.color.secundary.contrastText};
        width: 65%;
        height: 250px;
        border-radius: 50px;
        border: 1.758px solid rgba(255, 255, 255, 0.50);
        background: linear-gradient(113deg, rgba(255, 255, 255, 0.51) 3.51%, rgba(255, 255, 255, 0.00) 111.71%);
        box-shadow: 14.64687px 17.57625px 29.29374px 0px rgba(0, 0, 0, 0.05);
        backdrop-filter: blur(10.252809524536133px);
        color:  ${(props) => props.theme.color.secundary.contrastText};
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
    }

    & .card--header {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        width: 100%;
        padding: 30px;
        padding-top: 15px;
        padding-bottom: 0;
    }

    & .card--chip {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        padding: 0px 40px;
    }

    & .card--infos{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    & .card--infos h3 {
        font-weight: 300;
        font-size: 1.6rem;
    }

    & .card--infos .infos{
        margin-top: 20px;
        display: flex;
        width: 100%;
        justify-content: space-around;
        font-weight: 300;
        font-size: 0%.9;
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
