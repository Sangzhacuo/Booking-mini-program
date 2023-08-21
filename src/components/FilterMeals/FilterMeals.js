import React, { useEffect, useState } from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import classes from './FilterMeals.module.css'

export default function FilterMeals(props) {

  const [Keyword, setKeyword]=useState('');

  useEffect(()=>{
    //降低数据过滤的次数，提高用户体验
    //当用户输入完了再过滤，用户输入的过程中，不要过滤
    //当用户停止输入动作1秒后，我们才做查询
    const timer = setTimeout(()=>{
       props.onFilter(Keyword);
    },1000);

    return ()=>{
      clearTimeout(timer);
    };
    //在Effect的回调函数中，可以指定一个函数作为返回值
    //这个函数我们可以称其为清理函数，它会在下次Effect执行前调用
    //我们就可以在这个函数中做一些工作来清除上次Effect执行所带来的影响
  },[Keyword]);


  const inputChangeHandler = e =>{
    setKeyword(e.target.value.trim());
    //props.onFilter(keyword);
  };

  return (
    <div className={classes.FilterMeals}>
        <div className={classes.InputOuter}>
            <input 
              value={Keyword}
              onChange={inputChangeHandler}
              className={classes.SearchInput}
              type="text" placeholder={"请输入关键字"}/>
            <FontAwesomeIcon 
                className={classes.SearchIcon}
            icon={faSearch}/>
        </div>
    </div>
  )
}
