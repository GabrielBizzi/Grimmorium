import Card from 'Components/Card';
import MyBooks from 'Components/MyBooks';
import Profile from 'Components/Perfil';
import * as React from 'react';
import { View, Text } from 'react-native';
import { InitialContainer } from '../Styles/style';

const HomeScreen = ()=> {
  return (
    // Initial Container (Container)
    <InitialContainer contentContainerStyle={{ marginTop: 70, flex: 1}}>
      {/* Profile component on top app */}
      <Profile />
      {/* Card `Last book` */}
      <Card page='284' title='O Hobbit (J. R. R. Tolkien)' />
      {/* My Books */}
      <MyBooks />
    </InitialContainer>
  );
}

export default HomeScreen;