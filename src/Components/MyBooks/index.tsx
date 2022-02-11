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
import mark from "./../../Assets/mark-athena.jpg";
import monster from "./../../Assets/medico-monstro.jpg";

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
            <ImageBook resizeMode="center" borderRadius={30} source={mark} />
            <TextBook>The Mark of Athena</TextBook>
          </TouchableOpacity>
        </ContainerLinkBook>
        <ContainerLinkBook>
          <TouchableOpacity>
            <ImageBook resizeMode="center" borderRadius={30} source={monster} />
            <TextBook>O Médico e o Monstro</TextBook>
          </TouchableOpacity>
        </ContainerLinkBook>
        
      </ContainerMyBook>
    </>
  );
};

export default MyBooks;
