import axios from "src/boot/axios"
const login = async ({commit},dados) =>{
  try {
    const db = await axios.get(api +`Auth/Auth_Login`)
    console.log(db)
  } catch (error) {

  }
}

export {
  login
}
