import api from "../api/Api";
import { API_URL } from "../constants/Index";

export const getUsersList = () => {
     return api.get(API_URL).then((response) => response.data);
}

export const getUser = (id) => {
     return api.get(`${API_URL}/${id}`).then((response) => response.data);
}

export const createUser = (user) => {
     return api.post(API_URL, user);
}

export const updateUser = (id, user) => {
     return api.put(`${API_URL}/${id}`, user);
}

export const deleteUser = (id) => {
     return api.delete(`${API_URL}/${id}`);
}