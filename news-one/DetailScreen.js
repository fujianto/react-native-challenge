import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import HTMLView from 'react-native-htmlview'



export default class DetailScreen extends Component {
  static navigationOptions = ({navigation}) => (
    {
      headerTitle: navigation.state.params.article.title.rendered,
      headerStyle: {
        marginTop: 24,
        backgroundColor: 'rgba(33, 136, 182, 0.35)'
      }
    }
  )

  constructor(props) {
    super(props)

    this.state = {
      news: []
    }
  }

  render() {
    const styles = StyleSheet.create({
      title: {
        fontSize: 20,
        padding: 10,
        fontWeight: 'bold'
      },

      content: {
        padding: 10
      },

      featuredImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },

      featuredContainer: {
        position: 'relative',
        height: 150,
        flex: 1
      },
    }); 

    const { navigate, state } = this.props.navigation
    const article = state.params.article;
    const content = article.content.rendered;
    const featuredImageUrl = article._embedded['wp:featuredmedia'][0].source_url;

    return (
      <ScrollView>
        <Text style={styles.title}>{article.title.rendered}</Text>

        <View style={styles.featuredContainer}>
          <Image style={styles.featuredImage} resizeMode="cover" source={{ uri: featuredImageUrl }} />
        </View>

        <HTMLView
          style={styles.content}
          value={content}
        />
      </ScrollView>
    )
  }
}