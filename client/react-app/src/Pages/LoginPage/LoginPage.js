import React, { Component, useState, useHistory } from 'react';
import './FormStyle.css';
import LoginInputs from './LoginInputs';
import LoginHeading from './LoginHeading';
import axios from 'axios';

const LoginPage = () => {
  const [values, setValues] = useState({
    username:"",
    // email:"",
    age:"",
    password:"",
    securityquestion:""
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,14}$",
      errorMessage: "Username should be 3-14 characters and include at least 1 letter and 1 number",
      required: true,
    },
    // {
    //   id: 2,
    //   name: "email",
    //   type: "text",
    //   placeholder: "Email",
    //   label: "Email",
    //   pattern: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$",
    //   errorMessage: "Should be a valid email",
    //   required: true
    // },
    {
      id: 2,
      name: "age",
      type: "text",
      placeholder: "Age",
      label: "Age",
      pattern: "^(1[89]|[2-9]\\d)$",
      errorMessage: "User should be at least 18 years old",
      required: true
    },
    {
      id: 3,
      name: "password",
      type: "text",
      placeholder: "Password",
      label: "password",
      pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$#^&.*])[A-Za-z\\d$#^&.*]{5,}$",
      errorMessage: "Password should have at least 5 characters and should include at least both lowercase and uppercase letter, 1 number, and 1 special character",
      required: true
    },
    // {
    //   id: 5,
    //   name: "confirm password",
    //   type: "text",
    //   placeholder: "Confirm Password",
    //   label: "password",
    //   pattern: values.password,
    //   errorMessage: "Password don't match",
    //   required: true
    // },
    {
      id: 4,
      name: "security question",
      type: "text",
      placeholder: "What is your favorite number? (No more than 10 digits)",
      label: "security question",
      pattern: "^[0-9]{0,10}$",
      errorMessage: "No more than 10 digits",
      required: true
    }
  ];

  const onChange = (e) => {
    
    setValues({...values, [e.target.name]: e.target.value});
    
  };

  console.log(values);

  
  const handleSubmit = (e) => {
    e.preventDefault();  
    
    const newUser = {
      username: values.username,
      // email: values.email,
      age: values.age,
      password: values.password,
      securityquestion: values.securityquestion
    };

    axios.post('http://localhost:3000/create', newUser)
  };

  return (
    <div className='main'>
      <div className='formHeading'>
        <LoginHeading />
        <hr />
      </div>
      
      <div className='formInputs'>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <LoginInputs 
              key={input.id} 
              {...input} 
              value={values[input.name]}
              onChange={onChange}  
            />
          ))}
          
          <button id='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;