export class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }

    calcularImpuesto() {
        //((𝑚𝑜𝑛𝑡𝑜𝐵𝑟𝑢𝑡𝑜𝐴𝑛𝑢𝑎𝑙 − 𝑑𝑒𝑑𝑢𝑐𝑐𝑖𝑜𝑛𝑒𝑠) * 21%)
        return (
            (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21
        );
    }
}
