import React, {Component} from 'react';
import { 
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    ButtonDropdown
} from 'reactstrap';
import { categoriesFetchData } from '../../actions/categoryActions';
import { connect } from 'react-redux';


class ProductFilterByCategory extends Component{
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false,
            dropdownValue: 'Filter By Category'
        }
        this.toggle = this.toggle.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }

    toggle(e){
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    changeValue(e){  //console.log(e)
        const value = e.currentTarget.value;
        this.setState({
            dropdownValue: value === "" ? 'Filter By Category':"Filtering by: " + e.currentTarget.textContent
        })
        this.props.update(value);
    }

    render(){ //console.log(this.props.categories)
        if (this.props.categories) {
            return(
                <div>
                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} color="info">
                        <DropdownToggle color="info" caret>
                            {this.state.dropdownValue}
                        </DropdownToggle>
                        <DropdownMenu id="categoryDropdown">
                        <DropdownItem onClick={this.changeValue} value="">All</DropdownItem>
                        <DropdownItem header>Categories</DropdownItem>
                        {
                            // Requires curly brackets or there is an issue mapping the key
                            Object.values(this.props.categories).map(category =>  
                                <DropdownItem  key={category.id} onClick={this.changeValue} value={category.id}>{category.name}</DropdownItem>
                            )
                        }
                        </DropdownMenu>
                    </ButtonDropdown>
                </div>
            )
        }else{
            return(
                <div></div>
            )
        }
        
    }
}

const mapStateToProps = (state) => {
    return{
        categories: state.products.filterByCat
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchData: () => dispatch(categoriesFetchData())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductFilterByCategory);