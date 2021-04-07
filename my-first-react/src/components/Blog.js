import React, {Component} from 'react';
import BlogItem from './BlogItem';


export default class Blog extends Component{
render(){
    let greet = 'Welcome to here'
    let userInfo = {
        uName:'Aysegul', 
        lastName:'Gench',
        age: 40
    }

    const text =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet tempor mi, non rhoncus leo. 
    Vestibulum pellentesque suscipit facilisis. Donec tempor neque in nisi malesuada, sed gravida urna rutrum. 
    Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sit amet elit molestie leo rutrum ultrices.
    Ut tempor urna a purus molestie, ac faucibus enim consequat. Proin facilisis vestibulum enim, et fringilla mi fringilla quis.
    Duis accumsan sem at ultrices aliquam. Donec consectetur, dolor vel porttitor egestas, tortor nibh porta massa, at venenatis quam libero vitae libero.
    Phasellus enim nulla, ornare ut nunc nec, volutpat pulvinar nunc. Cras non tempus arcu. Cras id efficitur lectus. Phasellus eleifend nisl id gravida varius. 
    Curabitur odio purus, sagittis vel magna nec, sodales sodales elit. Vivamus et orci mi. Phasellus ac ullamcorper massa. 
    Mauris convallis nisl et lorem convallis, vel consequat lacus suscipit. 
    Vestibulum tempor leo sed urna tincidunt, nec rhoncus purus semper. Fusce non nisl bibendum, facilisis lorem ac, ultricies est.`

    return (
        <div className="Blog" >
         <h1>THIS is BLOG COMPONENT</h1>
         <h3>{greet}</h3>
         <BlogItem blogMessage="This is a message from BLOG.JS" data={userInfo} text={text}/>
        {/* <BlogItem blogMessage={blogMessage} text={text}/> */}
      </div>
       
    )
}
}
//export default Blog