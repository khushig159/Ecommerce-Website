import React  from 'react'
import { useState } from 'react';
import Cookies from 'js-cookie';
import Modal from '../UI/Modal';
export default function Logout() {
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
    const handleLogout= async ()=>{        
        const response=await fetch('http://localhost:8000/user/logout',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                refreshtoken:Cookies.get('refreshtoken'),
                accesstoken:Cookies.get('accesstoken')
            }),
        })
        if(!response.ok){
            showMessage('Logout failed')
        }
        if(response.status===200){
           showMessage('Logout successfull')
            Cookies.set('accesstoken',''),
            Cookies.set('refreshtoken','')
        }
        const resdata=await response.json();
        showMessage(resdata.message)
        console.log(resdata)
    }
  return (
    <>
    <Modal open={modalisopen} message={ModalMessage} onClose={closeModal}/>
    <div className="logoutButton">
    <button onClick={handleLogout}>Log Out</button>
    </div>
    </>
  )
}
