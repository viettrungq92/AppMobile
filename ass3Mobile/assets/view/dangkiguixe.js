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
  Button,TouchableOpacity,Alert,InputText, Animated
} from 'react-native';
import COLORS from './consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
const {width} = Dimensions.get('screen');


const Dangkiguixe = () => {
    const [ten,setTen] = useState('')
    const [sophong,setSophong] = useState('')
    const [loaixe,setLoaixe] = useState('')
    const [biensoxe,setBiensoxe] = useState('')
    const [time,setTime] = useState('')
    const data_time = [
        { label: '1 Thang', value: '1' },
        { label: '3 Thang', value: '2' },
        { label: '6 Thang', value: '3' },
        { label: '12 Thang', value: '4' }];
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
                    <Text style = {{color:COLORS.dark,fontSize:25,fontWeight:'bold'}}>Đăng kí gửi xe</Text>
                </View>
                <View style = {style.header1}>
                    <TextInput style = {style.label}
                        underlineColorAndroid = "transparent"
                        placeholder = " Name"
                        placeholderTextColor = "#B5B1B1"
                        autoCapitalize = "none"
                        value={ten}
                        onChangeText ={(value) => setTen({ value })}/>
                </View>
    
                <View style = {style.header1}>
                    <TextInput style = {style.label}
                        underlineColorAndroid = "transparent"
                        placeholder = " So phong"
                        placeholderTextColor = "#B5B1B1"
                        value={sophong}
                        onChangeText ={(value) => setSophong({ value })}/>
                </View>
                <View style = {style.header1}>
                    <TextInput style = {style.label}
                        underlineColorAndroid = "transparent"
                        placeholder = "Honeda"
                        placeholderTextColor = "#B5B1B1"
                        autoCapitalize = "none"
                        value={loaixe}
                        onChangeText ={(value) => setLoaixe({ value })}/>
                </View>
                <View style = {style.header1}>
                    <TextInput style = {style.label}
                        underlineColorAndroid = "transparent"
                        placeholder = " 60B7 - 49375"
                        placeholderTextColor = "#B5B1B1"
                        autoCapitalize = "none"
                        value={biensoxe}
                        onChangeText ={(value) => setBiensoxe({ value })}/>
                </View>
                <View style = {style.header1}>
                    <Dropdown style={style.label1}
                        placeholderStyle={style.placeholderStyle}
                        selectedTextStyle={style.selectedTextStyle}
                        inputSearchStyle={style.inputSearchStyle}
                        iconStyle={style.iconStyle}
                        data={data_time}
                        labelField="label"
                        valueField="value"
                        placeholder="Select time"
                        searchPlaceholder="Search..."
                        renderLeftIcon={() => (
                            <AntDesign style={style.icon} color="black" name="Safety" size={20} />
                          )}  
                        value = {time}    
                        onChange={item => {
                            setTime(item.value)}}/>
                </View>
                <View style = {style.header}>
                    <TouchableOpacity onPress={()=>Alert.alert("Successful")}>
                        <View style = {style.button3}>
                            <Text style = {{color:COLORS.white,fontSize:16,fontWeight:'bold'}}>Confirm</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            )
       
};
export default Dangkiguixe;
const style = StyleSheet.create({
    header:{
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    header1:{
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    header2:{
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    button3:{
        height:30,
        width:100,
        backgroundColor:'#46D0D9',
        borderWidth:1,
        marginLeft: '47.5%',
        justifyContent:'center',
        textAlignVertical: 'center',
        alignItems: 'center',
        borderRadius:5,
    },
    label:{
        height: 40,
        width :350,
        borderColor: '#7a42f4',
        borderWidth: 1,
        borderRadius: 10
    },
    label1:{
        height: 40,
        width :350,
        borderColor: '#7a42f4',
        borderWidth: 1,
    },
    iconStyle: {
        width: 20,
        height: 20,
      },
      icon: {
        marginRight: 5,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
})