import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {logIn, logOut} from './actions/user';
import './App.css';

//npm i redux react-redux
//npm i redux-devtools-extension -D

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  const onClick = useCallback(() => {
    dispatch(logIn({user: 'gayeon', id: 'bonbon'}));
  }, []);

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className="App">
      {user.data === null ? (
        <>
          '로그인하시오'
          <button onClick={onClick}>login</button>
        </>
      ) : user.isLoggingIn ? (
        '로딩중...'
      ) : (
        <>
          {user.data.id}
          <button onClick={onLogOut}>logOut</button>
        </>
      )}
    </div>
  );
}

export default App;
