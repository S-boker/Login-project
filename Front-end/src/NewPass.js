import Form from './Element bag/Form';
import './App.css';
import React, { useState } from 'react';

export function validateEmail(email){
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};


const inputs = [
  {
    id: 0,
    type: 'text',
    label: 'Email:',
  }
]

export default function NewPass() {
  const [info, setInfo] = useState('');
  const [err, setErr] = useState('');
  function onSubmit(e){
    e.preventDefault();
    if(validateEmail(document.getElementById('0').value)){
      setInfo(` We will send "${document.getElementById('0').value}" a request for a new password.`);
      setErr('')
      //todo: acctually send an email.
    }else if(document.getElementById('0').value){
      setErr('Invaild Email');
      setInfo('');
    }
  }
  return (
    <div className="App">
      <Form inputs={inputs} header='New Password' onSubmit={onSubmit} err={err} info={info}/>
    </div>
  );
}