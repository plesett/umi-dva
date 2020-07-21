import React from 'react';
import { Redirect } from 'umi';


export default (props: any) => {
    const isLogin = true;
    if (isLogin) {
        console.log("权限正常")
        return props.children
    } else {
        console.log("您没有权限")
        return <Redirect to="/" />
    }
}
