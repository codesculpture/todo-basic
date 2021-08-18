import styled from 'styled-components';
var green = '#66FF31';
var red  = '#FF0000';

export const Title = styled.div`
  justify-content: center;
  text-align: center;
  padding-top: 20px;
  font-size: 50px;
`

export const RoundButton = styled.div` 
  position: relative;
  border-radius: 100px;
  background: green;
  padding: 20px;
  width: 10px;
  height: 10px;
  left: 80%;
  top: 40px;
  
  .btn{
   position: relative;
   cursor: pointer;
   bottom: 7px;
   font-size: 20px;  
  }
`
export const Input = styled.input`
            
     display: flex;
     position: relative;
     width: 30%;
     letter-spacing: 1px;
     padding: 10px;
     margin-bottom: 20px;
     outline: none;
     font-size: 16px;
     font-weight: 700;
     border: 1px solid #000;
    
     background-color: #E3FCFC;
     text-align: center;
     left: 33%;
  ::-webkit-input-placeholder {
   text-align: center;
   letter-spacing: 2px;
   color: black;
   opacity: 80%;


    }

  
`

export const TodosBox = styled.div`
position: relative;
background-color: ${props => props.white ? 'black' : 'white'};
width: 50%;
padding:20px;
margin: 20px;
left: 20%;
font-weight: 500;
color: ${props => props.white ? 'white' : 'black'};
text-align: center
`
export const ActionButton = styled.div` 
  position: absolute;
  display: inline-flexbox;
  border-radius: 100px;
  background: red;
  width: 20px;
  height: 20px;
  left: 80%;
  top: 20%;
  cursor: pointer;
`

export const Nothing = styled.div`
position: absolute;
text-align: center; 
bottom: 50%;
font-size: 50px;
right: 100px;
font-weight: 500;
text-transform: uppercase;


`