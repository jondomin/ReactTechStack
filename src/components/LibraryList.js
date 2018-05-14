import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import LibraryItem from './ListItem';

type Props = {
  libraries: Array
};
class LibraryList extends Component<Props> {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }
  renderRow(library) {
    return <LibraryItem library={library} />;
  }
  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => ({ libraries: state.libraries });

export default connect(mapStateToProps)(LibraryList);
