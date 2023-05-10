import Termek from "./Termek.js";
class Termekek{
    #adatLista;
    #kedvencekLista; 
    constructor(adatLista){
        const szuloElem =$("#aruhaz"); 
        this.#adatLista = adatLista
        for (let index = 0; index < this.#adatLista.length; index++) {
            const termek = new Termek();
            
        }
    }
}
export default Termekek;