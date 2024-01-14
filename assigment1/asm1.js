let totalOld = 0;
function addProduct(id) {
    const product = document.getElementById(id);
    let h3 = product.getElementsByTagName('h3')[0].textContent;
    let img = product.getElementsByTagName('img')[0].getAttribute('src');


    document.getElementById("addProduct").innerHTML += 
    `<tr>
        <td style="display: flex; align-items: center ;"><img style="width: 70px;" src="${img}" alt="Gia sach"></td>
        <td><p><span>${h3}</span></p></td>
        <td><input style="width: 30px; outline: none; " type="number" value="1" min="0"></td>
        <td style="cursor: pointer;">Xoa</td>
    </tr>`;
    const total = h3.split("đ")[0];
    totalOld +=  +total;
    document.getElementById("tong-tien").innerHTML = totalOld;
}

function thanhToan() {
  document.getElementById("addProduct").innerHTML = '';
  document.getElementById("tong-tien").innerHTML = 0;
  alert('thanh toán thành công')
}

