import axios from "axios"

// const url = process.env.NEXT_PUBLIC_BASE_API_URL

const instance = axios.create({ baseURL: `https://agencyapi-bwp7.onrender.com/api/`, })
// console.log(instance.defaults.baseURL);


export default instance