import React,{useRef, useState} from 'react'
import Input from '../components/Input'
import { Form } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Modal from '../UI/Modal'
import Cookies from 'js-cookie';
const Signin = () => {

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

    const email=useRef();
    const pasword=useRef();
    async function signIn() {

      function clearInputs() {
        email.current.value = "";
        pasword.current.value = "";
      }
      const signIndata = {
        email: email.current.value,
        password: pasword.current.value,
      };
    
      try {
        const response = await fetch("http://localhost:8000/user/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // credentials: 'include',
          body: JSON.stringify(signIndata),
        });
    
        if (response.status === 401) {
          // alert("Invalid Credentials");
          showMessage('Invalid Credentials')
          clearInputs();
          return;
        }
        if (response.status === 404) {
          showMessage('User not found!')
          clearInputs();
          return;
        }
        if (response.status === 400) {
          showMessage('All fields are required')
          clearInputs();
          return;
        }
    
        if (!response.ok) {
          const err = await response.json();
          showMessage(err.message || "Something went wrong!")

          clearInputs();
          return;
        }
        
    
        const resdata = await response.json();
        // alert(resdata.message || "Signup successful");
        showMessage(resdata.message || "Signup successful")
        clearInputs();
        console.log("Came here")
        Cookies.set(`accesstoken`, `${resdata.accesstoken}`, { expires: 7 });
        Cookies.set(`refreshtoken`, `${resdata.refreshtoken}`, { expires: 7 });
        console.log(resdata)
        return resdata.message;
    
      } catch (error) {
        console.error("Signup error:", error);
        alert("An error occurred. Please try again.");
        clearInputs();
      }
    }
    
    const submitHandler=async(e)=>{
      e.preventDefault();
      await signIn();
      
      console.log('done');
    }
  return (
    <>
    {modalisopen && <Modal open={modalisopen} onClose={closeModal} message={ModalMessage}/>}
    <div className="signInpage">
    <div className="signinPageinput">
        <h3>Sign In</h3>
        <Form method='POST'>
        <Input label='Email' ref={email} id='email' name='email' type='email' required/>
        <Input label='Password' ref={pasword} name='password' id='password' type='password' required/>
        <button onClick={submitHandler} type='submit'>Sign In</button>
        </Form>
        <p className='create'>Create a new Account?  <Link to='/signup' style={{textDecoration:'none'}}> Sign Up</Link></p>
      </div>
    </div>
    </>
  )
}

export default Signin
