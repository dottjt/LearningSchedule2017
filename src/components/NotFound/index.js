import React, { PropTypes, Component } from 'react';
import './style.css';
export default class NotFound extends Component {
// static propTypes = {}
// static defaultProps = {}
// state = {}
render() {
const { className, ...props } = this.props;
return (
<div className={""} {...props}>
<h1>
404 <small>Not Found :(</small>
</h1>
</div>
);
}
}
