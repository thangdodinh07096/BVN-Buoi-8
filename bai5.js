var n, S = 0;
do {	
	n = prompt('Nhap vao n: ');
	n = parseFloat(n);
}
while (isNaN(n) || n<=0);
for (var i = 1; i <= n; i++) {
	S = S + 1/i;
}
alert('Tong S = '+S);
document.write('Thank you!');