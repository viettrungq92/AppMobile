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

const data = [
    { label: 'chu ky', value: '1' },
    { label: 'trong ngay', value: '2' },
  ];

const Home = ({navigation})=>{
    const [name, setName] = useState('');
    return (
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
                    <Text style = {style.trangcanhan} >Hãy để TinTro tìm nhà cho bạn! </Text>
                </View>  
                <View style = {style.header1}>
                    <Image
                        source={require('../img/search.png')} //Change your icon image here
                        style={style.ImageStyle}
                    />
                    <TextInput style = {style.label}
                        
                        name="ios-search"
                        underlineColorAndroid = "transparent"
                        placeholder = " Nhà tên gì á, cho mình biết nhé !!!"
                        placeholderTextColor = "#B5B1B1"
                        autoCapitalize = "none"
                        onChangeText ={(value) => setName({ value })}
                        defaultValue={name}
                    />
                </View>
                <View style = {style.header1}>
                    <Text style = {{color:'#143656',fontSize:20,fontWeight:'bold'}}>Bạn đã kiếm</Text>
                </View>
                <View style = {style.header1}>
                    <Text style = {{color:'#143656',fontSize:14,fontWeight:'bold'}}>Gợi ý</Text>
                </View>
                <View style = {style.goiy1}>
                    <View style = {style.crectagle}>
                        <Image 
                            source={require('../img/start.png')}
                            style = {style.start1}>               
                        </Image>
                        <Image 
                            source={require('../img/start.png')}
                            style = {style.start2}>               
                        </Image>
                        <Image 
                            source={require('../img/start.png')}
                            style = {style.start3}>               
                        </Image>
                        <Image 
                            source={require('../img/start.png')}
                            style = {style.start4}>               
                        </Image>
                        <Image 
                            source={require('../img/start.png')}
                            style = {style.start5}>               
                        </Image>
                        <Image 
                            source={require('../img/goiyLocation.png')}
                            style = {style.iconlocation}>               
                        </Image>
                        <Image 
                            source={require('../img/avar.png')}
                            style = {style.imageOWN}>               
                        </Image>
                        <Text style = {style.price1}>2.000.000 VND</Text>
                        
                        <Text style = {style.address1}>Linh Trung, Thu Duc</Text>
                        <TouchableOpacity onPress={()=>{navigation.navigate('homedetail')}}>
                            <Text style = {style.nameHouse1}>Bk Home Thủ Đức</Text>
                        </TouchableOpacity>
                            
                        <Text style = {style.nameOWN1}>Nhật Vượng</Text>
                        <Text style = {style.opinion1}>20 opinions</Text>
                    </View>
                    <Image 
                        source={require('../img/goiy1.png')}
                        style = {style.goiyimage1}>               
                    </Image>
                   
                    
                    
                    
                    
                </View>

                
        </SafeAreaView>
    );
};
export default Home;
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
        position: 'absolute',
        width: 300,
        height: 24,
        left: 70,
        top: 35,
        fontSize:15,
        fontWeight:'bold',
        color: '#143656',
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
        marginLeft: 125,
        justifyContent:'center',
        textAlignVertical: 'center',
        alignItems: 'center',
        borderRadius:5,
    },
    label:{
        flex:1,
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
      ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
      },
      goiy1:{
        position: 'absolute',
        width: 361,
        height: 408,
        left: 0,
        top: 0,
        justifyContent: 'center',
        alignItems:'center'
      },
      goiyimage1:{
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: '50%',
        bottom: '0%',
        borderRadius:10,
        
        width: Dimensions.get('window').width - 30,
        marginLeft: 15,
      },
      price1:{
        position: 'absolute',
        left: "59.56%",
        right: "4.71%",
        top: "10.68%",
        bottom: "16.18%",
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: -0.3,

        color: '#143656',
      },
      address1:{
        position: 'absolute',
        left: '59.56%',
        right: '9.7%',
        top: '50%',
        bottom: '10.29%',
        width: 150,
      },
      nameHouse1:{
        //position: 'absolute',
        left: '7.2%',
        right: '47.65%',
        top: '30%',
        bottom: '16.18%',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 24,
        /* identical to box height */
        letterspacing: -0.3,

        color: '#143656',
      },
      nameOWN1:{
        position: 'absolute',
        left: '14.13%',
        right: '69.53%',
        top: '40%',
        bottom: '10.29%',
        width:100,
        fontweight: 300,
        fontSize: 11,
        lineheight: 13,
        /* identical to box height */

        color: '#143656',
      },
    opinion1:{
        position: 'absolute',
        left: '31%',
        right: '58.45%',
        top: '70%',
        bottom: '5.15%',
        width:100,
        fontfamily: 'Rubik',
        fontweight: 200,
        fontsize: 9,
        lineheight: 11,
        /* identical to box height */
        letterspacing: -0.3,

        color: '#B3B3B3',
      },
    start1:{
        position: 'absolute',
        height:15,
        width: 15,
        borderRadius:10,
        margin:5,
        left: '5.5%',
        right: '88.92%',
        top: '65%',
        bottom: '4.66%',

        background: '#46D0D9',
        borderradius: 1,
    },
    start2:{
        position: 'absolute',
        height:15,
        width: 15,
        borderRadius:10,
        margin:5,
        left: '10%',
        right: '84.76%',
        top: '65%',
        bottom: '4.66%',

        background: '#46D0D9',
        borderradius: 1,
    },
    start3:{
        position: 'absolute',
        height:15,
        width: 15,
        borderRadius:10,
        margin:5,
        left: '14.5%',
        right: '80.61%',
        top: '65%',
        bottom: '4.66%',

        background: '#46D0D9',
        borderradius: 1,
    },
    start4:{
        position: 'absolute',
        height:15,
        width: 15,
        borderRadius:10,
        margin:5,
        left: '19%',
        right: '77.01%',
        top: '65%',
        bottom: '4.66%',

        background: '#46D0D9',
        borderradius: 1,
    },
    start5:{
        position: 'absolute',
        height:15,
        width: 15,
        borderRadius:10,
        margin:5,
        left: '23.5%',
        right: '73.41%',
        top: '65%',
        bottom: '4.66%',

        background: '#46D0D9',
        borderradius: 1,
    },
    iconlocation:{

        position: 'absolute',
        height:15,
        width: 15,
        borderRadius:10,
        margin:5,
        left: '52.56%',
        right: '37.67%',
        top: '48%',
        bottom: '11.03%',

        background: '#143656',
    },
    imageOWN:{
        position: 'absolute',
        height:25,
        width: 25,
        borderRadius:10,
        margin:5,
        left:' 5.09%',
        right: '84.49%',
        top: '30%',
        bottom: '7.35%',
    },
    crectagle:{
        position: 'absolute',
        width: Dimensions.get('window').width-30,
        marginLeft:15,
        height:100,
        left: '0%',
        right: '0%',
        top: '130%',
        bottom: '0%',
        borderWidth: 1,
        borderColor: '#143656',
        backgroundColor: '#ffff',
        borderRadius: 20,
        zIndex: 99,
    }
})