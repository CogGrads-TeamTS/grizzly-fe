import React, { Component } from 'react';
import classNames from 'classnames';
import { arrayMove } from 'react-sortable-hoc';
import _ from 'lodash';

class ListWrapper extends Component {
    constructor({ items }) {
        super();
        this.state = {
            items,
            isSorting: false,
        };
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

        // Update the sort value of each jo
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