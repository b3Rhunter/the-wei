import { ethers } from 'ethers';

function App() {

  function convertEtherToWei() {
    const ether = document.getElementById('etherInput').value;
    const weiInput = document.getElementById('weiInput');
    if (ether === '') {
      weiInput.value = '';
      return;
    }
    const wei = ethers.parseEther(ether)
    weiInput.value = wei.toString();
}

function convertWeiToEther() {
    const wei = document.getElementById('weiInput').value;
    const etherInput = document.getElementById('etherInput');
    if (wei === '') {
      etherInput.value = '';
      return;
    }
    const ether = ethers.formatEther(wei)
    etherInput.value = ether 
}

function clearInputs() {
    document.getElementById('etherInput').value = '';
    document.getElementById('weiInput').value = '';
}

  return (
    <div className='app'>
      <h1>The Wei</h1>
      <input id="etherInput" placeholder="ETH" onChange={convertEtherToWei} />
      <input id="weiInput" placeholder="WEI" onChange={convertWeiToEther} />
      <button onClick={clearInputs}>CLEAR</button>
    </div>
  )
}

export default App
