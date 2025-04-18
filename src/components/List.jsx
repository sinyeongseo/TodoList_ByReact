import "./List.css"
import TodoItem from "./TodoItem";
import {useState} from 'react'

const List = ({todos , onUpdate, onDelete}) => { 

    const [search ,setSearch] = useState("");

    // 검색창에 글자를 입력하면 호출된다.
    // 입력값을 search 상태에 저장한다.
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    // 검색어가 비어있다면 전체 todos를 반환한다.
    // 검색어가 있다면 todo.content에서 포함 여부를 검색한다.
    // toLowerCase()를 사용해서 대소문자 구분 없이 검색 가능하다.
    const getFilteredData = () => {
        if(search === ""){
            return todos;
        }
        return todos.filter(
            (todo) => todo.content.toLowerCase().includes(search.toLowerCase())
        );
    }

    const filteredTodos = getFilteredData();

    return (
        <div className="List">
            <h1>Todo List🎄</h1>
            <input value={search} onChange ={onChangeSearch} placeholder="검색어를 입력하세요"></input>
            <div className="todos_wrapper">
                {filteredTodos.map((todo) => {
                    return (
                        <TodoItem key={todo.id} {...todo} 
                        onUpdate={onUpdate}
                        onDelete={onDelete}/>
                    ) ;
                })}
            </div>
        </div>
        
    );
    
}

export default List;