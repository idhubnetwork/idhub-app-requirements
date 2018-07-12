import Vue from 'vue'
import Docute from '../src'
import './css/style.css'

Vue.component('ReverseText', {
  data() {
    return {
      text: 'hello world'
    }
  },
  template: `
    <div class="reverse-text">
    {{ text }} <button @click="reverse">Reverse</button>
    </div>
  `,
  methods: {
    reverse() {
      this.text = this.text
        .split('')
        .reverse()
        .join('')
    }
  },
  css: `
    .reverse-text {
      border: 1px solid var(--border-color);
      padding: 20px;
      font-weight: bold;
      border-radius: 4px;
    }
  `
})

const doc = new Docute({
  sourceRoot: '/docs/',
  title: 'IDHub APP',
  routerMode: 'history',
  description: 'Effortlessly documentation done right.',
  nav: [
    {
      text: '指南',
      link: '/'
    },
    {
      text: '需求分析规格书',
      link: '/requirements'
    }
  ],
  sidebar: [
    {
      text: '指南',
      children: [
        {
          text: '概览',
          link: '/'
        }
      ]
    },
    {
      text: '需求分析规格书',
      children: [
        {
          text: '创建身分',
          link: '/requirements/create-identity'
        },
        {
          text: '数字身分',
          link: '/requirements/identity'
        },
        {
          text: '钱包',
          link: '/requirements/wallet'
        },
        {
          text: '证书',
          link: '/requirements/certificate'
        },
        {
          text: '声明',
          link: '/requirements/claim'
        },
        {
          text: '地址簿',
          link: '/requirements/contacts'
        },
        {
          text: '二維碼掃描',
          link: '/requirements/qrcode'
        },
        {
          text: '侧栏菜单',
          link: '/requirements/sidenav'
        }
      ]
    },
    {
      text: '系统设计规格书'
    },
    {
      text: '元件',
      children: [
        {
          text: '圖標',
          link: '/components/icons'
        }
      ]
    },
    {
      text: '沟通纪要'
    },
    {
      text: '项目字典'
    }
  ],
  locales: {
    '/': {
      language: '中文',
      selectText: '选择语言'
    },
    '/en/': {
      language: 'English',
      selectText: 'Languages',
      nav: [
        {
          text: 'Guide',
          link: '/en/'
        },
        {
          text: 'Requirements',
          link: '/requirements'
        }
      ],
      sidebar: [
        {
          text: 'Guide',
          children: [
            {
              text: 'Introduction',
              link: '/en/'
            }
          ]
        },
        {
          text: 'Requirements',
          children: [
            {
              text: 'Requirements',
              link: 'requirements'
            },
            {
              text: 'Create Identity',
              link: '/requirements/create-identity'
            },
            {
              text: 'Identity',
              link: '/requirements/identity'
            },
            {
              text: 'Wallet',
              link: '/requirements/wallet'
            },
            {
              text: 'Certificate',
              link: '/requirements/certificate'
            },
            {
              text: 'Claim',
              link: '/requirements/claim'
            },
            {
              text: 'Contacts',
              link: '/requirements/contacts'
            },
            {
              text: 'QRCode Scan',
              link: '/requirements/qrcode'
            },
            {
              text: 'Side Navigation',
              link: '/requirements/sidenav'
            }
          ]
        },
        {
          text: 'Component',
          Link: ''
        }
      ]
    }
  }
})

doc.start('#app')
