import http from '@/services/http'

export default {
  upload (data) {
    return http.post('/test', data)
  }
}