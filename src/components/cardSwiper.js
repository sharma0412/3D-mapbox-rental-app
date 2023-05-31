
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Text, ToastAndroid, Dimensions } from 'react-native';
const { width } = Dimensions.get('window')
const { height } = Dimensions.get('window')
import Swiper from 'react-native-deck-swiper';
import { ThemeColors, FONTS } from '../utlis';
import Location from '../assets/images/Location.svg'
import Heart from '../assets/images/fav_yell.svg'
import Cross from "../assets/images/cross.svg"
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
  {
    id: 5,
    title: 'Sky Dandelious',
    price: 1100,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiSOAq4SCHtCc052LYXXYeY3T9VCRmOZTbJw&usqp=CAU",
    location: "Mohali it Park",
    website: ''
  },
  {
    id: 6,
    title: 'Mazor Tower',
    price: 1200,
    image: "https://i.ytimg.com/vi/HR8j9qg4wgA/maxresdefault.jpg",
    location: "Chandigarh it Park",
    website: ''
  },
  {
    id: 7,
    title: 'Vk Tower',
    price: 1350,
    image: "https://assets-news.housing.com/news/wp-content/uploads/2018/05/24200911/Ascendas-India-Trust-to-acquire-two-commercial-buildings-in-Hyderabad-for-Rs-1350-crores-FB-1200x628-compressed.jpg",
    location: "Panchkula it Park",
    website: ''
  },
  {
    id: 8,
    title: 'Sk Tower',
    price: 5200,
    image: "https://cdn.pixabay.com/photo/2015/01/15/07/13/empire-state-building-600001__340.jpg",
    location: "it Park",
    website: ''
  },
]

const Card = ({ card }) => (
  //    <View style={styles.card}>
  //     <Image source={{uri :card.image}} style={styles.cardimage}/>
  //    </View>
  <View style={styles.card}>
    <Image
      style={styles.cardImg}
      source={{ uri: card?.image }}
    />
    <View style={{
      width: '95%', height: 100, borderWidth: 0.5, borderColor: 'white',
      position: 'absolute', bottom: 0, alignSelf: 'center', backgroundColor: ThemeColors.primary, borderRadius: 20, top: 250, padding: 8
    }}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: ThemeColors.white, fontSize: 18, fontWeight: '800', fontFamily: FONTS.lato_regular }}>{card.title}</Text>
        <Text style={{ color: ThemeColors.white, fontSize: 18, fontWeight: '800', fontFamily: FONTS.lato_regular }}>{card.price}</Text>
      </View>

      <Text style={{ fontSize: 12, fontWeight: '400', color: ThemeColors.white, marginTop: 5 }}>{card.website}</Text>
      <View style={{ flexDirection: 'row', marginTop: 5 }}>
        <Location width={11} height={12} />
        <Text style={{ fontSize: 12, fontWeight: '400', color: ThemeColors.white }}>{card.location}</Text></View>
    </View>
  </View>

)

const CardSwiper = () => {
  const [value, setValue] = useState("")
  const [index, Setindex] = useState(0)
  const [ApiData, SetApiData] = useState([])

  const onSwiped = () => {
    Setindex(index + 1);
  }


  function HandleApi() {

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '1845051716msh3c0c5ec0ede4826p1009c8jsn27bf4506476c',
        'X-RapidAPI-Host': 'realtor-search.p.rapidapi.com'
      }
    };
    fetch('https://realtor-search.p.rapidapi.com/property/search-rent?location=12746', options)
      .then(response => response.json())
      .then(response =>
        // SetApiData(JSON.stringify(response)),
        // console.log(ApiData)
        console.log(JSON.stringify(response))
      )
      .catch(err => console.error(err));
  }


  useEffect(() => {
    HandleApi()
  }, [])



  return (
    <View>
      <View style={styles.container}>
        <Swiper
          overlayLabels={{
            left: {
              element: <Cross height={88.45} width={88.45} />,
              style: {
                label: {
                  backgroundColor: ThemeColors.primary_lite2,
                  color: ThemeColors.secondry,
                  fontSize: 25,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bottom: 250,
                }
              }
            },
            right: {
              element: <Heart height={88.45} width={88.45} />,
              style: {
                label: {
                  backgroundColor: ThemeColors.primary_lite2,
                  color: ThemeColors.secondry,
                  fontSize: 25
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bottom: 250,
                },

              }

            },
          }}
          animateCardOpacity={true}
          // zoomAnimationDuration={22}
          cardVerticalMargin={5}
          backgroundColor={'transparent'}
          swipeAnimationDuration={40}
          stackSize={5}
          stackScale={5}
          stackSeparation={5}
          disableBottomSwipe={true}
          disableTopSwipe={true}
          loop={true}
          onSwiped={onSwiped}
          // stackAnimationFriction={0.66}
          // horizontalSwipe={true}
          cards={data}
          cardIndex={index}
          renderCard={(card) => <Card card={card} />
          }
        />
      </View>

    </View>
  );
}

export default CardSwiper

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: ThemeColors.primary,
    //  height:height-400,
    //  backgroundColor:'#666',
    //  alignItems:'center',
    //  justifyContent:'center',
    //  borderWidth:5,borderColor:"black"
  },
  card: {
    // borderRadius: 20,
    // shadowRadius: 25,
    // shadowColor: '#000',
    // shadowOpacity: 0.08,
    // shadowOffset: { width: 0, height: 0 },
    // justifyContent: 'center',

    height: 340,
    width: width - 20, alignSelf: 'center',
    // backgroundColor:ThemeColors.primary
  },
  cardimage: {
    width: '100%', height: '100%',
    resizeMode: 'cover', borderRadius: 20

  }, cardImg: {
    width: '100%',
    height: '90%',
    borderRadius: 13,
    backgroundColor: 'gray'
  },
});
