let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
  input.splice(1, 1, "Roman Alamsyah Elsharawy")
  input.splice(2, 1, "Provinsi Bandar Lampung")
  input.splice(4, 1, "Pria", "SMA Internasional Metro")
  console.log(input)
  
  let month = input[3].split("/")
  let newMonth = month[1]
  console.log(newMonth == 05? "Mei": false); // Malas bikin switch
  
  let date = input[3].split("/")
  console.log([date[2], date[0], date[1]]);
  
  let newDate = date.join("-")
  console.log(newDate);
  
  let nama = input[1].slice(0, 15)
  console.log(nama);
}

dataHandling(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */