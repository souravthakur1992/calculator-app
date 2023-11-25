import React, {useState, useRef} from 'react';
import Atoms from 'components/Atoms';
import {useForm, SubmitHandler} from 'react-hook-form';

interface FormInputs {
    num1: string;
    num2: string;
    operator: string;
    answer: string;
}

function Home() {
    const btnRef = useRef<HTMLButtonElement>(null);
    type Operations = {
        [key: string]: string;
    };
    const operations: Operations = {
        ADD: '+',
        SUBTRACT: '-',
        MULTIPLY: '*',
        DIVIDE: '/',
    };
    const {register, handleSubmit, formState: {errors}, setValue} = useForm<FormInputs>();
    const [state, setState] = useState<FormInputs>({num1: "", num2: "", operator: "", answer: ""});

    const handleOperationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setState((prevState) => ({
            ...prevState,  // Spread the previous state
            answer: "",
            operator: event.target.value  // Update only the specific key
        }));
    };
    const isNumeric = (str: String) => {
        if (typeof str != "string") return false // we only process strings!  
        return typeof str === 'number' ? !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
            !isNaN(parseFloat(str)) : false // ...and ensure strings of whitespace fail
    }

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        const apiUrl = process.env.REACT_APP_API_URL?process.env.REACT_APP_API_URL:"http://localhost:8080/getCalculation";
        fetch(apiUrl, {
            method: "POST",
            mode: 'cors',
            headers: {},
            body: JSON.stringify(data)
        })
            .then(response => {

                if (!response.ok) {
                    return response.text()
                }
                return response.json(); // Parse response as JSON
            })
            .then(data => {
                console.log(data);
                setState((prevState) => ({
                    ...prevState,
                    answer: data?.body ? data?.body : data, // Update only the specific key
                }));
            })
            .catch(error => {
                console.log(error.message || 'Something went wrong');
            });

    };
    return (
        <Atoms.Div max-width="800px" height="600px"  border="1px solid #eaeaea" padding="32px" borderRadius="8px"
                   boxShadow='0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08)'>
            <Atoms.Div display="flex" flexDirection='column' justifyContent='center' alignItems='center' width="100%"
                       height="100%">
                <Atoms.Div display="flex" flexDirection='column' gap="20px" justifyContent='center' alignItems='center'>
                    <Atoms.Span fontFamily='Montserrat' fontWeight="700" fontSize="32px" lineHeight="40px">CALCULATOR
                        REACT APP</Atoms.Span></Atoms.Div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Atoms.Div display="flex" justifyContent='center' padding="32px 0 0" alignItems='flex-start'
                               flexDirection='row' flexWrap='wrap' width="100%" gap="20px">
                        <Atoms.Div display="flex" flexDirection='column' gap="20px" justifyContent='center'
                                   alignItems='center' width="125px">
                            <Atoms.NumberInput
                                width="125px"
                                type="number"
                                placeholder='Number 1'
                                value={state.num1}
                                step="any"
                                {...register('num1', {required: 'Number is required'})}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    const {name, value} = event.target;

                                    // Regex to allow only numbers and decimals
                                    const regex = /^\d*\.?\d*$/;

                                    if (regex.test(value) || value === '') {

                                        // Setting the state with a number
                                        setState((prevState) => ({
                                            ...prevState,
                                            answer: "",
                                            [name]: value, // Update only the specific key
                                        }));
                                    }
                                    setValue(name as keyof FormInputs, value);
                                }}
                                onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
                                    if (btnRef && btnRef.current && event.code === 'Enter') {
                                        btnRef.current.click()
                                    }
                                }}
                            />
                            {errors.num1 &&
                                <Atoms.Span fontFamily='Roboto' color="#bf1650" fontWeight="500" fontSize="14px"
                                            lineHeight="8px">{errors.num1.message}</Atoms.Span>}
                        </Atoms.Div>
                        <Atoms.Div display="flex" flexDirection='column' gap="20px" justifyContent='center'
                                   alignItems='center' width="125px">
                            <Atoms.NumberInput
                                width="125px"
                                type="number"
                                placeholder='Number 2'
                                value={state.num2}
                                {...register('num2', {required: 'Number is required'})}
                                step="any"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    const {name, value} = event.target;

                                    // Regex to allow only numbers and decimals
                                    const regex = /^\d*\.?\d*$/;

                                    if (regex.test(value) || value === '') {

                                        // Setting the state with a number
                                        setState((prevState) => ({
                                            ...prevState,
                                            answer: "",
                                            [name]: value, // Update only the specific key
                                        }));
                                    }
                                    setValue(name as keyof FormInputs, value);
                                }}
                                onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
                                    if (btnRef && btnRef.current && event.code === 'Enter') {
                                        btnRef.current.click()
                                    }
                                }}
                            />
                            {errors.num2 &&
                                <Atoms.Span fontFamily='Roboto' color="#bf1650" fontWeight="500" fontSize="14px"
                                            lineHeight="8px">{errors.num2.message}</Atoms.Span>}
                        </Atoms.Div>
                        <Atoms.Div display="flex" flexDirection='column' gap="20px" justifyContent='center'
                                   alignItems='center' width="200px">
                            <Atoms.DropDownInput
                                width="200px"
                                value={state.operator}
                                {...register('operator', {required: 'Arithmetic Operator is required'})}
                                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => handleOperationChange(event)}
                            >
                                <option value="">Select an operator&hellip;</option>
                                {Object.keys(operations).map((key) => (
                                    <option key={key} value={operations[key as keyof Operations]}>
                                        {key}
                                    </option>
                                ))}

                            </Atoms.DropDownInput>
                            {errors.operator &&
                                <Atoms.Span fontFamily='Roboto' color="#bf1650" fontWeight="500" fontSize="14px"
                                            lineHeight="8px">{errors.operator.message}</Atoms.Span>}
                        </Atoms.Div>
                        <Atoms.Div display="flex" flexDirection='column' gap="20px" justifyContent='center'
                                   alignItems='center' width="250px">
                            <Atoms.NumberInput
                                width="250px"
                                textAlign='center'
                                placeholder='Press Calculate For Answer'
                                disabled
                                fontFamily='monospace'
                                fontWeight="700"
                                fontSize="1rem"
                                lineHeight="24px"
                                value={isNumeric(state.answer) ? Math.round(parseFloat(state.answer) * 100) / 100 : state.answer}
                            />
                        </Atoms.Div>
                    </Atoms.Div>
                    <Atoms.Div marginTop="25px" display="flex" justifyContent='center' alignItems='center'
                               flexDirection='row' flexWrap='wrap' width="100%" gap="20px">
                        <Atoms.Button
                            ref={btnRef}
                            width="410px"
                            height="44px"
                            borderRadius="4px"
                            background="#6E41E2"
                            fontFamily='Roboto'
                            fontWeight="400"
                            fontSize="1rem"
                            lineHeight="24px"
                            color="#ffffff"
                            type='submit'
                        >CALCULATE</Atoms.Button>
                    </Atoms.Div>
                </form>
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default Home

