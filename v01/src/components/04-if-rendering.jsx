export default function IfRender() {
  let bar;
  const isFlag = true;
  
  // if (isFlag) {
  //   bar = 3
  // } else {
  //   bar = 2
  // }

  isFlag ? bar = 3 : bar = 2;

  return (
    <>
    <h1>{bar}</h1>
    </>
  )
}