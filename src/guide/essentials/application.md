# Membuat Aplikasi Vue {#creating-a-vue-application}

## Instansi Aplikasi {#the-application-instance}

Setiap aplikasi Vue dimulai dengan membuat **instansi aplikasi** baru dengan fungsi [`createApp`](/api/application#createapp)

```js
import { createApp } from 'vue'

const app = createApp({
  /* root component options */
})
```

## Komponen Akar {#the-root-component}

Objek yang kita masukkan ke `createApp` sebenarnya adalah sebuah komponen. Setiap aplikasi memerlukan "komponen akar" yang dapat memuat komponen lain sebagai turunannya.

Jika Anda menggunakan Komponen Berkas Tunggal, kami biasanya mengimpor komponen akar dari berkas lain:

```js
import { createApp } from 'vue'
// import the root component App from a single-file component.
import App from './App.vue'

const app = createApp(App)
```

Meskipun banyak contoh dalam panduan ini hanya memerlukan satu komponen, sebagian besar aplikasi nyata disusun menjadi pohon komponen yang dapat digunakan kembali dan bertingkat. Misalnya, pohon komponen aplikasi Todo mungkin terlihat seperti ini:

```
App (root component)
├─ TodoList
│  └─ TodoItem
│     ├─ TodoDeleteButton
│     └─ TodoEditButton
└─ TodoFooter
   ├─ TodoClearButton
   └─ TodoStatistics
```

Di bagian panduan selanjutnya, kita akan membahas cara mendefinisikan dan menyusun beberapa komponen secara bersamaan. Sebelumnya, kita akan fokus pada apa yang terjadi di dalam satu komponen.

## Memasang Aplikasi {#mounting-the-app}

Instansi aplikasi tidak akan merender apa pun hingga metode `.mount()` dipanggil. Instansi mengharapkan argumen "kontainer", yang dapat berupa elemen DOM aktual atau string pemilih:

```html
<div id="app"></div>
```

```js
app.mount('#app')
```

Konten komponen akar aplikasi akan ditampilkan di dalam elemen kontainer. Elemen kontainer itu sendiri tidak dianggap sebagai bagian dari aplikasi.

Metode `.mount()` harus selalu dipanggil setelah semua konfigurasi aplikasi dan pendaftaran aset selesai. Perhatikan juga bahwa nilai pengembaliannya, tidak seperti metode pendaftaran aset, adalah instansi komponen akar, bukan instansi aplikasi.

### Templat Komponen Akar In-DOM {#in-dom-root-component-template}

Templat untuk komponen akar biasanya merupakan bagian dari komponen itu sendiri, tetapi memungkinkan juga untuk menyediakan templat secara terpisah dengan menuliskannya langsung di dalam wadah pemasangan:

```html
<div id="app">
  <button @click="count++">{{ count }}</button>
</div>
```

```js
import { createApp } from 'vue'

const app = createApp({
  data() {
    return {
      count: 0
    }
  }
})

app.mount('#app')
```

Vue akan secara otomatis menggunakan `innerHTML` kontainer sebagai templat jika komponen akar belum memiliki opsi `template`.

Templat In-DOM sering digunakan dalam aplikasi yang [menggunakan Vue tanpa langkah *build*](/guide/quick-start.html#using-vue-from-cdn). Templat ini juga dapat digunakan bersama dengan kerangka kerja sisi server, di mana templat akar dapat dibuat secara dinamis oleh server.

## Konfigurasi Aplikasi {#app-configurations}

Instansi aplikasi memaparkan objek `.config` yang memungkinkan kita mengonfigurasi beberapa opsi tingkat aplikasi, misalnya, mendefinisikan penangan kesalahan tingkat aplikasi yang menangkap kesalahan dari semua komponen turunan:

```js
app.config.errorHandler = (err) => {
  /* handle error */
}
```

Instansi aplikasi juga menyediakan beberapa metode untuk mendaftarkan aset yang dicakup aplikasi. Misalnya, mendaftarkan komponen:

```js
app.component('TodoDeleteButton', TodoDeleteButton)
```

Hal ini membuat `TodoDeleteButton` tersedia untuk digunakan di mana saja di aplikasi kita. Kita akan membahas pendaftaran untuk komponen dan jenis aset lainnya di bagian panduan selanjutnya. Anda juga dapat menelusuri daftar lengkap API instansi aplikasi di [Referensi API](/api/application).

Pastikan untuk menerapkan semua konfigurasi aplikasi sebelum memasang aplikasi!

## Beberapa instansi aplikasi {#multiple-application-instances}

Anda tidak terbatas pada satu instansi aplikasi di halaman yang sama. API `createApp` memungkinkan beberapa aplikasi Vue untuk hidup berdampingan di halaman yang sama, masing-masing dengan cakupannya sendiri untuk konfigurasi dan aset global:

```js
const app1 = createApp({
  /* ... */
})
app1.mount('#container-1')

const app2 = createApp({
  /* ... */
})
app2.mount('#container-2')
```

Jika Anda menggunakan Vue untuk menyempurnakan HTML yang dirender server dan hanya membutuhkan Vue untuk mengontrol bagian tertentu dari halaman besar, hindari memasang satu instansi aplikasi Vue di seluruh halaman. Sebaliknya, buat beberapa instansi aplikasi kecil dan pasang pada elemen yang menjadi tanggung jawabnya.
