import React, { createContext, useState, useEffect, useContext } from 'react';
import { ethers } from 'ethers';

const EthereumContext = createContext(null);

export const EthereumProvider = ({ children }) => {
  const [ethereumState, setEthereumState] = useState({
    account: null,
    provider: null,
    signer: null,
    isLoading: true,
    error: null
  });

  useEffect(() => {
    const connectEthereum = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const account = await signer.getAddress();
          
          setEthereumState({
            account,
            provider,
            signer,
            isLoading: false,
            error: null
          });

          window.ethereum.on('accountsChanged', (accounts) => {
            setEthereumState(prevState => ({
              ...prevState,
              account: accounts[0]
            }));
          });
        } catch (error) {
          setEthereumState(prevState => ({
            ...prevState,
            isLoading: false,
            error: "Failed to connect to Ethereum. Please check your wallet connection."
          }));
          console.error("Ethereum connection error:", error);
        }
      } else {
        setEthereumState(prevState => ({
          ...prevState,
          isLoading: false,
          error: "Ethereum provider not found. Please install MetaMask."
        }));
      }
    };

    connectEthereum();

    return () => {
      if (window.ethereum && window.ethereum.removeAllListeners) {
        window.ethereum.removeAllListeners('accountsChanged');
      }
    };
  }, []);

  return (
    <EthereumContext.Provider value={ethereumState}>
      {children}
    </EthereumContext.Provider>
  );
};

export const useEthereum = () => {
  const context = useContext(EthereumContext);
  if (context === null) {
    throw new Error('useEthereum must be used within an EthereumProvider');
  }
  return context;
};