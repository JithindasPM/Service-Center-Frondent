import axios from 'axios';
import React, { useEffect } from 'react'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCustomerApi, editCustomerApi, retriveCustomerApi } from '../services/api';
import { useNavigate } from 'react-router-dom';

function CustomerCreate({ cls, custId,setRefresh }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate()

  async function handleFormSubmit() {

    if (custId) {

      let res=await editCustomerApi(custId,customer)

      if (res.status > 199 && res.status < 300) {

        setShow(false)

        setRefresh(Math.random())

      }

    }

    else {

      let res = await addCustomerApi(customer)

      console.log(res);

      setShow(false)

      if (res.status > 199 && res.status < 300) {

        navigate(`customer/${res.data.id}`)
      }

    }
  }

  async function fetchcustomerDetail(custId) {

    let res = await retriveCustomerApi(custId)

    if (res.status > 199 && res.status < 300) {

      setCustomer(res.data)

    }
  }

  useEffect(() => { fetchcustomerDetail(custId) }, [custId])

  const [customer, setCustomer] = useState({ name: '', phone: '', email: '', vehicle_no: '', running_km: '' })

  return (
    <>
      <Button className='btn btn-dark border border-warning border-2' onClick={handleShow}>
        <i className={cls}></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {custId ? <Modal.Title>Edit Customer</Modal.Title> : <Modal.Title>Add New Customer</Modal.Title>}
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <div className="mb-3">
              <label htmlFor="">Enter Customer Name</label>
              <input onChange={(e) => setCustomer({ ...customer, name: e.target.value })} type="text" className='form-control' value={customer.name} />
            </div>
            <div className="mb-3">
              <label htmlFor="">Enter Customer Phone</label>
              <input onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} type="text" className='form-control' value={customer.phone} />
            </div>
            <div className="mb-3">
              <label htmlFor="">Enter Customer Email</label>
              <input onChange={(e) => setCustomer({ ...customer, email: e.target.value })} type="email" className='form-control' value={customer.email} />
            </div>
            <div className="mb-3">
              <label htmlFor="">Enter Customer Vehicle Number</label>
              <input onChange={(e) => setCustomer({ ...customer, vehicle_no: e.target.value })} type="text" className='form-control' value={customer.vehicle_no} />
            </div>
            <div className="mb-3">
              <label htmlFor="">Enter vehicle Running Km</label>
              <input onChange={(e) => setCustomer({ ...customer, running_km: e.target.value })} type="text" className='form-control' value={customer.running_km} />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleFormSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomerCreate
