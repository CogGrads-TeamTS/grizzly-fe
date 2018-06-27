import React from 'react';
import './global_search.css';

class OptionComponent extends React.Component {

    constructor(props) {
        super(props);

        this.isFirst = "";
        if(props.option.isFirst === true){
            this.isFirst = " search-val-first";
        }
    }

    handleMouseDown = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.onSelect(this.props.option, event);
    }

    handleMouseEnter = (event) => {
        this.props.onFocus(this.props.option, event);
    }

    handleMouseMove = (event) => {
        if (this.props.isFocused) return;
        this.props.onFocus(this.props.option, event);
    }

    render() {
        return (
            <div className={this.props.className + this.isFirst}
                onMouseDown={this.handleMouseDown}
                onMouseEnter={this.handleMouseEnter}
                onMouseMove={this.handleMouseMove}
                title={this.props.option.title}>
                {this.props.children}
                <div className="srch-srvce-txt">{this.props.option.service}</div>
            </div>
        );
    }
};

export default OptionComponent;