export default function IfRender() {
  let bar;
  const isFlag = true;
  
  isFlag ? bar = 3 : bar = 2;

  return (
    <>
    <h1>{bar}</h1>
    </>
  )
}