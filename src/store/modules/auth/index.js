import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
      // namespaced: true,
      state() {
            return {
                  // prej firebase.google.com/docs/reference/rest/auth*section-create-email-password
                  token: '',
                  user: null,
                  autoLogout: false,
            };
      },
      
      mutations,
      getters,
      actions,

}