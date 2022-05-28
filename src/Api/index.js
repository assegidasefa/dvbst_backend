import axios from "axios"

const baseURL = "http://localhost:8080"

const getToken = () => {
    return (

        localStorage.getItem("token") ?
            //  JSON.parse(
            localStorage.getItem("token")
            // )
            : ""
    )

}


const Axios = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${getToken()}`

    }
})




export default Axios