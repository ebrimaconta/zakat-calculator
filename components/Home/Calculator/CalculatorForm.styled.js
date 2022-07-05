import styled from 'styled-components';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import  Button from '@material-ui/core/Button';

export const Form = styled.form`
  width: 30%;
  background-color: #112b3c;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex ;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
`;
export const Div = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  background-color: #112b3c;
`;
export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
export const H3 = styled.h3`
  color: white;
`;
export const Information = styled.h4`
color: #F9EBC8;
text-decoration: underline;
`
export const NisabBanner = styled.div`
text-align: center;
`
export const Due = styled.p`
color: #F2D1D1;
font-size: 30px;
font-weight: 900;
`
export const InfoOut = styled(InfoOutlined)`
  background-color: #112b3c;
  color: whitesmoke;
`
export const SubmitButton = styled(Button)`
  && {
    margin-top: 20px;
    background: #243A73;
    &:hover {
    background-color: #B7D3DF;
  }
    }
`
export const Error = styled.div`
color: red
`