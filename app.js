import { Fuel } from 'fuels';
import { defaultConnectors } from '@fuels/connectors';

// Initialize Fuel instance with default connectors
const fuel = new Fuel({
  connectors: defaultConnectors({ devMode: true }),
});

// Function to connect to the Fuel Wallet
async function connectWallet() {
  try {
    // Select the Fuel Wallet connector
    await fuel.selectConnector('Fuel Wallet');
    
    // Attempt to connect to the Fuel Wallet
    await fuel.connect();
    
    // Display success message if connected
    document.getElementById('status').innerText = 'Connected to Fuel Wallet';
  } catch (error) {
    // Display error message if connection fails
    console.error('Connection failed:', error);
    document.getElementById('status').innerText = 'Connection failed';
  }
}

// Event listener for the Connect button
document.getElementById('connect-wallet').addEventListener('click', connectWallet);
