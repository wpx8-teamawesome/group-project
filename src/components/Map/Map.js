import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Geocode from "react-geocode"
import './map.scss'
import { connect} from 'react-redux'



class MapContainer extends Component {
    constructor(props) {
        super(props)
        this.state ={
            loadLat: this.props.loadLat || 33.4483771,
            loadLng: this.props.loadLng || -112.0740373,
            // loadLat: "33.4484",
            // loadLng: "-112.0740",
            markerClicked: false,
            markerArray: [],
            // markerArray: [
            //     {title: "JavaScript Event", lat:33.44, lng: -112.095, address: "123 Bananna St" },
            //     {title: "React Hackathon", lat:33.445, lng: -112.06, address: "715 Street Road" },
            //     {title: "Gaming thing", lat:33.454, lng: -112.045, address: "999 Phoenix Blvd" },
            // ],
            markerEventTitle: '',
            markerEventAddress: '',
            markerEventId: '',
            showInfoWindow: false,
            activeMarker: {}
        }
    }
    componentDidMount() {
       Geocode.setApiKey(process.env.REACT_APP_MAPS_API_KEY);
       this.setState({
           markerArray: this.props.events
       })
    }

    tempButtonClick = () => {
        Geocode.fromAddress("725 5th Ave, New York, NY 10022").then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
            //   console.log(lat, lng)
              this.setState({
                loadLat: lat,
                loadLng: lng
            })
            },
            error => {
              console.error(error);
            }
          );
    }

    handleMarkerClick = (title, address) => {

        this.setState({
            markerClicked: !this.state.markerClicked,
            markerEventTitle: title,
            markerEventAddress: address,
            showInfoWindow: true
        })
        this.props.google.maps.InfoWindow.prototype.open()
    }
    onMarkerClick = (props, marker, e) => {
        this.setState({
            activeMarker: marker,
            showInfoWindow: !this.state.showInfoWindow,
            markerClicked: !this.state.markerClicked,
            markerEventTitle: marker.title,
            markerEventAddress: marker.address,
            markerEventId: marker.id
        })
    } 
    
  render() {

      const {loadLat, loadLng, markerEventTitle, markerEventAddress, markerEventId} = this.state
      const { events } = this.props

      const markerList = events.map(marker => {
          return <Marker
            id={marker.id}
            key={marker.id}
            address={marker.address}
            title={marker.title}
            position ={{
                lat: marker.location.lat,
                lng: marker.location.lng
            }}  
            onClick={this.onMarkerClick} />
      })
  
    return (
        <div className="map-box-main">
            <div className="map-box">
                <Map google={this.props.google} 
                    zoom={13.5}
                    center={{
                        lat: loadLat,
                        lng: loadLng
                    }}
                    initialCenter={{
                        lat: loadLat,
                        lng: loadLng
                    }}>
                {markerList}         
               
                <InfoWindow 
                    marker={this.state.activeMarker}
                    visible={this.state.showInfoWindow}
                    onClose={this.onInfoWindowClose} >
                    <>
                        <h1>{markerEventTitle}</h1>
                        <p>{markerEventAddress}</p>
                        <a href={`/event/${markerEventId}`}>See Event Page</a>
                    </>
                </InfoWindow>

                </Map>
                
            </div>
            {/* <button onClick={this.tempButtonClick}>Click me!</button> */}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    const { user } = state;
    return {
        user
    }
}

const childHOC = GoogleApiWrapper({apiKey: (process.env.REACT_APP_MAPS_API_KEY)})(MapContainer)
export default connect(mapStateToProps)(childHOC)

