import React from 'react';
import axios from "axios";

const instance = axios.create({
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    withCredentials:true,
    headers:{
        'API-KEY':'7927a783-5afd-4ad3-9f9c-1cf089c72577'
}
})

const api = {

    getUsers: function (userID: string) {
        return instance.get(`/profile/${userID}`)
            .then(response => {
                return response.data
            })
    },

    authMe:function (){
        return instance.get(`auth/me`)
            .then(response=>{
                return response.data
            })

    },
    unfollow:function (userId:number){
        return instance.delete(`/follow/${userId}`)
            .then(response=>{
                return response.data
            })
    },
    follow:function (userId:number){
        return instance.post(`/follow/${userId}`)
            .then(response=>{
                return response.data
            })
    }

};

export default api;