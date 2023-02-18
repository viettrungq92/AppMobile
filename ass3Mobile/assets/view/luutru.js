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

const Luutru = ({navigation})=>{
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
                    <TouchableOpacity onPress={()=>{navigation.navigate('Thongtincanhan')}}>
                    <Text style = {style.trangcanhan} >Trang cá nhân</Text>
                    </TouchableOpacity>
                </View> 
                <View style = {style.header1}>
                    <Text style = {{color:'#143656',fontSize:20,fontWeight:'bold'}}>Thông tin thuê phòng</Text>
                </View> 
                <View style = {style.goiy1}>
                        <View style = {style.crectagle}>
                                <Text style = {style.timeMonths}>Tháng 4 - 2022</Text>
                                <Text style = {style.nameRoom}>Phòng 301</Text>
                           
                                <TouchableOpacity onPress={() => {navigation.navigate('Thongtinluutru')}}>
                                    <View style = {style.button3}>
                                        <Text style = {style.statusLuutru}>View</Text>
                                    </View> 
                                </TouchableOpacity>    
                            
                        </View>



                </View>
        </SafeAreaView>
    );
};
export default Luutru;
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
        height:95,
        width:99,
        backgroundColor:'#46D0D9',
        borderWidth:0,
        marginLeft: '72.5%',
        marginTop:'-0.25%',
        justifyContent:'center',
        textAlignVertical: 'center',
        alignItems: 'center',
        borderRadius:20,
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
        height: 1000,
        left: 0,
        top: 120,
        width: Dimensions.get('window').width - 30,
        marginLeft: 15,
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
      nameRoom:{
        position: 'absolute',
        left: '7%',
        right: '45%',
        top: '20%',
        bottom: '0%',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 24,
        /* identical to box height */
        letterspacing: -0.3,

        color: '#143656',
      },
      timeMonths:{
        position: 'absolute',
        left: '7%',
        right: '45%',
        top: '60%',
        bottom: '0%',
        width:150,
        fontweight: 600,
        fontSize: 16,
        lineheight: 13,
        /* identical to box height */

        color: '#143656',
      },
    statusLuutru:{
        position: 'absolute',
        left: '25%',
        right: '10%',
        top: '35%',
        bottom: '0%',
        fontweight: 600,
        fontSize: 18,
        lineheight: 11,
        /* identical to box height */
        letterspacing: -0.3,

        color: '#ffff',
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
        height:100,
        left: '0%',
        right: '0%',
        top: '0%',
        bottom: '0%',
        borderWidth: 3,
        borderColor: '#143656',
        backgroundColor: '#ffff',
        borderRadius: 20,
        zIndex: 99,
    },
    crectagle1:{
        position: 'absolute',
        width: Dimensions.get('window').width-30,
        height:100,
        left: '0%',
        right: '0%',
        top: '11%',
        bottom: '0%',
        borderWidth: 3,
        borderColor: '#143656',
        backgroundColor: '#ffff',
        borderRadius: 20,
        zIndex: 99,
    },
    crectagleRight:{
        position: 'absolute',
        width: 100,
        height:100,
        left: '72%',
        right: '0%',
        top: '-3%',
        bottom: '0%',
        borderWidth: 2,
        borderColor: '#143656',
        backgroundColor: '#46D0D9',
        borderRadius: 20,
        zIndex: 99,
    }
})