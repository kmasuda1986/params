<template>
  <div>
    <v-app-bar
      app
      flat
      dark
      clipped-left
      color="indigo darken-4"
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-switch
        v-model="$vuetify.theme.dark"
        hide-details
      />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      left
    >
      <v-list>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title
              class="subtitle-1 font-weight-black"
              @click="$router.push('/dashboard')"
            >
              ダッシュボード
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list dense>
        <v-list-item
          v-for="menu in menus"
          :key="menu.id"
          link
        >
          <v-list-item-icon>
            <v-icon
              :color="colors.params.icon"
            >
              {{ menu.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content
            @click="$router.push(menu.path)"
          >
            <v-list-item-title>
              {{ menu.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import colors from '../../mixins/ColorsMixin'

export default {
  mixins: [colors],
  data: () => ({
    drawer: true,
    title: 'PARAMS',
    menus: [
      {
        id: 1,
        name: '自分の経験値',
        icon: 'mdi-history',
        path: '/experience'
      }
    ]
  }),
  methods: {
  }
}
</script>
