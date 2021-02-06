import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

let FullCalendar
export default function Home(props) {
  const [calendarLoaded, setCalendarLoaded] = useState(false)
  useEffect(() => {
    FullCalendar = dynamic({
      modules: () => ({
        calendar: import('@fullcalendar/react'),
        dayGridPlugin: import('@fullcalendar/daygrid'),
        timeGridPlugin: import('@fullcalendar/timegrid')
      }),
      render: (props, { calendar: Calendar, ...plugins }) => (
        <Calendar {...props} plugins={Object.values(plugins)} ref={props.myRef} />
      ),
      ssr: false
    })
    setCalendarLoaded(true)
  })
  let showCalendar = (props) => {
    if ( !calendarLoaded ) return <div>Loading ...</div>
    return (
      <FullCalendar {...props} />
    )
  }
  return (
    <div>
      {showCalendar(props)}
    </div>
  )
}
