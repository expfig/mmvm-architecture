/**
 * IMPORTS
 */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import {SwipeListView} from 'react-native-swipe-list-view';
import {TextNative, InputWs} from 'ws-ui-components';
import {Calendar} from 'phosphor-react-native';

// hook-view-modal
import {useLoginViewModel} from '../../view-model/signin/use-login-view-modal';
import {usePermissions} from '../../../../domain/hooks/permissions/permissions';

// styles
import {styles} from './styles';
import axios from 'axios';
import * as Sentry from "@sentry/react-native"
const SwipeListingView = () => {
  
  const listSwipeData = [
    {text: 'Segunda-Feira', key: '1'},
    {text: 'Terça-Feira', key: '2'},
    {text: 'Quarta-Feira', key: '3'},
    {text: 'Quinta-Feira', key: '4'},
    {text: 'Sexta-Feira', key: '5'},
    {text: 'Sabádo', key: '6'},
    {text: 'Domingo', key: '7'},
  ];
  const [listData, setListData] = useState(listSwipeData);
  const [error, setError] = useState("")

  const closeItem = (rowMap: any, dataKey: string) => {
    if (rowMap[dataKey]) {
      rowMap[dataKey].closeRow();
    }
  };

  const deleteItem = (rowMap: any, rowKey: string) => {
    closeItem(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onItemOpen = async(rowKey: any) => {
   try {
  //  const response = await axios.get("http://grupofigueiredo.com.br:1111/figconn/status_carregamento")
   } catch (error: any) {
    // tratamento de errors
   }
  };

  const renderItem = (data: any) => (
    <TouchableHighlight
      onPress={() => console.log('You touched me')}
      style={styles.rowFront}
      underlayColor={'#fff'}>
      <View>
        <TextNative
          text={data.item.text}
          color="#FFF"
          size={17}
          fontWeight="400"
        />
      </View>
    </TouchableHighlight>
  );

  const renderHiddenItem = (data: any, rowMap: any) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.actionButton, styles.closeBtn]}
        onPress={() => closeItem(rowMap, data.item.key)}>
        <TextNative text={'Close'} color="#FFF" size={16} fontWeight="400" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.actionButton, styles.deleteBtn]}
        onPress={() => deleteItem(rowMap, data.item.key)}>
        <TextNative text={'Delete'} color="#FFF" size={16} fontWeight="400" />
      </TouchableOpacity>
    </View>
  );

  const ErrorCustom  = (message: any) => {
    throw new Error(message);
  }

  if(error){
    throw new Error(error);
  }else{
    return (
      <SafeAreaView
        style={[styles.container, {paddingLeft: 16, paddingRight: 16}]}>
        <InputWs
          height={50}
          textLabel="Nome"
          textAlign="left"
          colorTextLabel="#6c757d"
          fontSize={18}
          fontWeight="500"
          placeholder="Informe o dia da semana..."
          borderWidth={1}
          borderColor="#cdcdcd"
          borderRadius={4}
          paddingLeft={16}
          marginTop={4}
          placeholderTextColor={'#cdcdcd'}
          rightIconJsx={<Calendar size={24} color="#6c757d" />}
        />
        <View style={[styles.container, {marginTop: 34}]}>
          <SwipeListView
            swipeRowStyle={{
              marginBottom: 8,
            }}
            data={listData}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            leftOpenValue={75}
            rightOpenValue={-150}
            previewRowKey={'0'}
            previewOpenValue={-40}
            previewOpenDelay={3000}
            onRowDidOpen={onItemOpen}
          />
        </View>
      </SafeAreaView>
    );
  }
};

/**
 * EXPORT
 */
export {SwipeListingView};
