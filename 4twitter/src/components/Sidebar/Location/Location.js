import React, {Component} from "react";

import classes from "./Location.module.css";
import {Card,CardBody,CardTitle} from "reactstrap";
import {connect} from "react-redux";


class LocationCard extends Component {

    render() {
        return(
            <Card className={classes.test}>
                <CardBody className={classes.cardb}>
                    <CardTitle className={classes.cardb}>
                        <ul>
                            <li><strong>City: </strong>{this.props.loc.city}</li>
                            <li><strong>State: </strong>{this.props.loc.state}</li>
                            <li><strong>Country: </strong>{this.props.loc.country}</li>
                            <li><strong>Region: </strong>{this.props.loc.region}</li>
                        </ul>
                    </CardTitle>
                </CardBody>
            </Card>
    )
        
    }

}

const mapToProps = (state) => {
    return{
        loc: state.main.location
        
    };
};


export default connect(mapToProps)(LocationCard);