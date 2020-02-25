import axios from 'axios'
import { YT_API_KEY } from '../secret'

const yt = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
})

yt.interceptors.request.use(config => {
  config.params = config.params || {}
  config.params['key'] = YT_API_KEY
  return config
})

export default yt
