import { Component } from 'react'
import { MovieDayList } from './MovieDayList'
import { MovieDayCount } from './MovieDayCount'

export class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      allMovieDays: [
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
    }
  }

  countDays (filter) {
    const { allMovieDays } = this.state
    return allMovieDays.filter((day) => (filter) ? day[filter] : day).length
  }

  render () {
    return (
      <div className="app">
        <MovieDayList days={this.state.allMovieDays}></MovieDayList>
        <MovieDayCount total={this.countDays()}
                        imax={this.countDays('imax')}
                        isThreeD={this.countDays('threeD')}></MovieDayCount>
      </div>
    )
  }
}
