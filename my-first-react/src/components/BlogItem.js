import React, {Component} from 'react';
import PropTypes from 'prop-types';


class BlogItem extends Component{

    constructor(props){
        super(props)
            console.log('Hello from constructor function...')
            console.log(props)
        
    }

    static propTypes ={
        blogMessage: PropTypes.string,
        //data: PropTypes.object,
        text: PropTypes.string.isRequired,
        data: PropTypes.shape({uName: PropTypes.string.isRequired, age:PropTypes.number})
      };


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