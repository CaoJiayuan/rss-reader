<template>
  <div>
  </div>
</template>
<script>
  var url = require("url");
  export default {
    data () {
      return {
        items: []
      }
    },
    mounted () {
      axios.get('/mzitu/post/135551').then(res => {
        let items = res.data.items
        console.log(items)
        this.items = (items.map(i => {
          let m = i.summary.match(/http(s|):\/\/.*?\.(jpg|png)/)
          return  'http://proxy.i.mzitu.net' + url.parse(m[0]).path
        }))
      })
    }
  }
</script>
