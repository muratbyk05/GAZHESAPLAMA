document.getElementsByName("secim")[0].addEventListener("change", hesapla);
document.getElementsByName("secim")[1].addEventListener("change", hesapla);

let i;
const benzinFiyat = {
  2022: " 2.3 ",
  2021: "1.5",
  2020: "0.182 ",
  /*
  2019: "4",
  2018: "3",
  2017: "2.8",
  2016: "2.5",
  2015: "2.2",
  2014: "2.1",
  2000: "1"*/
};
console.log(benzinFiyat[2022]);

function yillar() {
  let tarih = new Date();
  let guncelYil = tarih.getFullYear();

  for (i = guncelYil; i >= 2020; i--) {
    let yil = document.createElement("option");
    document.getElementById("listeYillar").appendChild(yil);
    yil.innerHTML = i;
    yil.value = benzinFiyat[i];
  }
}

function hesapla() {
  let sonuc = 0;

  let para = document.getElementById("txtPara").value;
  let litre = document.getElementById("txtgaz").value;

  let liste = document.getElementById("listeYillar");
  let secilenYilFiyat = liste.options[liste.selectedIndex].value;
  let secilenYil = liste.options[liste.selectedIndex].innerHTML;

  if (document.getElementById("secimLtBulma").checked) {
    document.getElementById("hesap1").style.display = "block";
    if (para != false) {
      sonuc = para / secilenYilFiyat;
      document.getElementById("sonuc").innerHTML =
        secilenYil +
        " yılında " +
        para +
        " TL ile " +
        sonuc.toFixed(1) +
        " LT metreküp gaz alınabiliyordu.";
    } else {
      document.getElementById("sonuc").innerHTML = "Tüm alanları doldurunuz!";
    }
  } else {
    document.getElementById("hesap1").style.display = "none";
  }

  if (document.getElementById("secimTlBulma").checked) {
    document.getElementById("hesap2").style.display = "block";
    if (litre != "") {
      sonuc = litre * secilenYilFiyat;
      document.getElementById("sonuc").innerHTML =
        secilenYil +
        " yılında " +
        litre +
        " lt tüp  " +
        sonuc.toFixed(1) +
        " TL'ye doluyordu.";
    } else {
      document.getElementById("sonuc").innerHTML = "Tüm alanları doldurunuz!";
    }
  } else {
    document.getElementById("hesap2").style.display = "none";
  }
}
