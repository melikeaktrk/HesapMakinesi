// Toplama işlemi
function topla() {
    let num1 = parseFloat(document.getElementById("num1").value); // İlk sayıyı al
    let num2 = parseFloat(document.getElementById("num2").value); // İkinci sayıyı al
    let sonuc = num1 + num2; // Toplama işlemi
    document.getElementById("sonuc").innerText = "Sonuç: " + sonuc; // Sonucu yazdır
}

// Çıkarma işlemi
function cikar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let sonuc = num1 - num2;
    document.getElementById("sonuc").innerText = "Sonuç: " + sonuc;
}

// Çarpma işlemi
function carp() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let sonuc = num1 * num2;
    document.getElementById("sonuc").innerText = "Sonuç: " + sonuc;
}

// Bölme işlemi
function bol() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num2 === 0) { // Sıfıra bölünme kontrolü
        document.getElementById("sonuc").innerText = "Hata: Sıfıra bölünemez!";
    } else {
        let sonuc = num1 / num2;
        document.getElementById("sonuc").innerText = "Sonuç: " + sonuc;
    }
}
