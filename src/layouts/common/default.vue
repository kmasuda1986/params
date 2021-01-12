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
import TheNavbar from '@/components/common/TheNavbar'

export default {
  components: {
    TheFooter,
    TheNavbar
  }
}
</script>
