import React, {
  useMemo,
  useState,
  useDeferredValue,
  useTransition,
} from "react";

function UseTransitionComp() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const listSize = 2000;

  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < listSize; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      {isPending ? "loading" : list.map((item) => (
        <div key={item.idex}>{item}</div>
      ))}
    </div>
  );
}

export default UseTransitionComp;
