import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { StyleSheet } from 'react-native'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
         tabBarActiveTintColor: '#ffffff', 
         tabBarInactiveTintColor: '#000000',
         tabBarStyle: {
          backgroundColor: '#008080',  
          height:60,
          borderRadius: 100,
          margin:10,
          padding:10,
          borderTopWidth: 0,
          elevation:8
        },
       
      }}

    >
      <Tabs.Screen
        name="recipes"
        options={{
          title: 'Acceuil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
    
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: 'Paramètres',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />

    
    </Tabs>
  )
}


const styles = StyleSheet.create ({
    tab:{
        backgroundColor: '#008080'
    }
})