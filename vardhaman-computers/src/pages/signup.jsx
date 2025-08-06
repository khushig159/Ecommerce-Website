import React, { useRef,useState } from "react";
import Input from "../components/Input";
import { Link,Form } from "react-router-dom"; 
import Modal from "../UI/Modal";

export default function Signup() {
  const [ModalMessage,setModalMessage]=useState('');
    const[modalisopen,setmodalisopen]=useState(false);
  
    function showMessage(message){
      setModalMessage(message)
      setmodalisopen(true);
    }
  
    function closeModal(){
      setModalMessage('')
      setmodalisopen(false);
    }

  const username=useRef();
  const email=useRef();
  const pasword=useRef();

  async function signUp() {
    
    function clearInputs() {
      username.current.value="";
      email.current.value = "";
      pasword.current.value = "";
    }
    const signUpdata = {
      username: username.current.value,
      email: email.current.value,
      password: pasword.current.value,
    };
  
    try {
      const response = await fetch("http://localhost:8000/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signUpdata),
      });
  
      if (response.status === 409) {
        // alert("User email already exists");
        showMessage('User email already exists')
        clearInputs();
        return;
      }
  
      if (!response.ok) {
        const err = await response.json();
        // alert(err.message || "Something went wrong!");
        showMessage(err.message || "Something went wrong!")

        clearInputs();
        return;
      }
  
      const resdata = await response.json();
      // alert(resdata.message || "Signup successful");
      showMessage(resdata.message || "Signup successful")
      clearInputs();
      return resdata.message;
  
    } catch (error) {
      console.error("Signup error:", error);
      // alert("An error occurred. Please try again.");
      showMessage('An error occurred. Please try again.')
      clearInputs();

    }
  }
  
  const submitHandler=async(e)=>{
    e.preventDefault();
    await signUp();
    
    console.log('done');
  }

  return (
    <>
    {modalisopen && <Modal open={modalisopen} onClose={closeModal} message={ModalMessage}/>}
    <div className="signup">
      <div className="signup-container">
        <img
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1743099934~exp=1743103534~hmac=63c4c678c1bf8dacba7d0f9a10389cd0e694e47390c6149dad3644132bfe98c5&w=900"
          alt=""
        />
        <div className="signup-page">
          <h2>Sign Up</h2>
          <Form >
            <div className="name">
            <Input ref={username} id="name" name='username' label="User Name" type="text" />
            </div>
            <Input ref={email} id="email-address" name='email' label="Email Address" type="email" />
            <Input ref={pasword} id="password" name='password' label="Password" />
            <input type="checkbox" id="rules" required />
            <label htmlFor="rules" style={{fontSize:'12px'}}>
              I agree to all the terms and conditions
            </label>
            <div className="register">
              <button type="submit" onClick={submitHandler}>Create My Account</button>
            </div>
          </Form>
          <p className="check">
            Already a user ? <Link to="/signin">SignIn</Link>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
