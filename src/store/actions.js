import {ACTION, MUTATION} from './config';
import agendaApi from '../api/agendaApi'
import keypairApi from '../api/keypairApi'
import loginApi from '../api/loginApi'

export default {
  async [ACTION.FETCH_AGENDA_LIST]({dispatch, commit}, payload) {
    let response = await agendaApi.fetchAgendaList();
    commit(ACTION.FETCH_AGENDA_LIST, response.data);
    // if(response.status === 200) {
    //     commit(ACTION.FETCH_AGENDA_LIST, response);
    // } else {
    //     commit(ACTION.FETCH_FAILURE, response);
    // }
    // console.log(response.data)
    return response;
  },
  async [ACTION.FETCH_AGENDA]({dispatch, commit}, payload) {
    let response = await agendaApi.fetchAgenda(payload.id);
    if (response.status === 200) {
      commit(ACTION.FETCH_AGENDA, response);
    } else {
      commit(ACTION.FETCH_FAILURE, response);
    }
    return response;
  },
  async [ACTION.CREATE_AGENDA]({dispatch}, payload) {
    let response = await agendaApi.createAgenda(payload);
    await dispatch(ACTION.FETCH_AGENDA_LIST);
    console.log(response)
    return response;
  },

  async [ACTION.UPDATE_AGENDA]({dispatch}, payload) {
    let response = await agendaApi.updateAgenda(payload);
    if (response.status === 200) {
      await dispatch(ACTION.FETCH_AGENDA_LIST);
    }
  },

  async [ACTION.DELETE_AGENDA]({dispatch}, payload) {
    let response = await agendaApi.deleteAgenda(payload);
    if (response.status === 200) {
      await dispatch(ACTION.FETCH_AGENDA_LIST);
    }
  },

  async [ACTION.VOTE]({commit}, payload) {
    let response = await agendaApi.vote(payload);
    return response;
  },

  async [ACTION.GENERATE_PUBLICKEY]({dispatch}, payload) {
    return await keypairApi.generatePublickey(payload);
  },


  async [ACTION.SIGN_IN]({commit}, payload) {
    let response = await loginApi.signIn(payload);
    commit(MUTATION.SET_USER, response);
    return response;
  },

  async [ACTION.SIGN_OUT]({commit}, payload) {
    let response = await loginApi.signOut(payload);
    commit(MUTATION.SET_USER, {});
    return response;
  }
}
