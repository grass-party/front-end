import axios from 'axios'
const STORAGE_KEY = 'temp-grass-fe'

export function fetchAgendaList () {
    return Promise.resolve({
        status: 200,
        data: {
            list: [...JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')]
        }
    });
}

export function fetchAgenda(id) {
    return Promise.resolve({
        status: 200,
        data: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')[id]
    });
}

export function createAgenda(agenda) {
    let agendaList = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    agenda.id = agendaList.length;
    agendaList.push(agenda)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(agendaList))
    return Promise.resolve({
        status: 200
    });
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
