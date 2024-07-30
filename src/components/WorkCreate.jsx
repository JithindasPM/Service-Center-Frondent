import React, { useEffect, useState } from 'react'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { addWorkApi, retriveWorkApi, updateWorkApi } from '../services/api';

function WorkCreate({custId,setRefreshRequired,workId}) {

    async function handleUpdate(){

        let res=await updateWorkApi(workId,work)

        if(res.status>199 && res.status<300){

            setRefreshRequired(Math.random())

            formReset()
            
        }
    }

    async function fetchWorkDetail(workId){

        let res=await retriveWorkApi(workId)

        if (res.status>199 && res.status<300){
            
            console.log(res.data);

            setWork(res.data)

        }

    }

    useEffect(()=>{fetchWorkDetail(workId)},[workId])


    const[work,setWork] = useState({title:'',description:'',amount:''})

    async function handleFormSubmit(){

        let res=await addWorkApi(custId,work)

        if (res.status>199 && res.status<300){

            setRefreshRequired(Math.random())

            formReset()

        }

    }

    function formReset(){

        setWork({title:'',description:'',amount:''})

    }

    return (

        <div className='border border-2 border-dark p-3 rounded'>

            <div className="row">
                {workId ? <h5 className='fw-bold text-center'>Edit Work</h5>: <h5 className='fw-bold text-center'>Add Work</h5>}
                <div className="col-4">
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Work Title
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            value={work.title}
                            onChange={(e)=>setWork({...work,title:e.target.value})}
                        />
                    </InputGroup>
                </div>
                <div className="col-4">
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Work Description
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            value={work.description}
                            onChange={(e)=>setWork({...work,description:e.target.value})}
                        />
                    </InputGroup>
                </div>
                <div className="col-4">
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Amount
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            value={work.amount}
                            onChange={(e)=>setWork({...work,amount:e.target.value})}
                        />
                        
                        {workId ? <Button variant="secondary" id="button-addon2" onClick={handleUpdate}>Edit</Button>:
                        <Button variant="secondary" id="button-addon2" onClick={handleFormSubmit}>Add</Button>}

                    </InputGroup>
                </div>
            </div>

        </div>

    )
}

export default WorkCreate
