import {
  SET_USERNAME,
  SET_REPOS,
  SET_FOUND,
  SET_SEARCHING,
  SET_README,
  SET_SELECT,
  SET_TOAST_TEXT
} from "../modules/mutation-types";
import axios from "axios";
import { GET_REPOS } from "./action-types";
import { BASE_URL_API, BASE_URL_RAW } from "./baseurl";

const state = {
  username: "",
  found: false,
  repos: [],
  select: false,
  readme: "",
  toasttext: ""
};

const getters = {
  allRepos: state => state.repos,
  user: state => state.username,
  found: state => state.found,
  searching: state => state.searching,
  readme: state => state.readme,
  select: state => state.select,
  toastText: state => state.toasttext
};

const actions = {
  async CHECK_USERNAME({ dispatch, commit }, username) {
    return await axios
      .get(`${BASE_URL_API}users/${username}`)
      .then(response => {
        const verifyUsername = response.data.login;
        commit(SET_USERNAME, verifyUsername);
        commit(SET_SEARCHING, true);
        commit(SET_FOUND, true);
        dispatch(GET_REPOS);
        return verifyUsername;
      })
      .catch(error => {
        commit(SET_TOAST_TEXT, "Username not found !!!");
        commit(SET_FOUND, false);
        commit(SET_SELECT, false);
        return error.response;
      });
  },

  async GET_REPOS({ commit, state }) {
    await axios
      .get(`${BASE_URL_API}users/${state.username}/repos`)
      .then(response => {
        const dataRepos = response.data;
        var result = [];
        dataRepos.forEach((repo, number) => {
          const eachRepo = {
            id: number,
            name: repo.name,
            desc: repo.description
          };
          result.push(eachRepo);
        });
        commit(SET_REPOS, result);
      });
  },

  async GET_README({ commit, state }, id) {
    const repos = state.repos;
    const repo = repos.find(repo => repo.id === id);
    const url = `${BASE_URL_RAW}${state.username}/${repo.name}/master/README.md`;
    return await axios
      .get(url)
      .then(response => {
        commit(SET_README, response.data);
        commit(SET_SELECT, true);
      })
      .catch(error => {
        commit(SET_TOAST_TEXT, "Readme file not found !!!");
        commit(SET_README, "");
        commit(SET_SELECT, false);
        return error.response;
      });
  }
};

const mutations = {
  SET_SELECT: (state, select) => (state.select = select),
  SET_SEARCHING: (state, searching) => (state.searching = searching),
  SET_FOUND: (state, found) => (state.found = found),
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
