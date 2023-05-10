class Termek{
    constructor(adat, szuloElem){
        this.adat = adat;
        szuloElem.append(`
        <div class="Termek">
            <h3>${this.adat.nev}</h3>
            <p>${this.adat.ar}</p>
            <button></button>
        </div>
    `)
        this.divElem = $(".Termek:last-child");
        this.gombElem = $(".Termek:last-child button");
        this.gombElem.on("click", ()=> {
            this.esemenyTrigger();
        })
    }
    getAdat(){

    }
    esemenyTrigger(){
        const esemeny= new CustomEvent("gombKattintas", {detail:this});
        window.dispatchEvent(esemeny);
       
    }
}
export default Termek;