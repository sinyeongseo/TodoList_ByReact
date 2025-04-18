import "./TodoItem.css";

// 부모 컴포넌트인 List에서 전달 받는 값들
const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete}) => {
    
    // 체크박스를 클릭했을 때 실행되는 함수
    // 부모에게 onUpdate(id)를 호출한다.
    const onChangeCheckBox = () =>{ 
        onUpdate(id);
    };

    // 삭제 버튼을 클릭했을 때 실행된다.
    // 부모에게 onDelete(id)를 호출한다.
    const onClickDelete = () => {
        onDelete(id);
    };

    return (
        <div className="TodoItem">
            <input onChange = {onChangeCheckBox} readOnly checked={isDone} type="checkbox"></input>
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick = {onClickDelete}>삭제</button>
        </div>
    );
}

export default TodoItem;