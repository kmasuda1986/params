<template>
  <div>
    edit {{ id }}
  </div>
</template>

<script>
export default {
  layout: 'dashboard/default',
  asyncData ({ params }) {
    return {
      id: params.id
    }
  },
  data: () => ({
    title: '自分の経験値を編集',
    id: null
  }),
  head: () => ({
    title: '自分の経験値を編集'
  })
}
</script>
