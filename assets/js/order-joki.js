

function order_gas() {
    var nickname = document.getElementById('nickname').value;

    // Cek jika nickname tidak kosong
    if (nickname.trim() === '') {
        alert('User ID harus diisi!');
        return; // Stop eksekusi fungsi jika nickname kosong
    }

    // Lanjutkan dengan logika pesanan
            // Mengumpulkan data dari formulir
        var nickname = document.getElementById('nickname').value;
        var server = document.getElementById("server").value;
        var login = document.getElementById("login").value;
        var pass = document.getElementById("pass").value;
        var cat = document.getElementById("cat").value;
        var product = document.querySelector('input[name="product"]:checked').nextElementSibling.querySelector('.desc').textContent;
        var price = document.querySelector('input[name="product"]:checked').nextElementSibling.querySelector('.count').textContent;
        var method = document.querySelector('input[name="method"]:checked').nextElementSibling.querySelector('.name').textContent;
        var wa = document.getElementById('wa').value;



        // Membuat pesan untuk dikirim ke WhatsApp
        var message = "*_Detail Pesanan Saya :_*\n" +
            "_User ID :_ " + nickname + "\n" +
            "_Server :_ " + server + "\n" +
            "_Login :_ " + login + "\n" +
            "_Password :_ " + pass + "\n" +
            "_Produk :_ " + product + "\n" +
            "_Harga :_ " + price + "\n" +
            "_Metode Pembayaran :_ " + method + "\n" +
            "_No. WhatsApp :_ " + wa + "\n" +
            "_Catatan Penjoki_ : " + cat;

        // Membuat URL WhatsApp dengan nomor tujuan dan pesan yang telah dibuat
        var whatsappUrl = "https://api.whatsapp.com/send?phone=6289654791642&text=*Halo%20Admin,%20Saya%20Mau%20JokiRank%20Mlbb*.%0A%0A" + encodeURIComponent(message);

        // Mengarahkan pengguna ke WhatsApp dengan pesan yang telah dibuat
        window.open(whatsappUrl, '_blank');
}

// Tambahkan event listener ke tombol pesanan
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('orderButton').addEventListener('click', order_gas);
});
