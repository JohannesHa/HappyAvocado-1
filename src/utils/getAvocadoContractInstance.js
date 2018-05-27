import contract from "truffle-contract";
import getProvider from "./getProvider";
import AvocadoTokenArtifact from "contracts/GradientToken.json";
import addresses from "../addresses.json";

const { tokenAddress } = addresses;

export default async function getGradientContractInstance() {
  const avocadoTokenContract = contract(AvocadoTokenArtifact);
  avocadoTokenContract.setProvider(getProvider());
  const avocadoTokenInstance = await avocadoTokenContract.at(tokenAddress);
  return avocadoTokenInstance;
}