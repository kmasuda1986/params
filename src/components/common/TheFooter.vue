<template>
  <v-footer
    app
    absolute
  >
    <v-row
      no-gutters
      justify="center"
    >
      <v-btn
        v-for="footer in footers"
        :key="footer.id"
        text
        class="caption my-2"
        @click="$router.push(footer.path)"
      >
        {{ footer.name }}
      </v-btn>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    footers: [
      {
        id: 1,
        name: '特定商取引法に基づく表記',
        path: '/legal/trade'
      },
      {
        id: 2,
        name: '情報セキュリティ方針',
        path: '/legal/security'
      },
      {
        id: 3,
        name: 'プライバシーポリシー',
        path: '/legal/privacy'
      },
      {
        id: 4,
        name: '利用規約',
        path: '/legal/terms'
      },
      {
        id: 5,
        name: '© 2021 HackLab Inc.',
        path: '/login'
      }
    ]
  })
}
</script>
