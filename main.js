import Termekek from "./Termekek.js";
import Asszinkron from "./Asszinkron.js";
$(function(){
    const torlesGomb = $(".torles")
    const asszinkron = new Asszinkron();
    asszinkron.adatbeolvas("adat.json", betolt)
    torlesGomb.on("click", function () {
    asszinkron.torles("adat.json", betolt )
    })
});
function betolt(adat){
    const termek = new Termekek(adat.adatLista);
    
}