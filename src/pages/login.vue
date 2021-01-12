<template>
  <v-row
    no-gutters
    justify="center"
  >
    <v-col
      class="text-center"
      col="12"
      md="12"
    >
      <h2 class="pa-12">
        PARAMSへログイン
      </h2>
    </v-col>
    <v-col
      class="text-center"
      col="12"
      md="5"
    >
      <v-btn
        block
        depressed
        dark
        large
        class="my-3"
        :color="colors.google"
        @click="$router.push('/dashboard')"
      >
        <v-icon
          left
        >
          mdi-google
        </v-icon>
        Googleでログインする
      </v-btn>
      <v-btn
        block
        depressed
        dark
        large
        class="my-3"
        :color="colors.facebook"
        @click="$router.push('/dashboard')"
      >
        <v-icon
          left
        >
          mdi-facebook
        </v-icon>
        Facebookでログインする
      </v-btn>
      <v-divider
        class="my-10"
      />
      <v-text-field
        dense
        outlined
        persistent-hint
        label="メールアドレス"
        hint="例）params@example.com"
      />
      <v-text-field
        dense
        outlined
        persistent-hint
        label="パスワード"
        hint="例）半角英数8文字以上"
      />
      <v-btn
        block
        depressed
        dark
        large
        class="my-3"
        :color="colors.params.btn.login"
        @click="$router.push('/dashboard')"
      >
        <v-icon
          left
        >
          mdi-email
        </v-icon>
        メールアドレスでログインする
      </v-btn>
      <v-divider
        class="mt-10 mb-5"
      />
      <v-btn
        block
        large
        text
      >
        パスワードを忘れた方
      </v-btn>
      <v-btn
        block
        large
        text
      >
        新しくアカウントを作成
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import colors from '../mixins/ColorsMixin'

export default {
  layout: 'common/default',
  mixins: [colors],
  data: () => ({
    btnName: 'ログインボタン'
  }),
  methods: {
    //
  },
  head: () => ({
    title: 'ログイン'
  })
}
</script>
