import { useState } from 'react'

export default function EventHandler() {
  return (
    <>
      <h2>버튼 클릭!</h2>
      <MyButton />
      <MyButton />
    </>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleButton() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleButton}>
      {count}번 클릭!
    </button>
  );
}