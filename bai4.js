function nhap(bien){
	var a;
	do {	
		a = prompt('Nhap vao '+bien+': ');
		a = parseFloat(a);
	}
	while (isNaN(a) || a<=0);
	return a;
}
 var n,m,k, S = 0;
do{
	n = nhap('n');
	m = nhap('m');
	k = nhap('k');
}
while (n > m && k > m);
for (var i = n; i <= m; i++) {
	if (i%k == 0) {
		S = S +i;
	}
}
alert('Tổng các số chia hết cho k trong khoảng từ n đến m la: S = '+S);
document.write('Thank you!');