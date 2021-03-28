import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import { globalStyles, images } from '../styles/global'
import Card from '../shared/card'


export default function ReviewDetails( { route, navigation }) {
        const { title, body, rating} = route.params;
    
    return (
        <View style={globalStyles.container}>
        <Card>

            <Text style={globalStyles.titleText}>{title}</Text>
            <Text style={globalStyles.titleText}>{body}</Text>

            <View style={styles.rating}>
                <Text>Gamezone rating:  </Text>
                <Image source={images.ratings[rating]}

                />
            </View>
           

        </Card>
        </View>
    )
}


const styles = StyleSheet.create({
rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
})
