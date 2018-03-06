export const ACTION = {
  FETCH_AGENDA_LIST: 'fetchAgendaList',
  FETCH_AGENDA: 'fetchAgenda',
  CREATE_AGENDA: 'createAgenda',
  UPDATE_AGENDA: 'updateAgenda',
  DELETE_AGENDA: 'deleteAgenda',
  FETCH_VOTE_LIST: 'fetchVoteList',
  SIGN_UP: 'signUp',
  SIGN_IN: 'signIn',
  SIGN_OUT: 'signOut',
  GENERATE_PUBLICKEY: 'generatePublickey',
  VOTE: 'vote'
};

export const MUTATION = {
  SET_USER: 'setUser',
  SIGNED_IN: 'signedIn'
};

export const GETTER = {
  IS_SIGNED: 'isSigned'
};
