import PropTypes from 'prop-types';
import cn from 'classnames';
import crossImg from './img/cross.svg';
import styles from './UiInput.module.css';
import '../index.css';

const UiInput = ({value, handleInputChange, placeholder, classes}) => (
  <div className={cn(styles.wrapper__input, classes)}>
    <input 
      type="text"
      value={value}
      onChange={(e) => handleInputChange(e.target.value) }
      placeholder={placeholder}
      className={styles.input}
    />
    <img 
      src={crossImg}
      alt="clean"
      onClick={() => value && handleInputChange('')}
      className={cn(styles.clear, !value && styles.clear__disabled )}
    />
  </div>
)

UiInput.propTypes ={
  value: PropTypes.string, 
  handleInputChange: PropTypes.func,
  placeholder: PropTypes.string,
  classes: PropTypes.string,
}

export default UiInput;
