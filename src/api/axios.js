import { request, _downloadExcel } from '@/utils/request'
export const $http = {
    // post
    post: async (url, data = {}) => {
        return await request(url, data, 'post')
    },

    // get
    get: async (url, data = {}) => {
        // 封装get参数
        let dataStr = '?'
        Object.keys(data)
            .forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
        if (dataStr !== '') {
            dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
            url = url + dataStr
        }
        return await request(url, {}, 'get')
    },

    // del
    del: async (url, data = {}) => {
        return await request(url, data, 'delete')
    },

    // put
    put: async (url, data = {}) => {
        return await request(url, data, 'put')
    },

    // downloadExcel
    downloadExcel: async (url, data = {}, excelName = '导出数据') => {
        let isDownExcel = true
        await request(url, data, 'post', isDownExcel).then(data => {
            _downloadExcel(data, excelName)
        })
    },
}