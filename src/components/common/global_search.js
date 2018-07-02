import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { globalFetchData, globalSaveSearch } from '../../actions/globalActions';
import Select from 'react-select';
import optionComponent from './optionComponent';
import searchIcon from '../../Assets/searchicon.svg';
import _ from 'lodash';
import 'react-select/dist/react-select.css';
import './global_search.css'

class GlobalSearch extends React.Component {
  constructor(props) {
    super(props);

    this.options = [];

    this.state = {
      overlayClass: "search-overlay-shadow",
      globalSearchBoxClass: "global-search-box",
    }
  }

  searchValue = event => {
    this.searchDebounce(event.target.value);
  }

  searchDebounce = _.debounce((search) => { this.updateSearch(search) }, 300);

  updateSearch(search) {
    this.props.fetchData({ search, callback: this.loadingCallback });
  }

  mapSearchElements() {
    _.map(this.props.results, (contents, service) => {
      _.map(contents, (element, i) => {
        const isFirst = (i === 0)
        this.options.push({
          value: element.id,
          label: element.name,
          service,
          isFirst
        })
      })
    })
  }

  activateBackdrop() {
    this.setState({
      overlayClass: "search-overlay-shadow-active",
      globalSearchBoxClass: "global-search-box-active"
    })
  }
  deactivateBackdrop() {
    this.setState({
      overlayClass: "search-overlay-shadow",
      globalSearchBoxClass: "global-search-box"
    })
  }

  determinePath(selected) {
    if (selected === null) return
    if (selected.service === "products") {
      this.props.history.push(`/product/${selected.value}`);
    }
  }

  render() {
    this.options = [];
    this.mapSearchElements();

    let overlay_class = this.state.overlayClass;
    let search_box_class = this.state.globalSearchBoxClass;

    return (
      <div>
        <div className={overlay_class}></div>
        <Select
          name="form-field-name"
          custom={"hello"}
          value={this.props.selected}
          onInputChange={this.searchDebounce}
          placeholder={"Search all services..."}
          onChange={(selected) => {
            this.determinePath(selected)
            this.props.saveSelected(selected)
          }}
          onFocus={this.activateBackdrop.bind(this)}
          onClose={this.deactivateBackdrop.bind(this)}
          className={search_box_class}
          valueComponent={customValue}
          optionComponent={optionComponent}
          options={this.options}
          isLoading={this.props.loading}
          arrowRenderer={() => { return <span><img className="global-search-icon" src={searchIcon} /></span> }}
        />
      </div>
    )
  }
}


//  Component methods for Select Prop
const customValue = props => {
  return (
    <div className="Select-value" title={props.value.title}>
      <span className="Select-value-label">
        {props.children}
        <div className="srch-srvce-txt">{props.value.service}</div>
      </span>
    </div>
  );
};




// Mapping Methods
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GlobalSearch));
