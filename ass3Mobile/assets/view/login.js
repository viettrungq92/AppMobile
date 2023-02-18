import React,{ Component,useState } from 'react';
import {
    Dropdown }
    from 'react-native-element-dropdown';
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
  Button,TouchableOpacity,Alert,InputText, Animated, ImageBackground
} from 'react-native';
import COLORS from './consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import Home from './home';
const {width} = Dimensions.get('screen');
const Login = ({navigation})=>{
    const nameUser1 = 'user1'
    const passUser1 = '123456'
    const nameUser2 = 'user2'
    const passUser2 = '123456'
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const checkLogin = () =>{
        if(((name.value == nameUser1)|(name.value == nameUser2)) && (password.value == '123456')){
            navigation.navigate('TabBottom')
        }
        else{
            Alert.alert("Đăng nhập thất bại kiểm tra tên và mật khẩu")
        }
    }
    return (
        <SafeAreaView style  ={{backgroundColor: '#46D0D9', flex: 1}}>
            <StatusBar 
                    translucent = {false}
                    backgroundColor = {COLORS.white}
                    barStyle  = "dark-content"  />  
            <View style = {style.vector1}>
            <Image 
                source={require('../img/logoLogin.png')}
                style = {style.propertiesImage}>               
                </Image>
            </View>       
            <View style = {style.vector2}>
                <Text style = {{color:'#ffff',fontSize:20,fontWeight:'bold',fontFamily:'Roboto',fontStyle:'italic'}}>TÌM KIẾM - QUẢN LÝ DỄ DÀNG </Text>
            </View>     
            <View style = {style.vector3}>
                    <TextInput style = {style.label}
                        placeholder = "  Number phone or Email"
                        placeholderTextColor = "#B5B1B1"
                        value={name}
                        onChangeText ={(value) => setName({ value })}/>
                </View>    
            <View style = {style.vector4}>
                <TextInput style = {style.label}
                    placeholder = "  Password..."
                    placeholderTextColor = "#B5B1B1"
                    value={password}
                    onChangeText ={(value) => setPassword({ value })}
                    secureTextEntry = {true}/>
            </View>           
            <View style = {style.vector5}>
                <TouchableOpacity onPress={checkLogin}>
                    <View style = {style.button3}>
                        <Text style = {{color:'#ffff',fontSize:18,alignItems:'center'}}>Đăng nhập</Text>
                    </View> 
                </TouchableOpacity>  
            </View>  
            <View style = {style.vector6}>
                <Text style = {{color:'#ffff',fontSize:14,fontWeight:'bold',fontFamily:'Roboto',fontStyle:'italic'}}>THẬT VUI KHI THẤY BẠN Ở ĐÂY! </Text>
            </View> 
        </SafeAreaView>
    );
};
export default Login;
const style = StyleSheet.create({
    header:{
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    header1:{
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    vector1:{
        left: '35%',
        right: '0%',
        top: '15%',
        bottom: '0%',
    },
    vector2:{
        top: '17%',
        alignContent: 'center',
        alignItems:'center'
    },
    vector3:{
        top: '25%',
        alignContent: 'center',
        alignItems:'center'
    },
    vector4:{
        top: '27%',
        alignContent: 'center',
        alignItems:'center'
    },
    vector5:{
        top: '30%',
        alignContent: 'center',
        alignItems:'center'
    },
    vector6:{
        top: '40%',
        alignContent: 'center',
        alignItems:'center'
    },
    propertiesImage:{
        height:120,
        width: 120,

    },
    label:{
        height: 40,
        width :250,
        borderColor: '#7a42f4',
        borderWidth: 0,
        borderRadius: 5,
        backgroundColor:'#FFFF',
    },
    button3:{
        height:30,
        width:130,
        backgroundColor:'#1969B2',
        borderColor: '#1969B2',
        borderWidth:2,
        borderRadius:5,
        alignItems:'center',
        
    },
})