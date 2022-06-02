//
let ileKart = 20;
let naRzad = ileKart/5;
let kontenerKart=document.querySelector(".kontener-gry");

//
function nowaGra()
{
    while(kontenerKart.lastElementChild)
    {
        kontenerKart.removeChild(kontenerKart.lastElementChild);
    }
  
        for(let i=0;i<ileKart;i++)
        {
            let karta = document.createElement("div");
            karta.classList.add("karta");
            
            kontenerKart.appendChild(karta);
            let img = document.createElement("img");
            karta.appendChild(img);
    
         }

    
}