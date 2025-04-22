---
footer: false
---

<script setup>
import { VTCodeGroup, VTCodeGroupTab } from '@vue/theme'
</script>

# Mulai Cepat {#quick-start}

## Coba Vue *Online* {#try-vue-online}

- Untuk dengan cepat mendapatkan rasa Vue, Anda dapat mencobanya langsung di [Taman Bermain](https://play.vuejs.org/#eNo9jcEKwjAMhl/lt5fpQYfXUQfefAMvvRQbddC1pUuHUPrudg4HIcmXjyRZXEM4zYlEJ+T0iEPgXjn6BB8Zhp46WUZWDjCa9f6w9kAkTtH9CRinV4fmRtZ63H20Ztesqiylphqy3R5UYBqD1UyVAPk+9zkvV1CKbCv9poMLiTEfR2/IXpSoXomqZLtti/IFwVtA9A==) kami.

- Jika Anda lebih suka pengaturan HTML biasa tanpa langkah-langkah *build*, Anda dapat menggunakan [JSFiddle](https://jsfiddle.net/yyx990803/2ke1ab0z/) ini sebagai titik awal Anda.

- Jika Anda sudah terbiasa dengan Node.js dan konsep alat *build*, Anda juga dapat mencoba setup *build* lengkap tepat di dalam peramban Anda di [StackBlitz](https://vite.new/vue).

## Membuat Aplikasi Vue {#creating-a-vue-application}

:::tip Prasyarat

- Keakraban dengan baris perintah
- Instal [Node.js](https://nodejs.org/) versi 18.3 atau lebih tinggi
  :::

Di bagian ini kami akan memperkenalkan cara rancah [Aplikasi Halaman Tunggal](/guide/extras/ways-of-using-vue#single-page-application-spa) Vue di mesin lokal Anda. Proyek yang dibuat akan menggunakan pengaturan *build* berdasarkan [Vite](https://vitejs.dev) dan memungkinkan kami menggunakan [Komponen Berkas Tunggal](/guide/scaling-up/sfc) (SFC) Vue.

Pastikan Anda memiliki versi terbaru dari [Node.js](https://nodejs.org/) yang diinstal dan direktori kerja Anda saat ini adalah tempat yang ingin Anda buat proyek. Jalankan perintah berikut di baris perintah Anda (tanpa tanda `$`):

<VTCodeGroup>
  <VTCodeGroupTab label="npm">

  ```sh
  $ npm create vue@latest
  ```

  </VTCodeGroupTab>
  <VTCodeGroupTab label="pnpm">

  ```sh
  $ pnpm create vue@latest
  ```

  </VTCodeGroupTab>
  <VTCodeGroupTab label="yarn">

  ```sh
  # For Yarn (v1+)
  $ yarn create vue

  # For Yarn Modern (v2+)
  $ yarn create vue@latest
  
  # For Yarn ^v4.11
  $ yarn dlx create-vue@latest
  ```

  </VTCodeGroupTab>
  <VTCodeGroupTab label="bun">

  ```sh
  $ bun create vue@latest
  ```

  </VTCodeGroupTab>
</VTCodeGroup>

Perintah ini akan menginstal dan mengeksekusi [create-vue](https://github.com/vuejs/create-vue), alat perancah proyek Vue resmi. Anda akan disajikan dengan meminta beberapa fitur opsional seperti TypeScript dan dukungan pengujian:

<div class="language-sh"><pre><code><span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Project name: <span style="color:#888;">… <span style="color:#89DDFF;">&lt;</span><span style="color:#888;">your-project-name</span><span style="color:#89DDFF;">&gt;</span></span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Add TypeScript? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Add JSX Support? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Add Vue Router for Single Page Application development? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Add Pinia for state management? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Add Vitest for Unit testing? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Add an End-to-End Testing Solution? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Cypress / Nightwatch / Playwright</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Add ESLint for code quality? <span style="color:#888;">… No / <span style="color:#89DDFF;text-decoration:underline">Yes</span></span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Add Prettier for code formatting? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Add Vue DevTools 7 extension for debugging? (experimental) <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span></span>
<span style="color:#A6ACCD;">Scaffolding project in ./<span style="color:#89DDFF;">&lt;</span><span style="color:#888;">your-project-name</span><span style="color:#89DDFF;">&gt;</span>...</span>
<span style="color:#A6ACCD;">Done.</span></code></pre></div>

Jika Anda tidak yakin tentang suatu opsi, cukup pilih `No` dengan menekan sekarang. Setelah proyek dibuat, ikuti instruksi untuk menginstal dependensi dan mulai server pengembangan:

<VTCodeGroup>
  <VTCodeGroupTab label="npm">

  ```sh-vue
  $ cd {{'<your-project-name>'}}
  $ npm install
  $ npm run dev
  ```

  </VTCodeGroupTab>
  <VTCodeGroupTab label="pnpm">

  ```sh-vue
  $ cd {{'<your-project-name>'}}
  $ pnpm install
  $ pnpm run dev
  ```

  </VTCodeGroupTab>
  <VTCodeGroupTab label="yarn">

  ```sh-vue
  $ cd {{'<your-project-name>'}}
  $ yarn
  $ yarn dev
  ```

  </VTCodeGroupTab>
  <VTCodeGroupTab label="bun">

  ```sh-vue
  $ cd {{'<your-project-name>'}}
  $ bun install
  $ bun run dev
  ```

  </VTCodeGroupTab>
</VTCodeGroup>

Anda sekarang harus menjalankan proyek Vue pertama Anda! Perhatikan bahwa komponen contoh dalam proyek yang dihasilkan ditulis menggunakan [API komposisi](/guide/introduction#composition-api) dan `<script setup>`, daripada [API Opsi](/guide/introduction#options-api). Berikut adalah beberapa tips tambahan:

- Pengaturan IDE yang direkomendasikan adalah [Visual Studio Code](https://code.visualstudio.com/) + [Vue - Ekstensi Resmi](https://marketplace.visualstudio.com/items?itemName=Vue.volar). Jika Anda menggunakan editor lain, lihat [bagian Dukungan IDE](/guide/scaling-up/tooling#ide-support).
- Lebih banyak detail perkakas, termasuk integrasi dengan kerangka kerja backend, dibahas dalam [Panduan Perkakas](/guide/scaling-up/tooling).
- Untuk mempelajari lebih lanjut tentang alat *build* yang mendasari Vite, periksa [Dokumentasi Vite](https://vitejs.dev).
- Jika Anda memilih untuk menggunakan TypeScript, periksa [Panduan Penggunaan TypeScript](typescript/overview).

Ketika Anda siap mengirimkan aplikasi Anda ke produksi, jalankan:

<VTCodeGroup>
  <VTCodeGroupTab label="npm">

  ```sh
  $ npm run build
  ```

  </VTCodeGroupTab>
  <VTCodeGroupTab label="pnpm">

  ```sh
  $ pnpm run build
  ```

  </VTCodeGroupTab>
  <VTCodeGroupTab label="yarn">

  ```sh
  $ yarn build
  ```

  </VTCodeGroupTab>
  <VTCodeGroupTab label="bun">

  ```sh
  $ bun run build
  ```

  </VTCodeGroupTab>
</VTCodeGroup>

Ini akan membuat *build* siap produksi dari aplikasi Anda di direktori proyek `./dist`. Lihatlah [Panduan Penyebaran Produksi](/guide/best-practices/production-deployment) untuk mempelajari lebih lanjut tentang pengiriman aplikasi Anda ke produksi.

[Langkah Selanjutnya >](#next-steps)

## Menggunakan Vue dari CDN {#using-vue-from-cdn}

Anda bisa menggunakan Vue secara langsung dari CDN lewat tag script:

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

Disini kami menggunakan [unpkg](https://unpkg.com/), tetapi Anda juga dapat menggunakan CDN apa pun yang menyajikan paket NPM, misalnya [jsdelivr](https://www.jsdelivr.com/package/npm/vue) atau [cdnjs](https://cdnjs.com/libraries/vue). Tentu saja, Anda juga dapat mengunduh file ini dan menyajikannya sendiri.

Saat menggunakan Vue dari CDN, tidak ada "Langkah *Build*" yang terlibat. Ini membuat pengaturan jauh lebih sederhana, dan cocok untuk meningkatkan HTML statis atau mengintegrasikan dengan kerangka kerja backend. Namun, Anda tidak akan dapat menggunakan sintaks Komponen Berkas Tunggal (SFC).

### Menggunakan *Build* Global {#using-the-global-build}

Tautan di atas memuat _*build* global_ Vue, di mana semua API tingkat atas diekspos sebagai properti pada objek `Vue` global. Ini adalah contoh penuh menggunakan *build* global:

<div class="options-api">

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<div id="app">{{ message }}</div>

<script>
  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
</script>
```

[Demo CodePen >](https://codepen.io/vuejs-examples/pen/QWJwJLp)

</div>

<div class="composition-api">

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<div id="app">{{ message }}</div>

<script>
  const { createApp, ref } = Vue

  createApp({
    setup() {
      const message = ref('Hello vue!')
      return {
        message
      }
    }
  }).mount('#app')
</script>
```

[Demo CodePen >](https://codepen.io/vuejs-examples/pen/eYQpQEG)

:::tip
Banyak contoh untuk API Komposisi di seluruh panduan ini akan menggunakan sintaks `<script setup>`, yang membutuhkan alat *build*. Jika Anda berniat menggunakan API Komposisi tanpa langkah *build*, konsultasikan dengan penggunaan [opsi `setup()`](/api/composition-api-setup).
:::

</div>

### Menggunakan *build* modul ES {#using-the-es-module-build}

Sepanjang sisa dokumentasi, kami terutama menggunakan sintaks [modul ES](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). Sebagian besar peramban modern sekarang mendukung modul ES secara *native*, sehingga kita dapat menggunakan Vue dari CDN melalui modul ES asli seperti ini:

<div class="options-api">

```html{3,4}
<div id="app">{{ message }}</div>

<script type="module">
  import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
</script>
```

</div>

<div class="composition-api">

```html{3,4}
<div id="app">{{ message }}</div>

<script type="module">
  import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

  createApp({
    setup() {
      const message = ref('Hello Vue!')
      return {
        message
      }
    }
  }).mount('#app')
</script>
```

</div>

Perhatikan bahwa kami menggunakan modul `<script type="module">`, dan URL CDN yang diimpor menunjuk ke **modul ES *build*** dari Vue sebagai gantinya.

<div class="options-api">

[Demo CodePen >](https://codepen.io/vuejs-examples/pen/VwVYVZO)

</div>
<div class="composition-api">

[Demo CodePen >](https://codepen.io/vuejs-examples/pen/MWzazEv)

</div>

### Mengaktifkan Peta Impor {#enabling-import-maps}

Dalam contoh di atas, kami mengimpor dari URL CDN lengkap, tetapi dalam sisa dokumentasi Anda akan melihat kode seperti ini:

```js
import { createApp } from 'vue'
```

Kami dapat mengajarkan peramban tempat untuk menemukan impor `vue` dengan menggunakan [Peta Impor](https://caniuse.com/import-maps):

<div class="options-api">

```html{1-7,12}
<script type="importmap">
  {
    "imports": {
      "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
    }
  }
</script>

<div id="app">{{ message }}</div>

<script type="module">
  import { createApp } from 'vue'

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
</script>
```

[Demo CodePen >](https://codepen.io/vuejs-examples/pen/wvQKQyM)

</div>

<div class="composition-api">

```html{1-7,12}
<script type="importmap">
  {
    "imports": {
      "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
    }
  }
</script>

<div id="app">{{ message }}</div>

<script type="module">
  import { createApp, ref } from 'vue'

  createApp({
    setup() {
      const message = ref('Hello Vue!')
      return {
        message
      }
    }
  }).mount('#app')
</script>
```

[Demo CodePen >](https://codepen.io/vuejs-examples/pen/YzRyRYM)

</div>

Anda juga dapat menambahkan entri untuk dependensi lain ke peta impor - tetapi pastikan mereka menunjuk ke versi modul ES dari perpustakaan yang ingin Anda gunakan.

:::tip Dukungan Peramban Peta Impor
Peta Impor adalah fitur peramban yang relatif baru. Pastikan untuk menggunakan peramban dalam [jangkauan pendukungnya](https://caniuse.com/import-maps). Secara khusus, hanya didukung di Safari 16.4+.
:::

:::warning Catatan dalam Penggunaan Produksi
Contoh sejauh ini menggunakan *build* pengembangan Vue - jika Anda bermaksud menggunakan Vue dari CDN dalam produksi, pastikan untuk memeriksa [Panduan Penyebaran Produksi](/guide/best-practices/production-deployment#without-build-tools).

Sementara dimungkinkan untuk menggunakan Vue tanpa sistem *build*, pendekatan alternatif untuk dipertimbangkan adalah menggunakan [`vuejs/petite-vue`](https://github.com/vuejs/petite-vue) yang bisa lebih sesuai dengan konteks di mana [`jquery/jquery`](https://github.com/jquery/jquery) (di masa lalu) atau [`alpinejs/alpine`](https://github.com/alpinejs/alpine) (di masa sekarang) mungkin digunakan sebagai gantinya.
:::

### Membagi Modul {#splitting-up-the-modules}

Saat kami menyelam lebih dalam ke panduan ini, kami mungkin perlu membagi kode kami menjadi file JavaScript yang terpisah sehingga mereka lebih mudah dikelola. Misalnya:

```html
<!-- index.html -->
<div id="app"></div>

<script type="module">
  import { createApp } from 'vue'
  import MyComponent from './my-component.js'

  createApp(MyComponent).mount('#app')
</script>
```

<div class="options-api">

```js
// my-component.js
export default {
  data() {
    return { count: 0 }
  },
  template: `<div>Count is: {{ count }}</div>`
}
```

</div>
<div class="composition-api">

```js
// my-component.js
import { ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  template: `<div>Count is: {{ count }}</div>`
}
```

</div>

Jika Anda secara langsung membuka `index.html` di peramban Anda, Anda akan menemukan bahwa ia melempar kesalahan karena modul ES tidak dapat bekerja melalui protokol `file://`, yang merupakan protokol yang digunakan peramban ketika Anda membuka berkas lokal.

Karena alasan keamanan, modul ES hanya dapat bekerja di atas protokol `http://`, yang digunakan peramban saat membuka halaman di web. Agar modul ES bekerja pada mesin lokal kami, kami perlu melayani protokol `index.html` atas ` http://`, dengan server HTTP lokal.

Untuk memulai server HTTP lokal, pertama-tama pastikan Anda memiliki [Node.js](https://nodejs.org/en/) yang diinstal, lalu jalankan `npx serve` dari baris perintah di direktori yang sama di mana berkas HTML Anda. Anda juga dapat menggunakan server HTTP lainnya yang dapat melayani berkas statis dengan jenis MIME yang benar.

Anda mungkin telah memperhatikan bahwa templat komponen yang diimpor sedikit digariskan sebagai string JavaScript. Jika Anda menggunakan VS Code, Anda dapat menginstal ekstensi [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html) dan awali string dengan komentar `/*html*/` untuk mendapatkan sintaksis sorotan untuk mereka.

## Langkah Selanjutnya {#next-steps}

Jika Anda melewatkan [Pendahuluan](/guide/introduction), kami sangat menyarankan membacanya sebelum beralih ke sisa dokumentasi.

<div class="vt-box-container next-steps">
  <a class="vt-box" href="/guide/essentials/application.html">
    <p class="next-steps-link">Lanjutkan dengan Panduan ini</p>
    <p class="next-steps-caption">Panduan ini menuntun Anda melalui setiap aspek kerangka kerja secara penuh.</p>
  </a>
  <a class="vt-box" href="/tutorial/">
    <p class="next-steps-link">Coba Tutorial</p>
    <p class="next-steps-caption">Bagi mereka yang lebih suka belajar hal-hal langsung.</p>
  </a>
  <a class="vt-box" href="/examples/">
    <p class="next-steps-link">Lihat Contoh</p>
    <p class="next-steps-caption">Jelajahi contoh fitur inti dan tugas UI umum.</p>
  </a>
</div>
