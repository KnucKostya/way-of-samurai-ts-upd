import React from 'react';
import s from './Post.module.css';

type Postpropstype = {
    message: string
    like: number
}

const Post = (props:Postpropstype) => {

    return <div className={s.posts}>
        <div className={s.item}>
            {props.message}
            <button className={s.button}>{props.like} like</button>
        </div>
    </div>
}
export default Post;


