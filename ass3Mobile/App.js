import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Menu from './assets/view/menu'
import Thongtinlienlac from './assets/view/thongtinlienlac'
import Dangkiwifi  from './assets/view/dangkiwifi';
import Dangkidonphong from './assets/view/dangkidonphong';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Home from './assets/view/home';
import Luutru from './assets/view/luutru';
import Thongtinluutru from './assets/view/thongtinluutru';
import Thongbao from './assets/view/thongbao';
import Login from './assets/view/login';
import Dangkidichvu from './assets/view/dangkidichvu';
import Dangkiguixe from './assets/view/dangkiguixe';
import Homedetail from './assets/view/homedetail';
import Thongbaochitiet from './assets/view/thongbaochitiet';
import Thongtincanhan from './assets/view/thongtincanhan';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const meniInstance = createStackNavigator();
const luutruInstance = createStackNavigator();
const homeInstance = createStackNavigator();
const thongbaoInstance = createStackNavigator();
function MyTabs() {
  return (
    <Tab.Navigator 
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#46D0D9',
        headerShown:false
      }}
    >
      <Tab.Screen 
        name="Home"
        component={HomeInstance}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Luutru"
        component={LuutruInstance}
        options={{
          tabBarLabel: 'Lưu Trú',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Thongbao"
        component={ThongbaoInstance}
        options={{
          tabBarLabel: 'Thông báo',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuInstance}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="format-list-checkbox" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function MenuInstance(){
  return (
    <meniInstance.Navigator screenOptions={{headerShown:false}}>
      <meniInstance.Screen
        name="menu"
        component={Menu}
      />
      <meniInstance.Screen
        name="Dangkidichvu"
        component={Dangkidichvu}
      />
      <meniInstance.Screen
        name="Dangkiwifi"
        component={Dangkiwifi}
      />
      <meniInstance.Screen
        name="Dangkiguixe"
        component={Dangkiguixe}
      />
      <meniInstance.Screen
        name="Dangkidonphong"
        component={Dangkidonphong}
      />
      <meniInstance.Screen
        name="Thongtinlienlac"
        component={Thongtinlienlac}
      />
      <meniInstance.Screen
        name="Thongbaomenu"
        component={Thongbao}
      />
      <meniInstance.Screen
        name="Dangxuat"
        component={Login}
      />
      <meniInstance.Screen
        name="Lichsuthuephong"
        component={Luutru}
      />
      <meniInstance.Screen
        name="Thongtincanhan"
        component={Thongtincanhan}
      />

      

    </meniInstance.Navigator>
  );
}
function LuutruInstance(){
    
      return (
        <luutruInstance.Navigator screenOptions={{headerShown:false}}>
            <luutruInstance.Screen
            name="luutru"
            component={Luutru}
          />
          <luutruInstance.Screen
            name="Thongtinluutru"
            component={Thongtinluutru}
          />
          <luutruInstance.Screen
          name="Thongtincanhan"
          component={Thongtincanhan}
      />
        </luutruInstance.Navigator>
      )
      
}
function HomeInstance(){  
  return (
      <homeInstance.Navigator screenOptions={{headerShown:false}}>
        <homeInstance.Screen
        name="home"
        component={Home}
      />
      <homeInstance.Screen
        name="homedetail"
        component={Homedetail}
      />
      <homeInstance.Screen
          name="Thongtincanhan"
          component={Thongtincanhan}
      />
      </homeInstance.Navigator>
      ) 
}

function ThongbaoInstance(){  
  return (
      <thongbaoInstance.Navigator screenOptions={{headerShown:false}}>
        <thongbaoInstance.Screen
        name="thongbao"
        component={Thongbao}
      />
      <thongbaoInstance.Screen
        name="thongbaochitiet"
        component={Thongbaochitiet}
      />  
      <thongbaoInstance.Screen
          name="Thongtincanhan"
          component={Thongtincanhan}
      />
      
      </thongbaoInstance.Navigator>
      ) 
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name = "Login" component={Login}></Stack.Screen>
        <Stack.Screen name = "TabBottom" component={MyTabs}></Stack.Screen>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default App;
