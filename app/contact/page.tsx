// app/contact/page.ts

import React from 'react';
import Header from '../components/Header/Header'
import Footer  from "../components/Header/Footer";
import StyleCss from './contact.module.css'
const Contact = () => {
  return (
    <div>
      
      <Header></Header>

      <div className={StyleCss.contact}>
        <h2 style={{textAlign:"center",fontWeight:"30px"}}>Contact From</h2>
        <br />
        <form action="">
          <label htmlFor="name">Name</label>
          <input style={{border: "1px solid  gray ",
             borderRadius:"7px",
             width:"200px",
             height:"25px"}} type="text" />
             <br />
             <br />
               <label htmlFor="name">L/Name</label>
          <input style={{border: "1px solid  gray ",
             borderRadius:"7px",
             width:"200px",
             height:"25px"}} type="text" />
             <br />
             <br />
               <label htmlFor="name">Email</label>
          <input style={{border: "1px solid  gray ",
             borderRadius:"7px",
             width:"200px",
             height:"25px"}} type="text" />
             <br />
             <br />
               <label htmlFor="name">Phone</label>
          <input style={{border: "1px solid  gray ",
             borderRadius:"7px",
             width:"200px",
             height:"25px"}} type="text" />
             <br />
             <br />
               <label htmlFor="name">Password</label>
          <input style={{border: "1px solid  gray ",
             borderRadius:"7px",
             width:"200px",
             height:"25px"}} type="text" />
        </form>
           <button style={{border: "1px solid gray", backgroundColor:"black", padding:"8px", borderRadius:"10px", color:"white",marginTop:"5px", marginLeft:"90px"}} type='submit'>Submit</button>
      </div>
      
      <Footer></Footer>
      
    </div>
  );
};

export default Contact;
