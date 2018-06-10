import React from 'react'
import PropTypes from 'prop-types'
import Event from './event'

export function foo(events){
  return events.map( (event) => {return <Event event={event} key={event.id} />})
}

export default function DailyAgenda({agenda_date, events}){
  let returnedEvents = foo(events);
  return(
    <div className="daily-agenda-section">
      <div>{agenda_date}</div>
      <div>{returnedEvents}</div>
    </div>
  )
}

DailyAgenda.propTypes = {
  agenda_date: PropTypes.string,
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    topic: PropTypes.string,
    occurs_at: PropTypes.string,
    location: PropTypes.string,
    committee_name: PropTypes.string,
    subcommittee_name: PropTypes.string
  }))
}

DailyAgenda.defaultProps = {
  agenda_date: '2018-06-09',
  events: [
    {
      id: 5,
      topic: 'topic',
      occurs_at: '2018-06-09 09:12:23',
      location: 'MZ 231',
      committee_name: 'committee name',
      subcommittee_name: 'subcommittee name'
    },
    {
      id: 6,
      topic: 'topic',
      occurs_at: '2018-06-09 09:12:23',
      location: 'MZ 231',
      topic: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec dui a leo mattis facilisis. Nulla eget massa vel elit ullamcorper laoreet. Nullam non ipsum imperdiet, efficitur metus vel, malesuada nisl. Curabitur laoreet, sem sit amet pellentesque tempor, est risus varius lacus, eget molestie elit ipsum a mauris.",
      subcommittee_name: 'subcommittee name'
    }
  ]
}