import React, {useEffect, useState} from 'react';
import * as ReactDOM from 'react-dom';

const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');

function Modal() {
    const el = document.createElement('div');
  

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => modalRoot.removeChild(el);
  },[])

  
  return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
}

function Child() {
  // Подія натискання на цю кнопку буде спливати вгору до батьківського елемента,
  // тому що не визначено атрибут "onClick"
  return (
    <div className="modal">
      <button>Натисніть</button>
    </div>
  );
}

function Parent() {
  const [clicks, setClicks] = useState(0)

  function handleClick() {
    setClicks(clicks => clicks + 1)
  }

 
    return (
      <div onClick={handleClick}>
        <p>Кількість натискань: {clicks}</p>
        <p>
          Відкрийте DevTools браузера,
          щоб переконатися, що кнопка
          не є нащадком блоку div
          з обробником onClick.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
}

ReactDOM.render(<Parent />, appRoot);
