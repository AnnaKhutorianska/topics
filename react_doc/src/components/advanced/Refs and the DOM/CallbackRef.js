export default function CallbackRef() {
  let inputRef = null; 

  const onClick = () => {
      console.log('input', inputRef.value);
  }

  const onFocusClick = () => {
      inputRef.focus();
  }

  return (
      <div>
        CallbackRef: 
          <input ref={e => { inputRef = e }} />
          <button onClick={onClick}>Log value</button>
          <button onClick={onFocusClick}>Focus on input</button>
      </div>
  );
};