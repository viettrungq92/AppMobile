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
  Button,TouchableOpacity,Alert,InputText, ImageBackground
} from 'react-native';
import COLORS from './consts/colors.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
const {width} = Dimensions.get('screen');

const data = [
    { label: 'chu ky', value: '1' },
    { label: 'trong ngay', value: '2' },
  ];

const Homedetail  = () => {
    const [name, setName] = useState('');

    return (
        <SafeAreaView style  ={{backgroundColor: COLORS.red, flex: 1}}>
            <View style = {style.roomInfor}>
                <Image 
                    source={require('../img/goiy1.png')}
                    style = {style.goiyimage1}>               
                </Image>
                <View style = {style.thongtincontrong}>
                    <Text style = {style.textInfor}>{"Còn trống: 02 phòng"}</Text>
                </View>
            </View>

            <View style = {style.roomInfor2}>
                <View style = {style.child1}>
                    <View style = {style.location}>
                        <Image 
                            source={require('../img/goiyLocation.png')}
                            style = {style.iconlocation}>               
                        </Image>
                        <Text style = {style.address1}>Linh Trung, Thu Duc</Text>
                    </View>
                    
                    <View style = {style.homename}>
                        <Text style = {style.nameHouse1}>Bk Home Thủ Đức</Text>
                    </View>


                    <View style = {style.profile}>
                        <Image 
                            source={require('../img/avar.png')}
                            style = {style.imageOWN}> 
                        </Image>
                        <Text style = {style.name1}>Nhật Vượng</Text>
                    </View>

                    <View style = {style.starBox}>
                        <Image 
                            source={require('../img/start.png')}
                            style = {style.star1}>               
                        </Image>
                        <Image 
                            source={require('../img/start.png')}
                            style = {style.star2}>               
                        </Image>
                        <Image 
                            source={require('../img/start.png')}
                            style = {style.star2}>               
                        </Image>
                        <Text style = {style.address1}>20 Opinion</Text>
                    </View>
                </View>
                
                <View style = {style.child2}>
                    <View style = {style.box1}></View>

                    <View style = {style.box2}>
                        <View style = {style.thongtin}> 
                            <MaterialCommunityIcons name="information-outline" size={24} color="#46D0D9" />
                            <Text color="#46D0D9" >Thông tin</Text>                  
                        </View>
                        <View style = {style.thongtin}> 
                            <MaterialCommunityIcons name="comment-text-outline" size={24} color="#D3DBE2" />
                            <Text color = "#D3DBE2">Bình luận</Text>                  
                        </View>
                    </View>
                    <View style = {style.box3}></View>
                </View>
                <View style = {style.child3}>
                    <Text style = {style.mota}>Mô tả</Text>
                    <Text style = {style.noidung}> Lorem ue consequat nec cras commodo et orci ipsum, convallis  convallis. Lectus nibh ut eget quis quis praesent pellentesque. Molestie a id potenti vi Lectus nibh ut eget quis quis praesent pellentesque. Molestie a id potenti vivamus blandit aliquet iaculis sed. Amet ut rutrum mauris gravida pellentesque eget in in potenti.</Text>
                    <View style = {style.dangky}>
                        <Text style = {style.gia}>2.000.000 VND </Text>
                        <TouchableOpacity onPress={()=>Alert.alert("Lien he chu nha")}>
                            <View style = {style.buttonDangky}>
                                <Text style = {style.buttonName}> ĐĂNG KÝ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};
export default Homedetail;
const style = StyleSheet.create({
   roomInfor: {
        width: '100%',
        height: '40%',  
        backgroundColor: COLORS.grey,
        // justifyContent: 'center',
        alignItems: 'center',
    },

    goiyimage1: {
        width:'100%',
        height:'100%'
    },
    thongtincontrong: {
        
        position:'absolute',
        height: 20,
        width:150,
        alignItems: 'center',
        backgroundColor: '#46D0D9', 
        justifyContent: 'center',
        borderWidth:1,
        borderColor:'#46D0D9', 
        borderRadius:25,
        marginTop: '5%', 
    },
    textInfor: {
        padding: 5,
        fontSize: 13,
        color: COLORS.white,
    },

    roomInfor2: {
        width: '100%',
        height: '60%',  
        backgroundColor: COLORS.Green,
        justifyContent: 'flex-start',
        // alignItems: 'center',
    },
    child1: {
        width: '100%',
        height: '35%',
        backgroundColor: COLORS.white,
    },
    child2: {
        // position:'absolute',
        width: '100%',
        height: '15%',
        backgroundColor: COLORS.white,
    },
    child3: {
        // position:'absolute',
        width: '100%',
        height: '50%',
        backgroundColor: COLORS.white,
    },

    location: {
        backgroundColor: COLORS.white,
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        alignItems: 'center',
    },

    iconlocation: {
        width: '4%',
        height: '80%',
        marginLeft: '4%',
        marginRight: '3%',
    },
    address1: {
        padding: 5,
        fontSize: 13,
        color: '#143656',
    },
    homename:{
        backgroundColor: COLORS.white,
        width: '100%',
        height: '20%',
    }, 
    nameHouse1: {
        marginLeft: '4%',
        marginRight: '3%',
        fontStyle: 'normal',
        fontSize: 26,
        color: '#143656',
        fontWeight: 'bold',
    },
    profile: {
        backgroundColor: COLORS.white,
        width: '100%',
        height: '40%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageOWN: {
        marginTop: -15,
        marginLeft: '4%',
        marginRight: '3%',
        width: '8%',
        height: '85%',
        borderRadius:15,
    },
    name1: {
        marginTop: -15,
        fontSize: 20,
        color: '#143656',
    },
    starBox: {
        backgroundColor: COLORS.white,
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    star1: {
        width: '4%',
        height: '40%',
        marginLeft: '4%',
    },
    star2: {
        width: '4%',
        height: '40%',
    },
    box1: {
        width: '100%',
        height: '5%',
        backgroundColor: '#143656',
        opacity: 0.2
    },
    box2: {
        backgroundColor: COLORS.white,
        width: '100%',
        height: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box3: {
        width: '100%',
        height: '5%',
        backgroundColor: '#143656',
        opacity: 0.2
    },
    thongtin: {
        width: '20%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 30,
    },
     mota:{
        marginLeft: '4%',
        marginRight: '3%',
        fontStyle: 'normal',
        fontSize: 19,
        color: '#143656',
        fontWeight: 'bold',
        height:"10%"
    },
    noidung:{
        marginLeft: '4%',
        marginRight: '3%',
        fontStyle: 'normal',
        fontSize: 15,
        height:"55%",
        color: '#143656',
        textAlign:'justify'
    },
    
    dangky: {
        backgroundColor: COLORS.white,
        width: '100%',
        height: '35%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    gia: {
        // width: '20%',
        // height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
        fontStyle: 'normal',
        fontSize: 25,
        color: '#143656',
        fontWeight: 'bold',
    },
    buttonDangky: {
        width: 140,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#46D0D9'
    },
    buttonName:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#46D0D9',
        fontStyle: 'normal',
        fontSize: 19,
        color: COLORS.white,
        fontWeight: 'bold',
    }
}
)