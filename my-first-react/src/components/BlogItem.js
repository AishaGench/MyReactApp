import React, {Component} from 'react';


class BlogItem extends Component{
    render(){
        console.log(this.props) 
        return(
            <>
            <h2>BLOG ITEM</h2>
            <h3>Title:</h3>
            <h3>Description:{this.props.blogMessage}</h3>
            <p>{this.props.text}</p>
            <h2>Author Name: {this.props.data.uName} {this.props.data.lastName}</h2>

            
            
            
            
            </>
        )
    }
}
export default BlogItem