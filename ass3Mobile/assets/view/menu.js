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
import Dangkidichvu from './dangkidichvu';
const {width} = Dimensions.get('screen');

const Menu  = ({navigation}) => {
    return(
        <SafeAreaView style  ={{backgroundColor: COLORS.white, flex: 1}}>
            <StatusBar 
                translucent = {false}
                backgroundColor = {COLORS.white}
                barStyle  = "dark-content"  />  
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
                <Text style = {{color:COLORS.dark,fontSize:25,fontWeight:'bold'}}>All Services</Text>
            </View>
            <View style = {style.header}>
            <TouchableOpacity onPress={() => {navigation.navigate('Dangkidichvu')}}>
                <View style = {style.button1}>
                    <Image 
                        source={require('../img/dkhuy.png')}
                        style = {style.propertiesImage1}>
                    </Image>   

                    <Text style = {{color:COLORS.dark,fontSize:16,fontWeight:'bold',marginLeft:60}}> Đăng kí</Text>
                    <Text style = {{color:COLORS.dark,fontSize:16,fontWeight:'bold',marginLeft:60}}> dịch vụ</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {navigation.navigate('Thongbaomenu')}}>
                    <View style = {style.button2}>
                    <Image 
                        source={require('../img/thongbao.png')}
                        style = {style.propertiesImage1}>
                    </Image>  
                    <Text style = {{color:COLORS.dark,fontSize:16,fontWeight:'bold',marginLeft:60,marginTop:12}}> Thông báo</Text>
                    </View>
            </TouchableOpacity>

            </View>
            <View style = {style.header}>
            <TouchableOpacity onPress={() => {navigation.navigate('Thongtinlienlac')}}>
                    <View style = {style.button1}>
                    <Image 
                        source={require('../img/contact.png')}
                        style = {style.propertiesImage1}>
                    </Image> 
                        <Text style = {{color:COLORS.dark,fontSize:16,fontWeight:'bold',marginLeft:60}}> Thông tin</Text>
                        <Text style = {{color:COLORS.dark,fontSize:16,fontWeight:'bold',marginLeft:60}}> liên hệ</Text>
                    </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {navigation.navigate('Lichsuthuephong')}}>
                    <View style = {style.button2}>
                    <Image 
                        source={require('../img/history.png')}
                        style = {style.propertiesImage1}>
                    </Image> 
                        <Text style = {{color:COLORS.dark,fontSize:16,fontWeight:'bold',marginLeft:60}}> Lịch sử</Text>
                        <Text style = {{color:COLORS.dark,fontSize:16,fontWeight:'bold',marginLeft:50}}> thuê phong</Text>
                    </View>
            </TouchableOpacity>
            </View>

            <View style = {style.header}>
            <TouchableOpacity onPress={() => {navigation.navigate('Dangxuat')}}>
                    <View style = {style.button1}>
                    <Image 
                        source={require('../img/logout.png')}
                        style = {style.propertiesImage1}>
                    </Image> 
                        <Text style = {{color:COLORS.dark,fontSize:16,fontWeight:'bold',marginLeft:60, marginTop:12}}> Đăng xuất</Text>
                    </View>
            </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    );
    
};
export default Menu;
const style = StyleSheet.create({
    header:{
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
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
        height:50,
        width:150,
        backgroundColor:'white',
        borderWidth:1,
        marginLeft: 10,
        borderRadius:10,
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