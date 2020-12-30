import React,{useState} from 'react';
import Tweet from './Tweet';

function App(){
 const [users, setUsers] = useState([
   {
     name: "Anakin", message:"Revenge is not the Jedi way.",likes:"200"  
   },
   {
    name: "Obiwan Kenobi", message:"Hello there!",likes:"300"  
  },
  {
    name: "Luke", message:"Force is strong in my family.",likes:"150"  
  },
  {
    name: "Ahsoka", message:"I am no Jedi.",likes:"400"  
  }
 ]);
  return(
    
    <div className="app">
      {users.map(user =>(
        <Tweet name={user.name} message={user.message} likes={user.likes}/>
      ))}
      </div>
      
  );
}

export default App;
