import styled from 'styled-components'

export const Container = styled.div`
    padding: 180px 0 40px 405px;
    width: 100vw;
    min-height: 100vh;
    background: #FAFAFA;

    @media screen and (max-width: 1025px){
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding:  65px 20px 65px 20px;
    }

    h1{
        font-size: 28px;
        font-weight: 700;
        line-height: 42px;
        color: #374557;
        padding: 0 20px 60px 0;

    @media screen and (max-width: 980px){
        padding: 0 0 40px 0;
        text-align: center;
    }
    }
`

export const Form = styled.form`
    min-width: 282px;

    @media screen and (max-width: 320px){
        min-width: 0;
    }
`
