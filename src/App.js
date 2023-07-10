import React, { useState } from 'react';
import ApiRead from './ApiRead';
function App() {
  const [name,setName]=useState();
  const [namestore,setNamestore]=useState();
  const[pass,setPass] =useState();
  const[PassStore,setPassStore]=useState();

  const nameEvent =(e)=>{
    setName(e.target.value);
  }
  const passEvent =(e)=>{
    setPass(e.target.value);
  }
 const submitHandler =(e)=>{
  e.preventDefault();
  setNamestore(name);
  setPassStore(pass)
 }
 

  return (
<>
<form onSubmit={submitHandler}>
  <label>name:</label>
  <input type='text' onChange={nameEvent} value={name}/><br/>
  <label>Password</label>
  <input type='password' onChange={passEvent} value={pass}/><br/><br/>
  <button type='submit'>click me</button><br/><br/>
</form>
name:{namestore}<br/><br/>
password:{PassStore}<br/><br/><br/>
<ApiRead/>
</>
  );
}

export default App;
