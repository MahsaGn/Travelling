import axios from 'axios'
export const fetchLeaderProfile =(locData)=>{
    var id=0
    if(typeof(locData)!= "undefined")
        {
        //console.log(this.props.location.data.info)
            id = locData.data.info
        }
    return axios.get(`http://localhost:8000/api/me/leader/${id}`,{
            headers:
             {
               "Authorization" : `Bearer ${localStorage.access}`,
               'Accept' : 'application/json',
               'Content-Type': 'application/json'
           }
        }).catch(
            console.log("error"));
}


export const fetchuserProfile =(url)=>{
    axios.get(url,{
            headers:
             {
               "Authorization" : `Bearer ${localStorage.access}`,
               'Accept' : 'application/json',
               'Content-Type': 'application/json'
           }
        })
}