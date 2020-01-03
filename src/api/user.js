import { $http } from './axios'
import axios from 'axios'
export function login(data) {
    return $http.get('/user/login', data)
}

export function getInfo(token) {
    return $http.post('/user/info', { token })
}

export function logout() {
    return $http.post('/user/logout')
}