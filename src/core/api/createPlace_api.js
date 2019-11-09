import axios from 'axios'
import FormData from 'form-data'
class createPlaceApi{
static createPlace =async (place_info) => {
    console.log("in api createPlace",place_info)
    var formData = new FormData()
    formData.append('title', place_info.title)
    formData.append('Description',place_info.descriptions)
    formData.append('Likes', place_info.likes)
    formData.append('categories', place_info.category)
    formData.append('Hardness',place_info.hardness)
    formData.append('Address', place_info.address)
    formData.append('Time', place_info.title)
    formData.append('StartTime',place_info.startTime)
    formData.append('EndTime', place_info.endTime)
    formData.append('City', place_info.city)
    console.log(place_info.image1)
    formData.append('image1', place_info.image1)
    formData.append('image2', place_info.image2)
    formData.append('image3', place_info.image3)
    console.log(formData.values())
    try{
        console.log("-------------------------",formData)
        let x = await axios.post('http://localhost:8000/api/Places/CreatePlace/',formData  )
        return true
    }catch{
        console.log("wrong createPlace")
        return false
    }
};

}export default createPlaceApi