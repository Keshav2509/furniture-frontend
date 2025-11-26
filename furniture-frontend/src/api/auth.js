import api from './axios';

export const login = async(username,password) => {
    const res = await api.post('token/',{username,password});
    localStorage.setItem('access_token',res.data.access);
    localStorage.setItem('refresh_token',res.data.refresh);
}