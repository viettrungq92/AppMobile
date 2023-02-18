import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  Button,TouchableOpacity,Alert
} from 'react-native';
import COLORS from './consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width} = Dimensions.get('screen');

const Dangkidichvu  = ({navigation}) => {
    return(
        <SafeAreaView style  ={{backgroundColor: COLORS.white, flex: 1}}>
            <StatusBar 
                translucent = {false}
                backgroundColor = {COLORS.white}
                barStyle  = "dark-content"  />  
            <View style = {style.header}>
                <View>
                    <Text style = {{color: COLORS.dark, fontSize:25, fontWeight:'bold'}}>MENU</Text>
                </View>
            </View>
            <View>
                <Image 
                source={require('../img/avar.png')}
                style = {style.propertiesImage}>               
                </Image>
                <Text style={style.nameUser}>Huy Doan</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('Thongtincanhan')}}>
                    <Text style = {style.trangcanhan} >Trang cá nhân</Text>
                </TouchableOpacity>
                
            </View>    
            <View style = {style.header}>
                <Text style = {{color:COLORS.dark,fontSize:25,fontWeight:'bold'}}>Đăng kí dịch vụ</Text>
            </View>
            <View style = {style.header1}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Dangkiwifi')}}>
                <View style = {style.button1}>
                    <Text style = {{color:COLORS.white,fontSize:18,fontWeight:'bold',justifyContent: 'center'}}> Đăng kí wifi</Text>
                </View>
            </TouchableOpacity>
            </View>
            
            <View style = {style.header1}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Dangkiguixe')}}>
                <View style = {style.button1}>
                    <Text style = {{color:COLORS.white,fontSize:18,fontWeight:'bold',justifyContent: 'center'}}> Đăng kí gửi xe</Text>
                </View>
            </TouchableOpacity>
            </View>

            <View style = {style.header1}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Dangkidonphong')}}>
                <View style = {style.button1}>
                    <Text style = {{color:COLORS.white,fontSize:18,fontWeight:'bold',justifyContent: 'center'}}> Đăng kí dọn phòng</Text>
                </View>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
    
};
export default Dangkidichvu;
const style = StyleSheet.create({
    header:{
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    header1:{
        paddingVertical: 15,
        paddingHorizontal: 20,
        alignItems:'center',
        alignContent:'center'
    },
    propertiesImage:{
        height:50,
        width: 50,
        borderRadius:25,
        margin:5,
    },
    propertiesImage1:{
        position: 'absolute',
        height:40,
        width: 40,
        borderRadius:10,
        margin:5,
    },
    nameUser:{
        position: 'absolute',
        width: 129,
        height: 24,
        left: 70,
        top: 15,
    },
    trangcanhan:{
        //position: 'absolute',
        width: 129,
        height: 24,
        left: 68,
        top: -25,
        fontSize:15,
        fontWeight:'bold'
    },
    Rectangle1:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button1:{
        height:30,
        width:250,
        backgroundColor:'#46D0D9',
        borderWidth:1,
        marginLeft: 10,
        borderRadius:10,
        alignItems:'center',
        borderStartColor:"#46D0D9"
    },
    button2:{
        height:50,
        width:150,
        backgroundColor:'white',
        borderWidth:1,
        marginRight: 10,
        borderRadius:10,
    },
})