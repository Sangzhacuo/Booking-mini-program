import React from "react";
import calsses from './Backdrop.module.css'
import ReactDOM from "react-dom";


const BackdropRoot = document.getElementById('backdrop-root');

export default function Backdrop(props) {
  return ReactDOM.createPortal(<div 
    {...props}
    className={`${calsses.Backdrop} ${props.className}`}>
    {props.children}
  </div>,BackdropRoot);
}
