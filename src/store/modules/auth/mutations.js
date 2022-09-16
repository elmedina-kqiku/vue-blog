// import { 
//       SET_AUTO_LOGOUT_MUTATION,
//       SET_USER_TOKEN_DATA_MUTATION } from "@/store/storeconstants";

export default {
      SET_USER(state, userInfo) {
            state.user = userInfo
      },
      SET_TOKEN(state, token) {
            state.token = token
            // save token on localstorage
            localStorage.setItem('token', token)
      }
      // [SET_USER_TOKEN_DATA_MUTATION](state, payload) {
      //       state.email = payload.email;
      //       state.token = payload.token;
      //       state.expiresIn = payload.expiresIn;
      //       state.refreshToken = payload.refreshToken;
      //       state.id = payload.id;
      //       state.autoLogout = false;    
      // },
      // [SET_AUTO_LOGOUT_MUTATION](state) {
      //       state.autoLogout = true;
      // },
}