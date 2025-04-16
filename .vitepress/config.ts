import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme, type HeadConfig, type Plugin } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import llmstxt from 'vitepress-plugin-llms'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'
// import { textAdPlugin } from './textAdMdPlugin'

const nav: ThemeConfig['nav'] = [
  {
    text: 'Dokumentasi',
    activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
    items: [
      { text: 'Panduan', link: '/guide/introduction' },
      { text: 'Tutorial', link: '/tutorial/' },
      { text: 'Contoh', link: '/examples/' },
      { text: 'Mulai Cepat', link: '/guide/quick-start' },
      // { text: 'Style Guide', link: '/style-guide/' },
      { text: 'Glosarium', link: '/glossary/' },
      { text: 'Referensi Kesalahan', link: '/error-reference/' },
      {
        text: 'Dokumentasi Vue 2',
        link: 'https://v2.vuejs.org'
      },
      {
        text: 'Migrasi dari Vue 2',
        link: 'https://v3-migration.vuejs.org/'
      }
    ]
  },
  {
    text: 'API',
    activeMatch: `^/api/`,
    link: '/api/'
  },
  {
    text: 'Taman Bermain',
    link: 'https://play.vuejs.org'
  },
  {
    text: 'Ekosistem',
    activeMatch: `^/ecosystem/`,
    items: [
      {
        text: 'Sumber Daya',
        items: [
          { text: 'Mitra', link: '/partners/' },
          { text: 'Pengembang', link: '/developers/' },
          { text: 'Tema', link: '/ecosystem/themes' },
          { text: 'Komponen UI', link: 'https://ui-libs.vercel.app/' },
          {
            text: 'Sertifikasi',
            link: 'https://certificates.dev/vuejs/?ref=vuejs-nav'
          },
          { text: 'Pekerjaan', link: 'https://vuejobs.com/?ref=vuejs' },
          { text: 'Toko T-Shirt', link: 'https://vue.threadless.com/' }
        ]
      },
      {
        text: 'Perpustakaan Resmi',
        items: [
          { text: 'Router Vue', link: 'https://router.vuejs.org/' },
          { text: 'Pinia', link: 'https://pinia.vuejs.org/' },
          { text: 'Panduan Peralatan', link: '/guide/scaling-up/tooling.html' }
        ]
      },
      {
        text: 'Video Kursus',
        items: [
          {
            text: 'Menguasai Vue',
            link: 'https://www.vuemastery.com/courses/'
          },
          {
            text: 'Sekolah Vue',
            link: 'https://vueschool.io/?friend=vuejs&utm_source=Vuejs.org&utm_medium=Link&utm_content=Navbar%20Dropdown'
          }
        ]
      },
      {
        text: 'Bantuan',
        items: [
          {
            text: 'Obrolan Discord',
            link: 'https://discord.com/invite/HBherRA'
          },
          {
            text: 'Diskusi GitHub',
            link: 'https://github.com/vuejs/core/discussions'
          },
          { text: 'Komunitas DEV', link: 'https://dev.to/t/vue' }
        ]
      },
      {
        text: 'Berita',
        items: [
          { text: 'Blog', link: 'https://blog.vuejs.org/' },
          { text: 'Twitter', link: 'https://twitter.com/vuejs' },
          { text: 'Acara', link: 'https://events.vuejs.org/' },
          { text: 'Buletin', link: '/ecosystem/newsletters' }
        ]
      }
    ]
  },
  {
    text: 'Tentang',
    activeMatch: `^/about/`,
    items: [
      { text: 'FAQ', link: '/about/faq' },
      { text: 'Tim', link: '/about/team' },
      { text: 'Rilis', link: '/about/releases' },
      {
        text: 'Panduan Komunitas',
        link: '/about/community-guide'
      },
      { text: 'Kode Etik', link: '/about/coc' },
      { text: 'Kebijakan Privasi', link: '/about/privacy' },
      {
        text: 'Dokumenter',
        link: 'https://www.youtube.com/watch?v=OrxmtDw4pVI'
      }
    ]
  },
  {
    text: 'Sponsor',
    link: '/sponsor/'
  },
  {
    text: 'Ahli',
    badge: { text: 'BARU' },
    activeMatch: `^/(partners|developers)/`,
    items: [
      { text: 'Mitra', link: '/partners/' },
      { text: 'Pengembang', link: '/developers/', badge: { text: 'Baru' } }
    ]
  }
]

export const sidebar: ThemeConfig['sidebar'] = {
  '/guide/': [
    {
      text: 'Memulai',
      items: [
        { text: 'Pengantar', link: '/guide/introduction' },
        {
          text: 'Mulai Cepat',
          link: '/guide/quick-start'
        }
      ]
    },
    {
      text: 'Hal-Hal Pokok',
      items: [
        {
          text: 'Membuat Sebuah Aplikasi',
          link: '/guide/essentials/application'
        },
        {
          text: 'Sintaks Templat',
          link: '/guide/essentials/template-syntax'
        },
        {
          text: 'Dasar-Dasar Reaktivitas',
          link: '/guide/essentials/reactivity-fundamentals'
        },
        {
          text: 'Properti yang Dihitung',
          link: '/guide/essentials/computed'
        },
        {
          text: 'Ikatan Kelas dan Gaya',
          link: '/guide/essentials/class-and-style'
        },
        {
          text: 'Rendering Bersyarat',
          link: '/guide/essentials/conditional'
        },
        { text: 'Rendering Daftar', link: '/guide/essentials/list' },
        {
          text: 'Penanganan Kejadian',
          link: '/guide/essentials/event-handling'
        },
        { text: 'Mengikat Masukan Formulir', link: '/guide/essentials/forms' },
        { text: 'Pengamat', link: '/guide/essentials/watchers' },
        { text: 'Templat Refs', link: '/guide/essentials/template-refs' },
        {
          text: 'Dasar-Dasar Komponen',
          link: '/guide/essentials/component-basics'
        },
        {
          text: 'Kait Siklus Hidup',
          link: '/guide/essentials/lifecycle'
        }
      ]
    },
    {
      text: 'Komponen Mendalam',
      items: [
        {
          text: 'Pendaftaran',
          link: '/guide/components/registration'
        },
        { text: 'Props', link: '/guide/components/props' },
        { text: 'Kejadian', link: '/guide/components/events' },
        { text: 'Komponen v-model', link: '/guide/components/v-model' },
        {
          text: 'Atribut Fallthrough',
          link: '/guide/components/attrs'
        },
        { text: 'Slot', link: '/guide/components/slots' },
        {
          text: 'Menyediakan / menyuntikkan',
          link: '/guide/components/provide-inject'
        },
        {
          text: 'Komponen Asinkron',
          link: '/guide/components/async'
        }
      ]
    },
    {
      text: 'Reusabilitas',
      items: [
        {
          text: 'Fungsi Komposisi',
          link: '/guide/reusability/composables'
        },
        {
          text: 'Direktif Kostum',
          link: '/guide/reusability/custom-directives'
        },
        { text: 'Plugin', link: '/guide/reusability/plugins' }
      ]
    },
    {
      text: 'Komponen Bawaan',
      items: [
        { text: 'Transition', link: '/guide/built-ins/transition' },
        {
          text: 'TransitionGroup',
          link: '/guide/built-ins/transition-group'
        },
        { text: 'KeepAlive', link: '/guide/built-ins/keep-alive' },
        { text: 'Teleport', link: '/guide/built-ins/teleport' },
        { text: 'Suspense', link: '/guide/built-ins/suspense' }
      ]
    },
    {
      text: 'Meningkatkan',
      items: [
        { text: 'Komponen Berkas Tunggal', link: '/guide/scaling-up/sfc' },
        { text: 'Perkakas', link: '/guide/scaling-up/tooling' },
        { text: 'Routing', link: '/guide/scaling-up/routing' },
        {
          text: 'Manajemen Keadaan',
          link: '/guide/scaling-up/state-management'
        },
        { text: 'Pengujian', link: '/guide/scaling-up/testing' },
        {
          text: 'Rendering Sisi Server (SSR)',
          link: '/guide/scaling-up/ssr'
        }
      ]
    },
    {
      text: 'Latihan Terbaik',
      items: [
        {
          text: 'Penyebaran Produksi',
          link: '/guide/best-practices/production-deployment'
        },
        {
          text: 'Kinerja',
          link: '/guide/best-practices/performance'
        },
        {
          text: 'Aksesbilitas',
          link: '/guide/best-practices/accessibility'
        },
        {
          text: 'Keamanan',
          link: '/guide/best-practices/security'
        }
      ]
    },
    {
      text: 'TypeScript',
      items: [
        { text: 'Peninjauan', link: '/guide/typescript/overview' },
        {
          text: 'TS dengan API Komposisi',
          link: '/guide/typescript/composition-api'
        },
        {
          text: 'TS dengan API Opsi',
          link: '/guide/typescript/options-api'
        }
      ]
    },
    {
      text: 'Topik Ekstra',
      items: [
        {
          text: 'Cara Menggunakan Vue',
          link: '/guide/extras/ways-of-using-vue'
        },
        {
          text: 'FAQ API Komposisi',
          link: '/guide/extras/composition-api-faq'
        },
        {
          text: 'Reaktivitas Mendalam',
          link: '/guide/extras/reactivity-in-depth'
        },
        {
          text: 'Mekanisme Rendering',
          link: '/guide/extras/rendering-mechanism'
        },
        {
          text: 'Render Fungsi & JSX',
          link: '/guide/extras/render-function'
        },
        {
          text: 'Vue dan Komponen Web',
          link: '/guide/extras/web-components'
        },
        {
          text: 'Teknik Animasi',
          link: '/guide/extras/animation'
        }
        // {
        //   text: 'Building a Library for Vue',
        //   link: '/guide/extras/building-a-library'
        // },
        // {
        //   text: 'Vue for React Devs',
        //   link: '/guide/extras/vue-for-react-devs'
        // }
      ]
    }
  ],
  '/api/': [
    {
      text: 'API Global',
      items: [
        { text: 'Aplikasi', link: '/api/application' },
        {
          text: 'Umum',
          link: '/api/general'
        }
      ]
    },
    {
      text: 'API Komposisi',
      items: [
        { text: 'setup()', link: '/api/composition-api-setup' },
        {
          text: 'Reaktivitas: Inti',
          link: '/api/reactivity-core'
        },
        {
          text: 'Reaktivitas: Utilitas',
          link: '/api/reactivity-utilities'
        },
        {
          text: 'Reaktivitas: Lanjutan',
          link: '/api/reactivity-advanced'
        },
        {
          text: 'Kait Siklus Hidup',
          link: '/api/composition-api-lifecycle'
        },
        {
          text: 'Injeksi Ketergantungan',
          link: '/api/composition-api-dependency-injection'
        },
        {
          text: 'Pembantu',
          link: '/api/composition-api-helpers'
        }
      ]
    },
    {
      text: 'API Opsi',
      items: [
        { text: 'Opsi: Keadaan', link: '/api/options-state' },
        { text: 'Opsi: Rendering', link: '/api/options-rendering' },
        {
          text: 'Opsi: Siklus Hidup',
          link: '/api/options-lifecycle'
        },
        {
          text: 'Opsi: Komposisi',
          link: '/api/options-composition'
        },
        { text: 'Opsi: Lain-Lain', link: '/api/options-misc' },
        {
          text: 'Contoh Komponen',
          link: '/api/component-instance'
        }
      ]
    },
    {
      text: 'Bawaan',
      items: [
        { text: 'Direktif', link: '/api/built-in-directives' },
        { text: 'Komponen', link: '/api/built-in-components' },
        {
          text: 'Elemen Spesial',
          link: '/api/built-in-special-elements'
        },
        {
          text: 'Atribut Spesial',
          link: '/api/built-in-special-attributes'
        }
      ]
    },
    {
      text: 'Komponen Berkas Tunggal',
      items: [
        { text: 'Spesifikasi Sintaks', link: '/api/sfc-spec' },
        { text: '<script setup>', link: '/api/sfc-script-setup' },
        { text: 'Fitur CSS', link: '/api/sfc-css-features' }
      ]
    },
    {
      text: 'API Lanjutan',
      items: [
        { text: 'Elemen Khusus', link: '/api/custom-elements' },
        { text: 'Fungsi Render', link: '/api/render-function' },
        { text: 'Rendering Sisi Server', link: '/api/ssr' },
        { text: 'Utilitas Tipe TypeScript', link: '/api/utility-types' },
        { text: 'Renderer Kostum', link: '/api/custom-renderer' },
        { text: 'Bendera Waktu Kompilasi', link: '/api/compile-time-flags' }
      ]
    }
  ],
  '/examples/': [
    {
      text: 'Dasar',
      items: [
        {
          text: 'Halo Dunia',
          link: '/examples/#hello-world'
        },
        {
          text: 'Menangani Masukan Pengguna',
          link: '/examples/#handling-input'
        },
        {
          text: 'Mengikat Atribut',
          link: '/examples/#attribute-bindings'
        },
        {
          text: 'Kondisi dan Perulangan',
          link: '/examples/#conditionals-and-loops'
        },
        {
          text: 'Mengikat Formulir',
          link: '/examples/#form-bindings'
        },
        {
          text: 'Komponen Sederhana',
          link: '/examples/#simple-component'
        }
      ]
    },
    {
      text: 'Praktik',
      items: [
        {
          text: 'Editor Markdown',
          link: '/examples/#markdown'
        },
        {
          text: 'Mengambil Data',
          link: '/examples/#fetching-data'
        },
        {
          text: 'Kisi dengan Sortir dan Filter',
          link: '/examples/#grid'
        },
        {
          text: 'Tampilan Pohon',
          link: '/examples/#tree'
        },
        {
          text: 'Grafik SVG',
          link: '/examples/#svg'
        },
        {
          text: 'Modal dengan Transisi',
          link: '/examples/#modal'
        },
        {
          text: 'Daftar dengan Transisi',
          link: '/examples/#list-transition'
        },
        {
          text: 'TodoMVC',
          link: '/examples/#todomvc'
        }
      ]
    },
    {
      // https://eugenkiss.github.io/7guis/
      text: '7 GUIs',
      items: [
        {
          text: 'Alat Penghitung',
          link: '/examples/#counter'
        },
        {
          text: 'Pengubah Nilai Temperatur',
          link: '/examples/#temperature-converter'
        },
        {
          text: 'Pemesanan Penerbangan',
          link: '/examples/#flight-booker'
        },
        {
          text: 'Pengatur Waktu',
          link: '/examples/#timer'
        },
        {
          text: 'CRUD',
          link: '/examples/#crud'
        },
        {
          text: 'Penggambar Lingkaran',
          link: '/examples/#circle-drawer'
        },
        {
          text: 'Sel-Sel',
          link: '/examples/#cells'
        }
      ]
    }
  ],
  '/style-guide/': [
    {
      text: 'Panduan Gaya',
      items: [
        {
          text: 'Peninjauan',
          link: '/style-guide/'
        },
        {
          text: 'A - Hal Pokok',
          link: '/style-guide/rules-essential'
        },
        {
          text: 'B - Rekomendasi Kuat',
          link: '/style-guide/rules-strongly-recommended'
        },
        {
          text: 'C - Rekomendasi',
          link: '/style-guide/rules-recommended'
        },
        {
          text: 'D - Gunakan dengan Hati-Hati',
          link: '/style-guide/rules-use-with-caution'
        }
      ]
    }
  ]
}

// Placeholder of the i18n config for @vuejs-translations.
const i18n: ThemeConfig['i18n'] = {
  
  ariaAnnouncer: {
    before: '',
    after: ' telah dimuat'
  },
  
  deadLink: {
    before: 'Anda menemukan tautan mati: ',
    after: ''
  },
  
  deadLinkReport: {
    before: 'Tolong ',
    link: 'beritahu kami',
    after: ' sehingga kami dapat memperbaikinya.'
  },
  
  footerLicense: {
    before: 'Rilis dibawah ',
    after: '.'
  },
  
  pageNotFound: 'Halaman Tidak Ditemukan',
  
  previous: 'Sebelumnya',
  next: 'Selanjutnya',
  
  toc: 'Di halaman ini',
  ariaToC: 'Daftar Isi untuk halaman saat ini',
  
  menu: 'Menu',
  returnToTop: 'Kembali ke atas',
  
  appearance: 'Penampilan',
  
  ariaLanguage: 'Pilih Bahasa',
  
  ariaRepo: {
    before: 'Repositori ',
    after: ''
  },
  
  ariaMainNav: 'Navigasi Utama',
  
  locales: 'Terjemahan',
  
  search: 'Cari',
  
  ariaSidebarNav: 'Navigasi Sidebar',
  
  ariaSkipToContent: 'Lewati Konten',
  
  ariaDarkMode: 'Beralih mode gelap',
  
  ariaMobileNav: 'Navigasi mobile'
}

function inlineScript(file: string): HeadConfig {
  return [
    'script',
    {},
    fs.readFileSync(
      path.resolve(__dirname, `./inlined-scripts/${file}`),
      'utf-8'
    )
  ]
}

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  sitemap: {
    hostname: 'https://vuejs.org'
  },

  lang: 'id-ID',
  title: 'Vue.js',
  description: 'Vue.js - Kerangka Kerja JavaScript Progresif',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { property: 'og:url', content: 'https://vuejs.org/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Vue.js' }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'Vue.js - Kerangka Kerja JavaScript Progresif'
      }
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://vuejs.org/images/logo.png'
      }
    ],
    ['meta', { name: 'twitter:site', content: '@vuejs' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://automation.vuejs.org'
      }
    ],
    inlineScript('restorePreference.js'),
    inlineScript('uwu.js'),
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'XNOLWPLB',
        'data-spa': 'auto',
        defer: ''
      }
    ],
    [
      'script',
      {
        src: 'https://vueschool.io/banner.js?affiliate=vuejs&type=top',
        async: 'true'
      }
    ],
    inlineScript('perfops.js'),
  ],

  themeConfig: {
    nav,
    sidebar,
    // Placeholder of the i18n config for @vuejs-translations.
    i18n,

    localeLinks: [
      {
        link: 'https://cn.vuejs.org',
        text: '简体中文',
        repo: 'https://github.com/vuejs-translations/docs-zh-cn'
      },
      {
        link: 'https://ja.vuejs.org',
        text: '日本語',
        repo: 'https://github.com/vuejs-translations/docs-ja'
      },
      {
        link: 'https://ua.vuejs.org',
        text: 'Українська',
        repo: 'https://github.com/vuejs-translations/docs-uk'
      },
      {
        link: 'https://fr.vuejs.org',
        text: 'Français',
        repo: 'https://github.com/vuejs-translations/docs-fr'
      },
      {
        link: 'https://ko.vuejs.org',
        text: '한국어',
        repo: 'https://github.com/vuejs-translations/docs-ko'
      },
      {
        link: 'https://pt.vuejs.org',
        text: 'Português',
        repo: 'https://github.com/vuejs-translations/docs-pt'
      },
      {
        link: 'https://bn.vuejs.org',
        text: 'বাংলা',
        repo: 'https://github.com/vuejs-translations/docs-bn'
      },
      {
        link: 'https://it.vuejs.org',
        text: 'Italiano',
        repo: 'https://github.com/vuejs-translations/docs-it'
      },
      {
        link: 'https://fa.vuejs.org',
        text: 'فارسی',
        repo: 'https://github.com/vuejs-translations/docs-fa'
      },
      {
        link: 'https://ru.vuejs.org',
        text: 'Русский',
        repo: 'https://github.com/translation-gang/docs-ru'
      },
      {
        link: 'https://cs.vuejs.org',
        text: 'Čeština',
        repo: 'https://github.com/vuejs-translations/docs-cs'
      },
      {
        link: 'https://zh-hk.vuejs.org',
        text: '繁體中文',
        repo: 'https://github.com/vuejs-translations/docs-zh-hk'
      },
      {
        link: 'https://pl.vuejs.org',
        text: 'Polski',
        repo: 'https://github.com/vuejs-translations/docs-pl',
      },
      {
        link: '/translations/',
        text: 'Bantu Kami Terjemahkan!',
        isTranslationsDesc: true
      }
    ],

    algolia: {
      indexName: 'vuejs',
      appId: 'ML0LEBN7FQ',
      apiKey: '21cf9df0734770a2448a9da64a700c22',
      searchParameters: {
        facetFilters: ['version:v3']
      }
    },

    carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/' },
      { icon: 'twitter', link: 'https://twitter.com/vuejs' },
      { icon: 'discord', link: 'https://discord.com/invite/vue' }
    ],

    editLink: {
      repo: 'vuejs/docs',
      text: 'Edit halaman ini di GitHub'
    },

    footer: {
      license: {
        text: 'Lisensi MIT',
        link: 'https://opensource.org/licenses/MIT'
      },
      copyright: `Hak Cipta © 2014-${new Date().getFullYear()} Evan You`
    }
  },

  markdown: {
    theme: 'github-dark',
    config(md) {
      md.use(headerPlugin)
      // .use(textAdPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    },
    plugins: [
      llmstxt({
        ignoreFiles: [
          'about/team/**/*',
          'about/team.md',
          'about/privacy.md',
          'about/coc.md',
          'developers/**/*',
          'ecosystem/themes.md',
          'examples/**/*',
          'partners/**/*',
          'sponsor/**/*',
          'index.md'
        ],
        customLLMsTxtTemplate: `\
# Vue.js

Vue.js - The Progressive JavaScript Framework

## Table of Contents

{toc}`
      }) as Plugin
    ]
  }
})
