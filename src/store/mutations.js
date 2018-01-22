import {ACTION} from './config';

export default {
    [ACTION.FETCH_AGENDA_LIST] (state, data) {
        state.agendaList = data;
        console.log(state.agendaList)
    },
    [ACTION.FETCH_AGENDA] (state, {agenda}) {
        state.currentAgenda = agenda;
    }
}
