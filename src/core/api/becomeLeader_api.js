import axios from 'axios'
class becomeLeaderApi{
static becomeLeader =async (leader_info) => {
    console.log("in api become leader",leader_info)
    try{
        axios.post('http://localhost:8000/api/leadercreation/',{
            nationalID:leader_info.nationalID,
            has_car:leader_info.has_car!=undefined? leader_info.has_car : false,
            car_capacity:leader_info.car_capacity,
            car_model:leader_info.car_model,
            age:12,
            gender:leader_info.gender ==="خانم"? false : true
          },{
             headers:
              {
                "Authorization" : `Bearer ${localStorage.access}`,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            } 
             }).then(() => {
                 console.log("becomeLeader success fully")
                 return true
            })
    }catch{
        console.log("wrong becomeLeder")
        return false
    }
};

}export default becomeLeaderApi