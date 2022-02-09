import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { ContainerLinkBook, ContainerMyBook } from './styles';
import image from "./../../Assets/hobit.png";

const MyBooks: React.FC = () => {

    return (
      <>
        <ContainerMyBook contentContainerStyle={{height: 375}} horizontal>
          <ContainerLinkBook>
            <TouchableOpacity>
              <Image source={image} />
              <Text>O Hobbit - J. R. R. Tolkien</Text>
            </TouchableOpacity>
          </ContainerLinkBook>
          <ContainerLinkBook>
            <TouchableOpacity>
              <Image source={image} />
              <Text>O Hobbit - J. R. R. Tolkien</Text>
            </TouchableOpacity>
          </ContainerLinkBook>
          <ContainerLinkBook>
            <TouchableOpacity>
              <Image source={image} />
              <Text>O Hobbit - J. R. R. Tolkien</Text>
            </TouchableOpacity>
          </ContainerLinkBook>
        </ContainerMyBook>
      </>
    );

};

export default MyBooks;