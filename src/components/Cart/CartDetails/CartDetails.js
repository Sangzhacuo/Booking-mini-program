import React, { useContext, useState } from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import classes from './CartDetails.module.css'
import CartContext from '../../../store/cart-context';
import Meal from '../../Meals/Meal/Meal'
import Confirm from '../../UI/Confirm/Confirm';

export default function CartDetails() {

  const ctx = useContext(CartContext);

  //设置state控制确认框的显示
  const [showConfirm,setshowConfirm] =useState(false);

  //添加函数显示确认窗口
  const showConfirmHandler = ()=>{
    setshowConfirm(true);
  }

  const cancelHandler =(e)=>{
    e.stopPropagation();
    setshowConfirm(false);
  }

  const okHandler =()=>{
    ctx.cartDispatch({type:'CLEAR'});
  }

  return (
    <Backdrop>
        {showConfirm && <Confirm 
            onCancel={cancelHandler}
            onOk={okHandler}
            confirmText={'确认清空购物车吗'}/>}

        <div 
            className={classes.CartDetails}
            onClick={e => e.stopPropagation()}    
        >
            <header className={classes.Header}>
                <h2 className={classes.Title}>餐品详情</h2>
                <div 
                    onClick={showConfirmHandler}
                    className={classes.Clear}>
                    <FontAwesomeIcon icon={faTrash}/> 
                    清空购物车
                </div>
            </header>

            <div className={classes.MealList}>
                {
                    ctx.items.map(item => 
                        <Meal key={item.id}
                              noDesc
                              meal={item}
                        />)
                }
            </div>
        </div>
    </Backdrop>
  )
}
