import axios from 'axios'

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    'API-KEY': '7927a783-5afd-4ad3-9f9c-1cf089c72577',
  },
})

const api = {
  getUsersProfile: function (userID: number) {
    console.warn('must refactor method (use in profileApi)')
    return instance.get(`/profile/${userID}`).then(response => {
      return response.data
    })
  },

  authMe: function () {
    console.warn('replace method')
    return instance.get(`auth/me`).then(response => {
      return response.data
    })
  },
  unfollow: function (userId: number) {
    return instance.delete(`/follow/${userId}`).then(response => {
      return response.data
    })
  },
  follow: function (userId: number) {
    return instance.post(`/follow/${userId}`).then(response => {
      return response.data
    })
  },
  followUnfollowUsers: function (userId: number, method: string) {
    if (method === 'follow') {
      return this.follow(userId)
    }
    if (method === 'unfollow') {
      return this.unfollow(userId)
    }
  },

  getUsers() {
    return instance.get(`users`).then(response => {
      return response
    })
  },
  getUsersForCurrentPage(currentPage: number, count: number) {
    return instance.get(`users?page=${currentPage}&count=${count}`)
  },
}

export const profileApi = {
  getProfile: (userID: string) => {
    return api.getUsersProfile
  },
  getStatus: (userID: number) => {
    return instance.get(`profile/status/${userID}`)
  },
  updateStatus: (status: string) => {
    return instance.put(`/profile/status`, { status })
  },
  updatePhoto: (file: any) => {
    return instance.put(`/profile/photo`, { file })
  },
}

export const authAPI = {
  me: () => {
    return api.authMe()
  },
  login: (email: string, password: string, rememberMe: boolean) => {
    return instance.post(`auth/login`, { email, password }).then(response => response.data)
  },
  logout: () => {
    return instance.delete('auth/login').then(response => response.data)
  },
}

export const friendsAPI = {
  getUsers(currentPageFoundFriends: number, pageSize: number) {
    return instance
      .get<GetUserResponseType>(`users?page=${currentPageFoundFriends}&count=${pageSize}`)
      .then(response => response.data)
  },
  followingUser(id: string) {
    return instance.post<ResponseType>(`follow/${id}`)
  },
  unfollowingUser(id: string) {
    return instance.delete<ResponseType>(`follow/${id}`)
  },
}

export const newsApi = {
  getNews() {
    return axios<NewsResponseType>({
      method: 'get',
      url: `https://newsapi.org/v2/top-headlines/sources?page=${1}&pageSize=${20}&apiKey=0a6f315b05ea410e90d85d31eff13ab9`,
    })
  },
}

//TYPES
export type NewsResponseType = {
  status: string
  sources: CurrentNewsResponseType[]
}

export type CurrentNewsResponseType = {
  id: string
  name: string
  description: string
  url: string
  category: string
  language: string
  country: string
}

type GetUserResponseType = {
  items: Array<UserType>
  totalCount: number
  error: string
}

type UserType = {
  name: string
  id: number
  uniqueUrlName: string
  photos: {
    small: string
    large: string
  }
  status: string
  followed: boolean
}

export default api
