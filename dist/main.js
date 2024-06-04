"use strict";
class Mutant {
    constructor(name) {
        this.name = name;
    }
    get realName() {
        return this.name;
    }
}
class XMen extends Mutant {
    constructor(name) {
        super(name);
    }
    get mutantName() {
        return `X Men - ${this.realName}`;
    }
}
class Villain extends Mutant {
    constructor(name) {
        super(name);
    }
    get mutantName() {
        return `Villain - ${this.realName}`;
    }
}
const wolverine = new XMen('Logan');
const magneto = new Villain('Magnus');
console.log(wolverine.realName);
console.log(magneto.realName);
console.log(wolverine.mutantName);
console.log(magneto.mutantName);
//# sourceMappingURL=main.js.map