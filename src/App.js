import './App.css'
function App() {
  function handleClick(){
    window.print();
  }
  return (
    <>
      <div className="App" >
        Name: Tejas
        Roll: IDK
        test
        rtest
        ltest
      <button onClick={handleClick}>test</button>
      </div>
    </>
  );
}

export default App;
