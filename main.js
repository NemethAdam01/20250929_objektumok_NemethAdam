import { AutoExtrakkal } from "./autoxtrakkal.js"
import {Auto} from "./class.js"
const auto1 = new Auto("Toyota Corolla", 2006, "Szürke")
const auto2 = new Auto("Audi A4", 2012, "Fekete")

console.log(`${auto1.model}, ${auto1._evj} évjárat, ${auto1.getKor()} éves. Színe: ${auto1._szin}`)
auto1.szin = "fekete"
console.log(`${auto1.model}, ${auto1._evj} évjárat, ${auto1.getKor()} éves. Színe: ${auto1._szin}`)
console.log(`${auto2.model}, ${auto2._evj} évjárat, ${auto2.getKor()} éves. Színe: ${auto2._szin}`)

const autoXtra = new AutoExtrakkal("Honda Civic", 1997, "Piros", 6.1, 50)
console.log(`${autoXtra.model}, ${autoXtra._evj} évjárat, ${autoXtra.getKor()} éves. Színe: ${autoXtra._szin}. Hatótáv: ${autoXtra.hatoTav()}km ami ${autoXtra.koltseg()}`)
