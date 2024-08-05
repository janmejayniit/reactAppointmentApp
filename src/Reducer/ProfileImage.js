const initialState = { profile_pic: localStorage.getItem('profile_pic') };

function reducer(state, action) {
  switch (action.type) {
    case 'updateProfileImage':
      return { profile_pic: state.profile_pic };
    default:
        return initialState;
  }
}

