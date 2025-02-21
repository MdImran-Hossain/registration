import React, { use, useState } from "react";

import Pic from '../assets/1.png'
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Registration = () => {
  
  const ItemInput = [
    {
      id:1,
      name: "Email",
      Place: "Email Address",
    },
    {
      id:2,
      name: "FullName",
      Place: "Full name",
    },
    {
      id:3,
      name: "password",
      Place: "Password",
    },
  ];

  const [email,setEmail]=useState("");
  const [fullName,setfullName]=useState("");
  const [password,setPassword]=useState("");
  const [eye, setEye]=useState(false)

  const [Erremail,setErrEmail]=useState("");
  const [ERRfullName,setErrfullName]=useState("");
  const [Errpassword,setErrPassword]=useState("");


  /**
   * todo : HanderInput function implement
   * @param(even)
   * return null
   */
  const HanderInpur =(event)=>{
const {name,value}= event.target;
console.log("ad",value);

if(name=="Email"){
  setEmail(value)
}
 if(name=="FullName"){
  setfullName(value)
}
if(name=="password"){
  setPassword(value)
}
  }

  /**
   * todo : handelSingUp function implement
   * @param(even)
   * return null
   */

  const handelSingUp=()=>{
   
    if(!email){
      setErrEmail("missing E-mail")
    }
   else if(!fullName){
      setErrfullName("missing fullName")
    }
    
   else if(!password){
      setErrPassword("missing password")
    } else
    alert("sing up")
    
  }
  const viewer=()=>{
    setEye(!eye)
    
  }
  return (
    <>
      <section className="w-full h-[100vh] bg-white flex justify-center items-center cursor-pointer">
        <div className="flex justify-center items-center gap-[60px]">
          <div>
            <div>
              <h1 className="text-[34px] font-bold text-font_color font-Nunito">
                Get started with easily register
              </h1>
              <p className="text-[20px] font-normal font-Nunito text-[rgba(0,0,0,0.5)]">
                Free register and you can enjoy it
              </p>
            </div>
            <div className="mt-10 flex justify-center flex-col gap-[65px] relative">
              {ItemInput.map((ItemInput) => {
                return (
                    <div key={ItemInput.id}  className="w-[500px]">
                      <div className="relative h-[50px] leading-[50px] w-full">
                      <input
                        type={ItemInput.name.toLocaleLowerCase()=="email".toLocaleLowerCase()?"email": ItemInput.name=="FullName"?"text":eye?"text":"password"} name={ItemInput.name}
                        className="inputFild" required onChange={HanderInpur}
                      />
                      
                      {email=="" && ItemInput.name==="Email"?(<span className="text-amber-400 absolute top-[56px] z-20  capitalize left-2 ">{Erremail}</span>):fullName=="" && ItemInput.name==="FullName"?(<span className="text-amber-400 absolute top-[56px] z-20 capitalize left-2">{ERRfullName}</span>): password =="" && ItemInput.name==="password"?(<span className="text-amber-400 absolute z-20 top-[56px] capitalize left-2">{Errpassword}</span>):("")}
                      <div className="lebel"> 
                        {ItemInput.Place}
                        
                      </div>
                    </div>
                  </div>
                );
              })}
              <span onClick={viewer} className="right-[35%] top-[50.5%] absolute"> {eye?<FaEyeSlash />
:<FaEye />}
              </span>
              <button onClick={handelSingUp} className="w-[70%] p-[20px] bg-button_color rounded-3xl text-[20px] font-semibold font-Nunito text-white">Sign up</button>
              <p className="text-[18px] text-[#03014C] font-Nunito ml-[50px]">Already  have an account ?  <span><a href="#" className="font-bold text-[#EA6C00]">Sign In</a></span></p>
            </div>
          </div>
          <div>
            <picture>
              <img src={Pic} alt={Pic} />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
