import InLink from './Element bag/Link';
import './App.css';
import Form from './Element bag/Form';
import React, {useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs'; 

const inputs = [
  {
    id: 0,
    type: 'text',
    label: 'Email:',
  },
  {
    id: 1,
    type: 'password',
    label: 'Password:',
  }
]

export default function Login() {
  const [err, setErr] = useState('');
  function onSubmit(e){
    e.preventDefault();
    let email = document.getElementById('0').value;
    let password = document.getElementById('1').value;
    if(email && password){
      axios.get("http://localhost:8080/api/v1/login/"+email).then(res => {
        if(res.data){  
          bcrypt.compare(password, res.data.password, (err, isMatch) => {
              if(err){
                setErr('')
              }else if(isMatch){
                //The site
                window.location.href = 'https://www.youtube.com/'
              }else{
                setErr('Wrong Creds!')
              }
          })
        }else{
          setErr('Wrong Creds!')
        }
      }).catch(err => console.log(err))
    }else{
      setErr('')
    }
  }
  return (
    <div className="App">
      <Form inputs={inputs} header='Login' onSubmit={onSubmit} err={err}/>
      <InLink pertext='Forgot password?' linkText='Click here' link='/newPass'/>
      <InLink pertext='New to XXX' linkText='Sign Up' link='/signup'/>
    </div>
  );
}

