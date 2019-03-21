function phepToan(a){
	var a;
	var dem = 0;
	for (var i = 1; i < 100; i++) {
		if (i%a == 0) {
			dem = dem + 1;
		}
	}
	return dem;
}
var dem_3, dem_7;
dem_3 = phepToan(3);
dem_7 = phepToan(7);
alert('Số lượng các số nguyên chia hết cho 3 nằm trong đoạn 1 đến 100: '+dem_3);
alert('Số lượng các số nguyên chia hết cho 7 nằm trong đoạn 1 đến 100: '+dem_7);
document.write('Thank you!');
