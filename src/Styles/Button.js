import styled from 'styled-components';

export const Button = styled.button`

border: none;
border-radius: 30px;
font-size: 15px;
height: 45px;
outline: none;
width: 100%;
background: rgba(232, 20, 20, 0.7);
cursor: pointer;
transition: .3s;
margin-top:5px;

&:hover {
  background-color: #0056b3; /* Change background color on hover */
  border-color: #0056b3; /* Change border color on hover */
}
`;
