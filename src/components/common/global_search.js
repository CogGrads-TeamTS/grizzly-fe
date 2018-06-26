import React from 'react';
import { connect } from 'react-redux';
import { globalFetchData, globalSaveSearch } from '../../actions/globalActions';
import Select from 'react-select';
import { Badge } from 'reactstrap';
import searchIcon from '../../Assets/searchicon.svg';
import _ from 'lodash';
import 'react-select/dist/react-select.css';
import './global_search.css'

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
    this.setState({ search });
    this.props.fetchData({ search, callback: this.loadingCallback });
  }

  mapSearchElements() {
    _.map(this.props.results, (contents, service) => {
      _.map(contents, (element) => {
        this.options.push({
          value: element.id,
          label: element.name,
          service: service
        })
      })
    })
  }

  render() {
    this.options = [];
    this.mapSearchElements();

    return (
      <div>
        <Select
          name="form-field-name"
          value={this.props.selected}
          onInputChange={this.searchDebounce}
          placeholder={"Search all services..."}
          onChange={(selected) => {
            this.props.saveSelected(selected)
          }}
          className="global-search-box"
          valueComponent={customValue}
          options={this.options}
          isLoading={this.props.loading}
          arrowRenderer={() => {return <span><img className="global-search-icon" src={searchIcon} /></span>}}
        />
      </div>
    )
  }
}

const customValue = props => {

  const switchServicePill = (service) => {
    switch(service){
      case "vendors":
        return "secondary"
      case "products":
        return "success"
      default:
        return "primary"
    }
  }

  return (
    <div className="Select-value" title={props.value.title}>
      <span className="Select-value-label">
        {props.children}
        <div className="srch-srvce-txt">{props.value.service}</div>
        {/* <Badge className="srch-srvce-pl" color={switchServicePill(props.value.service)} pill>{props.value.service}</Badge> */}
      </span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    results: state.global.results,
    search: state.global.search,
    loading: state.globalIsLoading,
    selected: state.global.selected
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (search) => dispatch(globalFetchData(search)),
    saveSelected: (selected) => dispatch(globalSaveSearch(selected))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalSearch);
