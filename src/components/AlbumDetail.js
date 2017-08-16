import React from 'react';
import { Text, View, StyleSheet, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

//se usara function component debido a que solo se desplegaran datos
const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { headerContentStyle,
    thumnailStyle,
    thumbnailContainerStyle,
    textCStyle,
    imageStyle } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle} >
          <Image source={{ uri: thumbnail_image }} style={thumnailStyle} />
        </View>
        <View style={headerContentStyle}>
          <Text style={textCStyle} >{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source={{ uri: image }} style={imageStyle} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)} >
          Buy Now!
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerContentStyle: {
      //indica si el contenido debe estar en columna o fila
      flexDirection: 'column',
      justifyContent: 'space-around'
  },
  textCStyle: {
    fontSize: 18
  },
  thumnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});

export default AlbumDetail;
