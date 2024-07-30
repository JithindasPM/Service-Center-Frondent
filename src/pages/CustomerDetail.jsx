import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { retriveCustomerApi } from '../services/api'

import Table from 'react-bootstrap/Table';
import WorkCreate from '../components/WorkCreate';
import WorkList from '../components/WorkList';

function CustomerDetail() {

    // extract url parameter(id) lh:5173/customer/1  to get 1

    const { id } = useParams()

    const [customer, setCustomer] = useState()

    const [refreshRequired,setRefreshRequired] = useState()

    const [workId,setWorkId] = useState(null)

    async function fetchcustomerDetail() {

        let res = await retriveCustomerApi(id)

        if (res.status > 199 && res.status < 300) {

            setCustomer(res.data)

        }
    }

    useEffect(() => { fetchcustomerDetail() }, [id])

    return (
        <div>
            <div className='container'>
                {customer && <div class="card my-3 border border-2 border-dark shadow" >
                    <div class="card-header text-center">
                        <h2>{customer.name}</h2>
                    </div>
                    <div class="card-body row ">
                        <div class="col-3 border-end">
                            <h5 class="text-center text-decoration-underline"> Customer Details</h5>

                            <div class="mt-5 mb-3 text-center"><span class="me-2"><i class="fa-solid fa-phone"></i></span>{customer.phone}</div>

                            <div class="my-3 text-center"><span class="me-2"><i class="fa-regular fa-envelope"></i></span>{customer.email}</div>
                        </div>
                        <div class="col-3 border-end">
                            <h5 class="text-center text-decoration-underline"> Odometer</h5>

                            <div class="mt-5 mb-3 text-center"><span class="me-2"><i class="fa-solid fa-gauge"></i></span>{customer.running_km}km</div>
                        </div>
                        <div class="col-3 border-end">
                            <h5 class="text-center text-decoration-underline"> Date</h5>
                            <div class="mt-5 mb-3 text-center"><span class="me-2"><i
                                class="fa-solid fa-calendar-days"></i></span>{customer.created_date}</div>
                        </div>
                        <div class="col-3">
                            <h5 class="text-center text-decoration-underline"> VehicleNumber</h5>
                            <div class="mt-5 mb-3 text-center"><span class="me-2"><i class="fa-solid fa-car"></i></span>{customer.vehicle_no}</div>
                        </div>
                    </div>
                </div>}

                    <WorkCreate custId={id} setRefreshRequired={setRefreshRequired} workId={workId}></WorkCreate>

                    <WorkList custId={id} refreshRequired={refreshRequired} setWorkId={setWorkId}></WorkList>

            </div>

        </div>
    )
}

export default CustomerDetail
