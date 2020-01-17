import axios from 'axios'
import {
  baseURL
} from './config'
const service = axios.create({
  baseURL: baseURL, // url = baseurl + requesturl
  timeout: 5000
})

export {
  service
}