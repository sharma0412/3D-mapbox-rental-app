import React from "react";
import { SafeAreaView, View, Text, Dimensions, ScrollView, TouchableOpacity, FlatList, Image } from "react-native";
import styles from "./style";
import Report from "../../assets/images/report.svg"
import { ThemeColors } from "../../utlis";
import WhatsAp from '../../assets/images/whatsap.svg'
import Video from '../../assets/images/Video.svg'
import Save from '../../assets/images/save.svg'
import Heart from '../../assets/images/heart.svg'


const { width } = Dimensions.get('window')
const { height } = Dimensions.get('window')
const Detail = () => {



  const renderItem = ({ item }) => (
    <View style={{
      width: width, height: height, borderRadius: 20, alignSelf: 'center', justifyContent: 'center'

    }}>
      <Image source={{ uri: item?.image }} style={{
        borderRadius: 10, width: width, height: height,
        resizeMode: 'center'
      }} />


    </View>

  );


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


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.imagecontainer}>
          <FlatList

            showsHorizontalScrollIndicator={false}
            snapToAlignment="start"
            decelerationRate={"fast"}
            // snapToInterval={Dimensions.get("window").width}
            horizontal={true}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}


          />
        </View>
        <View style={styles.container2}>
          <Text style={styles.timeText}>2 days ago. updated 3 hours ago</Text>
          <Text style={styles.titleText}>Wings Tower</Text>
          <Text style={styles.location}>$7000, 2r . 45m . 3 floor of 10  </Text>

          {/* borker image and its position view */}
          <View style={styles.container3}>
            <Image style={styles.brokerImange} source={{ uri: 'https://cdn.pixabay.com/photo/2015/01/15/07/13/empire-state-building-600001__340.jpg' }} />
            <View style={styles.nestedView}>
              <Text style={styles.borkerName}>Anderson</Text>
              <Text style={styles.brokerWork}>Rent Specialist</Text>
            </View>
          </View>

          <Text style={styles.aboutText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
            ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </Text>
          <View style={styles.noteView}></View>
          <TouchableOpacity><View style={styles.noteView2}>
            <Report width={18} height={17} />
            <Text style={styles.reporttext}>Report</Text>
          </View></TouchableOpacity>

          <View style={styles.callsContainer}>

            <TouchableOpacity>
              <View style={styles.audiocall}>
                <WhatsAp width={20} height={20} style={styles.whatsapIcon} />
                <Text style={styles.textNowText}>text Now</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>

              <View style={styles.videoCall}>
                <Video width={20} height={20} style={styles.whatsapIcon} />
                <Text style={styles.textNowText}>text Now</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity><Save width={50} height={50} /></TouchableOpacity>
            <TouchableOpacity><Heart width={50} height={50} />
            </TouchableOpacity>
          </View>


        </View>
        {/* <View style={{width:width,height:400}}></View> */}





      </View>
    </ScrollView>
  )
}
export default Detail