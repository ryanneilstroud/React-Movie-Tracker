import '../styles/ui.scss'
import Imax from 'react-icons/lib/md/photo-size-select-large'
import ThreeD from 'react-icons/lib/md/3d-rotation'
import Calendar from 'react-icons/lib/fa/calendar'
import { PropTypes } from 'react'

const decimalToPrecent = (decimal) => {
  return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
  return decimalToPrecent(total / goal)
}

export const MovieDayCount = ({total = 70, imax = 20, threeD = 10, goal = 100}) => (
  <div className="movie-count">
    <div className="total-days">
      <span>{total}</span>
        <Calendar/>
      <span>days</span>
    </div>
    <div className="imax-days">
      <span>{imax}</span>
        <Imax/>
      <span>imax movies</span>
    </div>
    <div className="3d-days">
      <span>{threeD}</span>
        <ThreeD/>
      <span>3d days</span>
    </div>
    <div>
      <span>{calcGoalProgress(total, goal)}</span>
    </div>
  </div>
)

MovieDayCount.propTypes = {
  total: PropTypes.number,
  imax: PropTypes.number,
  threeD: PropTypes.number
}
