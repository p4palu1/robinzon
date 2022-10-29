import axios from "axios"

const url1 = "https://robinzonwebsite.herokuapp.com/users"
const url2 = "https://robinzonwebsite.herokuapp.com/modules"
const url3 = "https://robinzonwebsite.herokuapp.com/popup"
const url4 = "https://robinzonwebsite.herokuapp.com/list"

export const fetchModules = () => axios.get(url2)
export const fetchSingleModule = (id) => axios.get(`${url2}/${id}`)
export const createModule = (newModule) => axios.post(url2, newModule)
export const updateModule = (id, updatedModule) => axios.put(`${url2}/${id}`, updatedModule)
export const deleteModule = (id) => axios.delete(`${url2}/${id}`)
export const userLogin = (username, password) => axios.get(url1, {
    params: {
        username: username,
        password: password
    }
})
export const getPopUpMessage = () => axios.get(url3)
export const updatePopUp = (updatedPopUp) => axios.put(url3, updatedPopUp)

export const moduleUp = (order) => axios.put(`${url4}/up`, order)
export const moduleDown = (order) => axios.put(`${url4}/down`, order)
