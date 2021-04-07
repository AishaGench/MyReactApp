import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../styles/BlogItem.css'


class BlogItem extends Component{

    constructor(props){
        super(props)
            console.log('Hello from constructor function...')
            console.log(props)
            this.state={
                name:'Aysegul',
                lastName:'Gench',
                age:40,
                address:'77400 Richmond'
            }
        
    }

    static propTypes ={
        blogMessage: PropTypes.string.isRequired,
        //data: PropTypes.object,
        text: PropTypes.string.isRequired,
        data: PropTypes.shape({uName: PropTypes.string.isRequired, age:PropTypes.number})
      };

      buttonClick=()=>{
          console.log("Hello from BLOG ITEM")
      }


    render(){
        console.log(this.props);
        const myStyle = {
            color: "coral",
            backgroundColor: "cyan"
          }
        return(
            <>
             <h2 style={{color:"coral", fontFamily:"Comic Sans"}}>BLOG ITEM</h2>
             <h3 className="subtitle">Title:</h3>
            <h3>Description:{this.props.blogMessage}</h3>
            <p style={myStyle}>{this.props.text}</p>
            <h2>Author Name: {this.props.data.uName} {this.props.data.lastName}</h2>
            <button onClick={this.buttonClick.bind(this)}>ADD</button>
            <button onClick={this.props.blogClick}>CLICK</button>
            <hr/>
            <p>{this.state.name}</p>

            </>
        );
    }
}
export default BlogItem