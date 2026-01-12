// 상태 관리 Hook 불러오기
import { useState } from "react";

export default function ToDoList() {
  // 입력값 상태
  const [text, setText] = useState("");

  // 할 일 목록 상태
  const [todos, setTodos] = useState([]);

  // 수정 상태 추가
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  function addTodo(e) {
    e.preventDefault();

    const v = text.trim();
    if (!v) return;

    setTodos((prev) => [{ id: Date.now(), title: v, done: false }, ...prev]);
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

    // 삭제할 때 수정중이면 같이 해제
    if (editingId === id) {
      setEditingId(null);
      setEditText("");
    }
  }

  // 수정 모드 시작
  function startEdit(todo) {
    setEditingId(todo.id);
    setEditText(todo.title);
  }

  // 수정 저장
  function saveEdit(id) {
    const v = editText.trim();
    if (!v) return;

    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, title: v } : t)));

    setEditingId(null);
    setEditText("");
  }

  // 수정 취소
  function cancelEdit() {
    setEditingId(null);
    setEditText("");
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

              {/* 수정 중이면 input 표시 */}
              {editingId === t.id ? (
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") saveEdit(t.id);
                    if (e.key === "Escape") cancelEdit();
                  }}
                  autoFocus
                />
              ) : t.done ? (
                <s>{t.title}</s>
              ) : (
                t.title
              )}
            </label>

            {/* 버튼 UI 분기 */}
            {editingId === t.id ? (
              <>
                <button onClick={() => saveEdit(t.id)}>저장</button>
                <button onClick={cancelEdit}>취소</button>
              </>
            ) : (
              <>
                <button onClick={() => startEdit(t)}>수정</button>
                <button onClick={() => removeTodo(t.id)}>삭제</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
