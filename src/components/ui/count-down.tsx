'use client'
import { type FC, useEffect, useState } from 'react'

function pad(value: number): string {
  return value.toString().padStart(2, '0')
}

// eslint-disable-next-line react-refresh/only-export-components
export function getRemainingTime(targetDate: Date) {
  const now = new Date().getTime()
  const target = targetDate.getTime()
  const diff = target - now

  if (diff <= 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    }
  }

  const secondsInMs = 1000
  const minutesInMs = secondsInMs * 60
  const hoursInMs = minutesInMs * 60
  const daysInMs = hoursInMs * 24

  const days = Math.floor(diff / daysInMs)
  const hours = Math.floor((diff % daysInMs) / hoursInMs)
  const minutes = Math.floor((diff % hoursInMs) / minutesInMs)
  const seconds = Math.floor((diff % minutesInMs) / secondsInMs)

  const d = pad(days)
  const h = pad(hours)
  const m = pad(minutes)
  const s = pad(seconds)

  return {
    days: d,
    hours: h,
    minutes: m,
    seconds: s,
  }
}

export interface CircularProgressProps {
  progress: number
  timer: string
  content?: string
  color?: string
}

const CircularProgress: FC<CircularProgressProps> = ({
  progress,
  timer,
  content,
  color = '#fD743d',
}) => {
  return (
    <div
      className="relative grid aspect-square size-[151px] place-content-center rounded-full before:absolute before:bottom-[44px] before:left-1/2 before:-translate-x-1/2 before:text-2xl before:text-[#333333] before:content-[attr(data-content)] after:flex after:aspect-square after:size-[140px] after:justify-center after:rounded-full after:bg-white after:pt-8 after:text-4xl after:font-medium after:text-[#333333] after:tabular-nums after:content-[attr(data-progress)]"
      style={{ background: `conic-gradient(#D7D7D7 ${progress}%, ${color} 0)` }}
      data-progress={timer}
      data-content={content}
    />
  )
}

const CountdownWithProgress = () => {
  const [remainingTime, setRemainingTime] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  const launchDate = new Date('2025-11-17T23:59:59')

  useEffect(() => {
    const intervalID = setInterval(() => {
      const remaining = getRemainingTime(launchDate)
      setRemainingTime(remaining)
    }, 1000)

    return () => {
      clearInterval(intervalID)
    }
  },[] )

  const { days, hours, minutes, seconds } = remainingTime
  return (
    <section className="my-12">
      <div className="flex w-full flex-wrap justify-center gap-10">
        <CircularProgress
          progress={100 - (Number(days) / 365) * 100}
          timer={days}
          content="Days"
          color="#FF0000"
        />
        <CircularProgress
          progress={100 - (Number(hours) / 24) * 100}
          timer={hours}
          content="Hours"
          color="#FF0000"
        />
        <CircularProgress
          progress={100 - (Number(minutes) / 60) * 100}
          timer={minutes}
          content="Minutes"
          color="#FF0000"
        />
        <CircularProgress
          progress={100 - (Number(seconds) / 60) * 100}
          timer={seconds}
          content="Seconds"
          color="#FF0000"
        />
      </div>
    </section>
  )
}

export default CountdownWithProgress