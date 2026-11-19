let elsoSzamjegySzovege = "";
let masodikSzamjegySzovege = "";
let muvelet = "";
let muvelet_mentes = "";
let beviteli_mezo = document.getElementById("mezo");
let szamok = document.getElementsByClassName("szam");

for (let i = 0; i < szamok.length; i++) {
    szamok[i].addEventListener("click",function(event) {
        
        beviteli_mezo.value += event.target.id;

    })
}

let muveletek = document.getElementsByClassName("muvelet");

for (let i  = 0 ; i < muveletek.length ; i++) {
    
    muveletek[i].addEventListener("click", function(event) {
        muvelet = event.target.id;
        console.log(muvelet)
        elsoSzamjegySzovege = beviteli_mezo.value;
        beviteli_mezo.value = "";

        if (muvelet.includes("=")) {
            masodikSzamjegySzovege = beviteli_mezo.value;
            beviteli_mezo.value = "";
            let eredemeny = 0;
            if (muvelet == "+") {
                eredemeny = Number(elsoSzamjegySzovege) + Number(masodikSzamjegySzovege);
                beviteli_mezo.value = eredemeny;
            }
            
        }

        if ( muvelet.includes("C")) {
            let beviteli_mezo = document.getElementById("mezo");
            beviteli_mezo.value = "";
            elsoSzamjegySzovege = "";
            masodikSzamjegySzovege = "";
            muvelet = "";
        }
    })
    
}

