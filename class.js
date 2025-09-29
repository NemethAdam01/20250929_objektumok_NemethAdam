export class Auto {
    
    constructor(model, evj, szin) {
        this._model = model
        this._evj = evj
        this._szin = szin
    }

    getKor()
    {
        const aktev = new Date().getFullYear()
        return aktev - this.evj 
    }

    get model()
    {
        return this._model
    }
    set model(model)
    {
        this._model = model
    }

    get evj()
    {
        return this._evj
    }
    set evj(evj)
    {
        this._evj = evj
    }

    get szin()
    {
        return this.szin
    }
    set szin(szin)
    {
        this._szin = szin
    }
}