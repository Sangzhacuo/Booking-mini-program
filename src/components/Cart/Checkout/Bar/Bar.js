import React from 'react'
import classes from './Bar.module.css'

export default function Bar(props) {
  return (
    <div className={classes.Bar}>
       <div className={classes.TotalPrice}>{props.totalPrice}</div>
       <buttton className={classes.Button}>去支付</buttton>
    </div>
  )
}
