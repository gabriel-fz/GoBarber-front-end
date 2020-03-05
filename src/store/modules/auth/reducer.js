import produce from 'immer';

const INITTIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITTIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCESS':
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
      });
    default:
      return state;
  }
}
