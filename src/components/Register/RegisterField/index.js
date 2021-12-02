// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
// == Import : local
import '../register.scss';

// == Composant
const RegisterField = ({ value, type, name, placeholder, manageChange, errors }) => {
  const handleChange = (evt) => {
    manageChange(evt.target.value, name);
  };

  const inputId = `registerfield-${name}`;
 
  return (
    <div className={errors ? "Inscription_input--error" : "Inscription_input"}>
      <label htmlFor={inputId}>
        {placeholder}
      </label>
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        placeholder={placeholder}
        name={name}
        
      />
    </div>
  );
};

RegisterField.propTypes = {
  /** text used as value for the input */
  value: PropTypes.string,
  /** type of the input */
  type: PropTypes.string,
  /** text used as name for the input (and also used as id, with a prefix) */
  name: PropTypes.string.isRequired,
  /** text used as placeholder and label */
  placeholder: PropTypes.string.isRequired,
  /** called when onChange event is received by the input, two parameters :
   * - new value
   * - name
   */
  manageChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
RegisterField.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default RegisterField;
