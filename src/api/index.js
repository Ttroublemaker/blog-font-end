import {
    service
} from './request'

// export const login = (username,password)=>service.post('/api/user/login',{username,password})
export const login = (username, password) => service({
    method: 'POST',
    url: '/api/user/login',
    data: {
        username,
        password
    },
    headers: {
        'Content-Type': 'application/json', //这里以json的格式上传文件,不然用post时body为{}
    }
});