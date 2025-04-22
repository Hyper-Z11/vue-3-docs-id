---
footer: false
---

# Pendahuluan {#introduction}

:::info Anda membaca dokumentasi untuk Vue 3!

- Dukungan Vue 2 telah berakhir pada **31 Desember 2023**. Pelajari selengkapnya tentang [Akhir Hidup Vue 2](https://v2.vuejs.org/eol/).
- Memutakhirkan dari Vue 2? Lihat [Panduan Migrasi](https://v3-migration.vuejs.org/).
  :::

<style src="@theme/styles/vue-mastery.css"></style>
<div class="vue-mastery-link">
  <a href="https://www.vuemastery.com/courses/" target="_blank">
    <div class="banner-wrapper">
      <img class="banner" alt="Vue Mastery banner" width="96px" height="56px" src="https://storage.googleapis.com/vue-mastery.appspot.com/flamelink/media/vuemastery-graphical-link-96x56.png" />
    </div>
    <p class="description">Pelajari Vue dengan video tutorial di <span>VueMastery.com</span></p>
    <div class="logo-wrapper">
        <img alt="Vue Mastery Logo" width="25px" src="https://storage.googleapis.com/vue-mastery.appspot.com/flamelink/media/vue-mastery-logo.png" />
    </div>
  </a>
</div>

## Apa itu Vue? {#what-is-vue}

Vue (diucap /vjuː/, seperti ***view***) adalah kerangka kerja JavaScript untuk membangun antarmuka pengguna . Ini dibangun di atas HTML, CSS, dan JavaScript standar dan menyediakan deklaratif, model pemrograman berbasis komponen yang membantu Anda secara efisien mengembangkan antarmuka pengguna dengan kompleksitas apa pun.

Ini adalah contoh minimal:

<div class="options-api">

```js
import { createApp } from 'vue'

createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')
```

</div>
<div class="composition-api">

```js
import { createApp, ref } from 'vue'

createApp({
  setup() {
    return {
      count: ref(0)
    }
  }
}).mount('#app')
```

</div>

```vue-html
<div id="app">
  <button @click="count++">
    Count is: {{ count }}
  </button>
</div>
```

**Hasil**

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<div class="demo">
  <button @click="count++">
    Count is: {{ count }}
  </button>
</div>

Contoh diatas mendemonstrasikan dua fitur inti dari Vue:

- **Rendering Deklaratif**: Vue memperluas HTML standar dengan sintaks templat yang memungkinkan kita untuk secara deklaratif menggambarkan keluaran HTML berdasarkan keadaan JavaScript.

- **Reaktivitas**: Vue secara otomatis melacak perubahan keadaan JavaScript dan memperbarui DOM secara efisien ketika perubahan terjadi.

Anda mungkin sudah memiliki pertanyaan - Jangan khawatir. Kami akan mencakup setiap detail kecil dalam dokumentasi lainnya. Untuk saat ini, silakan baca bersama sehingga Anda dapat memiliki pemahaman tingkat tinggi tentang apa yang Vue tawarkan.

:::tip Prasyarat
Sisa dokumentasi mengasumsikan keakraban dasar dengan HTML, CSS, dan JavaScript. Jika Anda benar-benar baru untuk pengembangan frontend, itu mungkin bukan ide terbaik untuk melompat ke dalam kerangka kerja sebagai langkah pertama Anda - pegang dasar-dasarnya dan kemudian kembali! Anda dapat memeriksa tingkat pengetahuan Anda dengan ikhtisar ini untuk [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript), [HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML), dan [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps) jika diperlukan. Pengalaman sebelumnya dengan kerangka kerja lain membantu, tetapi tidak diperlukan.
:::

## Kerangka Kerja Progresif {#the-progressive-framework}

Vue adalah kerangka kerja dan ekosistem yang mencakup sebagian besar fitur umum yang diperlukan dalam pengembangan frontend. Tetapi web ini sangat beragam - hal-hal yang kami buat di web dapat bervariasi secara drastis dalam bentuk dan skala. Dengan mengingat hal itu, Vue dirancang untuk ditempatkan fleksibel dan secara bertahap. Tergantung pada kasus penggunaan Anda, Vue dapat digunakan dengan cara yang berbeda:

- Meningkatkan HTML statis tanpa langkah *build*
- Menanamkan sebagai Komponen Web di halaman mana pun
- Aplikasi Halaman Tunggal (SPA)
- Fullstack / Rendering Sisi Server (SSR)
- Jamstack / Generasi Situs Statis (SSG)
- Menargetkan desktop, ponsel, WebGL, dan bahkan terminal

Jika Anda menemukan konsep-konsep ini mengintimidasi, jangan khawatir! Tutorial dan panduan ini hanya membutuhkan pengetahuan HTML dan JavaScript dasar, dan Anda harus dapat mengikuti tanpa menjadi ahli dalam hal ini.

Jika Anda seorang pengembang berpengalaman yang tertarik pada cara mengintegrasikan Vue terbaik ke dalam tumpukan Anda, atau Anda ingin tahu tentang apa arti istilah-istilah ini, kami membahasnya secara lebih rinci dalam [Cara Menggunakan Vue](/guide/extras/ways-of-using-vue).

Terlepas dari fleksibilitas, pengetahuan inti tentang bagaimana cara kerja Vue dibagi di semua kasus penggunaan ini. Bahkan jika Anda hanyalah pemula sekarang, pengetahuan yang diperoleh sepanjang jalan akan tetap berguna saat Anda tumbuh untuk mengatasi gol yang lebih ambisius di masa depan. Jika Anda seorang veteran, Anda dapat memilih cara optimal untuk memanfaatkan Vue berdasarkan masalah yang Anda coba selesaikan, sambil mempertahankan produktivitas yang sama. Inilah sebabnya mengapa kami menyebut Vue "Kerangka Kerja Progresif": Ini adalah kerangka kerja yang dapat tumbuh bersama Anda dan beradaptasi dengan kebutuhan Anda.

## Komponen Berkas Tunggal {#single-file-components}

Dalam sebagian besar proyek Vue yang berkemampuan untuk-mengaktifkan, kami membuat komponen Vue menggunakan format file seperti HTML yang disebut **Komponen Berkas Tunggal/Single-File Component** (juga dikenal sebagai berkas `* .vue`, disingkat SFC). SFC Vue, seperti namanya, merangkum logika komponen (JavaScript), template (HTML), dan gaya (CSS) dalam satu file. Inilah contoh sebelumnya, yang ditulis dalam format SFC:

<div class="options-api">

```vue
<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
```

</div>
<div class="composition-api">

```vue
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
```

</div>

SFC adalah fitur mendefinisikan Vue dan merupakan cara yang disarankan untuk menulis komponen Vue **jika** kasus penggunaan Anda menjamin pengaturan *build*. Anda dapat mempelajari lebih lanjut tentang [bagaimana dan mengapa SFC](/guide/scaling-up/sfc) di bagian khususnya - tetapi untuk saat ini, hanya tahu bahwa Vue akan menangani semua pengaturan alat *build* untuk Anda.

## Gaya API {#api-styles}

Komponen Vue dapat ditulis dalam dua gaya API yang berbeda: **API Opsi** and **API Komposisi**.

### API Opsi {#options-api}

Dengan opsi API, kami mendefinisikan logika komponen menggunakan objek opsi seperti `data`,`methods`, dan `mounted`. Properti yang ditentukan oleh opsi diekspos pada fungsi dalam `this`, yang menunjuk pada instance komponen:

```vue
<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

[Cobalah di Taman Bermain](https://play.vuejs.org/#eNptkMFqxCAQhl9lkB522ZL0HNKlpa/Qo4e1ZpLIGhUdl5bgu9es2eSyIMio833zO7NP56pbRNawNkivHJ25wV9nPUGHvYiaYOYGoK7Bo5CkbgiBBOFy2AkSh2N5APmeojePCkDaaKiBt1KnZUuv3Ky0PppMsyYAjYJgigu0oEGYDsirYUAP0WULhqVrQhptF5qHQhnpcUJD+wyQaSpUd/Xp9NysVY/yT2qE0dprIS/vsds5Mg9mNVbaDofL94jZpUgJXUKBCvAy76ZUXY53CTd5tfX2k7kgnJzOCXIF0P5EImvgQ2olr++cbRE4O3+t6JxvXj0ptXVpye1tvbFY+ge/NJZt)

### API Komposisi {#composition-api}

Dengan API komposisi, kami mendefinisikan logika komponen menggunakan fungsi API impor. Dalam SFC, komposisi API biasanya digunakan dengan [`<script setup>`](/api/sfc-script-setup). Atribut `setup` adalah petunjuk yang membuat Vue melakukan transformasi kompilasi yang memungkinkan kita menggunakan API komposisi dengan lebih sedikit *boilerplate*. Misalnya, impor dan variabel / fungsi tingkat atas yang dinyatakan dalam `<script setup>` secara langsung dapat digunakan dalam templat.

Berikut adalah komponen yang sama, dengan templat yang sama persis, tetapi menggunakan API komposisi dan `<script setup>` sebagai gantinya:

```vue
<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

[Cobalah di Taman Bermain](https://play.vuejs.org/#eNpNkMFqwzAQRH9lMYU4pNg9Bye09NxbjzrEVda2iLwS0spQjP69a+yYHnRYad7MaOfiw/tqSliciybqYDxDRE7+qsiM3gWGGQJ2r+DoyyVivEOGLrgRDkIdFCmqa1G0ms2EELllVKQdRQa9AHBZ+PLtuEm7RCKVd+ChZRjTQqwctHQHDqbvMUDyd7mKip4AGNIBRyQujzArgtW/mlqb8HRSlLcEazrUv9oiDM49xGGvXgp5uT5his5iZV1f3r4HFHvDprVbaxPhZf4XkKub/CDLaep1T7IhGRhHb6WoTADNT2KWpu/aGv24qGKvrIrr5+Z7hnneQnJu6hURvKl3ryL/ARrVkuI=)

### Mana Yang Dipilih? {#which-to-choose}

Kedua gaya API sepenuhnya mampu menutupi kasus penggunaan umum. Mereka adalah antarmuka yang berbeda yang ditenagai oleh sistem yang mendasari yang sama persis. Bahkan, API Opsi diimplementasikan di atas API Komposisi! Konsep dan pengetahuan mendasar tentang Vue dibagikan di dua gaya.

API Opsi berpusat di sekitar konsep "instance komponen" (`this` seperti yang terlihat dalam contoh), yang biasanya selaras dengan model mental berbasis kelas untuk pengguna yang berasal dari latar belakang bahasa OOP. Ini juga lebih ramah pemula dengan mengabstraksi detail reaktivitas dan menegakkan organisasi kode melalui kelompok opsi.

API Komposisi berpusat pada mendeklarasikan variabel keadaan reaktif secara langsung dalam ruang lingkup fungsi dan menyusun status dari berbagai fungsi bersama untuk menangani kompleksitas. Ini adalah bentuk yang lebih bebas dan membutuhkan pemahaman tentang bagaimana reaktivitas bekerja dalam Vue untuk digunakan secara efektif. Sebagai gantinya, fleksibilitasnya memungkinkan pola yang lebih kuat untuk mengatur dan menggunakan kembali logika.

Anda dapat mempelajari lebih lanjut tentang perbandingan antara dua gaya dan manfaat potensial dari API komposisi dalam [FAQ API Komposisi](/guide/extras/composition-api-faq).

Jika Anda baru ke Vue, inilah rekomendasi umum kami:

- Untuk tujuan pembelajaran, gunakan dengan gaya yang terlihat lebih mudah untuk dipahami dengan Anda. Sekali lagi, sebagian besar konsep inti dibagi antara dua gaya. Anda selalu dapat mengambil gaya lain nanti.

- Untuk penggunaan produksi:

  - Pergi dengan API Opsi Jika Anda tidak menggunakan alat *build*, atau berencana untuk menggunakan Vue terutama dalam skenario kompleksitas rendah, mis. peningkatan progresif.

  - Pergilah dengan API Komposisi + Komponen Berkas Tunggal jika Anda berencana untuk membangun aplikasi lengkap dengan Vue.

Anda tidak harus berkomitmen untuk hanya satu gaya selama fase pembelajaran. Sisa dokumentasi akan menyediakan sampel kode dalam kedua gaya yang berlaku, dan Anda dapat beralih di antara mereka kapan saja menggunakan **Sakelar Preferensi API** di bagian atas bilah sisi kiri.

## Masih Punya Pertanyaan? {#still-got-questions}

Lihat [FAQ](/about/faq) kami.

## Pilih Jalur Belajar Anda {#pick-your-learning-path}

Pengembang yang berbeda memiliki gaya belajar yang berbeda. Jangan ragu untuk memilih jalan belajar yang sesuai dengan preferensi Anda - meskipun kami merekomendasikan untuk semua konten, jika mungkin!

<div class="vt-box-container next-steps">
  <a class="vt-box" href="/tutorial/">
    <p class="next-steps-link">Cobalah Tutorial</p>
    <p class="next-steps-caption">Bagi mereka yang lebih suka belajar hal-hal langsung.</p>
  </a>
  <a class="vt-box" href="/guide/quick-start.html">
    <p class="next-steps-link">Baca Panduan</p>
    <p class="next-steps-caption">Panduan ini menuntun Anda melalui setiap aspek kerangka kerja dalam detail penuh.</p>
  </a>
  <a class="vt-box" href="/examples/">
    <p class="next-steps-link">Lihat Contoh</p>
    <p class="next-steps-caption">Jelajahi contoh fitur inti dan tugas UI umum.</p>
  </a>
</div>
