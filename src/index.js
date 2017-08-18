import React from 'react'
import { render } from 'react-dom'
import './styles/ui.scss'
import { MovieDayCount } from './components/MovieDayCount'
import { MovieDayList } from './components/MovieDayList'

window.React = React

render(
  <MovieDayCount/>,
  document.getElementById('react-container')
)

render(
  <MovieDayList total={50}
                  imax={20}
                  threeD={10}
                  goal={100}
                  days={
                  [
                    {
                      movie: 'Dunkirk',
                      date: new Date('8/17/2017'),
                      isImax: false,
                      isThreeD: false
                    },
                    {
                      movie: 'Valerian and the City of a Thousand Planets',
                      date: new Date('8/4/2017'),
                      isImax: false,
                      isThreeD: false
                    },
                    {
                      movie: 'Wonder Woman',
                      date: new Date('7/5/2017'),
                      isImax: false,
                      isThreeD: false
                    },
                    {
                      movie: 'Alien: Covenant',
                      date: new Date('6/10/2017'),
                      isImax: true,
                      isThreeD: false
                    }
                  ]
                  }/>,
  document.getElementById('react-container')
)
