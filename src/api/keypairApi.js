import {axiosInstance} from './base'

export function generatePublickey (publickey) {
    return axiosInstance.post('/users/register_pubkey/', publickey)
}

export default {
  generatePublickey
}
