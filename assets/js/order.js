document.getElementById('orderButton').addEventListener('click', function() {
            var selectedProduct = document.querySelector('input[name="product"]:checked');
            var userID = document.getElementById('nickname').value;
            var selectedMethod = document.querySelector('input[name="method"]:checked');
            var whatsapp = document.getElementById('wa').value;

            // Cek jika nickname tidak kosong
            if (userID.trim() === '' || !selectedProduct || !selectedMethod || whatsapp.trim() === '') {
                toastr.error('Lengkapi Seluruh Data');
                return; // Stop eksekusi fungsi jika nickname kosong
            }

            var productLabel = selectedProduct.nextElementSibling.querySelector('.desc').textContent;
            var paymentMethod = selectedMethod.nextElementSibling.querySelector('.name').textContent;
            var price = document.querySelector('input[name="product"]:checked').nextElementSibling.querySelector('.count').textContent;
            var wa = document.getElementById('wa').value;

            var orderDetails = `
                <div class="head text-center text-white">Detail Pembelian</div>
                <div class="containers">
                    <div class="title text-white">User ID : ${userID}</div>
                    <div class="desc"></div>
                </div>
                <div class="containers">
                    <div class="title text-white">Produk : ${productLabel}</div>
                    <div class="desc leading-none"></div>
                </div>
                <div class="containers">
                    <div class="title text-white">Harga Bayar : ${price}</div>
                    <div class="desc"></div>
                </div>
                <div class="containers">
                    <div class="title text-white">Metode Pembayaran : ${paymentMethod}</div>
                    <div class="desc"></div>
                </div>
                <div class="containers">
                    <div class="title text-white">No. WhatsApp : ${wa}</div>
                    <div class="desc"></div>
                </div>
                <button type="button" onclick="order_process()" id="btn-order-process" class="btn btn-primary w-100 mt-3" style="border-radius: 10px;"><i class="bi bi-bag-check-fill"></i>&nbsp;
                    Bayar Sekarang
                </button>
                <button type="button" onclick="closePopupModal()" class="btn btn-secondary w-100 mt-2" style="border-radius: 10px;"><i class="bi bi-cart-x-fill"></i>&nbsp;
                    Batal
                </button>
            `;

            document.getElementById('orderDetails').innerHTML = orderDetails;
            var modal_confirm = new bootstrap.Modal(document.getElementById('modal-confirm'), {
                keyboard: false
            });
            modal_confirm.show();
        });

        function order_process() {
            var selectedProduct = document.querySelector('input[name="product"]:checked');
            var userID = document.getElementById('nickname').value;
            var selectedMethod = document.querySelector('input[name="method"]:checked');
            var wa = document.getElementById('wa').value;

            // Validasi jika ada data yang belum diisi
            if (!selectedProduct || !selectedMethod || userID.trim() === '' || wa.trim() === '') {
                toastr.error('Lengkapi Seluruh Data');
                return;
            }

            var productLabel = selectedProduct.nextElementSibling.querySelector('.desc').textContent;
            var userID = document.getElementById('nickname').value;
            var paymentMethod = selectedMethod.nextElementSibling.querySelector('.name').textContent;
            var price = document.querySelector('input[name="product"]:checked').nextElementSibling.querySelector('.count').textContent;
            var wa = document.getElementById('wa').value;


            // Bangun pesan untuk WhatsApp
            var message = "*_Detail Pesanan :_*\n" +
            "_User ID :_ " + userID + "\n" +
            "_Produk :_ " + productLabel + "\n" +
            "_Harga :_ " + price + "\n" +
            "_Metode Pembayaran :_ " + paymentMethod + "\n" +
            "_No. WhatsApp :_ " + wa;
            var whatsappLink = "https://api.whatsapp.com/send?phone=6289654791642&text=*Halo%20Admin,%20Saya%20Mau%20TopUp%20Games*.%0A%0A" + encodeURIComponent(message);
            // Buka link WhatsApp di tab baru
            window.open(whatsappLink, '_blank');
        }
    </script>
        <script>

        // Fungsi untuk menutup modal saat tombol "Tutup" diklik
        function closePopupModal() {
            $('#modal-confirm').modal('hide');
        }