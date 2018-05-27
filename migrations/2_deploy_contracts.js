const HappyAvocadoToken = artifacts.require("HappyAvocadoToken");
const util = require("util");
const fs = require("fs");
const path = require("path");
const writeFile = util.promisify(fs.writeFile);

module.exports = async function(deployer) {
  const happyAvocadoToken = await deployer.deploy(HappyAvocadoToken);
  const addresses = {
    tokenAddress: HappyAvocadoToken.address
  };

  await writeFile(
    path.join(__dirname, "..", "front", "src", "addresses.json"),
    JSON.stringify(addresses)
  );
};
