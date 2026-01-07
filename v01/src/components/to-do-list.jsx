// 상태 관리 Hook 불러오기
import { useState } from "react";

export default function ToDoList() {
  // 입력값 상태
  const [text, setText] = useState("");

  // 할 일 목록 상태
  const [todos, setTodos] = useState([]);

  function addTodo(e) {
    // 새로고침 방지
    e.preventDefault();

    // 입력값 공백 제거
    const v = text.trim();

    // 빈 값이면 초기화
    if (!v) return;

    // 할 일 추가
    setTodos((prev) => [{ id: Date.now(), title: v, done: false }, ...prev]);

    // 입력창 초기화
    setText("");
  }

  // 완료 상태 토글
  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  // 선택한 할 일 삭제
  function removeTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div>
      <h1>Todo</h1>

      {/* 할 일 추가 입력 폼 */}
      <form onSubmit={addTodo}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="할 일을 입력해 주세요."
        />
        <button type="submit">추가</button>
      </form>

      <ul>
        {/* 할 일 리스트 */}
        {todos.map((t) => (
          <li key={t.id}>
            <label>
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => toggleTodo(t.id)}
              />
              {t.done ? <s>{t.title}</s> : t.title}
            </label>
            <button onClick={() => removeTodo(t.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
