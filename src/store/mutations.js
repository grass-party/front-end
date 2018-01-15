import {ACTION} from './config';

export default {
    [ACTION.FETCH_AGENDA_LIST] (state, {list}) {
        state.agendaList = list;
        console.log(state.agendaList)
    },
    [ACTION.FETCH_AGENDA] (state, {agenda}) {
        state.currentAgenda = agenda;
    }
}