import axios from 'axios'


class User {
    create(formData){
        const host = 'http://localhost:6000/api/v1/createproduct'
        const config = {
            headers:{
                "Content-Type":"multipart/form-data",
            }
        }
        return axios.post(host,formData,config)
    }
  
}

const Users = new User()
export default Users