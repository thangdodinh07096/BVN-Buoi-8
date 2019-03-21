var n, mau = 1, S = 0;
do {	
	n = prompt('Nhap vao n: ');
	n = parseFloat(n);
}
while (isNaN(n) || n<=0);
for (var i = 1; i <= n; i++) {
	mau = mau*i;
	S = S + i/mau;
}
alert('Tong S = '+S);
document.write('Thank you!');