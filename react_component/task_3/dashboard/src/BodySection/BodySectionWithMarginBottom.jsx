import React from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import './BodySectionWithMarginBottom.css';

const BodySectionWithMarginBottom = ({ title, children }) => {
	return (
	  <div className="bodySectionWithMargin">
		<BodySection title={title}>
		  {children}
		</BodySection>
	  </div>
	);
  };

export default BodySectionWithMarginBottom;
BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node,
};
BodySectionWithMarginBottom.defaultProps = {
	children: null,
};

