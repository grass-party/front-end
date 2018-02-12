import {ACTION, MUTATION} from './config';

export default {
  [ACTION.FETCH_AGENDA_LIST](state, data) {
    state.agendaList = data;
  },
  [ACTION.FETCH_AGENDA](state, {agenda}) {
    state.currentAgenda = agenda;
    console.log(state.currentAgenda)    
  },
  [MUTATION.SET_USER](state, user) {
    state.user = user;
  }
}
