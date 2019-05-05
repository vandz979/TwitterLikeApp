import React, {Component} from "react";
import {getsearch,setlike} from "../../store/action";
import {connect} from "react-redux";
import {Card} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import classes from "./SearchPage.module.css";

class Search extends Component {

    componentDidUpdate(){
        console.log(this.props.data);
    }

    searchHandler = (event) => {
        const e = event.target.value;

        if(event.key === 'Enter'){            
            this.props.search(e)
        }
    }

    likeHandler = (id) => {

        this.props.like(id);

    }
    


    render(){

        let search = this.props.data.map((cur) => {
            return (<div className = {classes.card} key={cur.id}>
                        <Card>
                            <p>{cur.email}</p>
                            <p>{cur.body}</p>
                            <FontAwesomeIcon onClick={() => this.likeHandler(cur.id)} size="sm" icon="heart" color={cur.color}/>
                        </Card>
                        
                    </div>)});       
        

        return(
            <div className={classes.top}>
                <input type="text" placeholder="Search your tweet and like post by selecting the grey heart icon...(try searching niki, john...)" onKeyDown={this.searchHandler}/>
                {search}
            </div>
        )
    }

}

const mapToProps = (state) => {
    return{
        data: state.ser.data
        
    };
};

const mapToDispatch = (dispatch) => {
    return {
        search: (e) => dispatch(getsearch(e)),
        like: (id) => dispatch(setlike(id))
    };

};

export default connect(mapToProps,mapToDispatch)(Search);