import * as plannerTypes from "../modules/mutation-types";
import axios from "axios";
import { BASE_URL_API, BASE_URL_RAW } from "./baseurl";

const state = {
  username: "",
  repos: [],
  readme: "",
  toasttext: ""
};

const getters = {
  allRepos: state => state.repos,
  username: state => state.username,
  readme: state => state.readme,
  toastText: state => state.toasttext
};

const actions = {
  checkUsername({ dispatch, commit }, username) {
    return axios
      .get(`${BASE_URL_API}users/${username}`)
      .then(response => {
        const verifyUsername = response.data.login;
        commit(plannerTypes.SET_USERNAME, verifyUsername);
        dispatch("getRepos");
        return verifyUsername;
      })
      .catch(error => {
        commit(plannerTypes.SET_TOAST_TEXT, "Username not found !!!");
        return error.response;
      });
  },

  getRepos({ commit, state }) {
    return axios
      .get(`${BASE_URL_API}users/${state.username}/repos`)
      .then(response => {
        const dataRepos = response.data;
        var result = dataRepos.map((repo, number) => {
          let newObj = {
            id: number,
            name: repo.name,
            desc: repo.description
          };
          return newObj;
        });
        commit(plannerTypes.SET_REPOS, result);
      });
  },

  getReadme({ commit, state }, payload) {
    const repos = state.repos;
    const repo = repos.find(repo => repo.name === payload.project);
    var url = "";
    if (repo === undefined) {
      url = `${BASE_URL_RAW}${state.username}//master/README.md`;
    } else {
      url = `${BASE_URL_RAW}${state.username}/${repo.name}/master/README.md`;
    }
    return axios
      .get(url)
      .then(response => {
        commit(plannerTypes.SET_README, response.data);
        return response;
      })
      .catch(error => {
        commit(plannerTypes.SET_TOAST_TEXT, "Readme file not found !!!");
        commit(plannerTypes.SET_README, "");
        return error.response;
      });
  }
};

const mutations = {
  SET_REPOS: (state, repos) => (state.repos = repos),
  SET_USERNAME: (state, username) => (state.username = username),
  SET_README: (state, readme) => (state.readme = readme),
  SET_TOAST_TEXT: (state, text) => (state.toasttext = text)
};

export default {
  state,
  getters,
  actions,
  mutations
};
