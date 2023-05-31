import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, ScrollView, FlatList, TouchableOpacity, Button, ImageEditor } from 'react-native';
import MapboxGL, { FillExtrusionLayer } from '@rnmapbox/maps';
import Navigator from '../../assets/images/navigator.svg'
import Sent from '../../assets/images/sent.svg'
import Contactus from '../../assets/images/contactus.svg'
import Notification from '../../assets/images/notification.svg'
import SearchBar from 'react-native-platform-searchbar';
import styles from './style';
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheet from 'react-native-simple-bottom-sheet';
import WhiteNotification from '../../assets/images/whiteNotification.svg'
import Sharebtn from '../../assets/images/sharebtn.svg'
import Bakerstreet from '../../assets/images/Bakerstreet.svg'
import Fav from '../../assets/images/fav.svg'
import Home from '../../assets/images/home.svg'
import Profile from '../../assets/images/profile.svg'
import GroupA from '../../assets/images/GroupA.svg'
import GroupB from '../../assets/images/GroupB.svg'
import CardSwiper from "../../components/cardSwiper";
import Filter from '../../components/Filter';
import Modal from "react-native-modal";
import { FONTS, ThemeColors } from "../../utlis";
import Furnished from '../Tabscreens/Furnished';
import Chat from '../chat';
import Detail from '../detailscreem';

const { width } = Dimensions.get('window')
const { height } = Dimensions.get('window')


MapboxGL.setWellKnownTileServer("Mapbox")
MapboxGL.setAccessToken("<YOUR API KEY HERE>");


const Mapbox = ({ navigation }) => {

  const [state, setState] = useState(0)

  const panelRef = useRef(null);
  const [value, setValue] = useState("");
  const [latLng, setLatLng] = useState([])
  const [ApiData, SetApiData] = useState([])

  const data = [
    {
      id: 1,
      title: 'Sky Dandelious',
      price: 1100,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiSOAq4SCHtCc052LYXXYeY3T9VCRmOZTbJw&usqp=CAU",
      location: "Mohali it Park",
      website: ''
    },
    {
      id: 2,
      title: 'Mazor Tower',
      price: 1200,
      image: "https://i.ytimg.com/vi/HR8j9qg4wgA/maxresdefault.jpg",
      location: "Chandigarh it Park",
      website: ''
    },
    {
      id: 3,
      title: 'Vk Tower',
      price: 1350,
      image: "https://assets-news.housing.com/news/wp-content/uploads/2018/05/24200911/Ascendas-India-Trust-to-acquire-two-commercial-buildings-in-Hyderabad-for-Rs-1350-crores-FB-1200x628-compressed.jpg",
      location: "Panchkula it Park",
      website: ''
    },
    {
      id: 4,
      title: 'Sk Tower',
      price: 5200,
      image: "https://cdn.pixabay.com/photo/2015/01/15/07/13/empire-state-building-600001__340.jpg",
      location: "it Park",
      website: ''
    },
  ]


  // function togglePanel(params) {
  //   setState(params)
  //   panelRef.current.togglePanel()
  // }

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = (params) => {
    setState(params)
    setModalVisible(!isModalVisible);
  };
  useEffect(() => {

    geocoading()
    BBuilding()
  }, [])

  function BBuilding() {
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': '1845051716msh3c0c5ec0ede4826p1009c8jsn27bf4506476c',
    //     'X-RapidAPI-Host': 'zoopla.p.rapidapi.com'
    //   }
    // };
    // fetch('https://zoopla.p.rapidapi.com/properties/list?area=Paris&identifier=oxford&category=residential&order_by=age&ordering=descending&page_number=1&page_size=40', options)
    //   .then(response => response.json())
    //   .then(response => SetApiData(response),
    //   console.log(ApiData.area_name))
    //   .catch(err => console.error(err));

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '<RAPID_API_KEY>',
        'X-RapidAPI-Host': 'realtor-search.p.rapidapi.com'
      }
    };

    fetch('https://realtor-search.p.rapidapi.com/property/search-rent?location=12746', options)
      .then(response => response.json())
      .then(response =>
        SetApiData(JSON.stringify(response)),
        console.log(ApiData))
      .catch(err => console.error(err));

  }
  function geocoading() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/" + value + ".json?access_token=<ACCESS TOKEN MAPBOX>", requestOptions)
      .then(response => response.json())
      .then((result) => {
        setLatLng(result.features[0]?.center)
        console.log("Features ===>", result.features[0]?.center)
        // console.log("aagye kya",latLng)
      })
      .catch(error => console.log('error', error));


  }
  const renderItem = ({ item }) => (
    <View style={{
      width: width - 50, height: 250, borderRadius: 20, alignSelf: 'center', justifyContent: 'center'
      , marginEnd: 5, marginStart: 5
    }}>
      <Image source={{ uri: item?.image }} style={{ borderRadius: 10, width: '100%', height: height, height: '100%', resizeMode: 'cover', justifyContent: 'center', alignSelf: 'center' }} />
      <View style={{ flexDirection: 'row', width: width }}>
        <Text style={{ color: ThemeColors.white, fontSize: 16, fontWeight: '500' }} >{item.price}</Text>
        <Text style={{ color: ThemeColors.white, fontSize: 16, fontWeight: '500', marginLeft: 10 }} >{item.title}</Text>
      </View>
    </View>

  );
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView
          zoomLevel={10}
          centerCoordinate={latLng}
          // styleURL="mapbox://styles/srvkumar/clao2qoqh003i14n4fmtneli7"
          styleURL="<YOUR CUSTOM MAPBOX STUDIO URL HERE>"
          // showUserLocation={true}
          // styleJSON={mapStyle}
          animated={true}
          buildings={true}
          zoomEnabled={true}
          rotateEnabled={true}
          localizeLabels={true}
          surfaceView={false}
          scrollEnabled={true}
          style={styles.map}
          minZoomLevel={16}
          // onPress={(feature) => console.log('Coordinates :', feature)}
          // onPress={() => togglePanel(1)}
          onPress={() => toggleModal(1)}
          onLongPress={() => BBuilding()}
          // compassEnabled={true}
          logoEnabled={false}
        // compassViewPosition={22}
        // compassFadeWhenNorth={false}
        >
          {/* <MapboxGL.Camera
            centerCoordinate={latLng}
            defaultSettings={{
              centerCoordinate: [-74.0066, 40.7135],
              zoomLevel: 15.5,
              pitch: 80,
              bearing: -17.6,
            }}
          /> */}
        </MapboxGL.MapView>
      </View>
      <View style={styles.searchBarConatainer}>
        {/* 
        <Location width={12} height={15.31} style={styles.locationLogo} />
        <View style={styles.searchBar}> */}
        <SearchBar
          loop={false}
          value={value}
          onChangeText={text => {
            setValue(text);
            geocoading()
          }}
          placeholder="Search"
          theme="light"
          platform="android"
          style={styles.searchBar}
        ></SearchBar>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.contactUsButton}>
          <Contactus width={25} height={25} style={styles.contactusLogo} />
          <Text style={styles.contactusText}>Contact Us</Text>
        </View>
        <Navigator width={45} height={45} />
        {/* <View style={{width:70,position:'absolute',right:0}}>
        <Sent width={45} height={46}/>
      </View> */}
      </View>
      <View style={{ flexDirection: 'row', position: 'absolute', justifyContent: 'space-around', width: width, padding: 10, bottom: 10 }}>
        <GroupA width={50} height={50} onPress={() => toggleModal(3)} />
        <GroupB width={50} height={50} onPress={() => navigation.navigate('Chat')} />
        <Home width={50} height={50} onPress={() => toggleModal(2)} />
        <Fav width={50} height={50} onPress={() => toggleModal(4)} />
        <Profile width={50} height={50} onPress={() => navigation.navigate('Detail')} onLongPress={() => navigation.navigate('Profile')} />
      </View>

      <Modal isVisible={isModalVisible}
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        onBackButtonPress={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={500}
        backdropTransitionOutTiming={1000}
        style={{ justifyContent: 'flex-end', margin: 0 }}
      >
        {
          state === 1 ?
            <View style={{ width: width, height: 500, backgroundColor: ThemeColors.primary, borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20 }}>

              {/* <View style={{ width: width, height: height-400, flexDirection: 'row', alignSelf: 'center', flexDirection: 'column' }}> */}

              <View style={{ flexDirection: "row", width: width, height: "16%" }}>
                <Image style={{ width: 80, height: 80, borderRadius: 10, borderWidth: 1 }}
                  source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiSOAq4SCHtCc052LYXXYeY3T9VCRmOZTbJw&usqp=CAU" }} />
                <View style={{ width: width, height: height, flexDirection: 'column', marginLeft: 10 }}>
                  <Text style={{ fontSize: 16, fontFamily: FONTS.lato_regular, fontWeight: '700', color: 'black', color: ThemeColors.white }}>Sky Dandelions Apartment
                  </Text>
                  <View style={{ flexDirection: 'row', width: width, marginTop: 5 }}>
                    <Bakerstreet width={20} height={20} />
                    <Text style={{ fontSize: 12, fontWeight: '600', color: ThemeColors.primary_lite, marginLeft: 10 }}>10 min away </Text>
                  </View>
                  <View style={{ flexDirection: 'row', width: width, marginTop: 5 }}>
                    <TouchableOpacity>
                      <View style={{ width: 84, height: 27, backgroundColor: ThemeColors.secondry, borderRadius: 5, justifyContent: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                        <WhiteNotification width={7.8} height={8.33} style={{ alignSelf: 'center', }} />
                        <Text style={{ fontSize: 12, fontWeight: '600', color: ThemeColors.white, fontFamily: FONTS.lato_regular, alignSelf: 'center', marginLeft: 4 }}>Subsribe</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={{ width: 84, height: 27, backgroundColor: ThemeColors.primary_lite2, borderRadius: 5, justifyContent: 'center', flexDirection: 'row', justifyContent: 'center', left: 10 }}>
                        <Sharebtn width={7.8} height={8.33} style={{ alignSelf: 'center', }} />
                        <Text style={{ fontSize: 12, fontWeight: '600', color: ThemeColors.white, fontFamily: FONTS.lato_regular, alignSelf: 'center', marginLeft: 4 }}>Share</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <FlatList
                snapToAlignment="start"
                decelerationRate={"fast"}
                // snapToInterval={Dimensions.get("window").width}
                horizontal={true}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </View> :
            state === 2 ?

              <View style={{ width: width, height: 500, backgroundColor: ThemeColors.primary, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <View style={{ width: 80, height: 5, backgroundColor: ThemeColors.primary_lite, borderRadius: 10, alignSelf: 'center', top: 20, marginBottom: 10 }} />
                <Text style={{ color: ThemeColors.white, fontSize: 25, fontWeight: '800', fontFamily: FONTS.lato_regular, padding: 20 }}>Fresh properties</Text>
                <View style={{ borderWidth: 1, borderColor: ThemeColors.primary_lite2, marginBottom: 15, backgroundColor: ThemeColors.primary_lite2 }} />
                <CardSwiper />
              </View>


              :
              state === 3 ?
                <View style={{ width: width, height: 500, backgroundColor: ThemeColors.primary, borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 10 }}>
                  <View style={{ width: 80, height: 5, backgroundColor: ThemeColors.white, borderRadius: 10, alignSelf: 'center', top: 10, marginBottom: 20 }}></View>
                  <Filter />
                </View> :
                state === 4 ?
                  <View style={{ width: width, height: 400, backgroundColor: ThemeColors.primary, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                    <View style={{ width: 80, height: 5, backgroundColor: ThemeColors.white, borderRadius: 10, alignSelf: 'center', top: 20, marginBottom: 10 }}></View>
                    <Text style={{ color: ThemeColors.white, fontSize: 25, fontWeight: '800', fontFamily: FONTS.lato_regular, padding: 20 }}>Favourites</Text>
                  </View> :
                  state === 5 ?
                    <Detail /> :
                    null
        }
      </Modal>

    </View >
  )
}

export default Mapbox;
