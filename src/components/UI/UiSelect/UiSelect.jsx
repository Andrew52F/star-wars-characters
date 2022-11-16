import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './UiSelect.module.css';
import '../index.css';

const UiSelect = ({onChange, value, options, classes }) => {
  return (
    <select
          className={cn(styles.language__select, classes)}
          onChange={onChange}
          value={value}
        >
          {options.map((lng, index) => (
            <option key={index} value={lng}>{lng}</option>
          ))}
      </select>
  )
}
UiSelect.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  option: PropTypes.array,
}
export default UiSelect;