import { useEffect, useState } from 'react'
import { Bulb } from 'components'

const RED_INTERVAL = 5000
const YELLOW_INTERVAL = 2000
const GREEN_INTERVAL = 5000

const TrafficLights = () => {
  const [lights, setLights] = useState({
    red: false,
    yellow: false,
    green: true,
  })

  useEffect(() => {
    if (lights.red && !lights.yellow) {
      setTimeout(() => {
        setLights({
          red: true,
          yellow: true,
          green: false,
        })
      }, RED_INTERVAL)
    }
    if (lights.red && lights.yellow) {
      setTimeout(() => {
        setLights({
          red: false,
          yellow: false,
          green: true,
        })
      }, YELLOW_INTERVAL)
    }
    if (lights.green) {
      setTimeout(() => {
        setLights({
          red: false,
          yellow: true,
          green: false,
        })
      }, GREEN_INTERVAL)
    }
    if (lights.yellow && !lights.red) {
      setTimeout(() => {
        setLights({
          red: true,
          yellow: false,
          green: false,
        })
      }, YELLOW_INTERVAL)
    }
  }, [lights])

  return (
    <div className="grid gap-5 rounded-xl border-2 border-zinc-500 bg-zinc-800 p-5">
      <Bulb variation="red" isActive={lights.red} />
      <Bulb variation="yellow" isActive={lights.yellow} />
      <Bulb variation="green" isActive={lights.green} />
    </div>
  )
}

export default TrafficLights
