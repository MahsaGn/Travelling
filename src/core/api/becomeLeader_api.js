import axios from 'axios'
class becomeLeaderApi{
static becomeLeader =async (leader_info) => {
    console.log("in api become leader",leader_info)
    try{
        axios.post('http://localhost:8000/api/become-leader/',{
            nationalID:leader_info.nationalID,
            has_car:leader_info.has_car,
            car_capacity:leader_info.car_capacity,
            car_model:leader_info.car_model
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