function beli(namaProduk, harga) {
  const nomorWA = "6285780688201"; // ganti dengan nomor WhatsApp kamu
  const pesan = `Halo admin, saya ingin membeli:\n\nProduk: ${namaProduk}\nHarga: Rp ${harga}\n\nMohon info lebih lanjut.`;
  const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");
}

// Animasi scroll produk
document.addEventListener("scroll", () => {
  document.querySelectorAll("[data-anim]").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
