<template>
  <section class="masthead" role="img" aria-label="Image Description">
    <div class="masthead__inner">
      <h1>Nuxt Food App</h1>
      <nuxt-link to="/restaurants">
        <button>Find a restaurant</button>
      </nuxt-link>
    </div>

  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.masthead {
  width: 100%;
  height: 80vh;
  margin-bottom: 60px;
  overflow: hidden;
  background-size: cover !important;
  background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 37%,
      rgba(0, 0, 0, 0.65) 100%
  ),
  url(~assets/headerimg.jpeg) no-repeat center center scroll;
}
.masthead__inner {
  padding: 40px
}
h1 {
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 8vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 30px;
}
</style>
