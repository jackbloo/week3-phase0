
function dataHandling(input){
    var input = [
        ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
        ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
        ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
        ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ]
    for (i = 0; i < input.length; i++){
        nomer1 = 'Nomer: ' +  input[i][0]
        nama1 = 'Nama: ' + input[i][1]
        ttl1 = 'TTL: ' + input[i][2] + ' ' + input[i][3]
        hobi1 = 'Hobi: ' + input[i][4]
    console.log(nomer1)
    console.log(nama1)
    console.log(ttl1)
    console.log(hobi1)
    console.log('\n')
    }
    
}
dataHandling()

