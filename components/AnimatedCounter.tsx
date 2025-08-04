'use client'
import React from 'react'
import CountUp from 'react-countup';
import { formatAmount } from '@/lib/utils';
const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
    <CountUp end = {amount} prefix={formatAmount(amount)[0]} decimal="." decimals={2} duration ={1}/>
  )
}

export default AnimatedCounter