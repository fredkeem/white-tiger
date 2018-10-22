<template>
  <v-app id="inspire">
    <v-toolbar
      style="max-width: 100%; display: block"
      color="#1967AE"
      dark
      justify-center
      align-center
    >
      <v-toolbar-title
        justify-center
        align-center
        style="display: block; margin: 0 auto"
        class="title"
      >
        정보 등록
      </v-toolbar-title>
    </v-toolbar>

    <v-content style="padding: 0;">
      <section style="background-color: #0967AE;">
        <v-parallax height="60" >
          <v-layout row align-center justify-center d-flex>
            <div class="white--text mb-3 text-xs-center">
              <p style="width: 40px; height: 40px; border: 1px solid; border-radius: 50%;">1</p>
              <em>상품확인</em>
            </div>
            <div class="white--text mb-3 text-xs-center">
              <p style="width: 40px; height: 40px; border: 1px solid; border-radius: 50%;">1</p>
              <em>상품확인</em>
            </div>
            <div class="white--text mb-3 text-xs-center">
              <p style="width: 40px; height: 40px; border: 1px solid; border-radius: 50%;">1</p>
              <em>상품확인</em>
            </div>
            <div class="white--text mb-3 text-xs-center">
              <p style="width: 40px; height: 40px; border: 1px solid; border-radius: 50%;">1</p>
              <em>상품확인</em>
            </div>
          </v-layout>
        </v-parallax>
      </section>
    </v-content>
    <v-footer>
      <v-btn
        style="width: 100%; display: block; margin: 0;"
        color="#1967AE"
        dark
        class="title"
      >
        등록
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
