import React from "react";


const BottomSheet = () => {
    return (
        <BottomSheet

        wrapperStyle={{ backgroundColor: ThemeColors.primary, }}
        sliderMinHeight={0}

        ref={ref => panelRef.current = ref}>
          <ScrollView showsVerticalScrollIndicator={false}>
          

        <View style={{ width: width, height: height-300, flexDirection: 'row', alignSelf: 'center',flexDirection:'column'}}>



          <View style={{ flexDirection: "row", width: width, height: "16%", borderColor: "white",padding:30 }}>
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
                    <Text style={{ fontSize: 12, fontWeight: '600', color: ThemeColors.white, fontFamily: FONTS.lato_regular, alignSelf: 'center', marginLeft: 4 }}>Subsribe  </Text>
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
            snapToInterval={Dimensions.get("window").width}
          horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
     
        </View>


        </ScrollView>

      </BottomSheet>
       
    )
}

export default BottomSheet