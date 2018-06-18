import React, {Component} from 'react';
import { 
    Button, 
    Dropdown, 
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    ButtonDropdown
} from 'reactstrap';
import { categoriesFetchData } from '../../actions/categoryActions';
import { connect } from 'react-redux';


class ProductSortByCategory extends Component{
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

    changeValue(e){  console.log(e)
        this.setState({
            dropdownValue: "Filtering by Category: " + e.currentTarget.textContent
        })
        this.props.update(e.currentTarget.value);
    }

    render(){ console.log(this.props.categories)
        if (this.props.categories) {
            return(
                <div>
                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret>
                            {this.state.dropdownValue}
                        </DropdownToggle>
                        <DropdownMenu id="categoryDropdown">
                        {
                            Object.values(this.props.categories).map(category => 
                                <DropdownItem  onClick={this.changeValue} value={category.id}>{category.name}</DropdownItem>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductSortByCategory);