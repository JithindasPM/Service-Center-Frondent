import React, { useState } from 'react'
import Header from '../components/Header'
import CustomerCreate from '../components/CustomerCreate'
import CustomerList from '../components/CustomerList'

function Index() {

  

  return (
    <div>
      
      <div className='container d-flex justify-content-end my-3'>
      <CustomerCreate cls={"fa-solid fa-plus"} custId={null}></CustomerCreate>
      </div>
      <div className='container'><CustomerList ></CustomerList></div>
      
    </div>
  )
}

export default Index
