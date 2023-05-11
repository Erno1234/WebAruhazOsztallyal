import Termek from "./Termek.js";

class Termekek{
    #adatLista;
    #kedvencekLista=[]; 
    constructor(adatLista){
        const szuloElem =$("#aruhaz"); 
        this.#adatLista = adatLista
        for (let index = 0; index < this.#adatLista.length; index++) {
            const termek = new Termek(adatLista[index], szuloElem);
            
        }
        $(window).on("gombKattintas", (event)=>{
            let aktElem = event.detail;
            this.#kedvencekLista.push(aktElem);
            console.log(this.#kedvencekLista);
        })
        
    }
    /*torles() {
        const torlesGomb = $(".torles")
        console.log(torlesGomb)
        torlesGomb.on("click", function () {
          this.#adatLista.splice(aktElem, 1);
          init();
        });
    }
*/  
}
export default Termekek;