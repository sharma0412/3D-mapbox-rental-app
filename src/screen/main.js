import React, { createRef } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { View, StyleSheet } from 'react-native'

const Main = () => {

    const mapStyle = [

        {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#06033b"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#49cee2"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#09ff00"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#160066"
                },
                {
                    "visibility": "on"
                }
            ]
        },

        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#e90000"
                }
            ]
        },

        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#160066"
                },
                {
                    "visibility": "on"
                }
            ]
        },

        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#160066"
                },
                {
                    "visibility": "on"
                }
            ]
        },


        {
            "featureType": "landscape.natural.landcover",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#06033b"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [{
                "saturation": "-67"
            }, {
                "visibility": "on",
            },
            {
                "color": "#06033b"
            }, {
                "saturation": 10
            }

            ]
        },
        {
            "featureType": "landscape.man_made.building",
            "elementType": "geometry.fill",
            "stylers": [
                { "color": "#ffff00" }]
        }


        // {
        //   featureType: "administrative.country",
        //   elementType: "geometry.fill",
        //   stylers: [
        //     {
        //       "color": "red",
        //     },
        //     {
        //       visibility: "on",
        //       // lightness:-100

        //     }

        //   ]
        // },

        //   {
        //     featureType: "landscape",

        //     stylers: [
        //       {
        //         visibility: "on",
        //         lightness:-100
        //       } 
        //     ]
        //   },
        //   {
        //     featureType: "landscape.man_made",
        //     elementType: "geometry",
        //     stylers: [
        //       {
        //         "color": "#060336",
        //       },
        //       {
        //         visibility: "on",
        //       }
        //     ]
        //   },

        //   {
        //     featureType:"landscape",
        //     elementType:"geometry.fill",
        //     stylers:[
        //        {
        //           "color":"#101136"
        //        },
        //        {
        //           lightness:0.1
        //        }
        //     ]
        //  },

        //   {
        //     featureType: "water",
        //     elementType: "all",
        //     stylers: [
        //       { visibility: "on" ,
        //     "color":"#60a2f7"}
        //     ]
        //   },
        //   {
        //     featureType: "administrative.land_parcel",
        //     elementType: "all",
        //     stylers: [
        //       { visibility: "on" ,
        //     "color":"#ddff19"}
        //     ]
        //   },

        //   {
        //     featureType: "road.highway",
        //     elementType: "all",
        //     stylers: [
        //       { visibility: "on" ,
        //     "color":"#23543f"}
        //     ]
        //   },
        //   {
        //     featureType: "poi.park",
        //     elementType: "all",
        //     stylers: [
        //       { visibility: "on" ,
        //     "color":"#045700"}
        //     ]
        //   },
        //   {
        //     featureType: "landscape.natural.terrain",
        //     elementType: "all",
        //     stylers: [
        //       { visibility: "on" ,
        //     "color":"#1d2c4d"}
        //     ]
        //   },

        //   // {
        //   //   featureType: "landscape.man_made",
        //   //   elementType: "all",
        //   //   stylers: [
        //   //     { visibility: "on" ,
        //   //   "color":"#1d2c4d"}
        //   //   ]
        //   // },

        //     {
        //       featureType: "administrative",
        //       elementType: "all",
        //       stylers: [
        //         { visibility: "on",
        //         "color": "#1d2c4d" }
        //       ]
        //     },{
        //       featureType: "landscape.natural",
        //       elementType: "all",
        //       stylers: [
        //         { visibility: "on",
        //       "color":"#18631c" }
        //       ]
        //     },{
        //       featureType: "poi",
        //       elementType: "all",
        //       stylers: [
        //         { visibility: "off" }
        //       ]
        //     },{
        //       featureType: "road",
        //       elementType: "all",
        //       stylers: [
        //         { visibility: "on",
        //         "color": "#1d2c4d" }
        //       ]
        //     },{
        //       featureType: "transit",
        //       elementType: "all",
        //       stylers: [
        //         { visibility: "on",
        //       "color":"#7390ba" }
        //       ]
        //     },{
        //       featureType: "water",
        //       elementType: "labels",
        //       stylers: [
        //         { visibility: "on",
        //       "color":"#0a6cff" }
        //       ]
        //     }
    ]




    const mapView = React.createRef();
    const animateMap = () => {
        mapView.current.animateToViewingAngle({
            latitude: 37.78825,
            longitude: 37.788254,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
        }, 2000);
        mapView.current.animateToViewingAngle(60, 90)

    }

    return (
        <View style={styles.container}>

            <MapView

                animateMap={animateMap}

                ref={mapView}
                customMapStyle={mapStyle}

                style={{ height: '100%', width: '100%' }}
                rotateEnabled={true}
                region={{

                    latitude: 50.450, longitude: 30.5234,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                    MapType: 'hybrid',
                    showsBuildings: true,
                    showsTraffic: true,
                    // HYBRIDFLYOVER: "hybridFlyover",
                    showsScale: 'true',
                    zoomTapEnabled: 'true',
                    scrollEnabled: 'true',
                    pitchEnabled: 'true',
                    // flat:"true",
                    showsCompass: "true",
                    scrollDuringRotateOrZoomEnabled: 'true',

                }}

            >
                <Marker
                    coordinate={{ latitude: 50.450, longitude: 30.5234 }} />
            </MapView>
        </View>

    )
}

export default Main

const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

});
