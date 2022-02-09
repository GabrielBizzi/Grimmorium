import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ContainerProfile, ImageProfile, TextProfile, ContainerTextProfile, Icon } from './styles';
import { rod } from '../../Assets';

const Profile: React.FC = () => {

    return (
        <ContainerProfile>
            <ContainerTextProfile>
                <ImageProfile borderRadius={50} style={{borderWidth: 2, borderColor: '#f9784b'}} source={rod} />
                <TextProfile>
                    <Text style={{color: '#505763', fontSize: 14}}>Hello,</Text>
                    <Text style={{ color: '#fff', fontSize: 20}}>Rodrigo Cordeiro</Text>
                </TextProfile>
            </ContainerTextProfile>
            <TouchableOpacity onPress={() => console.log('menu')}>
            <Icon
                name='more-vertical'
                color="#474747"
                size={30}
            />
            </TouchableOpacity>
        </ContainerProfile>
    );
}

export default Profile;