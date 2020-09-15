import routerlist from "../router/router"
import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
/*
，如果使用锚点元素实现，在每次点击时，页面被重新加载，
React Router提供了<Link>组件用来避免这种状况发生。
当 你点击<Link>时，url会更新，组件会被重新渲染，
但是页面不会重新加
*/
function link(e){
    e.persist();
    var path=e.target.value;
    console.log(e.target.value)
  routerlist.map(e=>{
        if(e.path===path){
           
            return <Route path={e.path} component={e.component}></Route>
            ;
            
        }
    });
}
export default link;
//e.target.value获取值问题