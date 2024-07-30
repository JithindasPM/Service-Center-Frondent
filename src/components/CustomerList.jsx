import React, { useEffect, useState } from 'react'
import { deleteCustomerApi, listCustomerApi } from '../services/api'


import Button from 'react-bootstrap/Button';
import CustomerCreate from './CustomerCreate';

function CustomerList() {

    const [customers, setCustomers] = useState()

    const [refresh,setRefresh] = useState(null)

    async function customerDelete(custId){

        let res=await deleteCustomerApi(custId)

        if (res.status>199 && res.data<300){

            fetchAllCustomers()

        }
    }

    async function fetchAllCustomers() {

        let res = await listCustomerApi()

        if (res.status > 199 && res.status < 300) {

            setCustomers(res.data)

        }

    }

    useEffect(() => { fetchAllCustomers()}, [refresh] )

    return (

        <div>
            {customers && customers.map((cust, i) => <div class="card my-3" >
                <div class="card-header">
                    <h3 className='text-center'>{cust.name}</h3>
                </div>
                <div class="card-body row ">
                    <div class="col-2 border-end">
                        <h5 class="text-center text-decoration-underline"> Customer Details</h5>

                        <div class="my-3"><span class="me-2"><i class="fa-solid fa-phone"></i></span>{cust.phone}</div>

                        <div class="my-3"><span class="me-2"><i class="fa-regular fa-envelope"></i></span>{cust.email}</div>

                    </div>
                    <div class="col-2 border-end">
                        <h5 class="text-center text-decoration-underline"> Odometer</h5>

                        <div class="my-3"><span class="me-2"><i class="fa-solid fa-gauge"></i></span>{cust.running_km}km</div>



                    </div>
                    <div class="col-2 border-end">
                        <h5 class="text-center text-decoration-underline"> Date</h5>

                        <div class="my-3"><span class="me-2"><i
                            class="fa-solid fa-calendar-days"></i></span>{cust.created_date}</div>


                    </div>
                    <div class="col-2 border-end">
                        <h5 class="text-center text-decoration-underline"> VehicleNumber</h5>

                        <div class="my-3"><span class="me-2"><i class="fa-solid fa-car"></i></span>{cust.vehicle_no}</div>

                    </div>
                    <div class="col-2 border-end">
                        <h5 class="text-center text-decoration-underline"> Total</h5>

                        <div class="my-3"><span class="me-2"><i class="fa-solid fa-rupee-sign"></i></span> {cust.work_total}</div>
                    </div>
                    <div class="col-2 ">
                        <h5 class="text-center text-decoration-underline"> Aciton</h5>

                        <div class="d-flex justify-content-evenly gap-2 align-items-center">
                            <div class="mb-2">

                                <Button className='btn btn-info border border-warning border-2' >
                                    <i class="fa-solid fa-eye"> </i>
                                </Button>

                            </div>

                            <div class="mb-2">

                                <CustomerCreate cls={"fa-solid fa-pen-to-square"} custId={cust.id} setRefresh={setRefresh}></CustomerCreate>

                            </div>

                            <div class="mb-2">
                                <Button className='btn btn-primary border border-warning border-2' onClick={()=>customerDelete(cust.id)}>
                                    <i class="fa-solid fa-trash"></i>
                                </Button>

                            </div>

                            <div class="mb-2">
                                <Button className='btn btn-danger border border-warning border-2' >
                                    <i class="fa-solid fa-file-invoice"></i>
                                </Button>

                            </div>

                        </div>

                    </div>
                </div>
            </div>)}

        </div>
    );
}

export default CustomerList
