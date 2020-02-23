let total = 0;
let num;
while (num != -1) {
    let number = prompt('Nhap so vao ');
    alert('Ban da vua nhap so '+number);
    num = parseFloat(number);
    total += num;
}
alert('tong cac so da nhap la '+total);