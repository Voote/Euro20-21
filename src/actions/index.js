import { api } from './../enviroments/config';
import {
  GET_FIXTURES,
  GET_FIXTURES_ERROR,
  GET_FIXTURES_SUCCESS,
  GET_GROUPS,
  GET_GROUPS_ERROR,
  GET_GROUPS_SUCCESS,
  GET_TEAMS,
  GET_TEAMS_ERROR,
  GET_TEAMS_SUCCESS,
  GET_TREE,
  GET_TREE_ERROR,
  GET_TREE_SUCCESS
} from './actionTypes';

const urls = {
  fixtures: `${api}/fixtures`,
  groups: `${api}/groups`,
  teams: `${api}/teams`,
  tree: `${api}/tree`
};

const getActionCreator = (url, type, errorType, successType) => {
  return function (dispatch) {
    dispatch({ type });

    setTimeout(
      () =>
        fetch(url)
          .then((response) => response.json())
          .then((data) =>
            dispatch({
              type: successType,
              payload: data
            })
          )
          .catch((error) =>
            dispatch({
              type: errorType,
              payload: error
            })
          ),
      500
    );
  };
};

export const getFixtures = () =>
  getActionCreator(
    urls.fixtures,
    GET_FIXTURES,
    GET_FIXTURES_ERROR,
    GET_FIXTURES_SUCCESS
  );

export const getGroups = () =>
  getActionCreator(
    urls.groups,
    GET_GROUPS,
    GET_GROUPS_ERROR,
    GET_GROUPS_SUCCESS
  );

export const getTeams = () =>
  getActionCreator(urls.teams, GET_TEAMS, GET_TEAMS_ERROR, GET_TEAMS_SUCCESS);

export const getTree = () =>
  getActionCreator(urls.tree, GET_TREE, GET_TREE_ERROR, GET_TREE_SUCCESS);
