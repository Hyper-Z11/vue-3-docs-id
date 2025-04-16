---
sidebar: false
ads: false
editLink: false
sponsors: false
---

<script setup>
import SponsorsGroup from '@theme/components/SponsorsGroup.vue'
import { load, data } from '@theme/components/sponsors'
import { onMounted } from 'vue'

onMounted(load)
</script>

# Menjadi Sponsor Vue.js {#become-a-vue-js-sponsor}

Vue.js adalah proyek sumber terbuka berlisensi MIT dan sepenuhnya bebas untuk digunakan.
Jumlah yang luar biasa dari upaya yang diperlukan untuk mempertahankan ekosistem besar seperti itu dan mengembangkan fitur-fitur baru untuk proyek hanya dibuat berkelanjutan berkat dukungan keuangan yang murah hati dari sponsor kami.

## Cara Sponsor {#how-to-sponsor}

Sponsor dapat dilakukan melalui [Sponsor GitHub](https://github.com/sponsors/yyx990803) atau [OpenCollective](https://opencollective.com/vuejs). Faktur dapat diperoleh melalui sistem pembayaran GitHub. Baik sponsor berulang bulanan dan sumbangan satu kali diterima. Sponsor berulang berhak atas penempatan logo sebagaimana ditentukan dalam [Tingkatan Sponsor](#tier-benefits).

Jika Anda memiliki pertanyaan tentang Tingkatan, logistik pembayaran, atau data eksposur sponsor, silakan hubungi [sponsor@vuejs.org](mailto:sponsor@vuejs.org?subject=Vue.js%20sponsorship%20inquiry).

## Mensponsori Vue sebagai Bisnis {#sponsoring-vue-as-a-business}

Mensponsori Vue memberi Anda paparan yang baik untuk lebih dari **2 juta** Pengembang Vue di seluruh dunia melalui situs web kami dan README proyek GitHub. Ini tidak hanya secara langsung menghasilkan arahan, tetapi juga meningkatkan pengakuan merek Anda sebagai bisnis yang peduli dengan sumber terbuka. Ini adalah aset yang tidak berwujud namun sangat penting bagi perusahaan untuk membangun produk untuk pengembang, karena meningkatkan tingkat konversi Anda.

Jika Anda menggunakan Vue untuk membangun produk yang menghasilkan pendapatan, itu membuat bisnis masuk akal untuk mensponsori pengembangan Vue: **Ini memastikan proyek yang diandalkan produk Anda tetap sehat dan dipelihara secara aktif.** Paparan dan citra merek positif di komunitas Vue juga memudahkannya untuk menarik dan merekrut pengembang Vue.

Jika Anda membangun produk di mana pelanggan target Anda adalah pengembang, Anda akan mendapatkan lalu lintas berkualitas tinggi melalui paparan sponsor, karena semua pengunjung kami adalah pengembang. Sponsor juga membangun pengakuan merek dan meningkatkan konversi.

## Mensponsori Vue sebagai individu {#sponsoring-vue-as-an-individual}

Jika Anda adalah pengguna individu dan telah menikmati produktivitas menggunakan Vue, pertimbangkan untuk menyumbang sebagai tanda apresiasi - seperti membelikan kami kopi sesekali. Banyak anggota tim kami menerima sponsor dan sumbangan melalui Sponsor GitHub. Cari tombol "Sponsor" pada setiap profil anggota tim di [halaman tim](/about/team) kami.

Anda juga dapat mencoba meyakinkan majikan Anda untuk mensponsori Vue sebagai bisnis. Ini mungkin tidak mudah, tetapi sponsor bisnis biasanya menghasilkan dampak yang jauh lebih besar pada keberlanjutan proyek OSS daripada sumbangan individu, sehingga Anda akan membantu kami lebih banyak jika Anda berhasil.

## Manfaat Tingkat {#tier-benefits}

- **Sponsor Khusus Global**:
  - Terbatas pada **satu** sponsor secara global. <span v-if="!data?.special">Saat ini kosong. [Hubungi](mailto:sponsor@vuejs.org?subject=Vue.js%20special%20sponsor%20inquiry)!</span><span v-else>(Saat ini diisi)</span>
  - (Eksklusif) Penempatan logo **di atas lipatan** di halaman depan [vuejs.org](/).
  - (Eksklusif) Shoutout spesial Dan retweet regular dari peluncuran produk utama melalui [Akun X Resmi Vue](https://twitter.com/vuejs) (320k pengikut).
  - Penempatan logo yang paling menonjol di semua lokasi dari tingkatan di bawah ini.
- **Platinum (USD$2,000/bln)**:
  - Penempatan logo yang menonjol di halaman depan [vuejs.org](/).
  - Penempatan logo yang menonjol di sidebar semua halaman konten.
  - Penempatan logo yang menonjol dalam README [`vuejs/core`](https://github.com/vuejs/core) dan [`vuejs/vue`](https://github.com/vuejs/core).
- **Emas (USD$500/bln)**:
  - Penempatan logo besar di halaman depan [vuejs.org](/).
  - Penempatan logo besar di README `vuejs/core` dan `vuejs/vue`.
- **Perak (USD$250/bln)**:
  - Penempatan logo medium di berkas `BACKERS.md` di `vuejs/core` dan `vuejs/vue`.
- **Perunggu (USD$100/bln)**:
  - Penempatan logo kecil di berkas `BACKERS.md` di `vuejs/core` dan `vuejs/vue`.
- **Pendukung Murah Hati (USD$50/bln)**:
  - Nama didaftarkan di berkas `BACKERS.md` di `vuejs/core` dan `vuejs/vue`, di atas pendukung individu lainnya.
- **Pendukung Individual (USD$5/bln)**:
  - Nama didaftarkan di berkas `BACKERS.md` di `vuejs/core` dan `vuejs/vue`.

## Sponsor Saat Ini {#current-sponsors}

### Sponsor Global Khusus {#special-global-sponsor}

<SponsorsGroup tier="special" placement="page" />

### Platinum {#platinum}

<SponsorsGroup tier="platinum" placement="page" />

### Platinum (Cina) {#platinum-china}

<SponsorsGroup tier="platinum_china" placement="page" />

### Emas {#gold}

<SponsorsGroup tier="gold" placement="page" />

### Perak {#silver}

<SponsorsGroup tier="silver" placement="page" />
