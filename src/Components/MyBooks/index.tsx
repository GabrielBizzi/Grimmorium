import React from "react";
import { Text, TouchableOpacity } from "react-native";
import {
  ContainerLinkBook,
  ContainerMyBook,
  ImageBook,
  TextBook,
  TitleContainer,
} from "./styles";
import image from "./../../Assets/hobit.png";

const MyBooks: React.FC = () => {
  return (
    <>
      <TitleContainer>
        <Text style={{color: '#fff', fontSize: 24, fontWeight: '800'}}>Meus Livros</Text>
        <TouchableOpacity><Text style={{color: '#505763'}}>ver mais (122)</Text></TouchableOpacity>
        
      </TitleContainer>
      <ContainerMyBook
        contentContainerStyle={{ height: 330 }}
        style={{ maxHeight: 330 }}
        horizontal
      >
        <ContainerLinkBook>
          <TouchableOpacity>
            <ImageBook resizeMode="center" source={image} />
            <TextBook>O Hobbit - J. R. R. Tolkien</TextBook>
          </TouchableOpacity>
        </ContainerLinkBook>
        <ContainerLinkBook>
          <TouchableOpacity>
            <ImageBook resizeMode="center" source={image} />
            <TextBook>O Hobbit - J. R. R. Tolkien</TextBook>
          </TouchableOpacity>
        </ContainerLinkBook>
        <ContainerLinkBook>
          <TouchableOpacity>
            <ImageBook resizeMode="center" source={image} />
            <TextBook>O Hobbit - J. R. R. Tolkien</TextBook>
          </TouchableOpacity>
        </ContainerLinkBook>
      </ContainerMyBook>
    </>
  );
};

export default MyBooks;
