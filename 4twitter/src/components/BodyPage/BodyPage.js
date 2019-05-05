import React, {Component} from "react";

import classes from "./BodyPage.module.css";
import {Card,CardBody,CardTitle} from "reactstrap";
import {connect} from "react-redux";

class BodyCard extends Component {

    render() {

        let tweets = this.props.cons.map((cur) => {
            return (<div key={cur.id}>
                        <img src={this.props.sr} alt="profile pic"/><p>{cur.body}</p>
                    </div>)
        })

        return(
            <Card className={classes.test}>
                <CardBody className={classes.cardb}>
                    <CardTitle >
                       <strong> Welcome to a Twitter like App. List your tweets, post a tweet, search and like tweets!</strong>
                    </CardTitle>
                    <div className={classes.list}>
                        {tweets}
                    </div>                    
                </CardBody>
            </Card>
    )
    }

}
    


const mapToProps = (state) => {
    return{
        sr: state.main.generaldata.source,
        cons: state.main.tweets
        
    };
};


export default connect(mapToProps)(BodyCard);