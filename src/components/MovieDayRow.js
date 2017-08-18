import Imax from 'react-icons/lib/md/photo-size-select-large'
import ThreeD from 'react-icons/lib/md/3d-rotation'
import Calendar from 'react-icons/lib/fa/calendar'
import { PropTypes } from 'react'

export const MovieDayRow = ({ movie, date, isImax, isThreeD }) => (
  <tr>
    <td>{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</td>
    <td>{movie}</td>
    <td>{(isImax) ? <Imax/> : null}</td>
    <td>{(isThreeD) ? <ThreeD/> : null}</td>
  </tr>
)

MovieDayRow.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  total: PropTypes.number,
  isImax: PropTypes.bool,
  isThreeD: PropTypes.bool
}
