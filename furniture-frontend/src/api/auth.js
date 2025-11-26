import api from './axios';

export const login = async(username,password) => {
    const res = await api.post('token/',{username,password});
    localStorage.setItem('access_token',res.data.access);
    localStorage.setItem('refresh_token',res.data.refresh);
    return res.data;
};

export const refreshToken = async () => {
    const refresh = localStorage.getItem('refresh_token');
    if(!refresh) throw new Error('no refresh token');
    const res = await api.post('token/refresh/',{refresh});
    localStorage.setItem('access_token',res.data.access);
    return res.data;
};