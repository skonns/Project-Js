
let karyawan = {
    NIP : "054",
    nama : "aprilia",
    alamat : "gunungsindur",
    beritahuData : () =>{
        console.log(`====BERITAHU DATA====`);
        console.log(`NIP        :${karyawan.NIP}`);
        console.log(`Nama       :${karyawan.nama}`);
        console.log(`alamat     :${karyawan.alamat}`);
    },
    bikinData : (NIP="054", nama= "aprilia", alamat="gunungsindur") =>{
        karyawan.NIP = NIP;
        karyawan.nama = nama;
        karyawan.alamat = alamat;
        console.log(`====BIKIN DATA====`);
        console.log(`NIP        :${karyawan.NIP}`);
        console.log(`Nama       :${karyawan.nama}`);
        console.log(`alamat     :${karyawan.alamat}`);
    }
}
karyawan.beritahuData()
karyawan.bikinData("295")
karyawan.bikinData("295", "dyva")
karyawan.bikinData("295", "dyva", "gunungsindur")


/*let A = 100
let k = 80
if (a < k){
    console.log("lulus")
}else{
    console.log("tdk lulus")
}*/