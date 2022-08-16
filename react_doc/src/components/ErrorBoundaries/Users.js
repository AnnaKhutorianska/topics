import ErrorBoundary from "./ErrorBoundaries";

export const Users = () => {
  const ErrorMsg = (error) => {
    return (
        <div>
            <p>Something went wrong!</p>
            <p>{error.message}</p>
        </div>
    );
};

  // const users = [
  //   {
  //     id: 1,
  //     name: 'test1',
  //     company: 'test company 1'
  //   },
  //   {
  //     id: 2,
  //     name: 'test2',
  //     company: 'test company 2'
  //   },
  //   {
  //     id: 3,
  //     name: 'test3',
  //     company: 'test company 3'
  //   },
  // ]

  const users = [{
    id: 23
  }]

  return (
      <div>
          <h1>Users List: </h1>
          <ErrorBoundary ErrorComponent={ErrorMsg}>
              <ul>
                  {users.map((user) => (
                      <div key={user.id}>
                          <p>Name: {user.name}</p>
                          <p>Company: {user.company}</p>
                      </div>
                  ))}
              </ul>
          </ErrorBoundary>
      </div>
  );
};
