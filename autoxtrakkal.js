import { Auto } from "./class.js";
export class AutoExtrakkal extends Auto
{
    constructor(model, evj, szin, fogyasztas, tankmeret)
    {
        super(model, evj, szin)
        this._fogyastas = fogyasztas
        this._tankmeret = tankmeret

    }
    hatoTav()
    {
        return this.tankmeret / this.fogyasztas *100
    }
    koltseg()
    {
        return this.hatoTav * 600
    }
    get fogyasztas()
    {
        return this._fogyasztas
    }
    set fogyasztas(fogyasztasErtek)
    {
        this._fogyastas = fogyasztasErtek
    }

    get tankmeret()
    {
        return this._tankmeret
    }

    set tankmeret(tankMeretE)
    {
        this._tankmeret = tankMeretE
    }
}