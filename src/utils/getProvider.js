import Web3 from "web3";

const getProvider = () => {
  return new Web3.providers.HttpProvider("https://localhost:8545");
};

export default getProvider;