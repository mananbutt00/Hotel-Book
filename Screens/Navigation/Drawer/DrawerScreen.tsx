import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../Home';
import Login from '../../Login';
type drawerType=
{
Home:undefined,
Login:undefined,

}
const Drawer = createDrawerNavigator<drawerType>();
const DrawerScreen=()=>
{

return(
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Login" component={Login} />
  </Drawer.Navigator>

)

}

export default DrawerScreen;