//
let ileKart = 20;
let naRzad = ileKart/5;
let kontenerKart=document.querySelector(".kontener-gry");

let sciezka = "images/";
let symbolSciezka = sciezka+"symbol";

let wszystkieKarty = new Array();
//
function losowyNumer()
{
    return 1;
}
function nowaGra()
{

    while(kontenerKart.lastElementChild)
    {
        kontenerKart.removeChild(kontenerKart.lastElementChild);
    }
  
        for(let i=0;i<ileKart;i+=2)
        {
            let nrSymbolu=losowyNumer();
            for(j=0;j<2;j++)
            {
                let karta = document.createElement("div");
                karta.classList.add("karta");
                

                karta.classList.add("symbol"+nrSymbolu);
                kontenerKart.appendChild(karta);

                karta.addEventListener("click", odwrocKarte);

                let img = document.createElement("img");
                karta.appendChild(img);
                img.setAttribute("src", sciezka+"tylKarty.png");
            }
           
    
         }
}
function odwrocWszystkieKarty()
{

}
function odwrocKarte()
{
  // console.table(this.classList);
   // console.log(this.classList.length);
   let ktorySymbol = 0;
    for(let i=0;i<this.classList.length;i++)
    {
        let nazwaKlasy = this.classList[i];
        if(nazwaKlasy.includes("symbol"))
        {
            //console.log(nazwaKlasy);
            let dlugosc = nazwaKlasy.length;
            ktorySymbol = nazwaKlasy[dlugosc-1];
            console.log(ktorySymbol);
        }
    }
    console.log(this.lastElementChild);
    this.lastElementChild.setAttribute("src", symbolSciezka+ktorySymbol.toString()+".png");
}