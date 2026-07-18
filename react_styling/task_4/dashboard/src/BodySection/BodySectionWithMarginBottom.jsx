import PropTypes from 'prop-types';
import BodySection from './BodySection';

export default function BodySectionWithMarginBottom(props) {
  return (
    <div className="mb-8">
      <BodySection {...props} />
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = BodySection.propTypes;
