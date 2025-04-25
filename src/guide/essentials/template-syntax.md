# Sintaksis Templat {#template-syntax}

Vue menggunakan sintaksis templat berbasis HTML yang memungkinkan Anda mengikat DOM yang dirender secara deklaratif ke data instansi komponen yang mendasarinya. Semua templat Vue adalah HTML yang valid secara sintaksis yang dapat diurai oleh browser dan parser HTML yang sesuai dengan spesifikasi.

Di balik layar, Vue mengompilasi templat menjadi kode JavaScript yang sangat optimal. Dikombinasikan dengan sistem reaktivitas, Vue dapat secara cerdas menentukan jumlah minimal komponen yang akan dirender ulang dan menerapkan jumlah minimal manipulasi DOM saat status aplikasi berubah.

Jika Anda familier dengan konsep Virtual DOM dan lebih menyukai kekuatan JavaScript, Anda juga dapat [langsung menulis fungsi render](/guide/extras/render-function) alih-alih templat, dengan dukungan JSX opsional. Namun, perlu dicatat bahwa fungsi render tidak memiliki tingkat pengoptimalan waktu kompilasi yang sama seperti templat.

## Interpolasi Teks {#text-interpolation}

Bentuk paling dasar dari pengikatan data adalah interpolasi teks menggunakan sintaks "Kumis" (kurung kurawal ganda):

```vue-html
<span>Message: {{ msg }}</span>
```

Tag kumis akan diganti dengan nilai properti `msg` [dari instansi komponen terkait](/guide/essentials/reactivity-fundamentals#declaring-reactive-state). Tag ini juga akan diperbarui setiap kali properti `msg` berubah.

## HTML Mentah {#raw-html}

Kumis ganda menginterpretasikan data sebagai teks biasa, bukan HTML. Untuk menghasilkan HTML asli, Anda perlu menggunakan [direktif `v-html`](/api/built-in-directives#v-html):

```vue-html
<p>Using text interpolation: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

<script setup>
  const rawHtml = '<span style="color: red">This should be red.</span>'
</script>

<div class="demo">
  <p>Using text interpolation: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>
</div>

Di sini kita menemukan sesuatu yang baru. Atribut `v-html` yang Anda lihat disebut **direktif**. Direktif diawali dengan `v-` untuk menunjukkan bahwa itu adalah atribut khusus yang disediakan oleh Vue, dan seperti yang mungkin sudah Anda duga, mereka menerapkan perilaku reaktif khusus pada DOM yang dirender. Di sini, pada dasarnya kita mengatakan "jaga agar HTML bagian dalam elemen ini tetap mutakhir dengan properti `rawHtml` pada instance aktif saat ini."

Konten `span` akan diganti dengan nilai properti `rawHtml`, yang ditafsirkan sebagai HTML biasa - pengikatan data diabaikan. Perhatikan bahwa Anda tidak dapat menggunakan `v-html` untuk menyusun bagian templat, karena Vue bukanlah mesin templat berbasis string. Sebaliknya, komponen lebih disukai sebagai unit dasar untuk penggunaan ulang dan penyusunan UI.

:::warning Peringatan Keamanan
Me-render HTML acak secara dinamis di situs web Anda bisa sangat berbahaya karena dapat dengan mudah menyebabkan [kerentanan XSS](https://en.wikipedia.org/wiki/Cross-site_scripting). Hanya gunakan `v-html` pada konten tepercaya dan **jangan pernah** pada konten yang disediakan pengguna.
:::

## Pengikatan Atribut {#attribute-bindings}

Kumis tidak dapat digunakan di dalam atribut HTML. Sebagai gantinya, gunakan [direktif `v-bind`](/api/built-in-directives#v-bind):

```vue-html
<div v-bind:id="dynamicId"></div>
```

Direktif `v-bind` memerintahkan Vue untuk menjaga atribut `id` elemen agar tetap sinkron dengan properti `dynamicId` komponen. Jika nilai terikat adalah `null` atau `undefined`, maka atribut akan dihapus dari elemen yang dirender.

### Singkatan {#shorthand}

Karena `v-bind` sangat umum digunakan, ia memiliki sintaksis singkatan khusus:

```vue-html
<div :id="dynamicId"></div>
```

Atribut yang dimulai dengan `:` mungkin terlihat sedikit berbeda dari HTML normal, tetapi sebenarnya itu adalah karakter yang valid untuk nama atribut dan semua browser yang mendukung Vue dapat menguraikannya dengan benar. Selain itu, atribut tersebut tidak muncul dalam markup akhir yang ditampilkan. Sintaks singkatan bersifat opsional, tetapi Anda mungkin akan menyukainya saat mempelajari lebih lanjut tentang penggunaannya nanti.

> Untuk sisa panduan ini, kami akan menggunakan sintaksis singkat dalam contoh kode, karena itulah penggunaan paling umum oleh pengembang Vue.

### Singkatan dengan Nama yang Sama {#same-name-shorthand}

- Hanya didukung di 3.4+

Jika atribut memiliki nama yang sama dengan nilai JavaScript yang diikat, sintaksnya dapat dipersingkat lebih lanjut dengan menghilangkan nilai atribut:

```vue-html
<!-- same as :id="id" -->
<div :id></div>

<!-- this also works -->
<div v-bind:id></div>
```

Ini mirip dengan sintaks singkatan properti saat mendeklarasikan objek dalam JavaScript. Perhatikan bahwa ini adalah fitur yang hanya tersedia di Vue 3.4 dan di atasnya.

### Atribut Boolean {#boolean-attributes}

[Atribut Boolean](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes) adalah atribut yang dapat menunjukkan nilai benar / salah melalui keberadaannya pada suatu elemen. Misalnya, [`disabled`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled) adalah salah satu atribut boolean yang paling umum digunakan.

`v-bind` bekerja sedikit berbeda dalam kasus ini:

```vue-html
<button :disabled="isButtonDisabled">Button</button>
```

Atribut `disabled` akan disertakan jika `isButtonDisabled` memiliki [nilai benar](https://developer.mozilla.org/en-US/docs/Glossary/Truthy). Atribut ini juga akan disertakan jika nilainya berupa string kosong, dengan tetap menjaga konsistensi dengan `<button disabled="">`. Untuk [nilai salah](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) lainnya, atribut ini akan dihilangkan.

### Mengikat Beberapa Atribut Secara Dinamis {#dynamically-binding-multiple-attributes}

Jika Anda memiliki objek JavaScript yang mewakili beberapa atribut yang terlihat seperti ini:

<div class="composition-api">

```js
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green'
}
```

</div>
<div class="options-api">

```js
data() {
  return {
    objectOfAttrs: {
      id: 'container',
      class: 'wrapper'
    }
  }
}
```

</div>

Anda dapat mengikatnya ke satu elemen dengan menggunakan `v-bind` tanpa argumen:

```vue-html
<div v-bind="objectOfAttrs"></div>
```

## Menggunakan Ekspresi JavaScript {#using-javascript-expressions}

Sejauh ini, kami hanya mengikat kunci properti sederhana dalam templat kami. Namun, Vue sebenarnya mendukung kekuatan penuh ekspresi JavaScript di dalam semua pengikatan data:

```vue-html
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div :id="`list-${id}`"></div>
```

Ekspresi ini akan dievaluasi sebagai JavaScript dalam cakupan data dari instansi komponen saat ini.

Dalam templat Vue, ekspresi JavaScript dapat digunakan dalam posisi berikut:

- Di dalam interpolasi teks (kumis)
- Dalam nilai atribut dari setiap direktif Vue (atribut khusus yang dimulai dengan `v-`)

### Hanya Ekspresi {#expressions-only}

Setiap pengikatan hanya dapat berisi **satu ekspresi tunggal**. Ekspresi adalah bagian kode yang dapat dievaluasi menjadi suatu nilai. Pemeriksaan sederhana adalah apakah ekspresi dapat digunakan setelah `return`.

Oleh karena itu, berikut ini **TIDAK** akan berfungsi:

```vue-html
<!-- this is a statement, not an expression: -->
{{ var a = 1 }}

<!-- flow control won't work either, use ternary expressions -->
{{ if (ok) { return message } }}
```

### Memanggil Fungsi {#calling-functions}

Dimungkinkan untuk memanggil metode yang diekspos komponen di dalam ekspresi pengikatan:

```vue-html
<time :title="toTitleDate(date)" :datetime="date">
  {{ formatDate(date) }}
</time>
```

:::tip
Fungsi yang dipanggil di dalam ekspresi pengikatan akan dipanggil setiap kali komponen diperbarui, sehingga fungsi tersebut **tidak** memiliki efek samping apa pun, seperti mengubah data atau memicu operasi asinkron.
:::

### Akses Global Terbatas {#restricted-globals-access}

Ekspresi templat di-*sandbox* dan hanya memiliki akses ke [daftar global yang dibatasi](https://github.com/vuejs/core/blob/main/packages/shared/src/globalsAllowList.ts#L3). Daftar ini memperlihatkan global bawaan yang umum digunakan seperti `Math` dan `Date`.

Global yang tidak disertakan secara eksplisit dalam daftar, misalnya properti yang dilampirkan pengguna pada `window`, tidak akan dapat diakses dalam ekspresi templat. Namun, Anda dapat secara eksplisit mendefinisikan global tambahan untuk semua ekspresi Vue dengan menambahkannya ke [`app.config.globalProperties`](/api/application#app-config-globalproperties).

## Direktif {#directives}

Direktif adalah atribut khusus dengan awalan `v-`. Vue menyediakan sejumlah [direktif bawaan](/api/built-in-directives), termasuk `v-html` dan `v-bind` yang telah kami perkenalkan di atas.

Nilai atribut direktif diharapkan berupa ekspresi JavaScript tunggal (dengan pengecualian `v-for`, `v-on`, dan `v-slot`, yang akan dibahas di bagian masing-masing nanti). Tugas direktif adalah menerapkan pembaruan secara reaktif ke DOM saat nilai ekspresinya berubah. Ambil [`v-if`](/api/built-in-directives#v-if) sebagai contoh:

```vue-html
<p v-if="seen">Now you see me</p>
```

Di sini, direktif `v-if` akan menghapus atau menyisipkan elemen `<p>` berdasarkan kebenaran nilai ekspresi `seen`.

### Argumen {#arguments}

Beberapa direktif dapat menggunakan "argumen", yang ditandai dengan titik dua setelah nama perintah. Misalnya, perintah `v-bind` digunakan untuk memperbarui atribut HTML secara reaktif:

```vue-html
<a v-bind:href="url"> ... </a>

<!-- shorthand -->
<a :href="url"> ... </a>
```

Di sini, `href` adalah argumennya, yang memberi tahu direktif `v-bind` untuk mengikat atribut `href` elemen ke nilai ekspresi `url`. Singkatnya, semua yang ada sebelum argumen (yaitu, `v-bind:`) diringkas menjadi satu karakter, `:`.

Contoh lain adalah direktif `v-on`, yang me-*listen* kejadian DOM:

```vue-html
<a v-on:click="doSomething"> ... </a>

<!-- shorthand -->
<a @click="doSomething"> ... </a>
```

Di sini, argumennya adalah nama peristiwa yang akan didengarkan: `click`. `v-on` memiliki singkatan yang sesuai, yaitu karakter `@`. Kita akan membahas penanganan peristiwa secara lebih rinci juga.

### Argumen Dinamis {#dynamic-arguments}

Dimungkinkan juga untuk menggunakan ekspresi JavaScript dalam argumen direktif dengan membungkusnya dengan tanda kurung siku:

```vue-html
<!--
Note that there are some constraints to the argument expression,
as explained in the "Dynamic Argument Value Constraints" and "Dynamic Argument Syntax Constraints" sections below.
-->
<a v-bind:[attributeName]="url"> ... </a>

<!-- shorthand -->
<a :[attributeName]="url"> ... </a>
```

Di sini, `attributeName` akan dievaluasi secara dinamis sebagai ekspresi JavaScript, dan nilai yang dievaluasi akan digunakan sebagai nilai akhir untuk argumen. Misalnya, jika instansi komponen Anda memiliki properti data, `attributeName`, yang nilainya adalah `"href"`, maka pengikatan ini akan setara dengan `v-bind:href`.

Demikian pula, Anda dapat menggunakan argumen dinamis untuk mengikat pengendali ke nama kejadian dinamis:

```vue-html
<a v-on:[eventName]="doSomething"> ... </a>

<!-- shorthand -->
<a @[eventName]="doSomething"> ... </a>
```

Dalam contoh ini, ketika nilai `eventName` adalah `"focus"`, `v-on:[eventName]` akan setara dengan `v-on:focus`.

#### Batasan Nilai Argumen Dinamis {#dynamic-argument-value-constraints}

Argumen dinamis diharapkan untuk dievaluasi menjadi string, dengan pengecualian `null`. Nilai khusus `null` dapat digunakan untuk menghapus pengikatan secara eksplisit. Nilai non-string lainnya akan memicu peringatan.

#### Batasan Sintaksis Argumen Dinamis {#dynamic-argument-syntax-constraints}

Ekspresi argumen dinamis memiliki beberapa batasan sintaksis karena karakter tertentu, seperti spasi dan tanda kutip, tidak valid di dalam nama atribut HTML. Misalnya, berikut ini tidak valid:

```vue-html
<!-- This will trigger a compiler warning. -->
<a :['foo' + bar]="value"> ... </a>
```

Jika Anda perlu meneruskan argumen dinamis yang kompleks, mungkin lebih baik menggunakan [properti yang dihitung](./computed), yang akan segera kita bahas.

Saat menggunakan templat in-DOM (templat yang ditulis langsung dalam berkas HTML), Anda juga harus menghindari penamaan kunci dengan karakter huruf besar, karena browser akan memaksa nama atribut menjadi huruf kecil:

```vue-html
<a :[someAttr]="value"> ... </a>
```

Di atas akan diubah menjadi `:[someattr]` dalam templat in-DOM. Jika komponen Anda memiliki properti `someAttr` dan bukan `someattr`, kode Anda tidak akan berfungsi. Templat di dalam Komponen Berkas Tunggal **tidak** tunduk pada batasan ini.

### Pengubah {#modifiers}

Pengubah adalah postfix khusus yang dilambangkan dengan titik, yang menunjukkan bahwa suatu direktif harus diikat dengan cara khusus. Misalnya, modifier `.prevent` memberi tahu direktif `v-on` untuk memanggil `event.preventDefault()` pada kejadian yang dipicu:

```vue-html
<form @submit.prevent="onSubmit">...</form>
```

Anda akan melihat contoh modifier lainnya nanti, [untuk `v-on`](./event-handling#event-modifiers) dan [untuk `v-model`](./forms#modifiers), saat kita menjelajahi fitur tersebut.

Dan terakhir, berikut sintaksis direktif lengkap yang divisualisasikan:

![grafik sintaks direktif](./images/directive.png)

<!-- https://www.figma.com/file/BGWUknIrtY9HOmbmad0vFr/Directive -->
