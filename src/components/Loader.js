import React from "react";
import { View, ActivityIndicator } from 'react-native'

const Loader = () => {
    return (
        <View style={{
            width: '100%', height: '100%',
            justifyContent: 'center', zIndex: 1,
            position:'absolute',
            alignItems: 'center'
        }}>
            <ActivityIndicator size={'large'} color={'#fff'} />
        </View>
    )
}

export default Loader