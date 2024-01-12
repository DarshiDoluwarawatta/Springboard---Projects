import styled  from "styled-components";
export const StyledComponent = styled.div`
    background-color:grey;
    font-size:20px;
    text-align: left;
    color:yellow;
    font-family:${props => props.theme.fonts.body}
  `;  
  
  export const StyledComponentBody = styled.body`
    background-color:blue;
    color:blue
    font-size:20px;
    text-align: left;
    
    
  `;
  
  export const Alert = styled.div`
    background-color:${props=>props.success?'green':'red'};
    color: white;
    
  `;
  export const Heading = styled.h3`
  font-size:36px;
  text-align:center;
  @media (max-width:768px){
    font-size:18px;
  }
  
  `;
  export const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: ${props => props.theme.fonts.body};
`;

export const Heading2 = styled.h4`
  font-size:28px;
  text-align:left;
  color:purple;
  font-family: cursive;
  @media (max-width:768px){
    font-size:18px;
 }`;

 export const Heading3 = styled.h3`
  font-size:16px;
  text-align:left;
  font-family: cursive;
  @media (max-width:768px){
  font-size:18px;
  color:white;
  font-family: ui-monospace;
 }`;

 export const Heading1 = styled.h2`
 font-size:18px;
 text-align:left;
 @media (max-width:768px){
 font-size:18px;
 font-family: fantasy;
 color:orange;
 }
 
 `;
 export const cardContainer = styled.div`
 background-color: black;
 
 `;

 export const Footer = styled.div`
 
  display: flex;
  align-items: left;
  color: white;
  justify-content: space-between;
  background: black;
  padding: 5px 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
 `;

 export const cardContainerP =styled.p`
 
 background-color: rgb(220, 193, 193);
  border-radius: 15px;
  padding-top: 10px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 35px;
  font-family: 'Poppins', sans-serif;
  width:40%;
 `;