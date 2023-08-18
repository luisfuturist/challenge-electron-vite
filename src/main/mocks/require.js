import * as os from "./os.js";

export function require(module, fb) {
    if(module === "os") {
        return os;
    }

    return fb && fb(module);
}