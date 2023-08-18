import { process as _process } from "./process";
import { require as _require } from "./require";

const isElectron = (typeof window.require !== 'undefined');

if(!isElectron) {
    console.warn("Non-electron environment detected. Mocking data...");
    mock();
}

function mock() {
    window.require = _require;
    window.process = _process;
}