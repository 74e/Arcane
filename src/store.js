import { createStore } from 'vuex';
import axios from 'axios';

const mutations = {
    SET_NEWS(state, news) {
      state.newsData = news;
    },
    SET_GAMES(state, games) {
      state.gamesData = games;
    }
  },
  state = {
    // Doesnt work when set to null?
    newsData: null,
    gamesData: null
  },
  actions = {
    getNews({ commit }) {
      axios
        .get('https://mmo-games.p.rapidapi.com/latestnews', {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key':
              '201b7397bdmshc0d37e649fed00cp156390jsnc72e8e2341aa',
            'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
          }
        })
        .then((res) => {
          // when testing out loading "animations"
          // setTimeout(() => {
          //   commit('SET_NEWS', res.data);
          // }, 2000);
          commit('SET_NEWS', res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getGames({ commit }) {
      axios
        .get('https://mmo-games.p.rapidapi.com/games', {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key':
              '201b7397bdmshc0d37e649fed00cp156390jsnc72e8e2341aa',
            'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
          }
        })
        .then((res) => {
          commit('SET_GAMES', res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

export default createStore({ mutations, state, actions, strict: true });
