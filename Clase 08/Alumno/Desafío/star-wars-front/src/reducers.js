import { combineReducers } from 'redux'
import peoplePage from './PeoplePage/reducer'
import filmPage from './FilmPage/reducer'

const starWars = combineReducers({
  peoplePage,
  filmPage
})

export default starWars
