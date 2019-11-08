import axios from 'axios'
class homePage_api{
static homePage =async () => {
    console.log("in api home page")
    try{
      let x = await axios.get(`http://127.0.0.1:8000/api/Places/RandomPlace/`)
        console.log(x);  
        return x.data
        }catch{
            console.log("wrong homePage")
            return false
        }
};

}export default homePage_api