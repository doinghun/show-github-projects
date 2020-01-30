import history from '../history'
import github from '../api'
import axios from 'axios'

import {
    FETCH_PROJECTS,
    FETCH_PROJECT
} from './types'

export const fetchProjects = (username) => async dispatch => {
    const response = await github.get(`/users/${username}/repos`)
    dispatch({ type: FETCH_PROJECTS, payload: response.data })
    history.push(`/${username}`)
}

export const fetchProject = (username, projectname) => async dispatch => {
    const response = await axios.get(`https://raw.githubusercontent.com/${username}/${projectname}/master/README.md`)
    dispatch({ type: FETCH_PROJECT, payload: response.data })
}