import { useState } from 'react';

export default function ComponentDataSharing() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1)
  }

  function resetButton() {
    setCount(0);
  }

  return (
    <>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />

      <ResetButton onClick={resetButton} />
    </>
  )
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      {count}번 클릭!
    </button>
  )
}

function ResetButton({ onClick }) {
  return (
    <button onClick={onClick}>
      초기화
    </button>
  );
}