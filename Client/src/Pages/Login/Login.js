import React from 'react'
import Field from '../../Components/Field'
import Button from '../../Components/Button'
import Axios from 'axios'
import { useState } from "react";   
export default function Login() {

    const [username, setUsername]=useState('');
    const[pass,setpass]=useState('');
    const[loginstatus,setloginstatus]=useState(0);
    let message=<h1>Not Logeedin</h1>;

    const onchangeemailhandler =(event)=>{
        setUsername(event.target.value);
    }
    const onchangepasswordhandler =(event)=>{
        setpass(event.target.value);
    }


    const submitHandler=(event)=>
{
    event.preventDefault();
    const formdata={
        username:username,
        password:pass
    };
    Axios.post('http://localhost:8000/users/login',formdata).then(
        res=>{
            setloginstatus(res.status);
            console.log(res.status)
        }
    ).catch(error=>{
        console.log(error.data)
    })
    console.log(formdata);
    console.log(loginstatus);
}
if(loginstatus === 200)
{
    message = <h1>Successfully Logged in</h1>
    return message;
}

    return (
        <form onSubmit={submitHandler}>
            <div className="container">
                <h1>Login</h1>
                <div class="panel-body mt-4">
                     <Field type="email" className="form-label" label="Email"  onChange={onchangeemailhandler}/>
                     <Field type="password" className="form-label " label="Password"  onChange={onchangepasswordhandler}/>
                     <button class="btn btn-primary" type="submit" onchange={submitHandler} >Login</button>
                </div>
                <div>{message}</div>
            </div>
        </form>
    )
}
