---
outline: deep
---

<script setup>
import { ref, onMounted } from 'vue'

const version = ref()

onMounted(async () => {
  const res = await fetch('https://api.github.com/repos/vuejs/core/releases/latest')
  version.value = (await res.json()).name
})
</script>

# Rilis {#releases}

<p v-if="version">
Versi Vue stabil terbaru saat ini adalah <strong>{{ version }}</strong>.
</p>
<p v-else>
Memeriksa versi terbaru...
</p>

Catatan perubahan penuh dari rilis sebelumnya tersedia di [GitHub](https://github.com/vuejs/core/blob/main/CHANGELOG.md).

## Siklus Rilis {#release-cycle}

Vue tidak memiliki siklus rilis tetap.

- Rilis patch dirilis sesuai kebutuhan.

- Rilis minor selalu berisi fitur-fitur baru, dengan kerangka waktu khas 3~6 bulan di antaranya. Rilis kecil selalu melalui fase beta pra-rilis.

- Rilis utama akan diumumkan sebelumnya, dan akan melalui fase diskusi awal dan fase pra-rilis alfa / beta.

## Versi Semantic *Edge Cases* {#semantic-versioning-edge-cases}

Rilis Vue mengikuti [Semantic Versioning](https://semver.org/) dengan beberapa *edge cases*.

### Definisi TypeScript {#typescript-definitions}

Kami dapat mengirimkan perubahan yang tidak kompatibel pada definisi TypeScript antar versi **minor**. Ini karena:

1. Terkadang TypeScript itu sendiri mengirimkan perubahan yang tidak kompatibel antara versi minor, dan kami mungkin harus menyesuaikan tipe untuk mendukung versi TypeScript yang lebih baru.

2. Kadang-kadang kita mungkin perlu mengadopsi fitur yang hanya tersedia dalam versi TypeScript yang lebih baru, menaikkan versi minimum yang diperlukan dari TypeScript

Jika Anda menggunakan TypeScript, Anda dapat menggunakan kisaran semver yang mengunci minor saat ini dan meningkatkan secara manual ketika versi minor Vue dirilis.

### Kompatibilitas Kode Kompilasi dengan Runtime Lama {#compiled-code-compatibility-with-older-runtime}

Versi **minor** Kompiler Vue yang lebih baru dapat menghasilkan kode yang tidak kompatibel dengan runtime Vue dari versi minor yang lebih tua. Misalnya, kode yang dihasilkan oleh Kompiler Vue 3.2 mungkin tidak sepenuhnya kompatibel jika dikonsumsi oleh runtime dari Vue 3.1.

Ini hanya menjadi perhatian bagi penulis pustaka, karena dalam aplikasi, versi kompiler dan versi runtime selalu sama. Ketidakcocokan versi hanya dapat terjadi jika Anda mengirimkan kode komponen Vue yang telah dikompilasi sebagai paket, dan seorang konsumen menggunakannya dalam sebuah proyek menggunakan versi yang lebih lama dari Vue. Akibatnya, paket Anda mungkin perlu secara eksplisit mendeklarasikan versi minimum vue yang diperlukan.

## Pra Rilis {#pre-releases}

Rilis minor biasanya melalui jumlah rilis beta yang tidak tetap. Rilis utama akan melalui fase alfa dan fase beta.

Selain itu, kami menerbitkan rilis Canary setiap minggu dari cabang `main` dan` minor` di GitHub. Mereka diterbitkan sebagai paket yang berbeda untuk menghindari kembung metadata NPM dari saluran stabil. Anda dapat menginstalnya melalui `npx install-vue@canary` atau `npx install-vue @canary-minor`.

Pra-rilis dimaksudkan untuk pengujian integrasi / stabilitas, dan untuk pengadopsi awal untuk memberikan umpan balik untuk fitur yang tidak stabil. Jangan gunakan pra-rilis dalam produksi. Semua pra-rilis dianggap tidak stabil dan dapat mengirim perubahan, jadi selalu pin ke versi yang tepat saat menggunakan pra-rilis.

## Usang {#deprecations}

Kami dapat secara berkala mencatat fitur yang memiliki penggantian baru, lebih baik dalam rilis kecil. Fitur usang akan terus bekerja, dan akan dihapus dalam rilis besar berikutnya setelah memasuki status usang.

## RFC {#rfcs}

Fitur-fitur baru dengan permukaan API yang substansial dan perubahan besar pada Vue akan melalui proses **Permintaan untuk Komentar/Request for Comments** (RFC). Proses RFC dimaksudkan untuk menyediakan jalur yang konsisten dan terkontrol untuk fitur-fitur baru untuk memasuki kerangka kerja, dan memberi pengguna kesempatan untuk berpartisipasi dan menawarkan umpan balik dalam proses desain.

Proses RFC dilakukan di repo [vuejs/rfcs](https://github.com/vuejs/rfcs) di GitHub.

## Fitur Experimental {#experimental-features}

Beberapa fitur dikirim dan didokumentasikan dalam versi Vue yang stabil, tetapi ditandai sebagai eksperimental. Fitur eksperimental biasanya merupakan fitur yang memiliki diskusi RFC terkait dengan sebagian besar masalah desain yang diselesaikan di atas kertas, tetapi masih kurang umpan balik dari penggunaan dunia nyata.

Tujuan dari fitur eksperimental adalah memungkinkan pengguna untuk memberikan umpan balik untuk mereka dengan menguji mereka dalam pengaturan produksi, tanpa harus menggunakan versi Vue yang tidak stabil. Fitur eksperimental sendiri dianggap tidak stabil, dan hanya boleh digunakan secara terkendali, dengan harapan bahwa fitur tersebut dapat berubah antara jenis rilis apa pun.
