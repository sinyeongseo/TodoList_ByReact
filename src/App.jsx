import {useState, useRef} from 'react';
// useSate 상태 관리를 위한 Hook import
// useRef 변경 가능한 값을 참조하는 hook (렌더링과 무관한 값 보관용)
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import './App.css';

// 앱 실행 시 처음 보여주는 객체 (임시 데이터)
const mockData = [
  {
    id: 0,
    isDone:false,
    content : "React 공부하기",
    date : new Date().getTime(),      
  },
  {
    id: 1,
    isDone:false,
    content : "빨래 하기",
    date : new Date().getTime(),      
  },
  {
    id: 2,
    isDone:false,
    content : "노래 연습 하기",
    date : new Date().getTime(),      
  },
];

// React 앱의 메인 컴포넌트
function App() {

  const [todos, setTodos] = useState(mockData);
  // todos : 현재 할 일 리스트
  // setTodos : 할 일 리스트를 업데이트하는 함수

  const idRef = useRef(3);
  // 다음 생성할 Todo의 id를 기억하는 변수 ( 초기 값 3 )
  // useRef는 값이 바뀌어도 컴포넌트를 재렌더링 하지 않음
  // 주로 id나 DOM 요소 참조 같은 변화는 있지만 화면에는 필요 없는 값을 기억할때 사용

  // 새로운 할 일을 입력하면 호출
  // 기존 todos 앞에 붙여 새 배열을 만든다.
  // id를 하나 증가 시켜 고유 id를 보장한다.
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }

    setTodos([newTodo, ...todos]);
    
  };

  
  const onUpdate = (targetId) => {
    // todos State 값들 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경
    
    //인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열 
    setTodos(
      todos.map((todo) => // 특정 ID를 가진 todo의 isDone 상태를 변경 시킴
                          // map을 사용해 새로운 배열을 만든다.
        todo.id === targetId
        ? { ...todo, isDone: !todo.isDone}
        : todo 
      )
    );
  };

  // 특정 id를 가진 todo를 제외하고 나머지만 필터링해서 배열을 만든다.
  const onDelete = (targetId) => {
    //인수 : todos 배열에서 targetId와 일치하는 id을 갖는 요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
     <Header></Header>
     <Editor onCreate = {onCreate}></Editor>
     <List todos = {todos} onUpdate={onUpdate} onDelete={onDelete} ></List>
    </div>
  );
}

export default App
