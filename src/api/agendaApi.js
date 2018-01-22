import axios from 'axios'
const STORAGE_KEY = 'temp-grass-fe'

export function fetchAgendaList () {
    return axios.get('/api/agendas/')
    // return Promise.resolve({
    //     status: 200,
    //     data: {
    //         list: [...JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')]
    //     }
    // });
}

export function fetchAgenda(id) {
    return Promise.resolve({
        status: 200,
        data: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')[id]
    });
}

export function createAgenda(agenda) {
    return axios.post('/api/agendas/', agenda)
}

export function getGunni() {
  axios.get('/user?ID=12345')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default {
  uid: 0,
  fetchAgendaList,
  fetchAgenda,
  createAgenda
}
