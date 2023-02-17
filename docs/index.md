---
layout: home

title: Vuetom
titleTemplate: Vite & Vue Powered Static Site Generator

hero:
  name: 面向开发者的 Vue 3组件库
  text: 
  # tagline: vitepress flat theme 
  actions:
    - theme: brand big
      text: 快 速 开 始
      link: /guide/use
    - theme: alt big
      text: GitHub
      link: /guide/config

features:
  - title: 📦 更快的响应
    details: 配合vue3的composition API，实现更快的相应。
  - title: 🔩 更强的拓展性
    details: 给开发者几乎所有的机会来自定义组件，满足一切项目使用场景。
  - title: 🔑 更小的体积
    details: 组件体积小，灵活使用，可按需使用。
---

<div class="frontpage sponsors">
  <h2>参与贡献</h2>
  <div class="platinum-sponsors">
    <a v-for="{ href, src, name, id } of sponsors.filter(s => s.tier === 'platinum')" :href="href" >
      <img :src="src" :alt="name" :id="`sponsor-${id}`">
      <p>{{ name }}</p>
    </a>
  </div>
  <div class="gold-sponsors">
    <a v-for="{ href, src, name, id } of sponsors.filter(s => s.tier !== 'platinum')" :href="href" >
      <img :src="src" :alt="name" :id="`sponsor-${id}`">
      <p>{{ name }}</p>
    </a>
  </div>
</div>

<script setup>


import { onMounted } from 'vue'
import pk from 'vitepress-theme-vuetom/package.json'

const sponsors = [
  {
    "id": "huangpeijin",
    "name": "huangpeijin",
    "href": "https://github.com/Huangpeijin",
    "src": "https://github.com/Huangpeijin.png",
    "tier": "platinum"
  },
  {
    "id": "Neajue",
    "name": "Neajue",
    "href": "https://github.com/Neajue",
    "src": "https://github.com/Neajue.png",
    "tier": "platinum"
    
  },
  {
    "id": "EnJoy77",
    "name": "EnJoy77",
    "href": "https://github.com/EnJoy77",
    "src": "https://github.com/EnJoy77.png"
  },
  {
    "id": "zkeq",
    "name": "zkeq",
    "href": "https://github.com/zkeq",
    "src": "https://github.com/zkeq.png"
  }
  ,
  {
    "id": "beginnierweb2",
    "name": "beginnierweb2",
    "href": "https://github.com/beginnierweb2",
    "src": "https://avatars.githubusercontent.com/u/87230594?v=4"
  }
   ,
  {
    "id": "ColdyNi",
    "name": "ColdyNi",
    "href": "https://github.com/ColdyNi",
    "src": "https://github.com/ColdyNi.png"
  }
]

// function fetchReleaseTag() {
//   onMounted(() => {
//     const dom = document.getElementsByClassName('name')
//     const mainTitle = dom[0]
//     const docsReleaseTag = document.createElement('span')
//     docsReleaseTag.classList.add('release-tag')
//     const releaseTagName = `v${pk.version}`
//     docsReleaseTag.innerText = releaseTagName
//     if (releaseTagName !== undefined) {
//       mainTitle.appendChild(docsReleaseTag)
//     }
//     // fetch('https://api.github.com/repos/vitejs/docs-cn/releases/latest')
//     //   .then((res) => res.json())
//     //   .then((json) => {
//     //     const mainTitle = document.getElementById('main-title')
//     //     mainTitle.style.position = 'relative'

//     //     const docsReleaseTag = document.createElement('span')
//     //     docsReleaseTag.classList.add('release-tag')
//     //     const releaseTagName = json.tag_name
//     //     docsReleaseTag.innerText = releaseTagName

//     //     if (releaseTagName !== undefined) {
//     //       mainTitle.appendChild(docsReleaseTag)
//     //     }
//     //   })
//   })
// }

// fetchReleaseTag()
</script>

<style>
.sponsors {
  padding: 0 1.5rem 2rem;
  font-size: 0.8rem;
}

.sponsors a {
  color: #999;
  margin: 1em;
  display: block;
}

.sponsors img {
  max-width: 200px;
  max-height: 80px;
  border-radius: 40px;
}

.sponsors.frontpage {
  text-align: center;
}

.sponsors.frontpage img {
  display: inline-block;
  /* vertical-align: middle; */
}

.sponsors.frontpage h2 {
  color: #c5b0b0;
  font-size: 1.2rem;
  border: none;
}

.sponsors.sidebar a img {
  max-height: 36px;
}

.gold-sponsors {
     width: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
}

</style>

