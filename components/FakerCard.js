import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import {
    Card, ListItem, Button,
} from 'react-native-elements';
let faker = require( 'faker' );

const FakerCard = () => {


    const [fakeUser, setFakeUser] = useState( faker.helpers.createCard() );

    const createNewFakeUser = () => {
        setFakeUser( faker.helpers.createCard() );
    };

    console.log( fakeUser );

    return (
        <SafeAreaView style={styles.view}>
            <Card style={styles.extCard}>
                <Card.Title style={styles.extCard}>{fakeUser.name}</Card.Title>
                <Card.Divider />

                <Text>
                    User Name: {fakeUser.username}
                </Text>
                <Text>
                    Address: {`${fakeUser.address.streetD} \n ${fakeUser.address.streetC} \n ${fakeUser.address.streetB} \n ${fakeUser.address.streetA} \n ${fakeUser.address.zipcode}`}
                </Text>
                <Text>
                    Website: {fakeUser.website}
                </Text>
                <Text>
                    Employer: {fakeUser.company.name}
                </Text>

                <Card.Divider />

                <Button
                    title="Click Me!"
                    onPress={createNewFakeUser}

                    style={{ marginLeft: 20, marginRight: 20, bottom: 0 }}
                />
            </Card>


        </SafeAreaView>
    );
};

const styles = StyleSheet.create( {
    view: {
        // flex: 1,
        flexDirection: 'column',
        justifyContent: "space-between",
        paddingTop: 10,
        paddingBottom: 10,
        // marginLeft: 0,
        // marginRight: 0,
        backgroundColor: 'green',
        // flexGrow:1
    },
    extCard: {
        // flexGrow: 100,
        // flexGrow: 1,
        // flex: 1,
        // width:'100%',
        marginLeft: 10,
        marginRight: 10,
        color: 'red',
    }, title: {
        fontSize: 16,
        fontWeight: '600'
    }
} );


export default FakerCard;
