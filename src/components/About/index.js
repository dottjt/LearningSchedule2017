// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import './style.css';

export default class About extends Component {
// static propTypes = {}
// static defaultProps = {}
// state = {}
render() {
    const { className, ...props } = this.props;
        return (
        <div className={""} {...props}>
            <h1>
            About
            </h1>
        </div>
);
}
}