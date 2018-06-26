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
          optionComponent={optionValue}
          options={this.options}
          isLoading={this.props.loading}
          arrowRenderer={() => {return <span><img className="global-search-icon" src={searchIcon} /></span>}}
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

const optionValue = props => {
  const handleMouseDown = (event) => {
		event.preventDefault();
		event.stopPropagation();
		props.onSelect(props.option, event);
  }
  
	const handleMouseEnter = (event) => {
		props.onFocus(props.option, event);
  }
  
	const handleMouseMove = (event) => {
		if (props.isFocused) return;
		props.onFocus(props.option, event);
  }
  
  return (
    <div className={props.className}
				onMouseDown={handleMouseDown}
				onMouseEnter={handleMouseEnter}
				onMouseMove={handleMouseMove}
				title={props.option.title}>
				{props.children}
        <div className="srch-srvce-txt">{props.option.service}</div>
			</div>
    // <div className="Select-value" title={props.option.value}>
    //   <span className="Select-value-label">
    //     {props.children}
    //     <div className="srch-srvce-txt">{props.option.service}</div>
    //   </span>
    // </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(GlobalSearch);
