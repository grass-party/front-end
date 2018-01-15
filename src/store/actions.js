import {ACTION} from './config';
import agendaApi from '../api/agendaApi'

export default {
    async [ACTION.FETCH_AGENDA_LIST] ({dispatch, commit}, payload) {
        let response = await agendaApi.fetchAgendaList();
        if(response.status === 200) {
            commit(ACTION.FETCH_AGENDA_LIST, response);
        } else {
            commit(ACTION.FETCH_FAILURE, response);
        }
        return response;
    },
    async [ACTION.FETCH_AGENDA] ({dispatch, commit}, payload) {
        let response = await agendaApi.fetchAgenda(payload.id);
        if(response.status === 200) {
            commit(ACTION.FETCH_AGENDA, response);
        } else {
            commit(ACTION.FETCH_FAILURE, response);
        }
        return response;
    },
    async [ACTION.CREATE_AGENDA] ({dispatch}, payload) {
        let response = await agendaApi.createAgenda(payload);
        if(response.status === 200) {
            await dispatch(ACTION.FETCH_AGENDA_LIST);
        }
    },

    async [ACTION.UPDATE_AGENDA] ({dispatch}, payload) {
        let response = await agendaApi.updateAgenda(payload);
        if(response.status === 200) {
            await dispatch(ACTION.FETCH_AGENDA_LIST);
        }
    },

    async [ACTION.DELETE_AGENDA] ({dispatch}, payload) {
        let response = await agendaApi.deleteAgenda(payload);
        if(response.status === 200) {
            await dispatch(ACTION.FETCH_AGENDA_LIST);
        }
    }
}