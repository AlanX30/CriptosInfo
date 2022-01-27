import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import Layout from '../components/Layout'

const CoinData = ({ route }) => {

    const coin = route.params.coin

    return (
        <Layout>
            <ScrollView style={{flex: 1, height: '100%', width: '100%'}}>   
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: coin.image}} />
                <Text style={styles.nameText}>{coin.name}</Text>
                <Text style={{color: 'white'}}>({coin.symbol})</Text>
            </View>

            <View style={styles.containerDetails}>

                <View style={styles.detailItem}>
                    <Text style={styles.detailTitle}>Precio Actual en USD</Text>
                    <Text style={styles.detailDescription} >${coin.current_price}</Text>
                </View>

                <View style={styles.detailItem}>
                    <Text style={styles.detailTitle}>Cambio de precio 24h</Text>
                    <Text style={coin.price_change_percentage_24h > 0 ? styles.green : styles.red} >{coin.price_change_percentage_24h} %</Text>
                </View>

                <View style={styles.detailItem}>
                    <Text style={styles.detailTitle}>Volumen total</Text>
                    <Text style={styles.detailDescription} >{coin.total_volume}</Text>
                </View>

                <View style={styles.detailItem}>
                    <Text style={styles.detailTitle}>Total en circulacion</Text>
                    <Text style={styles.detailDescription} >{coin.circulating_supply}</Text>
                </View>

                <View style={styles.detailItem}>
                    <Text style={styles.detailTitle}>Capitalizacion de mercado</Text>
                    <Text style={styles.detailDescription} >${coin.market_cap}</Text>
                </View>

                <View style={styles.detailItem}>
                    <Text style={styles.detailTitle}>Capitalizacion total diluida</Text>
                    <Text style={styles.detailDescription} >${coin.fully_diluted_valuation}</Text>
                </View>

                <View style={styles.detailItem}>
                    <Text style={styles.detailTitle}>Cambio en capitalizacion 24h</Text>
                    <Text style={coin.market_cap_change_percentage_24h > 0 ? styles.green : styles.red} >{coin.market_cap_change_percentage_24h} %</Text>
                </View>


            </View>
            </ScrollView>
        </Layout>
    )
}

const styles = StyleSheet.create({

    container: {
        width: '100%', 
        alignItems: 'center'
    },

    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 20
    },

    nameText: {
        fontSize: 22,
        color: 'white', 
        fontWeight: 'bold'
    },

    containerDetails: {
        width: '80%',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#1a222b',
        marginTop: 20,
        borderRadius: 15,
        paddingBottom:12,

        shadowOffset: { width: 0, height:-2 },
        shadowOpacity: 2,
        shadowRadius: 2,
        shadowColor: 'black',
    },

    detailItem: {
        width: '100%', 
        alignItems: 'center',
        marginTop: 10,
    },

    detailTitle: {
        color: 'white',
         fontWeight: 'bold', 
         fontSize: 18
    },

    detailDescription: {
        color: 'white', 
        fontSize: 16
    },

    red: {
        color: '#d36363', 
        fontSize: 16
    },

    green: {
        color: '#a2fca2', 
        fontSize: 16
    }

})

export default CoinData
