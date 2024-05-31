import React from 'react'
import CountUp from 'react-countup'

const Counter = ({ end, suffix }) => {
  return (
    <CountUp end={end} scrollSpyOnce={true} suffix={suffix} enableScrollSpy />
  )
}

export default Counter
