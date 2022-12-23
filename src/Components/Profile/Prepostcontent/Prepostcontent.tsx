import React from 'react';
import s from './Prepostcontent.module.css';

let Prepostcontent = () =>{

    return <div className={s.content}>
        <div>
            <img className={s.img} src='https://image.shutterstock.com/image-vector/surfing-beach-svg-illustration-design-260nw-2181165831.jpg' />
        </div>
        <div>
            ava + description
        </div>
    </div>
}
export default Prepostcontent;