import React, { Component } from 'react';
import classNames from 'classnames';
import { arrayMove } from 'react-sortable-hoc';
import _ from 'lodash';

class ListWrapper extends Component {
    constructor({ items }) {
        super();

        this.state = {
            items:this.initialSort(items),
            isSorting: false,
        };
    }

    initialSort = (items) => {
        items.sort((x, y) => x.sort - y.sort);
        return items;
    }

    // Sort the images
    sortImages = (items) => {
        // Re-sort images
        _.map(items, (image, i) => {
            image.sort = i;
        });
        items.sort((x, y) => x.sort - y.sort);
        return items;
    }

    componentDidMount(){
        this.props.callbackUpdate(this.props.items);
    }

    componentDidUpdate(prevProps, prevState) {
        // Reload with new images after delete and after images are receieved
        if (prevState.items !== this.state.items) {
            // Re-sort after delete
            let sortedItems = this.sortImages(this.state.items);
            this.setState({
                items: sortedItems
            })
        }
    }

    static defaultProps = {
        className: classNames("list", "stylizedList"),
        itemClass: classNames("item", "stylizedItem"),
        width: 400,
        height: 600,
    };

    onSortStart = () => {
        const { onSortStart } = this.props;

        this.setState({ isSorting: true });

        if (onSortStart) {
            onSortStart(this.refs.component);
        }
    };

    onSortEnd = ({ oldIndex, newIndex }) => {
        const { onSortEnd } = this.props;
        const { items } = this.state;
        // Set the newly ordered items in a new var
        var newitems = arrayMove(items, oldIndex, newIndex);

        // Update the sort value of each image
        _.map(newitems, (item, index) => {
            item.sort = index;
        })

        this.setState({ items: newitems, isSorting: false });
        this.props.callbackUpdate(newitems);

        if (onSortEnd) {
            onSortEnd(this.refs.component);
        }
    };

    render() {
        const Component = this.props.component;
        const { items, isSorting } = this.state;
        const props = {
            isSorting,
            items,
            onSortEnd: this.onSortEnd,
            onSortStart: this.onSortStart,
            ref: 'component',
            useDragHandle: this.props.shouldUseDragHandle,
        };

        return <Component {...this.props} {...props} />;
    }
}

export default ListWrapper;