import React, { useEffect, useState } from 'react';
import ButtonAction from '../../components/ButtonAction';
import { getInfo, setInfo } from '../../services/Api';
import { Container, Form } from './elements';
import InputSelect from '../../components/InputSelect';
import InputNumber from '../../components/InputNumber';
import InputDate from '../../components/InputDate';
import { toast } from 'react-toastify';

const UnidadesCadastro = () => {

    const [options, setOptions] = useState([])
    const [units, setUnits] = useState([])
    const [unity, setUnity] = useState('')
    const [date, setDate] = useState(new Date())
    const [kw, setKw] = useState('')
    const [error, setError] = useState({})

    console.log(date)
    
    const getActiveUnits = (data) => {
        const activeUnits = data.filter(item => item.active === true)
        const options = activeUnits.map(item => item.nickname)
        setOptions(options)
    }

    useEffect(() => {
        getInfo("/unidades")
            .then((data) => {
                setUnits(data)
                getActiveUnits(data)
            })
            .catch(() => {
                toast.error('Erro ao buscar dados')
            });
    }, []);

    function handleSubmit(event) {
        event.preventDefault();

        const id = units.filter(item => item.nickname === unity)
        
        console.log(id)

        setError({
            unityError: (unity.length < 1 ? true : false),
            kwError: (kw.length < 1 ? true : false)
        })

        if (unity.length > 0 &&
            date.length > 0 &&
            kw.length > 0) {
            setInfo(
                '/geracao',
                {
                    id: id[0].id,
                    unity: unity,
                    date: date,
                    kw: kw,
                }
            )
            setUnity('')
            setDate('')
            setKw('')
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <InputSelect
                    label='Unidade Geradora'
                    errorMessage={error.unityError}
                    errorText="Campo Obrigatório"
                    options={options}
                    placeholder='Painel 1'
                    value={unity}
                    onChange={(e) => {
                        setUnity(e.target.value)
                        setError({})
                    }}
                />
                <InputDate
                    label='Data'
                    date={date}
                    setDate={setDate}
                />
                <InputNumber
                    label='Total kW gerado'
                    errorMessage={error.kwError}
                    errorText="Campo Obrigatório"
                    placeholder='80'
                    value={kw}
                    onChange={(e) => {
                        setKw(e.target.value)
                        setError({})
                    }}
                />
                <ButtonAction
                    text='Cadastrar'
                    type='submit'
                />
            </Form>
        </Container>
    )
};

export default UnidadesCadastro;
