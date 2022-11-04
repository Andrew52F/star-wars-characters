import '../index.css';
import styles from './UiButton.module.css';
import PropTypes from 'prop-types';
import cn from 'classnames';

const UiButton = ({onClick, text, disabled, theme='dark', classes}) => {
  return (
    <button 
        className={cn(
          styles.button,
          styles[theme],
          classes
        )}
        onClick={onClick}
        disabled={disabled}
        >{text}
    </button>
  )
}

UiButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
  classes: PropTypes.string
}

export default UiButton;