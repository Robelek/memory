//
let ileKart = 20;
let naRzad = ileKart/4;
let kontenerKart=document.querySelector(".kontener-gry");

let sciezka = "images/";
let symbolSciezka = sciezka+"symbol";

//let wszystkieKarty = new Array();
let nieUzyteNumery = new Array();

let poprzedniSymbol = 0;

let zepsul = false;

let symboli=6;

let poprzedniaKarta = 0-1;
//
let testowyArray = [3, 5, 7, 8, 9];
////console.log(testowyArray[0]);
testowyArray.splice(0, 1);
//console.log(testowyArray);

function losowyNumer(maksimum, minimum)
{
    return Math.floor(Math.random()*(maksimum-minimum)+minimum);
}
function nowaGra()
{
    let poprzedniSymbol = 0;
    while(kontenerKart.lastElementChild)
    {
        kontenerKart.removeChild(kontenerKart.lastElementChild);
    }
  
        for(let i=0;i<ileKart;i+=naRzad)
        {
            let rzad = document.createElement("div");
            rzad.classList.add("rzad");
            kontenerKart.appendChild(rzad);
            for(j=0;j<naRzad;j++)
            {
                let karta = document.createElement("div");
                karta.classList.add("karta");
                karta.id=(i+j).toString();
                //karta.classList.add("symbol"+nrSymbolu);
                rzad.appendChild(karta);

                karta.addEventListener("click", odwrocKarte);

                let img = document.createElement("img");
                karta.appendChild(img);
                img.setAttribute("src", sciezka+"tylKarty.png");
               // wszystkieKarty.push(karta);
               nieUzyteNumery.push(i+j);
            }
           
    
         }
        //console.table(nieUzyteNumery);
        while(nieUzyteNumery.length>0)
        {
            let nrSymbolu = losowyNumer(6, 1);
            for(let i=0;i<2;i++)
            {
                let ktoraKarta = losowyNumer(0, nieUzyteNumery.length);
                ////console.table(nieUzyteNumery);
                //console.log(nieUzyteNumery[ktoraKarta]);
                let karta = document.getElementById(nieUzyteNumery[ktoraKarta].toString());
                karta.classList.add("symbol"+nrSymbolu);
                
                nieUzyteNumery.splice(ktoraKarta, 1);
            }
        }
         
}
function odwrocWszystkieKarty()
{
    poprzedniSymbol=0;
    for(let i=0;i<ileKart;i++)
    {
        
        let karta = document.getElementById(i);
        //console.log(karta.classList.contains("ok"));
        if(!karta.classList.contains("ok"))
        {
            karta.lastElementChild.setAttribute("src", sciezka+"tylKarty.png");
        }
        
    }
       
    
}
function odwrocKarte()
{
  // ////console.table(this.classList);
   // ////console.log(this.classList.length);
   if(zepsul)
   {
       zepsul=false;
       odwrocWszystkieKarty();
   }
   let ktorySymbol = 0;
    for(let i=0;i<this.classList.length;i++)
    {
        let nazwaKlasy = this.classList[i];
        if(nazwaKlasy.includes("symbol"))
        {
            //////console.log(nazwaKlasy);
            let dlugosc = nazwaKlasy.length;
            ktorySymbol = nazwaKlasy[dlugosc-1];
           // ////console.log(ktorySymbol);
        }
    }
   // ////console.log(this.lastElementChild);
    this.lastElementChild.setAttribute("src", symbolSciezka+ktorySymbol.toString()+".png");
    if(poprzedniSymbol!=0)
    {
        if(poprzedniSymbol==ktorySymbol)
        {
            //trafil dobre karty, czyli usuwamy z je z gry
            console.log("Trafil dobre karty");
            this.classList.add("ok");
            poprzedniaKarta.classList.add("ok");
            poprzedniSymbol=0;
            poprzedniaKarta =0-1;
        }
        else
        {
            console.log("zepsul");
            zepsul=true;
        }
    }
    else
    {
        console.log("PierwszaKarta");
        poprzedniSymbol=ktorySymbol;
        poprzedniaKarta=this;
    }
    
}