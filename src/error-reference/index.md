<script setup>
import { ref, onMounted } from 'vue'
import { data } from './errors.data.ts'
import ErrorsTable from './ErrorsTable.vue'

const highlight = ref()
onMounted(() => {
  highlight.value = location.hash.slice(1)
})
</script>

# Referensi Kode Kesalahan Produksi {#error-reference}

## Kesalahan Runtime {#runtime-errors}

Dalam pembuatan produksi, argumen ke-3 yang diteruskan ke API penangan galat berikut akan menjadi kode pendek alih-alih string informasi lengkap:

- [`app.config.errorHandler`](/api/application#app-config-errorhandler)
- [`onErrorCaptured`](/api/composition-api-lifecycle#onerrorcaptured) (Composition API)
- [`errorCaptured`](/api/options-lifecycle#errorcaptured) (Options API)

Tabel berikut memetakan kode ke string informasi lengkap asli mereka.

<ErrorsTable kind="runtime" :errors="data.runtime" :highlight="highlight" />

## Kesalahan Kompiler {#compiler-errors}

Tabel berikut ini menyediakan pemetaan kode kesalahan kompiler produksi ke pesan asli mereka.

<ErrorsTable kind="compiler" :errors="data.compiler" :highlight="highlight" />
