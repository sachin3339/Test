import Button from "../../Components/Button";
import Field from "../../Components/Field";
import Navbar from "../../Components/Navbar"
import Axios from 'axios'
import { useState } from "react";
const Register = () => {
const [usernameReg, setUsernameReg]=useState('');
const[email,setemail]=useState('');
const[pass,setpass]=useState('');
const[regstatus,setregstatus]=useState(0);
let message=<h1>Not registered</h1>;

// const onchangenamehandler =(event)=>
// {
// setUsernameReg(event.target.value);
// }

const onchangeemailhandler =(event)=>{
    setemail(event.target.value);
}

const onchangepasswordhandler =(event)=>{
    setpass(event.target.value);
}

const submitHandler=(event)=>
{
    event.preventDefault();
    const formdata={
        // name:usernameReg,
        username:email,
        password:pass
    };
    Axios.post('http://localhost:8000/users/signup',formdata).then(
        res=>{
            setregstatus(res.status);
        }
    ).catch(error=>{
        console.log(error.data)
    })
}
if(regstatus === 200)
{
    message = <h1>Successfully Registered</h1>
    return message;
};
    return(
        <form onSubmit={submitHandler}>
      
        <div className="container">
          <h1>Registration</h1>
          <div class="panel-body mt-4">
          {/* <Field type="text" className="form-label" label="Name" onChange={onchangenamehandler} /> */}
         <Field type="email" className="form-label" label="username"  onChange={onchangeemailhandler}/>
         <Field type="password" className="form-label " label="password"  onChange={onchangepasswordhandler}/>
         {/* <Button type ="submit "className="btn btn-primary" text="Register Here" onChange={submitHandler}/> */}
         <button class="btn btn-primary" type="submit" onchange={submitHandler} >Register Here</button>

</div>
<div>{message}</div>
</div>
     </form>
    );
}

export default Register;