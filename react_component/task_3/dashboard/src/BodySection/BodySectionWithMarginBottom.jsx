import React, { Component } from 'react';
import './BodySectionWithMarginBottom.css'
import BodySection from './BodySection';
import PropTypes from 'prop-types';

class BodySectionWithMarginBottom extends Component {

	render() {
		return (
				<div className="bodySectionWithMargin">
					<BodySection {...this.props} />
				</div>
		);
	}
}

BodySectionWithMarginBottom.propTypes = BodySection.propTypes;

export default BodySectionWithMarginBottom;
