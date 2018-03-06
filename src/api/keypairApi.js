import {axiosInstance} from './base'

export function generatePublickey(publickey) {
  return axiosInstance.post('/users/register_pubkey/', publickey)
}

export function getSymmetricKey() {
  return axiosInstance.get('/users/symmetric_key/')
}

export default {
  generatePublickey,
  getSymmetricKey
}
