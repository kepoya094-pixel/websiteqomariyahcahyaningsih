// DATA MATERI ARTIKEL
const articlesData = {
  1: {
    title: "Panduan Dasar MPASI Aman & Bergizi",
    category: "Nutrisi & Makanan",
    imgSrc: "mpasi.jpg",
    fallbackImg: "https://images.unsplash.com/photo-1584839627923-9675b818630f?auto=format&fit=crop&w=600&q=80",
    content: `
      <p>Berikut panduan dasar MPASI (Makanan Pendamping ASI) yang aman untuk si kecil:</p>
      
      <h4>Kapan Mulai:</h4>
      <ul>
        <li><strong>Usia 6 bulan (bukan lebih awal):</strong> Saat bayi sudah bisa duduk dengan bantuan dan menunjukkan tanda siap makan (tertarik pada makanan).</li>
        <li>ASI/susu formula tetap jadi asupan utama sampai usia 1 tahun.</li>
      </ul>

      <h4>Prinsip Keamanan:</h4>
      <ul>
        <li>Cuci tangan dan sterilkan alat makan/masak sebelum digunakan.</li>
        <li>Masak makanan sampai benar-benar matang, terutama daging, telur, dan ikan.</li>
        <li><strong>Tekstur sesuai usia:</strong> Puree halus (6 bulan) &rarr; agak kasar (7-9 bulan) &rarr; cincang/finger food (9-12 bulan).</li>
        <li>Hindari madu sebelum usia 1 tahun (risiko botulisme).</li>
        <li>Hindari garam, gula, dan penyedap berlebihan.</li>
        <li>Potong kecil-kecil untuk mencegah tersedak.</li>
        <li>Selalu awasi bayi saat makan.</li>
      </ul>

      <h4>Perkenalan Makanan:</h4>
      <ul>
        <li>Perkenalkan 1 jenis makanan baru per 2-3 hari untuk mendeteksi alergi.</li>
        <li><strong>Makanan awal yang baik:</strong> Bubur beras, pisang, alpukat, wortel, ubi.</li>
        <li><strong>Tanda alergi:</strong> Ruam, muntah, diare, atau sulit napas.</li>
      </ul>

      <h4>Standar Gizi (Menurut WHO/IDAI):</h4>
      <ul>
        <li>MPASI harus mengandung karbohidrat, protein hewani, lemak, dan sayur/buah.</li>
        <li><strong>Frekuensi:</strong> 2-3x makan utama + 1-2x selingan per hari.</li>
      </ul>
    `
  },
  2: {
    title: "Cara Mengatasi & Mencegah Tantrum Balita",
    category: "Emosi & Perilaku",
    imgSrc: "tantrum.jpg",
    fallbackImg: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80",
    content: `
      <p>Tantrum pada bayi/balita muncul karena belum bisa mengungkapkan emosi dengan kata-kata. Langkah penanganannya:</p>
      
      <h4>Saat Tantrum Terjadi:</h4>
      <ul>
        <li>Tetap tenang, jangan ikut emosi atau membentak.</li>
        <li>Pastikan lokasi aman dari benda tajam atau keras.</li>
        <li>Peluk atau gendong jika bayi masih mau disentuh.</li>
        <li>Bicara dengan suara lembut dan pelan, validasi perasaannya.</li>
        <li>Alihkan perhatian dengan mainan lain jika penyebabnya sepele.</li>
      </ul>

      <h4>Mencegah Tantrum:</h4>
      <ul>
        <li><strong>Kenali pemicu umum:</strong> Lapar, ngantuk, bosan, atau lelah.</li>
        <li>Jaga rutinitas makan dan tidur yang konsisten.</li>
        <li>Beri sedikit pilihan sederhana (misal <em>"Mau baju merah atau biru?"</em>).</li>
      </ul>
    `
  },
  3: {
    title: "Rutinitas Agar Bayi Tidur Lebih Nyenyak",
    category: "Kesehatan & Pola Tidur",
    imgSrc: "tidur.jpg",
    fallbackImg: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&q=80",
    content: `
      <p>Rutinitas sederhana untuk membantu tidur bayi nyenyak:</p>
      
      <h4>1. Bedtime Routine Teratur</h4>
      <ul>
        <li>Mandi air hangat &rarr; pijat lembut &rarr; baju tidur &rarr; menyusu &rarr; cerita/nyanyian pelan.</li>
        <li>Mulai rutinitas 30-45 menit sebelum jam tidur.</li>
      </ul>

      <h4>2. Suasana Kamar</h4>
      <ul>
        <li>Redupkan lampu 1 jam sebelum tidur.</li>
        <li>Suhu ruangan sejuk (24-26°C) dan tenang.</li>
      </ul>

      <h4>Kebutuhan Tidur Per Hari:</h4>
      <ul>
        <li><strong>0-3 bulan:</strong> 14-17 jam</li>
        <li><strong>4-11 bulan:</strong> 12-15 jam</li>
        <li><strong>1-2 tahun:</strong> 11-14 jam</li>
      </ul>
    `
  }
};

// PERPINDAHAN PAGE NAVIGASI
function switchTab(tabName, event) {
  if (event) event.preventDefault();

  document.getElementById('sec-beranda').style.display = 'none';
  document.getElementById('sec-artikel').style.display = 'none';
  document.getElementById('sec-komunitas').style.display = 'none';

  document.getElementById(`sec-${tabName}`).style.display = 'block';

  // Highlight Navigasi Aktif
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => item.classList.remove('active'));
  
  if (tabName === 'beranda') navItems[0].classList.add('active');
  if (tabName === 'artikel') navItems[1].classList.add('active');
  if (tabName === 'komunitas') navItems[2].classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// BUKA MODAL ARTIKEL
function openModal(id) {
  const article = articlesData[id];
  if (!article) return;

  document.getElementById('modalCategory').innerText = article.category;
  document.getElementById('modalTitle').innerText = article.title;
  document.getElementById('modalContent').innerHTML = article.content;
  
  const imgElem = document.getElementById('modalImg');
  imgElem.src = article.imgSrc;
  imgElem.onerror = function() { this.src = article.fallbackImg; };

  const modal = document.getElementById('articleModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// TUTUP MODAL
function closeModal() {
  const modal = document.getElementById('articleModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function closeModalOnOverlay(event) {
  if (event.target.classList.contains('modal-overlay')) closeModal();
}

// FITUR INTERAKTIF TANYA JAWAB KOMUNITAS
function tambahPostingan(event) {
  event.preventDefault();

  const nama = document.getElementById('inputNama').value;
  const pesan = document.getElementById('inputPesan').value;

  const feedContainer = document.getElementById('forumFeed');

  const postBaru = document.createElement('div');
  postBaru.className = 'feed-item';
  postBaru.innerHTML = `
    <div class="feed-user">🌸 ${nama}</div>
    <p class="feed-text">${pesan}</p>
    <span class="feed-time">Baru saja</span>
  `;

  feedContainer.prepend(postBaru);

  // Reset Form
  document.getElementById('forumForm').reset();
  alert('Terima kasih Bunda! Pertanyaan/pengalaman Anda berhasil dikirim ke forum.');
}