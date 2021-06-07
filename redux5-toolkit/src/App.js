import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addPost} from './actions/post';
import {logIn, logOut} from './actions/user';
import './App.css';
import {userSlice} from './reducers/user';

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
    dispatch(userSlice.actions.logOut());
  };

  const handleAddPost = useCallback(() => {
    dispatch(addPost());
  }, []);

  return (
    <div className="App">
      {!user.data && user.isLoggingIn === false ? (
        <>
          '로그인하시오'
          <button onClick={onClick}>login</button>
        </>
      ) : !user.data && user.isLoggingIn ? (
        '로딩중...'
      ) : user.data && user.isLoggingIn === false ? (
        <>
          {user.data.nickname}
          <button onClick={onLogOut}>logOut</button>
        </>
      ) : (
        ''
      )}
      <button onClick={handleAddPost}> 게시글 작성</button>
    </div>
  );
}

export default App;
