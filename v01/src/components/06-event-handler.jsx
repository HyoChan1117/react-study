import { useState } from 'react'

export default function EventHandler() {
  return (
    <>
      <h2>버튼 클릭!</h2>
      <MyButton /><br />
      <MyButton />
    </>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleButton() {
    setCount(count + 1);
  }

  function resetButton() {
    setCount(0);
  }

  // 검사용
  console.log(count)

  return (
    <>
      <button onClick={handleButton}>
        {count}번 클릭!
      </button>

      <button onClick={resetButton}>
        초기화
      </button>
    </>
  );
}