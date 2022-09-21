import axios from "axios";
// import { 
//       AUTH_ACTION,
//       LOGIN_ACTION, 
//       AUTO_LOGIN_ACTION,
//       LOGOUT_ACTION,
//       SET_USER_TOKEN_DATA_MUTATION, 
//       SIGNUP_ACTION,
//       AUTO_LOGOUT_ACTION,
//       SET_AUTO_LOGOUT_MUTATION,
//        } from "@/store/storeconstants";

// let timer = '';

export default {
    login({commit}, loginInfo) {
        return axios.post('https://ma.tenton.al/api/v1/login', loginInfo, {
            headers: {
                    'x-client': '0TLi3kYazRZs6S7jv1j1jZfPy3cdMNPm9OFs8K1wTsTc2bVdPuc2HzIvfCekAarm8SozQobnzXH9k7qUjxSNcBUrjb4rOFwtAHcel7B5q9jGHTTpgXmIZdK5zeo12MP8'
            }
        })
            .then(res => {
                let token = res.data.data.token
                commit('SET_USER', res.data.data.user)
                commit('SET_TOKEN', token)
                console.log('test', res)
                return res
            })
    },

    signup({commit}, signupInfo) {
        console.log(signupInfo)
        return axios.post('https://ma.tenton.al/api/v1/register', signupInfo, {
            headers: {
                'x-client': '0TLi3kYazRZs6S7jv1j1jZfPy3cdMNPm9OFs8K1wTsTc2bVdPuc2HzIvfCekAarm8SozQobnzXH9k7qUjxSNcBUrjb4rOFwtAHcel7B5q9jGHTTpgXmIZdK5zeo12MP8'
        }
        })
        .then(res => {
            let token = res.data.data.token
            commit('SET_USER', res.data.data.user)
            commit('SET_TOKEN', token)
            console.log('test', res)
            return res
        })
    },
    // async signIn({ dispatch }, credentials){
    //     let response = await axios.post('https://ma.tenton.al/api/v1/login', credentials, { headers: { 'x-client': '0TLi3kYazRZs6S7jv1j1jZfPy3cdMNPm9OFs8K1wTsTc2bVdPuc2HzIvfCekAarm8SozQobnzXH9k7qUjxSNcBUrjb4rOFwtAHcel7B5q9jGHTTpgXmIZdK5zeo12MP8' }})
    //    console.log(response.data.data.token,'responseee')
    //     return dispatch('attempt', response.data.data.token)

    // },
    async attempt({ commit }, token){
        if(token) {
            localStorage.setItem('token', token)
        }

         return  await axios.get('https://ma.tenton.al/api/v1/user/me',{

                headers:{
                    'Authorization':'Bearer ' + token,

                }

            }).then(res=>{
                commit('SET_USER', res.data.data);
                return res;
            })
    
    },

    //   [LOGOUT_ACTION](context) {
    //         context.commit(SET_USER_TOKEN_DATA_MUTATION, {
    //             email: null,
    //             token: null,
    //             expiresIn: null,
    //             refreshToken: null,
    //             id: null,
    //         });
    //         localStorage.removeItem('userData');
    //         if (timer) {
    //             clearTimeout(timer);
    //         }
    //     },
    
    //   [AUTO_LOGOUT_ACTION](context) {
    //         context.dispatch(LOGOUT_ACTION);
    //         context.commit(SET_AUTO_LOGOUT_MUTATION);
    //   },
    
    //   async [LOGIN_ACTION](context, payload){
    //         return context.dispatch(AUTH_ACTION, {
    //               ...payload,
    //               url: `https://ma.tenton.al/api/v1/login
    //               `,
    //           });

    //   },

    //   async [SIGNUP_ACTION] (context, payload) {
    //         return context.dispatch(AUTH_ACTION, {
    //               ...payload,
    //               url: `https://ma.tenton.al/api/v1/register`,
    //           });
    //   },

    //   [AUTO_LOGIN_ACTION](context) {
    //         let userDataString = localStorage.getItem('userData');
    
    //         if (userDataString) {
    //             let userData = JSON.parse(userDataString);
    //             let expirationTime = userData.expiresIn - new Date().getTime();
    
    //             if (expirationTime < 10000) {
    //                 context.dispatch(AUTO_LOGOUT_ACTION);
    //             } else {
    //                 timer = setTimeout(() => {
    //                     context.dispatch(AUTO_LOGOUT_ACTION);
    //                 }, expirationTime);
    //             }
    
    //             context.commit(SET_USER_TOKEN_DATA_MUTATION, userData);
    //         }
    //     },
            
    //   async [AUTH_ACTION](context, payload) {
    //         let postData = {
    //             email: payload.email,
    //             password: payload.password,
    //             returnSecureToken: true,
    //         };
    //         let response = '';
    //         try {
    //             response = await axios.post(payload.url, postData);
    //         } catch (err) {
    //             // context.commit(LOADING_SPINNER_SHOW_MUTATION, false, {
    //             //     root: true,
    //             // });
    //             let errorMessage = SignupValidations.getErrorMessageFromCode(
    //                 err.response.data.error.errors[0].message,
    //             );
    //             throw errorMessage;
    //         }
    
    //         if (response.status === 200) {
    //             let expirationTime = +response.data.expiresIn * 1000;
    
    //             timer = setTimeout(() => {
    //                 context.dispatch(AUTO_LOGOUT_ACTION);
    //             }, expirationTime);
    
    //             let tokenData = {
    //                 email: response.data.email,
    //                 token: response.data.idToken,
    //                 expiresIn: expirationTime,
    //                 refreshToken: response.data.refreshToken,
    //                 id: response.data.localId,
    //             };
    //             localStorage.setItem('userData', JSON.stringify(tokenData));
    //             context.commit(SET_USER_TOKEN_DATA_MUTATION, tokenData);
    //         }
    //   },
}
      
      
