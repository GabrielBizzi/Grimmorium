import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const ContainerProfile = styled.View`
    display: flex;
    margin: 0 16px;
    justify-content: space-between;
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

export const ImageProfile = styled.Image`
    display: flex;
    width: 50px;
    height: 50px;

    margin-right: 16px;
`;

export const TextProfile = styled.View`
    display: flex;
    font-family: sans-serif;
`;

export const ContainerTextProfile = styled.View`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
`;

export const Icon = styled(FeatherIcon)`
    margin-right: 32px;
`;