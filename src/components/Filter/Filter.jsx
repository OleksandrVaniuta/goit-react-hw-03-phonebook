import PropTypes from 'prop-types';
import css from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <label className={css.filterEl}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        className={css.filterInput}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
