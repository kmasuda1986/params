<template>
  <v-app-bar
    app
    flat
    dark
    color="indigo darken-4"
  >
    <v-toolbar-title v-text="title" />
    <v-spacer />
    <v-switch
      v-model="$vuetify.theme.dark"
      hide-details
    />
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    title: 'PARAMS',
    ex11: true
  }),
  methods: {
  }
}
</script>
