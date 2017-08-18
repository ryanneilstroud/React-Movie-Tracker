import Imax from 'react-icons/lib/md/photo-size-select-large'
import ThreeD from 'react-icons/lib/md/3d-rotation'
import Calendar from 'react-icons/lib/fa/calendar'
import { MovieDayRow } from './MovieDayRow'
import { PropTypes } from 'react'

export const MovieDayList = ({days}) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Movie</th>
        <th>Imax</th>
        <th>ThreeD</th>
      </tr>
    </thead>
    <tbody>
      {days.map((day, i) =>
        <MovieDayRow key={i}
                    {...day}/>
      )}
    </tbody>
  </table>
)

MovieDayList.propTypes = {
  days: function (props) {
    if (!Array.isArray(props.days)) {
      return new Error(
        'MovieDayList should be an array'
      )
    } else if (!props.days.length) {
      return new Error(
        'MovieDayList must have at least one record'
      )
    } else {
      return null
    }
  }
}
