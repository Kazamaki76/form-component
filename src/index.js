import React from 'react'; // For create UI 
import ReactDOM from 'react-dom/client'; // for render 
import './index.css'; // for styling 
import { useState } from 'react';

// form component// create fn
// Task : Create HTML 
// Task : ผูก State กับ UI 

function Form() {

  const [username, setUserName] = useState("");  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cfPassword, setcfPassword] = useState("") 
  
  // Error state 
  const [errorUserName, setErrorUserName] = useState("") ;
  const [errorEmail, setErrorEmail] = useState("")
  const [errorPassword, setErrorPassword] =useState("")
  const [errorCfPassword, setErrorCfPassword] = useState ("")
  
  // color 
  const [ usernameColor, setUserNamecolor] = useState("");
  const [ emailColor, setEmailColor] = useState ("")
  const [passwordColor, setPasswordColor ] = useState("")
  const [ cfPasswordcolor, setCfPasswordColor] = useState("")

  
  const handleSubmit = (e) =>{ 
    e.preventDefault();   // กันไม่ให้หน้า refresh 

    // validate  username
    if(username.length >= 8 ) {
      setErrorUserName("")
      setUserNamecolor("green")
    } else {
      setErrorUserName("กรุณาระบุชื่อผู้ใช้งานอย่างน้อย 8 ตัวอักษร")
      setUserNamecolor("red")
    }
   
    // validate email
    if(email.includes("@")) {
      setErrorEmail("")
      setEmailColor("green")
    } else {
      setErrorEmail("wrong email")
      setEmailColor("red")
    }

    if(password.length >=8 ) {
      setErrorPassword("")
      setPasswordColor("green")

    } else { 
      setErrorPassword("กรุณาระบุ Password อย่างน้อย 8 ตัวอักษร")
      setPasswordColor("red")
    }

    if (password === cfPassword) {
      setErrorCfPassword("")
      setCfPasswordColor("green")
    } else {
      setErrorCfPassword("WRONG PASSWORD")
      setCfPasswordColor("red")
    }
   


    


  };

  return (
    <div className='container'>
      <form className='form'
      onSubmit={handleSubmit}>
        <div className='form-input' >
          <label> Username         </label>
          <input type='text' value={username} onChange={(e) => setUserName(e.target.value)}  style={{borderColor: usernameColor}}/> 
          <small style={{color: usernameColor}} >{errorUserName} </small>    
        </div>
        {/* / Email  */}
        <div className='form-input'> 
        <label>Email </label>
        <input type='email'value={email} onChange={(e) => setEmail(e.target.value)} style={{borderColor: emailColor}} />  
        <small style={{color: emailColor}} > {errorEmail}  </small>
        
        </div>

        {/* Password */}
        <div className='form-input'> 
        <label>Password </label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}  style={{borderColor :passwordColor }} />
        <small style={{color: passwordColor}} >  {errorPassword} </small>
        
         </div>

        {/* Confirm password */}


        <div className='form-input'>

        <label> Confirm-Password   </label>
        <input type='password' value={cfPassword} onChange={(e) => setcfPassword(e.target.value)}  style={{borderColor : cfPasswordcolor}}/>
        <small style={{color: cfPasswordcolor}} >{errorCfPassword} </small>
        </div>
        <button type='submit'> register </button>

      </form>


    </div>
  )
} 






//  render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Form/>
);

