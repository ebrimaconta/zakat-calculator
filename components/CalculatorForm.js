import React from 'react';
import {Form, Container, Title, Label,InputField} from '../components/styles/Form.styled'
function CalculatorForm(){
    return (
    <><Title>Calculate your Zakat al maal</Title>
        <Container>
        <Form>
            <Label>Gold and Silver: <InputField type="text" name="name" /></Label>
            <Label>Cash at Home & Bank Accounts: <InputField type="text" name="name" /></Label>
            <Label>Other Savings: <InputField type="text" name="name" /></Label>
            <Label>Money owed to you: <InputField type="text" name="name" /></Label>
            <Label>Stock Value: <InputField type="text" name="name" /></Label>
            <Label>Money You Owe: <InputField type="text" name="name" /></Label>
            <Label>Other Outgoings Due: <InputField type="text" name="name" /></Label>
            <Label>Name: <InputField type="text" name="name" /></Label>
            <input type="submit" value="Calculate" />
        </Form>
        </Container>
    </>
    );
  }

export default CalculatorForm
