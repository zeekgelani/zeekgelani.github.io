import { Fuel } from 'fuels';
import { defaultConnectors } from '@fuels/connectors';

// Initialize the Fuel connection
const fuel = new Fuel({
  connectors: defaultConnectors({ devMode: true }),
});

// Function to connect wallet and update UI
async function connectWallet() {
  try {
    // Select the Fuel Wallet connector
    await fuel.selectConnector('Fuel Wallet');
    // Connect to the wallet
    await fuel.connect();
    document.getElementById('status').innerText = 'Connected to Fuel Wallet';
  } catch (error) {
    console.error('Connection failed:', error);
    document.getElementById('status').innerText = 'Connection failed';
  }
}

// Attach event listener to the button
document.getElementById('connect-wallet').addEventListener('click', connectWallet);
