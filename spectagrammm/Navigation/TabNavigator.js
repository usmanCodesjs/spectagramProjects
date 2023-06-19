import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";
import { StyleSheet } from 'react-native';


const Tab = createBottomTabNavigator();

const BottomTabNavigator=()=> {
  return (
    <NavigationContainer>
      <Tab.Navigator
      labeled = {false}
      barStyle = {styles.bottomTabStyle}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused
                ? 'book'
                : 'book-outline';
            } else if (route.name === 'CreatePost') {
              iconName = focused ? 'create' : 'create-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Feed" component={Feed} options={{headerShown:false}}/>
        <Tab.Screen name="CreatePost" component={CreatePost} options={{headerShown:false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
} 
const styles = StyleSheet.create({
  bottomTabStyle:{height:8,
  backgroundColor:"white",
  borderTopLeftRadius:30,
  borderTopRightRadius:30,
  overflow:"hidden",
  position:"absolute"}
})
export default BottomTabNavigator