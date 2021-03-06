import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
`

export const Button = styled.button`
    width: 100%;
    max-width: 78px;
    height: 40px;
    font-size: 16px;
    color: #fff;
    background: #8DB51B;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-weight: 700;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    
    @media screen and (max-width: 750px){
        max-width: 101px;
    }
`
