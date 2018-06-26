import React from 'react';
import {connect} from 'react-redux';
import { globalFetchData } from '../../actions/globalActions';
import Select from 'react-select';
import _ from 'lodash';
import 'react-select/dist/react-select.css';

class GlobalSearch extends React.Component {
  constructor(props) {
    super(props);

    this.options = [];
    }

  searchDebounce = _.debounce((search) => { this.updateSearch(search) }, 300);

  searchValue = event => {
    this.searchDebounce(event.target.value);
  }

  updateSearch(search) {
    this.setState({search});
    this.props.fetchData({search, callback: this.loadingCallback});
}

  render() { 
    this.options = [];
    _.map(this.props.results, (service) => {
      _.map(service, (element) => {
        this.options.push({
          value: element.id,
          label: element.name,
        })
      })
    })
    
    return (
      <div>
        <Select
          name="form-field-name"
          value=''
          valueKey={this.props.search}
          onInputChange={this.searchDebounce}
          className="global-search-box"
          options = {this.options}
          isLoading= {this.props.loading}
        />
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.global.results,
    search: state.global.search,
    loading: state.globalIsLoading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (search) => dispatch(globalFetchData(search))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (GlobalSearch);
