import axios from "axios"

const BASE_URL='http://127.0.0.1:8000/api/'

export async function addCustomerApi(data){

    return await axios.post(BASE_URL+'customers/',data)

}

export async function listCustomerApi(){

    return await axios.get(BASE_URL+'customers/')
}

export async function retriveCustomerApi(id){

    return await axios.get(BASE_URL+`customers/${id}`)

}

export async function addWorkApi(custId,data){

    return await axios.post(BASE_URL+`customers/${custId}/work/`,data)

}

export async function retriveWorkApi(workId){

    return await axios.get(BASE_URL+`work/${workId}/`)

}

export async function updateWorkApi(workId,data){

    return await axios.put(BASE_URL+`work/${workId}/`,data)

}

export async function deleteWorkApi(workId){

    return await axios.delete(BASE_URL+`work/${workId}/`)

}

export async function editCustomerApi(custId,data){

    return await axios.put(BASE_URL+`customers/${custId}/`,data)

}

export async function deleteCustomerApi(custId){

    return await axios.delete(BASE_URL+`customers/${custId}/`)
}