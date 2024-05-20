const radius = process.argv[2];

if (!radius || isNaN(radius)) {
    console.log('Lütfen geçerli bir yarıçap değeri girin.');
    process.exit(1); // Hata koduyla çıkış yap
}

const area = Math.PI * Math.pow(radius, 2);
console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area}`);
