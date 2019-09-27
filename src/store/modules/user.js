import { login } from '@/api/admin'
import { getToken, setToken, removeToken, getUser, setUser, removeUser } from '@/utils/auth'
import { resetRouter } from '@/router'

const state = {
    token: getToken(),
    user : getUser()
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER: (state, user) => {
    state.user = user
  },
}

const actions = {
  // user login
    login({ commit }, userInfo) {
        const { username, password } = userInfo;
        return new Promise((resolve, reject) => {
            login({ username: username.trim(), password: password })
            .then(response => {
                if(response.status) {
                    const { token, admin } = response
                    commit('SET_TOKEN', token)
                    commit('SET_USER', admin)
                    setUser(JSON.stringify(admin))
                    setToken(token)
                    resolve()
                } else reject('邮箱或密码错误！')
            }).catch(error => {
                console.log('error', error)
                reject('提交出错')
            })
        })
    },

  // get user info
  getInfo({ commit, state }) {
    // return new Promise((resolve, reject) => {
    //   getInfo(state.token).then(response => {
    //     const { data } = response

    //     if (!data) {
    //       reject('Verification failed, please Login again.')
    //     }

    //     const { name, avatar } = data

    //     commit('SET_NAME', name)
    //     commit('SET_AVATAR', avatar)
    //     resolve(data)
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeUser()
      removeToken()
      resolve()
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeUser()
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

