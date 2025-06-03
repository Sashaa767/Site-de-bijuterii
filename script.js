// datele produselor
const produse = [
  // Ceasuri
  {
    categorie: "ceasuri",
    nume: "Ceas Liu Jo din oțel",
    pret: "2000 MDL",
    imagine: "imagini/ceas1.png",
    descriere: "Carcasa din oțel inoxidabil 316L, rezistent la apă până la 50m, cu diametru de 36mm. Cadran perlat, indicatoare aplicate și brățară tip mesh. Mecanism quartz Miyota precis, autonomie baterie 2 ani, sticlă minerală tratată anti-șoc."
  },
  {
    categorie: "ceasuri",
    nume: "Ceas Liu Jo din oțel (model B)",
    pret: "2500 MDL",
    imagine: "imagini/ceas2.png",
    descriere: "Corp elegant din oțel 316L, finisaj lucios, bezel placat PVD auriu. Diametru 38mm, geam safir-look rezistent la zgârieturi. Mecanism quartz japonez cu secundar central și data la ora 3. Curea din piele naturală, lungime reglabilă."
  },
  {
    categorie: "ceasuri",
    nume: "Ceas Liu Jo din oțel (model C)",
    pret: "2200 MDL",
    imagine: "imagini/ceas3.png",
    descriere: "Carcasă din oțel inoxidabil cu finisaj satinat, diametru 34mm. Cadran decorat cu modele geometrice și accente rose gold. Brățară tip link, confort sporit și închidere tip fluture. Rezistență la apă: 30m, ideal pentru purtare zilnică."
  },
  {
    categorie: "ceasuri",
    nume: "Ceas Sokolov din oțel",
    pret: "2600 MDL",
    imagine: "imagini/ceas4.png",
    descriere: "Finisaj mat al carcasei din oțel 316L, diametru 40mm. Cadran antracit cu indici fosforescenți și geam mineral curbat. Mecanism quartz Miyota, rezistență la apă 50m. Brățară metalică robustă, design masculin și funcțional."
  },
  {
    categorie: "ceasuri",
    nume: "Ceas Fossil bărbați",
    pret: "3100 MDL",
    imagine: "imagini/ceas5.png",
    descriere: "Carcasă din oțel cu finisaj gunmetal, diametru 42mm. Cronograf cu trei sub-cadrane, rezistent la 100m adâncime. Curea din silicon antialergic, ideal pentru sport și activități în aer liber, mecanism quartz de înaltă precizie."
  },
  {
    categorie: "ceasuri",
    nume: "Ceas Skagen Denmark",
    pret: "1800 MDL",
    imagine: "imagini/ceas6.png",
    descriere: "Design minimalist, carcasă ultră-subțire din oțel inoxidabil, diametru 37mm. Cadran alb perlat, marcaje fine și geam mineral întărit. Brățară tip mesh, confort și eleganță. Rezistență la apă: 30m, potrivit pentru ținute business-casual."
  },
  {
    categorie: "ceasuri",
    nume: "Ceas Tissot automatic",
    pret: "5700 MDL",
    imagine: "imagini/ceas7.png",
    descriere: "Mecanism automat ETA 2824-2 vizibil prin spate transparent. Carcasă din oțel 316L, diametru 40mm, geam safir anti-reflectant. Rezistență 50m, cureaua din piele neagră cusută manual, ideal pentru colecționari și pasionați de orologerie."
  },

  // Coliere
  {
    categorie: "coliere",
    nume: "Colier Sokolov din aur cu perle",
    pret: "5000 MDL",
    imagine: "imagini/colier1.png",
    descriere: "Lanț fin din aur 14K (circa 3g) cu pandantiv natural din perle de cultură—diametru 8-9mm. Închizătoare cu sigiliu de aur, lungime totală 45cm. Design clasic, potrivit și la rochii de seară, rezistent la coroziune."
  },
  {
    categorie: "coliere",
    nume: "Colier Sokolov din aur alb cu diamante",
    pret: "8000 MDL",
    imagine: "imagini/colier2.png",
    descriere: "Realizat din aur alb 18K (aprox. 2.5g), decorat cu 12 diamante naturale de 0.01ct fiecare (total 0.12ct). Lungime 42cm, prismă elegantă, stil minimalist. Include certificat de autenticitate pentru pietre și aur."
  },
  {
    categorie: "coliere",
    nume: "Colier Fourline cu zirconii",
    pret: "7000 MDL",
    imagine: "imagini/colier3.png",
    descriere: "Pandantiv rotund placat cu ruteniu peste alamă, decorat cu 50 de zirconii de 2mm. Lanț subțire placat, lungime reglabilă 40–45cm. Efect strălucitor asemănător diamantelor, ideal pentru ocazii festive."
  },
  {
    categorie: "coliere",
    nume: "Colier Estet din aur",
    pret: "5000 MDL",
    imagine: "imagini/colier4.png",
    descriere: "Fabricat din aur galben 14K (3.2g), lanț model cable și pandantiv filigran. Lungime 45cm, închizătoare cu șurub, rezistent la uzură zilnică. Design tradițional, perfect pentru cadouri de aniversare."
  },
  {
    categorie: "coliere",
    nume: "Colier Pandora cu inimă",
    pret: "4500 MDL",
    imagine: "imagini/colier5.png",
    descriere: "Pandantiv inimă Pandora din argint 925 placat cu aur roz, decorat cu cristale cubic zirconia. Lanț 40cm + prelungitor 5cm. Versatil, combină modern și romantic, ideal pentru tinere."
  },
  {
    categorie: "coliere",
    nume: "Colier cu pietre semiprețioase",
    pret: "6200 MDL",
    imagine: "imagini/colier6.png",
    descriere: "Fiecare piatră semiprețioasă (ametist, citrin) montată manual pe suport din alamă placată cu aur. Lungime 42cm, greutate totală 4g. Unicat datorită variațiilor naturale."
  },
  {
    categorie: "coliere",
    nume: "Colier minimal cu perle",
    pret: "3900 MDL",
    imagine: "imagini/colier7.png",
    descriere: "Lanț subțire din argint 925 placat cu rodiu, cu un șir de 5 perle de cultură (6mm). Lungime 41cm. Aspect minimalist, elegant, potrivit pentru ținute office și smart-casual."
  },

  // Inele
  {
    categorie: "inele",
    nume: "Inel aur alb cu diamante",
    pret: "9000 MDL",
    imagine: "imagini/inel1.png",
    descriere: "Realizat din aur alb 18K (aprox. 3g), cu 5 diamante naturale de 0.02ct fiecare (total 0.1ct). Lățime bandă 2.5mm, finisaj periat. Include certificat GIA pentru piatră și aur."
  },
  {
    categorie: "inele",
    nume: "Inel logodnă zirconiu",
    pret: "3000 MDL",
    imagine: "imagini/inel2.png",
    descriere: "Bandă din argint 925 placat cu aur alb, cu un cubic zirconia central de 1ct. Finisaj oglindă, bandă 2mm. Aspect apropiat de diamant, dar la un preț accesibil."
  },
  {
    categorie: "inele",
    nume: "Inel aur galben model floral",
    pret: "4800 MDL",
    imagine: "imagini/inel3.png",
    descriere: "Aur galben 14K (2.8g) forjat manual în motive florale, bandă lată 4mm. Greutate totală 2.8g, finisaj mat. Stil boho-chic, recomandat pasionaților de design organic."
  },
  {
    categorie: "inele",
    nume: "Inel Sokolov cu safir",
    pret: "5200 MDL",
    imagine: "imagini/inel4.png",
    descriere: "Bază din aur alb 14K (2.5g) cu un safir albastru de 0.3ct și accente din diamante mici (total 0.04ct). Bandă 3mm, finisaj lucios. Pietre certificate."
  },
  {
    categorie: "inele",
    nume: "Inel trilogie aur roz",
    pret: "7300 MDL",
    imagine: "imagini/inel5.png",
    descriere: "Din aur roz 14K (3g), cu trei cubic zirconia de 0.5ct fiecare. Simbolizează trecut, prezent, viitor. Bandă 3.5mm, design romantic, ideal pentru cadouri de logodnă."
  },
  {
    categorie: "inele",
    nume: "Inel minimalist argint",
    pret: "1600 MDL",
    imagine: "imagini/inel6.png",
    descriere: "Argint 925 lustruit, bandă subțire de 1.5mm. Stil minimalist, confortabil pentru purtare zilnică. Greutate totală 1.2g, hipoalergenic."
  },
  {
    categorie: "inele",
    nume: "Inel verighetă clasică",
    pret: "2400 MDL",
    imagine: "imagini/inel7.png",
    descriere: "Verighetă din aur galben 14K (4g), bandă simplă de 5mm. Finisaj satinat exterior și interior rotunjit. Gravură personalizată la cerere."
  },

  // Cercei
  {
    categorie: "cercei",
    nume: "Cercei perle aur galben",
    pret: "4200 MDL",
    imagine: "imagini/cercei1.png",
    descriere: "Stud-uri din aur galben 14K (1g) cu perle de cultură naturale 7mm. Sistem cu piuliță, ușoare și sigure. Design clasic, potrivit pentru ocazii elegante și casual."
  },
  {
    categorie: "cercei",
    nume: "Cercei aur alb cu diamante",
    pret: "8500 MDL",
    imagine: "imagini/cercei2.png",
    descriere: "Cercei tip creole din aur alb 18K, diametru 15mm, decorați cu 20 diamante naturale (total 0.2ct). Grosime bandă 1.2mm, închidere click-clack. Lux urban."
  },
  {
    categorie: "cercei",
    nume: "Cercei Pandora cu inimă",
    pret: "2700 MDL",
    imagine: "imagini/cercei3.png",
    descriere: "Pandantive inimă din argint 925 placat cu aur roz, decorate cu cristale cubic zirconia. Lungime 25mm, foarte ușori (1.5g perechea)."
  },
  {
    categorie: "cercei",
    nume: "Cercei lungi zirconii",
    pret: "3500 MDL",
    imagine: "imagini/cercei4.png",
    descriere: "Fir subțire de alamă placată cu aur alb, cu 10 zirconii de 3mm montate succesiv. Lungime 6cm, efect delicat și atemporal."
  },
  {
    categorie: "cercei",
    nume: "Cercei Sokolov mini",
    pret: "2900 MDL",
    imagine: "imagini/cercei5.png",
    descriere: "Stud-uri din aur galben 14K, diametru 5mm, decorate cu un diamant natural de 0.03ct. Discreți și eleganți, greutate 0.8g bucata."
  },
  {
    categorie: "cercei",
    nume: "Cercei Creole aur roz",
    pret: "3100 MDL",
    imagine: "imagini/cercei6.png",
    descriere: "Cercei creole din aur roz 14K, diametru 20mm, grosime 1.5mm. Închidere rapidă, finisaj satinat. Greutate 2.5g per pereche."
  },
  {
    categorie: "cercei",
    nume: "Cercei statement argint",
    pret: "1900 MDL",
    imagine: "imagini/cercei7.png",
    descriere: "Model statement din argint 925, placaj negru, formă abstractă. Lungime 5cm, greutate 4g perechea. Design avangardist."
  }
];

let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// Afișează produsele
function renderProducts() {
  const container = document.getElementById('produse');
  container.innerHTML = '';
  ['ceasuri','coliere','inele','cercei'].forEach(cat => {
    const sec = document.createElement('section');
    sec.innerHTML = `<h2 id="${cat}">${cat.charAt(0).toUpperCase() + cat.slice(1)}</h2>`;
    const grid = document.createElement('div');
    grid.className = 'products';

    produse.filter(p => p.categorie === cat).forEach(p => {
      const card = document.createElement('div');
      card.className = 'product';
      card.innerHTML = `
        <a href="#" onclick="event.preventDefault(); showDetails(
          '${p.nume.replace(/'/g,"\\'")}',
          '${p.pret}',
          '${p.descriere.replace(/'/g,"\\'")}',
          '${p.imagine}'
        )">
          <img src="${p.imagine}" alt="${p.nume}">
        </a>
        <h3>
          <a href="#" style="color:black" onclick="event.preventDefault(); showDetails(
            '${p.nume.replace(/'/g,"\\'")}',
            '${p.pret}',
            '${p.descriere.replace(/'/g,"\\'")}',
            '${p.imagine}'
          )">
            ${p.nume}
          </a>
        </h3>
        <p>${p.pret}</p>
       <button class="wishlist-btn" onclick="addToWishlist(
  '${p.nume.replace(/'/g,"\\'")}',
  '${p.pret}',
  '${p.imagine}',
  '${p.descriere.replace(/'/g,"\\'")}'
)">Adaugă în coș</button>

      `;
      grid.appendChild(card);
    });

    sec.appendChild(grid);
    container.appendChild(sec);
  });
}

// Căutare
function searchProducts() {
  const q = document.getElementById('searchBar').value.toLowerCase();
  document.querySelectorAll('.product').forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = name.includes(q) ? '' : 'none';
  });
}

// Wishlist
function addToWishlist(nume, pret, imagine, descriere) {
  if (!wishlist.find(p => p.nume === nume)) {
    wishlist.push({ nume, pret, imagine, descriere });
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert(`${nume} a fost adăugat în coș!`);
  } else {
    alert(`${nume} este deja în coș!`);
  }
}

// Afișare detalii produs
function showDetails(nume, pret, descriere, imagine) {
  document.getElementById('det-nume').textContent = nume;
  document.getElementById('det-pret').textContent = pret;
  document.getElementById('det-desc').textContent = descriere;
  document.getElementById('det-img').src = imagine;

  document.getElementById('product-details').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

// Închide overlay-ul cu detalii
function closeDetails() {
  document.getElementById('product-details').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}

// Căutare produse
function searchProducts() {
  const query = document.getElementById('searchBar').value.toLowerCase();
  const cards = document.querySelectorAll('.product');

  cards.forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase();
    if (name.includes(query)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Adaugă produs în wishlist
function addToWishlist(nume, pret, imagine, descriere) {
  const existent = wishlist.find(p => p.nume === nume);
  if (!existent) {
    wishlist.push({ nume, pret, imagine, descriere });
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert("Produsul a fost adăugat în coș!");
  } else {
    alert("Produsul este deja în coș.");
  }
}

// Inițializare
document.addEventListener('DOMContentLoaded', renderProducts);
