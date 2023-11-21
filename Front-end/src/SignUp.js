import './App.css';
import Form from './Element bag/Form';
import { validateEmail } from './NewPass';
import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import axios from 'axios';

const inputs = [
  {
    id: 0,
    type: 'text',
    label: 'Email:',
  },
  {
    id: 1,
    type: 'password',
    label: 'New Password:',
  },
  {
    id: 2,
    type: 'password',
    label: 'Confrim Password:',
  }
]

export default function SignUp() {
  const [err, setErr] = useState('');
  function onSubmit(e){
    e.preventDefault();
    let username = document.getElementById('0').value;
    let pass1 = document.getElementById('1').value;
    let Pass2 = document.getElementById('2').value;
    if(!validateEmail(username)){
      setErr('Invaild Email!');
    }else if(pass1 !== Pass2){
      setErr('Passwords do not match!');
    }else{
      axios.get("http://localhost:8080/api/v1/login/"+username).then(res => {
        if(!res.data){
          axios({
            method: 'post',
            url: 'http://localhost:8080/api/v1/login/create',
            data: {
              email: username,
              password: bcrypt.hashSync(pass1, 10),
            },
          })
        }
      })
      setErr('')
      window.location.href = 'https://www.youtube.com/'
    }
  }
  return (
    <div className="App">
      <Form inputs={inputs} header='Create A New Account' onSubmit={onSubmit} err={err}/>
    </div>
  );
}
