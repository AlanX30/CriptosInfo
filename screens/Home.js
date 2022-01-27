import React, { useEffect, useState } from 'react'
import { View, TextInput, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native'
import axios from 'axios'

import Layout from '../components/Layout'
import CoinItem from '../components/CoinItem'


const Home = () => {

    const [cryptoList, setCryptoList] = useState([])

    const [ filter, setFilter ] = useState([])
    
    const [ refresh, setRefresh ] = useState(false)

    async function loadData() {

        try{

            const request = await axios({
                method: 'get',
                url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=60&page=1&sparkline=false`,
            })       
            
            const data = await request.data
        
            setFilter(data)
            setCryptoList(data)


        }catch(error){
            console.log(error)
        }
    
    }

    function handleSearch(text){
        const filtered = cryptoList.filter( data => data.name.toLowerCase().includes(text) || data.symbol.toLowerCase().includes(text) )
        setFilter(filtered)
    }

    function onRefresh(){
        setRefresh(true)
        loadData()
        setRefresh(false)
    }

    useEffect(()=>{
        loadData()
    },[])

    return (
        <Layout>
            <View style={{flex: 1, width: '100%', paddingHorizontal: 10}}>

                <View style={styles.headerContainer}>
                    <Text style={{color: '#d09950', fontWeight: 'bold', fontSize: 16}}> CriptoInfo App </Text>
                    <TextInput onChangeText={(e)=>handleSearch(e)} style={styles.search}placeholder='Buscar' placeholderTextColor='#c3c3c380' />
                </View>

                <ScrollView refreshControl={ <RefreshControl refreshing={refresh} onRefresh={()=>onRefresh()} /> }   >
                {
                    filter.map( item => {
                        return (
                            <CoinItem key={item.symbol} coin={item} />
                        )
                    })
                }
                </ScrollView>

            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({

    headerContainer: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    search:{
        width: '40%', 
        borderBottomWidth: .5, 
        borderBottomColor: '#c3c3c380',
        color: 'white', 
        paddingLeft: 5
    }

})

export default Home
