import React from "react";
import { TouchableOpacity, Text, ImageBackground } from "react-native";
import { Container, ContainerCard } from "./styles";
import image from "./../../Assets/hobit.png";

export interface ICard {
    imageData?: string;
    page?: string;
    title?: string;
}

const Card: React.FC<ICard> = ({imageData, page, title}) => {
  return (
    <>
      <Container>
        <TouchableOpacity>
            <ContainerCard resizeMode="cover" source={image} imageStyle={{opacity: 0.25, borderRadius: 14}}>
              <Text
                style={{ color: "#F9784B", marginBottom: 10, fontSize: 16 }}
              >
                Continue de onde parou!
              </Text>
              <Text style={{ color: "#9d9fa3"}}>
                Você estava lendo por último {title} e parou
                na página {page}.
              </Text>
            </ContainerCard>
        </TouchableOpacity>
      </Container>
    </>
  );
};

export default Card;
