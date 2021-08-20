
import React, { Component } from "react";
import Map from '../../components/Map/Map';
import { Link } from 'react-router-dom';
import { getCurrentLatLng } from '../../services/geolocation';

export default class EventsPage extends Component{

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
        <div>
            <div>
                <Map className="map" lat={this.state.lat} lng={this.state.lng}/>
            </div>
        </div>
    )
    }
}