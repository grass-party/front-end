import {axiosInstance} from './base'

export function fetchAgendaList() {
  return axiosInstance.get('/agendas/')
}

export function fetchAgenda(id) {
  return axiosInstance.get(`/agendas/${id}/`)
}

export function createAgenda(agenda) {
  return axiosInstance.post('/agendas/', agenda)
}

export default {
  uid: 0,
  fetchAgendaList,
  fetchAgenda,
  createAgenda
}
