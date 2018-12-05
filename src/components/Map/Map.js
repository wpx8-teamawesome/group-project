import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './map.css'


class MapContainer extends Component {
    constructor() {
        super()
        this.state ={
            loadLat: 33.4484,
            loadLng: -112.0740,
            markerClicked: false,
            markerArray: [
                {title: "JavaScript Event", lat:33.44, lng: -112.095, address: "123 Bananna St" },
                {title: "React Hackathon", lat:33.445, lng: -112.06, address: "715 Street Road" },
                {title: "Gaming thing", lat:33.454, lng: -112.045, address: "999 Phoenix Blvd" },
            ],
            markerEventTitle: '',
            markerEventAddress: '',
            showInfoWindow: false,
            activeMarker: {}

        }
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
        // console.log(marker.title)
        this.setState({
            activeMarker: marker,
            showInfoWindow: !this.state.showInfoWindow,
            markerClicked: !this.state.markerClicked,
            markerEventTitle: marker.title,
            markerEventAddress: marker.address
        })
    } 
    
  render() {
    //   console.log(this.props.google)
      const {loadLat, loadLng, markerArray, markerEventTitle, markerEventAddress} = this.state
      const markerList = markerArray.map(marker => {
          return <Marker
            address={marker.address}
            title={marker.title}
            position ={{
                lat: marker.lat,
                lng: marker.lng
            }}  
            onClick={this.onMarkerClick} />


      })
  
    return (
        <div className="map-box-main">
            <div className="map-box">
                <Map google={this.props.google} 
                    zoom={14}
                    initialCenter={{
                        lat: loadLat,
                        lng: loadLng
                    }}>
                
                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
                {/* <Marker position={{
                        lat:33.454, lng:-112.045}}
                        name={'Current location'} 
                        title={'Tooltip'}
                        onClick={this.handleMarkerClick}/>
                         */}
                {markerList}         
               
                <InfoWindow 
                    marker={this.state.activeMarker}
                    visible={this.state.showInfoWindow}
                    onClose={this.onInfoWindowClose}>
                  <h1>{markerEventTitle}</h1>
                  <p>{markerEventAddress}</p>
                  <a href="x">This is a link</a>
                </InfoWindow>
                </Map>
                
        </div>
        
        <div className={!this.state.markerClicked? "hidden": "red-box" }>
        <h1>{markerEventTitle}</h1>
        <h1>{markerEventAddress}</h1>
        </div>
      </div>
    )
  }
}

export default GoogleApiWrapper({apiKey: ("AIzaSyDEjGYVDiCONzrWviHF2Sx0Qokd10dc68c")})(MapContainer)
// export default GoogleApiWrapper({apiKey: ("AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo")})(MapContainer)
