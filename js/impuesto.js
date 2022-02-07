export class Impuesto {
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    get montoBrutoAnual() {
        return this._montoBrutoAnual;
    }
    get deducciones() {
        return this._deducciones;
    }
    set montoBrutoAnual(value) {
        this._montoBrutoAnual = value;
    }
    set deducciones(value) {
        this._deducciones = value;
    }
}
