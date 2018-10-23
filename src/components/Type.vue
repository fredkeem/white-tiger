<template>
    <v-app id="inspire">
      <v-toolbar
      style="max-width: 100%; display: block;"
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
      <p class="backBtn">
        <img style="width: 100%;" src="../assets/img/btn_back_white.png" alt="">
      </p>
        화폐 선택
      </v-toolbar-title>
    </v-toolbar>  
    <v-content>
      <section style="background-color: #174580;">
        <v-parallax height="100%" >
          <v-layout row align-center justify-center d-flex style="font-size: 14px;">
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
                  <span>
                    <img src="../assets/img/ic_done_skyblue.png" alt="check">
                  </span>
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
        <div id="section">
          <div>
            <ul>
              <li>
                <p>
                  <span><input type="radio" name="check"></span>
                </p>
                <p class="img-box">
                  <span>
                    <img src="../assets/img/ic_isrtoken_whitebig.png" alt="">
                  </span>
                  <span style="display: block;">
                    ISR 토큰
                  </span>
                </p>
                <p>
                  <span style="font-size: 12px; display: block;">
                    암호화폐를 이용하여 보험료를납부하고, 보험금을 수령합니다.<br/>
                    <b>완전히 자동화된 프로세스로 더욱 저렴하고 빠르게 납부와 지급이
                    이루어집니다.</b>
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span><input type="radio" name="check"></span>
                </p>
                <p class="img-box ns-img">
                  <span>
                    <img src="../assets/img/ic_money_graybig.png" alt="">
                  </span>
                  <span style="display: block;">
                    원화
                  </span>
                </p>
                <p>
                  <span class="ns-text">
                    암호화폐를 이용하여 보험료를<br/> 납부하고, 보험금을 수령합니다.<br/>
                    <b>완전히 자동화된 프로세스로 더욱 저렴하고 빠르게 납부와 지급이
                    이루어집니다.</b>
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
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
        선택완료
      </v-btn>
    </v-footer>
    </v-app>
  </template>
  
  <script>
  import axios from 'axios'
  import api from '@/api/test'
  
  
  export default {
    name: 'type',
    data () {
        return {
            valid: true,
        }
    },
    methods: {

    }
  };
  </script>
  
  <style scoped>
#nav{
  height: 100px;
  background-color: #174580
}
/* h3 {
  margin: 40px 0 0;
} */
.backBtn{
  position: absolute; 
  left: 5px; 
  top: 1px; 
  width: 36px; 
  height:36px;
}
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
.no li p.ro3{
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
  /* margin: 5px auto; */
}
.no li .to3{
  color: #fff;
}
.v-footer{
  width: 100%;
  display: block;
  margin: 0 auto;
}
.v-text-field{
  margin: 18px 0;
}
#section{
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 30px 10 30px 0px;
  background-color: #fff;
  margin: 15px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
}
#section div{
  width: 100%;
  padding: 12px;
  background: #fff;
  margin: 0 auto;
}
#section ul{
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
#section ul li{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 10% 0;
  font-size: 12px;
}
#section ul li p{
  height: 100%;
  display: block;
  padding: 10px 10px;
  background: #1c69af;
  text-align: center;
}
#section ul li p.img-box{
  color: #fff;
  font-weight: 600;
  width: 60%;
  /* padding: 20px 10px; */
}
#section ul li p.img-box span img{
  width: 80%;
}
#section ul li p.ns-img{
  background-color: #fff;
  border: 1px solid #C3C3C3;
  color: #C3C3C3;
}
#section ul li p:first-child{
  background: #fff;
}
#section ul li p:last-child{
  background: #fff;
  text-align: left;
  color: #1c69af;
}
#section ul li p:last-child .ns-text{
  color: #C3C3C3;
}
.v-footer{
  width: 100%;
  display: block;
  margin: 0 auto;
}
.theme--light.v-footer{
  background-color: #1c69af;
  color: #fff;
}
  </style>
  