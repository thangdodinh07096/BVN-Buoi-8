var n, S = 0, i = 1;
do {	
	n = prompt('Nhap vao n: ');
	n = parseFloat(n);
}
while (isNaN(n) || n<=0);
do {
	S = S+i; 
	i++;
}while (i<=n) 
alert('Tong S = '+S);
document.write('Thank you!');

