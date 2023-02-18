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
const {width} = Dimensions.get('screen');

const Thongtincanhan = ({navigation})=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [numberphone, setNumberphone] = useState('');
    return (
        <SafeAreaView style  ={{backgroundColor: COLORS.white, flex: 1}}>
            <StatusBar 
                    translucent = {false}
                    backgroundColor = {COLORS.white}
                    barStyle  = "dark-content"  />  

                <View style = {style.rectangle}>
                    <Text style = {{color:'#ffff',fontSize:20,fontWeight:'bold',marginTop:'5%',textAlign:'center'}}>Profile</Text>
                    <Image 
                        source={require('../img/avar.png')}
                        style = {style.propertiesImage}>               
                    </Image>
                </View>
                <View style = {style.tenCanhan}>
                    <Text style = {{color:'#143656',fontSize:16,}}>  Username:</Text>
                    <TextInput style = {style.label1}
                        underlineColorAndroid = "transparent"
                        placeholder = "  Huy Doan"
                        placeholderTextColor = "#000000"
                        onChangeText ={(value) => setName({ value })}
                        defaultValue={name}/>
                    <Text style = {{color:'#143656',fontSize:16,fontWeight:'bold'}}>  Email:</Text>
                    <TextInput style = {style.label1}
                        underlineColorAndroid = "transparent"
                        placeholder = "  HuyDoan@gmail.com"
                        placeholderTextColor = "#000000"
                        onChangeText ={(value) => setEmail({ value })}
                        defaultValue={email}/>
                    <Text style = {{color:'#143656',fontSize:16,fontWeight:'bold'}}>  Phone Number:</Text>
                    <TextInput style = {style.label1}
                        underlineColorAndroid = "transparent"
                        placeholder = "  0397465736"
                        placeholderTextColor = "#000000"
                        onChangeText ={(value) => setNumberphone({ value })}
                        defaultValue={numberphone}/>
                    <View style  = {style.header}>

                    </View>
                    <TouchableOpacity onPress={()=>Alert.alert("Update Successful")}>
                        <View style = {style.button3}>
                            <Text style = {{color:COLORS.white,fontSize:16,fontWeight:'bold'}}>Update</Text>
                        </View>
                    </TouchableOpacity>
                </View>

        

                
        </SafeAreaView>
    );
};
export default Thongtincanhan;
const style = StyleSheet.create({
    rectangle:{
        position: 'absolute',
        width: 'auto',
        height:100,
        left: '0%',
        right: '0%',
        top: '0%',
        bottom: '0%',
        backgroundColor: '#46D0D9',
        zIndex: 99,

    },
    propertiesImage:{
        height:75,
        width: 75,
        borderRadius:35,
        borderWidth:2,
        borderColor:COLORS.dark,
        margin:5,
        marginLeft:'40%',
        top:'15%',
    },
    header:{
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    tenCanhan:{
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: '22%',
        bottom: '0%',
    },
    textTencanhan:{
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: '24%',
        bottom: '0%',
    },
    label1:{
        height: 40,
        width :'auto',
        borderColor: '#A9A9A9',
        borderWidth: 1,
    },
    button3:{
        height:30,
        width:100,
        backgroundColor:'#46D0D9',
        borderWidth:1,
        marginLeft: '40%',
        justifyContent:'center',
        textAlignVertical: 'center',
        alignItems: 'center',
        borderRadius:5,
    },
})