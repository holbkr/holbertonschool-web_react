import PropTypes from 'prop-types';

export default function BodySection({ title, children }) {
  return (
    <div className="mb-6 px-4 sm:px-0">
      <h2 className="mb-3 text-xl font-semibold text-slate-800">{title}</h2>
      {children}
    </div>
  );
}

BodySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
