function Input(props) {
  let { label, messageError, ...restProps } = props;
  return (
    <div className="input-group">
      <input required autoComplete="off" className="input" {...restProps} />
      <label className="user-label">{label}</label>
      {messageError && <span className="mess-error">{messageError}</span>}
    </div>
  );
}

export default Input;
