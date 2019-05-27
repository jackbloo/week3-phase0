
function dataHandling2(input){
    var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
    input.splice(1,1, "Roman Alamsyah Elsharawy");
    input.splice(2,1, "Provinsi Bandar Lampung");
    input.splice(4,1, "Pria", "SMA Internasional Metro");
    var ttl1 = input[3];
    var ttl2 = ttl1.split("/");
    var bulan = ttl2[1]

    console.log(input) 
    
    switch(bulan){
        case '01' :
            console.log('Januari');
            break;
        case '02' :
            console.log('Februari');
            break;
        case '03' :
            console.log('Maret');
            break;
        case '04' :
            console.log('April');
            break;
        case '05' :
            console.log('Mei');
            break;
        case '06' :
            console.log('Juni');
            break;
        case '07' :
            console.log('Juli');
            break;
        case '08' :
            console.log('Agustus');
            break;
        case '09' :
            console.log('September');
            break;
        case '10' :
            console.log('Oktober');
            break;
        case '11' :
            console.log('November');
            break;
        case '12' :
            console.log('Desember');
            break;
            
    }
    
    var splitt = ttl2.sort(function(a, b) {return b-a});
    console.log(splitt);

    var dob = ttl1.split("/")
    var join = dob.join('-')
    console.log(join);

    var nama1 = input[1];
    var nama3 = nama1.slice(0, 15);
    console.log(nama3);





}
    dataHandling2()