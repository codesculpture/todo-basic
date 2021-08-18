import {useState} from 'react'
import { Title, RoundButton, Input, TodosBox, ActionButton, Nothing } from './styles'

 const Main = () => {
    const array = ['Eat Coffee', 'Drink Salad', 'Eat Tea', 'Drink Burger']
    const [input, setinput] = useState(false);
    const [inpval, setinpval] = useState('');
    const [todos, settodos] = useState(array);

    function handleinp(e){
        setinpval(e.target.value)
    }
    function makeinp(){
      if(input){
      let newVal = inpval;
      if(newVal === ''){
        return setinput(false); 
      }
      if(todos) settodos(prevState =>[...prevState, newVal]);
      else settodos([newVal]);
     setinput(false);
     setinpval('');

      }
      else{
      setinput(true);  
      }    

    }

    function remove(val){
      let todo = todos.filter(i => i !== val);
      settodos(todo);
      
    }

    function handleKeypress(e){
      if(e.key === 'Enter') makeinp();
      return;
    }
    return (
        <div>
      <Title>Todo List</Title>
      <abbr style={{'text-decoration': 'none'}} title="Add Some">
      <RoundButton>
        
        <span className='btn' onClick={() => makeinp()}>+</span>
      </RoundButton>
      </abbr>
      {input && <Input onKeyPress={handleKeypress} placeholder='Todo or Doto?'  type="text" className='inp' onChange={handleinp} value={inpval}/>}
      {todos && todos.length > 0 ? todos.map((i, index) =>{
       return (
         index % 2 ? <TodosBox white>{i}<span onClick={() => remove(i)}><ActionButton/></span></TodosBox>
         :<TodosBox black>{i}<span onClick={() => remove(i)}><ActionButton /></span></TodosBox>
       )
      }) : <Nothing>#Here's Nothing, But i think it not be💪🏼</Nothing>}
     <div style={{'text-align': 'center', padding: '20px'}}>Made With 💖 by <a style={{'text-decoration': 'none', color: 'blue'}} target="_blank" href="https://github.com/codesculpture/">Aravind</a></div>
    </div>
    )
}
export default Main;