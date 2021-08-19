import React, { Component } from "react";
import Map from '../Map/Map';
import { getCurrentLatLng } from '../../services/geolocation';
import './CommunityEvents.css'

export default class CommunityEvents extends Component{

    state = {
        lat: null,
        lng: null
    };

    async componentDidMount() {
        // Destructure the object returned from getCurrentLatLng()
        const {lat, lng} = await getCurrentLatLng();
        this.setState({lat, lng});
        console.log(lat, lng);
    }

    render(){
    return (
        <div className="CommunityEvents">
            <div>
                <Map className="map" lat={this.state.lat} lng={this.state.lng}/>
            </div>
        </div>
    )
    }
}