import { observable, decorate, action } from "mobx";
import getAvocadoContractInstance from "utils/getAvocadoContractInstance";

class ContractsStore {
    avocadoTokenInstance = null;

    async setup() {
        this.setAvocadoTokenInstance(await getAvocadoContractInstance());
    }

    setGradientTokenInstance(gradientTokenInstance) {
        this.avocadoTokenInstance = avocadoTokenInstance;
    }
}

export default decorate(ContractsStore, {
    avocadoTokenInstance: observable,
    setAvocadoTokenInstance: action
});
