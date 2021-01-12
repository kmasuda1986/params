<template>
  <div>
    <v-row
      no-gutters
      class="pa-3"
    >
      <v-col
        cols="12"
        md="6"
        sm="12"
      >
        <h3
          class="font-weight-black"
        >
          {{ title }}
        </h3>
        <p
          class="body-2 grey--text text--darken-2"
        >
          自分の経験値が登録できます。
        </p>
      </v-col>
      <v-col
        cols="6"
        md="6"
        sm="12"
        class="text-right"
      >
        <v-btn
          dark
          depressed
          color="indigo"
        >
          <v-icon
            left
          >
            mdi-plus-circle
          </v-icon>
          新しい経験を登録する
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="histories"
          :items-per-page="5"
          item-key="id"
          class="elevation-1"
        >
          <template #[`item.actions`]="{ item }">
            <v-menu offset-y>
              <template #activator="{ on, attrs }">
                <v-btn
                  icon
                  small
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>
                    mdi-menu-down
                  </v-icon>
                </v-btn>
              </template>
              <v-list
                nav
                dense
              >
                <v-list-item>
                  <v-list-item-content>
                    <v-btn
                      text
                      @click="go(item.id)"
                    >
                      <v-icon
                        left
                      >
                        mdi-file-eye
                      </v-icon>
                      照会
                    </v-btn>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-btn
                      text
                      @click="go(item.id)"
                    >
                      <v-icon
                        left
                      >
                        mdi-pencil
                      </v-icon>
                      編集
                    </v-btn>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-btn
                      text
                      @click="go(item.id)"
                    >
                      <v-icon
                        left
                      >
                        mdi-delete
                      </v-icon>
                      削除
                    </v-btn>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import colors from '../../mixins/ColorsMixin'

export default {
  layout: 'dashboard/default',
  mixins: [colors],
  data: () => ({
    title: '自分の経験値',
    headers: [
      { text: 'ID', align: 'start', value: 'id', sortable: true },
      { text: '年月', align: 'start', value: 'date', sortable: false },
      { text: '期間', align: 'start', value: 'period', sortable: true },
      { text: '業界', align: 'start', value: 'industry', sortable: true },
      { text: 'PJ名', align: 'start', value: 'name', sortable: false },
      { text: 'アクション', align: 'center', value: 'actions', sortable: false }
    ],
    histories: [
      {
        id: 2,
        date: '2020年3月 - 2020年6月',
        period: '4 ヶ月',
        industry: '保険',
        name: 'ブロックチェーンを活用したPoC開発'
      },
      {
        id: 1,
        date: '2020年1月 - 2020年2月',
        period: '2 ヶ月',
        industry: '金融',
        name: '社内通貨の開発'
      }
    ]
  }),
  methods: {
    go (id) {
      return this.$router.push(`/experience/edit/${id}`)
    }
  },
  head: () => ({
    title: '自分の経験値'
  })
}
</script>
