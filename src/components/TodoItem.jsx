import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete}) => {
    
    const onChangeCheckBox = () =>{ 
        onUpdate(id);
    };

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