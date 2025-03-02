let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(data) {
  for( let i = 0; i <= data.length - 1; i++ ){
    console.log(`>>>>>>>>>>>>>>>>>>>`);
    console.log(`id: ${data[i][0]}`);
    console.log(`nama: ${data[i][1]}`);
    console.log(`ttl: ${data[i][2]} ${data[i][3]} `);
    console.log(`hobi: ${data[i][4]}`);
  }
}

dataHandling(input)

// Hanya sampai sini, saya sudah tidak sanggup. harusnya index tidak ditentukan oleh programmer. tapi saya memyerah, tolong bantu saya....