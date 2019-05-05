import React , {Component} from "react";

import classes from "./Namecard.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Card, CardImg, CardText, CardBody,CardTitle, Button} from "reactstrap";
import {connect} from "react-redux";
import {gettweets} from "../../../store/action";

class NameCard extends Component {

    componentDidUpdate() {
        console.log(this.props.cons);
    }

    render(){
        return(
            <Card className={classes.test}>
                <CardImg top width="100%" src={this.props.gd.source} alt="Card image cap" />
                <CardBody className={classes.cardb}>
                    <CardTitle className={classes.cardb}><strong>{this.props.gd.name}</strong></CardTitle>
                    <CardText>{this.props.gd.summary} <FontAwesomeIcon size="sm" icon="tree" color="#78AB46"/></CardText>
                    <Button onClick={this.props.listtweets}>List your Tweets!</Button>
                </CardBody>
            </Card>
    )
    }

}

const mapToProps = (state) => {
    return{
        gd: state.main.generaldata,
        cons: state.main.tweets
        
    };
};

const mapToDispatch = (dispatch) => {
    return {
        listtweets: () => dispatch(gettweets())
    };

};


export default connect(mapToProps,mapToDispatch)(NameCard);