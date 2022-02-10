import styled from "styled-components/native";

export const TitleContainer = styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-top: 28px;
    margin-left: 16px;
    margin-right: 16px;
`;

export const ContainerMyBook = styled.ScrollView`
    height: 330px;
    width: 100%;
    padding: 0 16px;
    margin-top: 24px;
`;

export const ContainerLinkBook = styled.View`
    display: flex;
    align-items: center;
    width: 200px;
    margin-right: 16px;
    flex-direction: column;
`;

export const ImageBook = styled.Image`
    height: 300px;
`;

export const TextBook = styled.Text`
    color: #787B86;
    text-align: center;
    margin-top: 10px;
`;
// export const ContainerBook = styled.View``;