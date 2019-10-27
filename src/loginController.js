import Axios from "axios"

export const logedIn=()=>{
    localStorage.setItem("access", Axios.get(localStorage.getItem("refresh")))
}