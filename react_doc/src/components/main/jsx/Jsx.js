function formatName(user) {
  return user.firstName[0] + user.lastName[0]
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const elementUser = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

//children element

const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

const element2 = (
  <div>
    <div>day:</div>
    <div>Monday</div>
  </div>
);

//create element
const crElement = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
const crElement2 = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};

const crElement3 = (
  <div className="monday">
    monday
  </div>
);
const crElement4 = {
  type: 'div',
  props: {
    className: 'monday',
    children: 'monday'
  }
};
