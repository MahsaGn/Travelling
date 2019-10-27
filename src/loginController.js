import axios from "axios"

export const logedIn=()=>{
    var a =  axios.get(localStorage.getItem("refresh"))
    console.log(a)
    localStorage.setItem("access",a)
}