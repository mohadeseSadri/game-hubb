import axios from "axios"

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'0d0b807e993e4c619540dd397c526cd0'
    }
})