// import jwtDecode from "jwt-decode"
// export const loggedin_user = null

import jwtDecode from 'jwt-decode'

const setLocalStorage = (token) => {
    localStorage.setItem("token", JSON.stringify(token))
}

const getUserFromToken = () => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token)
    console.log("token", token, decoded.exp, Date.now() / 1000)
    if (decoded.exp > (Date.now() / 1000)) {
        return decoded
    } else {
        throw new Error("Token is Expired")
    }
}

export const loggedin_user = () => {
    try {
        return getUserFromToken()
    } catch (error) {
        console.log("error ----", error)
        return null
    }
}
