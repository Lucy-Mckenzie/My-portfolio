import { useState } from 'react'

export default function DayNightToggle() {
  const [day, setDay] = useState(false)

  const toggleDayNight = () => {
    setDay((prev) => !prev)
  }

  return (
    <div>
      <button onClick={toggleDayNight}>
        <img
          src={day ? '/images/day.png' : '/images/night.png'}
          alt={day ? 'Day' : 'Night'}
          className="w-10 h-10"
        />
      </button>
    </div>
  )
}
