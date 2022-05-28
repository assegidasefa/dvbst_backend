import axios from ".."

export const login = async (email, password) => {
    try {
        console.log("login called")
        const { data: result } = await axios.post("http://Localhost:8080/auth/login", { email, password })
        
        if (result.auth) {
            localStorage.setItem("token", result.token)
        }
        return result;
    } catch (error) {
        console.log(error)
        console.log("this for error display checkup")
        throw new Error("Invalid Email or Password")
    }
}
