import React, { useRef, useState } from "react";
import { useContext } from "react";
import CartContext from "../store/CartContest";
import Input from "../components/Input";
import { Navigate, useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import Cookies from "js-cookie";
import Modal from "../UI/Modal";

export default function Checkout() {
  const [Modalisopne,setModalisopen]=useState(false);
  const[modalmessage,setmodalmessage]=useState('')
  const[loading,setloading]=useState(false);

  function showModalMessage(message){
    setModalisopen(true)
    setmodalmessage(message)
  }

  function closeModal(){
    setModalisopen(false);
  }
  const cartCtx = useContext(CartContext);
  const navigate=useNavigate();
  const totalPrice = cartCtx.items.reduce((total, item) => {
    const numericPrice = Number(item.price.toString().replace(/,/g, ""));
    return total + item.quantity * numericPrice;
  }, 0);

  const mobileNo=useRef();
  const city=useRef();
  const state=useRef();
  const pincode=useRef();
  const address=useRef();
  const name=useRef();
  const email=useRef();

  function clearInputs() {
    mobileNo.current.value="";
    city.current.value = "";
    state.current.value = "";
    pincode.current.value = "";
    address.current.value = "";
    name.current.value = "";
    email.current.value = "";
  }
//   sampleinput: {
//     "mobileNo":1234567890,
//     "city":"mumbai",
//     "state":"Maharashtra",
//     "pincode":"400068",
//     "address":"dahisar",
//     "products":["67ee3dc26fec245fb315fb43","67ee3dc26fec245fb315fb44"],
//     "options":{
//         "amount":500,
//         "currency":"INR",
//         "receipt":"qwsaq1"

//     }
// }


  const paymentHandler= async(e)=>{
    e.preventDefault();
    setloading(true)

    try{
    const response= await fetch('http://localhost:8000/order/execute',{
      method:'POST',
      body:JSON.stringify({
        refreshtoken:Cookies.get('refreshtoken'),
        mobileNo:mobileNo.current.value,
        city:city.current.value,
        state:state.current.value,
        pincode:pincode.current.value,
        address:address.current.value,
        products:cartCtx.items.id,
        options:{
          amount:totalPrice*100,
          currency:'INR',
          receipt:'qwsaq1'
        }
      }),
      headers:{
        'Content-Type': 'application/json'
      },
    });
    // console.log(response.json())
    if(response.status===401){
      showModalMessage('Please Login to continue')
      setloading(false);
      return;
    }
    const order = await response.json();
    console.log(order)
    // cartCtx.clearCart()

    var options = {
      key: "rzp_test_YuGXD07uxbOBxl", // Enter the Key ID generated from the Dashboard
      amount: totalPrice * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency:'INR',
      name: "Vardhaman computers", //your business name
      description: "Test Transaction",
      image: "",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);

        const orderResponse=await fetch('http://localhost:8000/order/placeorder',{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({
            refreshtoken:Cookies.get('refreshtoken'),
            products:cartCtx.items.map(item=>item._id),
            orderid:order.id,
            transactionid:response.razorpay_payment_id,
            signature:response.razorpay_signature,
            orderamount:totalPrice,
          })
        })

        const orderData=await orderResponse.json();
        showModalMessage('Order Placed Successfully')
        console.log(orderData)
        cartCtx.clearCart();
        clearInputs();
        setloading(false);
        },
      
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        name: `${name.current.value}`, //your customer's name
        email: `${email.current.value}`, //your customer's email address
        contact: `${mobileNo.current.value}`, //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
      modal: {
        ondismiss: function () {
          setloading(false); // <--- handles exit case
          showModalMessage("Payment popup was closed.");
        },
      }
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
      setloading(false);
    });
    rzp1.open();
  }
  catch(err){
    console.log(err)
    showModalMessage('Some error occured');
    setloading(false);
  }
}
  return (
    <>
     {Modalisopne && <Modal open={Modalisopne} onClose={closeModal} message={modalmessage}/>}
    <div className="Checkout">
      <div className="delivery-info">
      <h3>Delivery Information</h3>
        <div className="info-inner">
        <form>
        <div className="name">
          <Input ref={name} label="Name" type="text" id="name" />
          <Input ref={mobileNo} label="Mobile Number" type="number" id="name" />
        </div>
        <div className="name">
          <Input ref={email} label="Email" type="email" id="email" />
          <Input ref={city} label="City" type="text" id="city" />
        </div>
        <div className="name">
          <Input ref={state} label="State" type="text" id="state" />
          <Input ref={pincode} label="Pincode" type="number" id="pincode" />
        </div>
        <Input ref={address}label="Address" type="text" id="address" />
        
        <button onClick={paymentHandler} disabled={loading}> {loading ? "Processing..." : "Confirm Order"}</button>
        <button onClick={()=>navigate(-1)} disabled={loading}>Go back</button>
        </form>
        </div>
      </div>

      <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="order-list">
          
          {cartCtx.items.length<1 && <p>No items in Cart!</p>}
              <ul>
                {cartCtx.items.map(item=>(
                  <CartItem key={item._id} name={item.productName}
                  price={item.productPrice} image={item.productImage[0]} quantity={item.quantity}
                  onIncrease={()=>cartCtx.addItems(item)}
                  onDecrease={()=>cartCtx.removeItems(item._id)}/>
                ))}
            </ul>
          <div className="total">
            <p>Subtotal</p>
            <p>₹{totalPrice}</p>
          </div>
      </div>
</div>
    </div>
    </>
  );
}
