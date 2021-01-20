import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';

function Orders() {
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
   container: {
     paddingRight: '5%',
     paddingLeft: '5%',

   }
});

export default Orders;