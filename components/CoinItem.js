import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const CoinItem = ({coin}) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={()=>navigation.navigate('Detalles', { coin })} style={styles.itemContainer}>
            <View style={styles.itemRightContainer}>
                <Image style={styles.images} source={{uri: coin.image}} />
                <Text style={{color: 'white'}}>{coin.name}</Text>
                <Text style={{color: '#c3c3c380'}}> ({coin.symbol})</Text>
            </View>
            <View>
                <Text style={{color: 'white', alignSelf: 'flex-end'}}>${coin.current_price}</Text>
                <Text style={[{color: 'white'}, coin.price_change_percentage_24h > 0 ? {color: '#a2fca2'} : {color: '#d36363'}]}>{coin.price_change_percentage_24h} %</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    itemContainer: {
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5
    },

    itemRightContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    itemLeftContainer: {
        justifyContent: 'flex-end'
    },
    
    images: {
        width: 25,
        height: 25,
        marginRight: 5
    },

})

export default CoinItem
