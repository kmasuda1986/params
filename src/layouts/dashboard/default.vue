<template>
  <v-app>
    <TheNavbar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheFooter from '@/components/common/TheFooter'
import TheNavbar from '@/components/dashboard/TheNavbar'

export default {
  components: {
    TheFooter,
    TheNavbar
  },
  data: () => ({
    drawer: true
  })
}
</script>
