// import { memo } from 'react';

import PropTypes from 'prop-types';

const Button = ({ onClickBtn, btnText, type, className }) => {
  // console.log('Button render')
  return (
    <button className={className} type={type} onClick={onClickBtn}>
      {btnText}
    </button>
  );
};

// export default memo(Button);
export default Button;

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClickBtn: PropTypes.func,
  btnText: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
};
