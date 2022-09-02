import React, {useState, useLayoutEffect, useEffect} from 'react'

function UseLayoutEffectComp() {
  const [value, setValue] = useState(0);

  //render with new value
  useLayoutEffect(() => {
    console.log('uselayout');
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  //first render 0 than new value
  useEffect(() => {
    console.log('useeffect');
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  // console.log('render', value);

  return (
    <div onClick={() => setValue(0)}>
      value: {value}
    </div>
  );
}

export default UseLayoutEffectComp