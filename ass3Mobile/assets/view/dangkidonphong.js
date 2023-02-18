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

const data = [
    { label: 'chu ky', value: '1' },
    { label: 'trong ngay', value: '2' },
  ];
const trongngay = [
    { label: '1 gio', value: '1' },
    { label: '2 gio', value: '2' },
    { label: '4 gio', value: '3' },
    { label: '8 gio', value: '4' },
  ];
const chuky = [
    { label: '1 ngay', value: '1' },
    { label: '3 ngay', value: '2' },
    { label: '7 ngay', value: '3' },
    { label: '14 ngay', value: '4' },
  ];

const Dangkidonphong = ()=>{
    const [value, setValue] = useState('');
    const [value_chuky, setValue_chuky] = useState('');
    const [value_trongngay, setValue_trongngay] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const [name, setName] = useState('');
    const [sophong, setSophong] = useState('');
    const renderLabel = () => {
        if (value == '1') {
          return (
                <Dropdown style={style.label1}
                    placeholderStyle={style.placeholderStyle}
                    selectedTextStyle={style.selectedTextStyle}
                    inputSearchStyle={style.inputSearchStyle}
                    iconStyle={style.iconStyle}
                    data={chuky}
                    labelField="label"
                    valueField="value"
                    placeholder="Select time..."
                    searchPlaceholder="Search..."
                    value={value_chuky}

                    renderLeftIcon={() => (
                        <AntDesign style={style.icon} color="black" name="Safety" size={20} />
                        )}      
                    onChange={item => {
                        setValue_chuky(item.value);}}/>
          );
        }
        else if( value == '2'){
            return (
                <Dropdown style={style.label1}
                    placeholderStyle={style.placeholderStyle}
                    selectedTextStyle={style.selectedTextStyle}
                    inputSearchStyle={style.inputSearchStyle}
                    iconStyle={style.iconStyle}
                    data={trongngay}
                    labelField="label"
                    valueField="value"
                    placeholder="Select time..."
                    searchPlaceholder="Search..."
                    value={value_trongngay}

                    renderLeftIcon={() => (
                        <AntDesign style={style.icon} color="black" name="Safety" size={20} />
                        )}      
                    onChange={item => {
                        setValue_trongngay(item.value);}}/>
            );
        }
        return null;
      };
    return (
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
                    <Text style = {{color:COLORS.dark,fontSize:25,fontWeight:'bold'}}>Đăng kí dọn phòng</Text>
                </View>
                <View style = {style.header1}>
                    <TextInput style = {style.label}
                        underlineColorAndroid = "transparent"
                        placeholder = " Name"
                        placeholderTextColor = "#B5B1B1"
                        autoCapitalize = "none"
                        onChangeText ={(value) => setName({ value })}
                        defaultValue={name}/>
                </View>
    
                <View style = {style.header1}>
                    <TextInput style = {style.label}
                        underlineColorAndroid = "transparent"
                        placeholder = " So phong"
                        placeholderTextColor = "#B5B1B1"
                        autoCapitalize = "none"
                        onChangeText ={(value) => setSophong({ value })}
                        defaultValue={sophong}/>
                </View>
                <View style = {style.header1}>
                    <Dropdown style={style.label1}
                        placeholderStyle={style.placeholderStyle}
                        selectedTextStyle={style.selectedTextStyle}
                        inputSearchStyle={style.inputSearchStyle}
                        iconStyle={style.iconStyle}
                        data={data}
                        labelField="label"
                        valueField="value"
                        placeholder="Select mode don phong..."
                        searchPlaceholder="Search..."
                        value={value}

                        renderLeftIcon={() => (
                            <AntDesign style={style.icon} color="black" name="Safety" size={20} />
                          )}      
                        onChange={item => {
                            setValue(item.value);}}/>
                </View >
                <View style = {style.header1}>
                    {renderLabel()}
                </View>
                <View style = {style.header}>
                    <TouchableOpacity onPress={()=>Alert.alert("Successful")}>
                        <View style = {style.button3}>
                            <Text style = {{color:COLORS.white,fontSize:16,fontWeight:'bold'}}>Confirm</Text>
                        </View>
                    </TouchableOpacity>
                </View>

        </SafeAreaView>
    );
};
export default Dangkidonphong;
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