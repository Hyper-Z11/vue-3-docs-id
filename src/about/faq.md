# Pertanyaan yang Sering Diajukan/*Frequently Asked Questions* {#frequently-asked-questions}

## Siapa yang Mempertahankan Vue? {#who-maintains-vue}

Vue adalah proyek yang mandiri dan didorong oleh komunitas. Itu dibuat oleh [Evan You](https://twitter.com/youyuxi) pada tahun 2014 sebagai proyek sampingan pribadi. Saat ini, Vue secara aktif dipelihara oleh [tim anggota penuh waktu dan sukarela dari seluruh dunia](/about/team), di mana Evan sebagai pemimpin proyek. Anda dapat mempelajari lebih lanjut tentang kisah Vue dalam [film dokumenter](https://www.youtube.com/watch?v=OrxmtDw4pVI) ini.

Perkembangan Vue terutama didanai melalui sponsor dan kami telah berkelanjutan secara finansial sejak 2016. Jika Anda atau bisnis Anda mendapat manfaat dari Vue, pertimbangkan untuk [mensponsori kami](/sponsor/) untuk mendukung pengembangan Vue!

## Apa Perbedaan antara Vue 2 dan Vue 3? {#what-s-the-difference-between-vue-2-and-vue-3}

Vue 3 adalah saat ini, versi utama terbaru Vue. Ini berisi fitur-fitur baru yang tidak ada dalam Vue 2, seperti *Teleport*, *Suspense*, dan beberapa elemen root per templat. Ini juga berisi perubahan *breaking* yang membuatnya tidak kompatibel dengan Vue 2. Detail lengkap didokumentasikan dalam [Panduan Migrasi Vue 3](https://v3-migration.vuejs.org/).

Terlepas dari perbedaan, mayoritas API Vue dibagi antara dua versi utama, jadi sebagian besar pengetahuan Vue 2 Anda akan terus bekerja di Vue 3. Khususnya, API komposisi awalnya merupakan fitur *Vue-3-only*, tetapi sekarang telah di-port ke Vue 2 dan sekarang tersedia dalam [Vue 2.7](https://github.com/vuejs/vue/blob/main/CHANGELOG.md#270-2022-07-01).

Secara umum, Vue 3 memberikan ukuran bundel yang lebih kecil, kinerja yang lebih baik, skalabilitas yang lebih baik, dan dukungan TypeScript / IDE yang lebih baik. Jika Anda memulai proyek baru hari ini, Vue 3 adalah pilihan yang disarankan. Hanya ada beberapa alasan bagi Anda untuk mempertimbangkan Vue 2 seperti sekarang:

- Anda perlu mendukung IE11. Vue 3 memanfaatkan fitur JavaScript modern dan tidak mendukung IE11.

Jika Anda bermigrasi untuk memigrasi aplikasi Vue 2 yang ada ke Vue 3, konsultasikan dengan [panduan migrasi](https://v3-migration.vuejs.org/).

## Apakah Vue 2 Masih Didukung? {#is-vue-2-still-supported}

Vue 2.7, yang dikirim pada Juli 2022, adalah rilis minor terakhir dari versi Vue 2. Vue 2 kini telah memasuki mode pemeliharaan: Tidak akan lagi mengirimkan fitur baru, tetapi akan terus menerima perbaikan bug dan pembaruan keamanan kritis selama 18 bulan mulai dari tanggal rilis 2.7. Ini berarti **Vue 2 akan mencapai akhir kehidupan pada 31 Desember 2023**.

Kami percaya ini harus memberikan banyak waktu bagi sebagian besar ekosistem untuk bermigrasi ke Vue 3. Namun, kami juga memahami bahwa mungkin ada tim atau proyek yang tidak dapat meningkatkan dengan timeline ini sambil tetap perlu memenuhi persyaratan keamanan dan kepatuhan. Kami bermitra dengan para pakar industri untuk memberikan dukungan luas untuk Vue 2 untuk tim dengan kebutuhan seperti itu - jika tim Anda mengharapkan untuk menggunakan Vue 2 di luar akhir 2023, pastikan untuk merencanakan lebih lanjut tentang [Vue 2 Extended LTS](https://v2.vuejs.org/lts/).

## Lisensi apa yang digunakan Vue? {#what-license-does-vue-use}

Vue adalah proyek sumber gratis dan terbuka yang dirilis di bawah [Lisensi MIT](https://opensource.org/licenses/MIT).

## Peramban apa yang didukung Vue? {#what-browsers-does-vue-support}

Versi terbaru dari Vue (3.x) hanya mendukung [peramban dengan dukungan ES2016 Native](https://caniuse.com/es2016). Ini tidak termasuk IE11. Vue 3.x menggunakan fitur ES2016 yang tidak dapat dikembangkan di peramban *legacy*, jadi jika Anda perlu mendukung peramban *legacy*, Anda harus menggunakan Vue 2.x sebagai gantinya.

## Apakah Vue dapat diandalkan? {#is-vue-reliable}

Vue adalah kerangka kerja yang matang dan teruji. Ini adalah salah satu kerangka kerja JavaScript yang paling banyak digunakan dalam produksi hari ini, dengan lebih dari 1,5 juta pengguna di seluruh dunia, dan diunduh hampir 10 juta kali sebulan di NPM.

Vue digunakan dalam produksi oleh organisasi terkenal dalam berbagai kapasitas di seluruh dunia, termasuk Wikimedia Foundation, NASA, Apple, Google, Microsoft, Gitlab, Zoom, Tencent, Weibo, dan masih banyak lagi.

## Apakah Vue Cepat? {#is-vue-fast}

Vue 3 adalah salah satu kerangka kerja frontend mainstream paling berkinerja, dan menangani sebagian besar aplikasi Web menggunakan kasus dengan mudah, tanpa perlu optimasi manual.

Dalam skenario pengujian-stres, Vue mengungguli React dan Angular dengan margin yang layak di [js-framework-benchmark (Tolak Ukur Kerangka Kerja JavaScript)](https://krausest.github.io/js-framework-benchmark/current.html). Itu juga leher-dan-leher terhadap beberapa kerangka kerja level-produksi non-Virtual-DOM tercepat dalam tolok ukur.

Perhatikan bahwa tolok ukur sintetis seperti di atas fokus pada kinerja rendering mentah dengan optimasi khusus dan mungkin tidak sepenuhnya mewakili hasil kinerja dunia nyata. Jika Anda lebih peduli dengan kinerja beban halaman, Anda dipersilakan untuk mengaudit situs web ini menggunakan [WebPageTest](https://www.webpagetest.org/lighthouse) atau [PageSpeed Insights](https://pagespeed.web.dev/). Situs web ini ditenagai oleh Vue itu sendiri, dengan SSG pra-rendering, hidrasi halaman penuh dan navigasi SPA sisi *client*. Performanya mendapat skor 100 pada emulasi Moto G4 dengan pelambatan CPU 4x pada jaringan 4G yang lambat.

Anda dapat mempelajari lebih lanjut tentang bagaimana Vue secara otomatis mengoptimalkan kinerja runtime di bagian [Mekanisme Rendering](/guide/extras/rendering-mechanism), dan cara mengoptimalkan aplikasi Vue dalam kasus-kasus yang sangat menuntut dalam [Panduan Optimisasi Kinerja](/guide/best-practices/performance).

## Apakah Vue Ringan? {#is-vue-lightweight}

Ketika Anda menggunakan alat build, banyak API Vue yang di [*"tree-shakable"*](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking). Misalnya, jika Anda tidak menggunakan komponen internal `<Transition>`, itu tidak akan dimasukkan dalam bundel produksi akhir.

Aplikasi Hello World Vue yang hanya menggunakan API yang benar-benar minimal memiliki ukuran dasar hanya sekitar **16kb**, dengan kompresi minifikasi dan brotli. Ukuran sebenarnya dari aplikasi akan tergantung pada berapa banyak fitur opsional yang Anda gunakan dari kerangka kerja. Dalam kasus yang tidak mungkin di mana aplikasi menggunakan setiap fitur yang disediakan Vue, ukuran total runtime sekitar **27kb**.

Saat menggunakan Vue tanpa alat build, kami tidak hanya kehilangan *tree-shaking*, tetapi juga harus mengirimkan kompiler templat ke peramban. Ini mengasapi ukuran menjadi sekitar **41kb**. Oleh karena itu, jika Anda menggunakan Vue terutama untuk peningkatan progresif tanpa langkah build, pertimbangkan untuk menggunakan [petite-vue](https://github.com/vuejs/petite-vue) (hanya **6Kb**) sebagai gantinya.

Beberapa kerangka kerja, seperti Svelte, gunakan strategi kompilasi yang menghasilkan output yang sangat ringan dalam skenario komponen tunggal. Namun, [penelitian kami](https://github.com/yyx990803/vue-svelte-size-analysis) menunjukkan bahwa perbedaan ukuran sangat tergantung pada jumlah komponen dalam aplikasi. Sedangkan Vue memiliki ukuran dasar yang lebih berat, menghasilkan lebih sedikit kode per komponen. Dalam skenario dunia nyata, aplikasi Vue mungkin akhirnya menjadi lebih ringan.

## Apakah Vue Dapat Berskala? {#does-vue-scale}

Ya. Meskipun kesalahpahaman umum bahwa Vue hanya cocok untuk kasus penggunaan sederhana, Vue sangat mampu menangani aplikasi skala besar:

- [Komponen Berkas Tunggal](/guide/scaling-up/sfc) menyediakan model pengembangan yang dimodulasi yang memungkinkan berbagai bagian aplikasi yang akan dikembangkan secara terpisah.

- [API Komposisi](/guide/reusability/composables) menyediakan integrasi TypeScript kelas satu dan memungkinkan pola bersih untuk mengatur, mengekstraksi dan menggunakan kembali logika kompleks.

- [Dukungan perkakas yang komprehensif](/guide/scaling-up/tooling) memastikan pengalaman pengembangan yang lancar saat aplikasi tumbuh.

- Hambatan masuk yang lebih rendah dan dokumentasi yang sangat baik menghasilkan biaya orientasi dan pelatihan yang lebih rendah untuk pengembang baru.

## Bagaimana saya berkontribusi pada Vue? {#how-do-i-contribute-to-vue}

Kami menghargai minat Anda! Silakan periksa [Panduan Komunitas](/about/community-guide) kami.

## Haruskah saya menggunakan API Opsi atau API Komposisi? {#should-i-use-options-api-or-composition-api}

Jika Anda baru ke Vue, kami menyediakan perbandingan tingkat tinggi antara dua gaya [di sini](/guide/introduction#which-to-choose).

Jika sebelumnya Anda telah menggunakan opsi API dan saat ini sedang mengevaluasi komposisi API, lihat [FAQ ini](/guide/extras/composition-api-faq).

## Haruskah saya menggunakan JavaScript atau TypeScript dengan Vue? {#should-i-use-javascript-or-typescript-with-vue}

Ketika Vue sendiri diterapkan dalam TypeScript dan menyediakan dukungan TypeScript kelas satu, ini tidak menegakkan pendapat tentang apakah Anda harus menggunakan TypeScript sebagai pengguna.

Dukungan TypeScript merupakan pertimbangan penting ketika fitur-fitur baru ditambahkan ke Vue. API yang dirancang dengan TypeScript dalam pikiran biasanya lebih mudah bagi IDE dan linter untuk memahami, bahkan jika Anda tidak menggunakan TypeScript sendiri. Semua orang menang. API Vue juga dirancang untuk bekerja dengan cara yang sama di Javascript dan TypeScript sebanyak mungkin.

Mengadopsi TypeScript melibatkan *trade-off* antara kompleksitas *onboarding* dan keuntungan pemeliharaan jangka panjang. Apakah *trade-off* seperti itu dapat dibenarkan dapat bervariasi tergantung pada latar belakang tim Anda dan skala proyek, tetapi Vue tidak benar-benar mempengaruhi faktor dalam membuat keputusan itu.

## Bagaimana Vue dibandingkan dengan Komponen Web? {#how-does-vue-compare-to-web-components}

Vue dibuat sebelum Komponen Web tersedia secara *native*, dan beberapa aspek desain Vue (misalnya slot) terinspirasi oleh model Komponen Web.

Spesifikasi Komponen Web relatif rendah, karena mereka berpusat di sekitar mendefinisikan elemen khusus. Sebagai kerangka kerja, Vue membahas masalah tingkat tinggi tambahan seperti rendering DOM yang efisien, manajemen keadaan reaktif, perkakas, perutean sisi klien, dan rendering sisi server.

Vue juga sepenuhnya mendukung konsumsi atau mengekspor ke elemen khusus asli - lihat [Panduan Vue dan Komponen Web](/guide/extras/web-components) untuk detail lebih lanjut.

<!-- ## TODO How does Vue compare to React? -->

<!-- ## TODO How does Vue compare to Angular? -->
