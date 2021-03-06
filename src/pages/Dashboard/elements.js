import styled from 'styled-components'

export const Container = styled.div`
    min-width: 100%;
    min-height: 100vh;
    background: #FAFAFA;
    padding: 160px 20px 20px 365px;

    @media screen and (max-width: 1025px){    
        padding:  65px 20px 65px 20px;
    }
`

export const Cards = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 20px;
`

export const ContainerChart = styled.div`
    width: 100%;
    max-width: 961px;
    max-height: 646px;
    border: 1px solid #E5E5E5;
    border-radius: 4px;
    padding: 30px;
    margin: 20px auto 0px auto;

    h1 {
        padding-bottom: 30px;
        font-weight: 500;
        font-size: 20px;
        color: rgba(0, 0, 0, 0.87);
        letter-spacing: 0.15px;
    }
`
