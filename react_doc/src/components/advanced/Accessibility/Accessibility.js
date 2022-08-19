// aria-*
<button id='menu' aria-expanded='false'>open menu</button>

<a>
  <svg aria-label="follow company...."></svg>
</a>

<img src="" alt="" aria-labelledby="caption"/>
<p id="caprion">cartion</p>

<img src="" alt="" role="button"/>

// semantic HTML
function Menu() {
  return(
    <ul>
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </ul>
  )
}

function MenuItem() {
  return(
    <>
      <li>menuItem</li>
    </>
  )
}

// accessible Forms
<label htmlFor="cityInput">are u from ...?</label>
<input id="cityInput" type="checkbox" name="city"/>

// focus control

function Form() {
  const nameInput = useRef();

  useEffect(() => {
    nameInput.current.focus();
  }, []);

  return (
    <div>
      <input ref={nameInput} />
    </div>
  );
}