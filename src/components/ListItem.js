import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

type Library ={
    id: number,
    title: string,
    description: string,
}
type Props ={
    library: Library
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};
class ListItem extends Component<Props> {
  render() {
    const { titleStyle } = styles;
    return (
      <CardSection>
        <Text style={titleStyle}>{this.props.library.title}</Text>
      </CardSection>
    );
  }
}

export default ListItem;
