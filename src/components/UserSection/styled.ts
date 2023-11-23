import styled from "styled-components";


export const Container = styled.section`
    & {
        display: flex;
        width: 95%;
        margin: 0 auto;
        margin-top: 20px;
        color: #ccc;
        gap: 20px;
        align-items: center;
    }
`;

export const ImageSection = styled.div`
    .label-avatar{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
    }

    .label-avatar input{
        display: none;
    }

    .label-avatar span{
        z-index:99;
        position: absolute;
        opacity: 0.7;
        transition: all ease-in-out 0.5s;
    }

    .label-avatar span:hover{
        opacity: 1;
        transform: scale(1.8);
    }

`;


export const UserDetailsSection = styled.div`

    & {

    }


    & .divisor {
        width: 100%;
        height: 2px;
        background-color: #FFF;

    }
`
