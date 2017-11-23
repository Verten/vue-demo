import * as MutationTypes from "../mutation_type";
import * as API from "../../api";
import { callAPI } from "../../utilities";

const userModule = {
  state: {
    users: []
  },
  mutations: {
    [MutationTypes.USER_REQUEST]: (state) => {
      state.users = [];
    },
    [MutationTypes.FETCH_USER_LIST]: (state, payload) => {
      state.users = payload.users;
    }
  },
  getters: {
    getUsers: (state )=> {
      return state.users;
    }
  },
  actions: {
    fetchUsers: ({ commit }) => {
      const config = {
        method: "get",
        url: `${API.getUsersUrl()}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      };
      const onRequest = () => ({
        type: MutationTypes.USER_REQUEST
      });
      const onRequestSuccess = users => {
        return {
          type: MutationTypes.FETCH_USER_LIST,
          users
        };
      };
      const onRequestFailure = error => {
        return {
          type: MutationTypes.ERROR,
          error
        };
      };
      callAPI(
        { commit },
        config,
        onRequest,
        onRequestSuccess,
        onRequestFailure
      );
    }
  }
};

export default userModule;
