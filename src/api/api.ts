import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    withCredentials:true,
    headers:{
        'API-KEY':'7927a783-5afd-4ad3-9f9c-1cf089c72577'
}
})

const api = {
    getUsersProfile: function (userID: number) {
        console.warn('must refactor method (use in profileApi)')
        return instance.get(`/profile/${userID}`)
            .then(response => {
                return response.data
            })
    },

    authMe:function (){
        console.warn('replace method')
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
                return response
            })
    },
    getUsersForCurrentPage(currentPage:number,count:number) {
        return instance.get(`users?page=${currentPage}&count=${count}`)
    }

};

export const profileApi = {
    getProfile:(userID: string)=>{
        return api.getUsersProfile
    },
    getStatus:(userID: number)=>{
        return instance.get(`profile/status/${userID}`)
    },
    updateStatus:(status: string )=>{
        return instance.put(`/profile/status`,{status})
    }
}

export const authAPI = {
    me:()=>{
       return api.authMe()
    },
    login:(email:string,password:string,rememberMe:boolean)=>{
        return instance.post(`auth/login`,{email,password})
            .then(response=>response.data)
},
    logout:()=>{
        return instance.delete('auth/login')
            .then(response=>response.data)
    }

}


export default api;