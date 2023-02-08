import axios from "axios";

const instance = axios.create({
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    withCredentials:true,
    headers:{
        'API-KEY':'7927a783-5afd-4ad3-9f9c-1cf089c72577'
}
})

const api = {

    getUsersProfile: function (userID: string) {
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
    },
    getUsers() {
       return instance.get(`users`)
            .then(response=>{
                console.log(response)
                return response
            })
    },
    getUsersForCurrentPage(currentPage:number,count:number) {
        return instance.get(`users?page=${currentPage}&count=${count}`)
    }

};

export default api;