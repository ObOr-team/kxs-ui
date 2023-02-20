---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/Huangpeijin.png',
    name: 'Huangpeijin',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/Huangpeijin' }
    ]
  },
  {
    avatar: 'https://github.com/Neajue.png',
    name: 'Neajue',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/Neajue' }
    ]
  },
  {
    avatar: 'https://github.com/EnJoy77.png',
    name: 'EnJoy77',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/EnJoy77' }
    ]
  },
  {
    avatar: 'https://github.com/beginnierweb2.png',
    name: 'beginnierweb2',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/beginnierweb2' }
    ]
  },
    {
    avatar: 'https://github.com/zkeq.png',
    name: 'zkeq',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/zkeq' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      参与贡献
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="small"
    :members="members"
  />
</VPTeamPage>