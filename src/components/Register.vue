<template>
  <v-app id="inspire">
    <v-toolbar
      style="max-width: 100%; display: block; box-shadow: 0px 10px 10px rgba(0,0,0,0.2);"
      color="#1967AE"
      dark
      justify-center
      align-center
      height="40"
    >
      <v-toolbar-title
        justify-center
        align-center
        style="display: block; margin: 0 auto;"
        class="title"
      >
        정보 등록
      </v-toolbar-title>
    </v-toolbar>

    <v-content style="padding: 0;">
      <section style="background-color: #174580;">
        <v-parallax height="100%" >
          <v-layout row align-center justify-center d-flex style="font-size: 12px;">
            <!-- <div class="white--text mb-3 text-xs-center">
              <p id="toolbar-btn" ><img src="../assets/img/ic_done_skyblue.png"/></p>
              <span class="tx-box">상품확인</span>
            </div>
            <div class="white--text mb-3 text-xs-center">
              <p id="toolbar-btn">2</p>
              <span>정보등록</span>
            </div>
            <div class="white--text mb-3 text-xs-center">
              <p id="toolbar-btn">3</p>
              <span>화폐선택</span>
            </div>
            <div class="white--text mb-3 text-xs-center">
              <p id="toolbar-btn">4</p>
              <span>지급조회</span>
            </div> -->
            <ul class="no">
              <li class="round-object">
                <p class="nob col-ex ro1">
                  <span>
                    <img src="../assets/img/ic_done_skyblue.png" alt="check">
                  </span>
                </p>
                <p class="text to1">
                  <span>상품확인</span>
                </p>
              </li>
              <li class="round-object">
                <p class="nob col-ex ro2">
                  <span>2</span>
                </p>
                <p class="text to2">
                  <span>정보등록</span>
                </p>
              </li>
              <li class="round-object ">
                <p class="nob col-ex ro3">
                  <span>3</span>
                </p>
                <p class="text to3">
                  <span>화폐선택</span>
                </p>
              </li>
              <li class="round-object">
                <p class="nob col-ex ro4">
                  <span>4</span>
                </p>
                <p class="text to4">
                  <span>지급조회</span>
                </p>
              </li>
            </ul>
          </v-layout>
        </v-parallax>
      </section>

      <v-layout>
        <v-flex xs12 sm6>
          <div id="cardbox">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field v-model="name" label="name" required :rules="rules" placeholder="홍길동"></v-text-field>
              <v-text-field v-model="email" label="email" required :rules="rules" placeholder="hong@gildong.com"></v-text-field>
              <v-text-field v-model="wallet_address" label="wallet" required :rules="rules" placeholder="0x123456789101112131415"></v-text-field>
              <v-autocomplete
                ref="banks"
                :items="bank"
                v-model="bank_name"
                label="은행"
                placeholder="은행선택"
                :rules="rules"
                required
              ></v-autocomplete>
              <v-text-field v-model="bank_acct" label="bank acc" required :rules="rules" placeholder="123-456-7890"></v-text-field>
            </v-form>
          </div>
        </v-flex>
      </v-layout>
    </v-content>
    <v-footer>
      <v-btn
        style="width: 100%; display: block; margin: 0;"
        height="100%"
        color="#1967AE"
        dark
        class="title"
        @click="submit()"
        :disabled="!valid"
      >
        등록
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios'
import api from '@/api/test'


export default {
  name: 'register',
  data () {
    return {
      valid: true,
      name: '',
      email: '',
      wallet_address: '',
      bank_name: '',
      bank_acct: '',
      bank: ['국민은행','신한은행','우리은행','기업은행','농협은행'],
      rules: [ v => !!v || 'required'],
      toolbar_items: [
        {'name':'상품확인',
        'img':'../assets/img/ic_done_skyblue.png'
        },
        {'name':'정도 등록',
        'img':'src'
        },
        {'name':'화폐선택',
        'img':'src'
        },
        {'name':'지급 조회',
        'img':'src'
        }
      ]
    }
  },
  methods: {
    submit: function () {
      if (this.$refs.form.validate()) {
        let obj = {
          name:this.name,
          email:this.email,
          wallet_address: this.wallet_address,
          bank_name: this.bank_name,
          bank_acct: this.bank_acct
        }
        // api.upload(obj).then(res => {
        //   console.log('works', res);
        // }).catch(function(err) {
        //   console.log('err',err);
        // })
        let url= 'https://gzeycm5nq1.execute-api.ap-northeast-2.amazonaws.com/prod/dappmvp?wallet_address=0x1234888888'
        axios.post(url, obj).then(res => {
          console.log('res', res)
        })
      } 
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
#toolbar-btn {
  width: 40px; 
  height: 40px;
  border: 1px solid; 
  border-radius: 50%;
}
.theme--light.v-footer{
  background-color: #ddd;
  color: #fff;
}
#cardbox{
  padding: 30px 20px;
  background-color: #fff;
  margin: 15px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
}
#nav{
  height: 100px;
  background-color: #174580
}
/* h3 {
  margin: 40px 0 0;
} */
.no {
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.no .round-object{
  display: block;
  list-style-type: none;
  margin: 10px auto;
}
.no li p.nob{
  width: 45px;
  height: 45px;
  background-color: #174580;
  border: 1px solid #1c69af;
  border-radius: 50%;
  color: #fff;
}
.no li p.no1{
  color: #174580;
  font-weight: 600;
  vertical-align: center;
}
.no li p.col-ex img{
  width: 50%;
}
.no li p.ro2{
  background-color: #fff;
}
.no li p.nob span{
  display: block;
  padding: 12px 0;
  color: #1c69af;
  font-weight: 600;
}
p.bg-color{
  background-color: #1c69af;
  width: 100%;
  margin: 0;
  line-height: 45px;
  color: #fff;
}
.no li .text{
  width: 100%;
  color: #1c69af;
  font-weight: 600;
  font-size: 12px;
  margin: 5px auto;
}
.no li .to2{
  color: #fff;
}
.v-footer{
  width: 100%;
  display: block;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
}
.v-text-field{
  margin: 18px 0;
}
</style>
