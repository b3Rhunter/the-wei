function App() {

  function convertEtherToWei() {
    const ether = document.getElementById('etherInput').value;
    const weiInput = document.getElementById('weiInput');
    if (ether === '') {
      weiInput.value = '';
      return;
    }
    const wei = BigInt(Math.floor(ether * 1e18));
    weiInput.value = wei.toString();
}

function convertWeiToEther() {
    const wei = document.getElementById('weiInput').value;
    const etherInput = document.getElementById('etherInput');
    if (wei === '') {
      etherInput.value = '';
      return;
    }
    const ether = Number(wei) / 1e18;
    if (ether % 1 === 0) { 
        etherInput.value = ether.toString();
    } else {
        etherInput.value = ether.toFixed(18).replace(/\.?0+$/, '');
    }
}

function clearInputs() {
    document.getElementById('etherInput').value = '';
    document.getElementById('weiInput').value = '';
}


  return (
    <div className='app'>
      <h1>The Wei</h1>
      <input id="etherInput" placeholder="Enter Ether" onChange={convertEtherToWei} />
      <input id="weiInput" placeholder="Enter Wei" onChange={convertWeiToEther} />
      <button onClick={clearInputs}>CLEAR</button>
    </div>
  )
}

export default App
