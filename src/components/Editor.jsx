import "./Editor.css";
import { useState, useRef} from "react";

// 함수형 컴포넌트로 부모 컴포넌트에서 넘겨준 Todo 생성 함수이다.
const Editor = ({ onCreate }) => {
    const [content, setContent] = useState("");
    const contentRef = useRef();

    // input에 글자가 입력될때 마다 실행된다.
    // 입력값을 상태인 content에 저장한다.
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    // Enter 키를 눌렀을때 onSubmit이 실행된다.
    const onKeydown = (e) => {
        if(e.keyCode === 13){
            onSubmit();
        }
    };

    // 입력 값이 비어있으면 input에 포커스
    // 값이 있으면 onCreate 호출
    // 입력창 비우기
    const onSubmit = () => {
        if(content === ""){
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };

    return (
        <div className="Editor">
            <input ref={contentRef} value={content} onKeyDown={onKeydown}
             onChange={onChangeContent} placeholder="새로운 Todo..."></input>
            <button onClick={onSubmit}>추가</button>
        </div>
    );
}

export default Editor;