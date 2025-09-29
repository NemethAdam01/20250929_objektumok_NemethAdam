import {Auto} from "./class.js"
const auto1 = new Auto("Toyota Corolla", 2006, "Szürke")
const auto2 = new Auto("Audi A4", 2012, "Fekete")

console.log(`${auto1.model}, ${auto1._evj} évjárat, ${auto1.getKor()} éves`)
console.log(`${auto2.model}, ${auto2._evj} évjárat, ${auto2.getKor()} éves`)