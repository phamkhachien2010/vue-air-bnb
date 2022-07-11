import axios from 'axios'
import configs from '../configs'

const axiosApi = axios.create({
    baseURL: configs.baseURL,
})

// interceptors của request là trước khi gửi data, headers lên server sẽ chạy vào phần này trước
//Thường dùng để cấu hình lại phần headers (token)
//trung gian gửi dữ liệu từ client lên server
axiosApi.interceptors.request.use(
    function(config) {
        config.headers.tokenByClass = configs.tokenByClass
        return config;
    },
    function(error) {
        return Promise.reject(error)
    }
)

// interceptors của response là phần ở giữa phần server trả về và phần front-end nhận lại
//trung gian gửi dữ liệu từ server về client
axiosApi.interceptors.response.use(
    function(response) {
        return response
    },
    function(error) {
        return Promise.reject(error)
    }
)

export default axiosApi