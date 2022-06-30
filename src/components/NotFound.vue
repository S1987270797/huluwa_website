<template>
  <div class="notFound">
    <h2>Page Not Found</h2>
    <p>啊o ~ 您打开的路径页面不存在~</p>
    <h1>{{ $route.params.pathMatch }}</h1>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.notFound {
  width: 30vw;
  margin: 0 auto;
  text-align: center;
}
</style>
