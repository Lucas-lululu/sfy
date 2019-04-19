<template >
    <div class="app-topic">
       <!--导航栏-->
       <div class="app-nav">
            <div class="app-home" :style="bg">
                <div class="app-home1">
                    <ul>
                        <li @click="jumpGo"><img :src="navimg"></li>
                        <li v-for="(item,i) of navlist" @mouseenter='navmouseenter(i)'>
                            <router-link to="" :style="fontc" >
                                <span @click.prevent="qump" :data-id="i">{{item.title}}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <!--下拉-->
            <div class="drop-down" :style="show" @mouseleave='navmouseleave()'>
                <div class="drop-down1">
                    <ul>
                        <li v-for="(item,i) of designlist">
                            <router-link to="">
                                <div class="ex_icon" :style="'background-image:url('+item.pic+')'"  @click.prevent="jump" :data-id="i"></div>
                                <p :style="pcolor">{{item.title}}</p>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
       <!--主体-->
       <section class="good-body">
            <div>
                <img :src="!bg_img?'':bg_img[0].img_url">
                <div class="img_move"><img src="http://127.0.0.1:3500/img/noRule/icon-8.png"></div>
                <ul class="three_img">
                    <li><a href="javascript:;"><img :src="!topic_img?'':topic_img[7].img_oneUrl"></a></li>
                    <li><a href="javascript:;"><img :src="!topic_img?'':topic_img[7].img_twoUrl"></a></li>
                    <li><a href="javascript:;"><img :src="!topic_img?'':topic_img[7].img_threeUrl"></a></li>
                </ul>
            </div>
            <div>
                <img :src="!bg_img?'':bg_img[1].img_url">
                <div class="hammer" @click="formDisplay"><img src="http://127.0.0.1:3500/img/noRule/icon-1.png"></div>
                <ul class="pig">
                    <li><img :src="!topic_img?'':topic_img[4].img_oneUrl"></li>
                    <li><img :src="!topic_img?'':topic_img[4].img_twoUrl"></li>
                    <li><img :src="!topic_img?'':topic_img[4].img_threeUrl"></li>
                </ul>
            </div>
            <div>
                <img :src="!bg_img?'':bg_img[2].img_url">
                <div class="container">
                    <div class="left">
                        <!--tab切换-->
                        <ul class="carousel-tab" @mousemove="tabChange" id="tabChange">
                             <li data-target="0" class="active">60-90㎡</li>
                             <li data-target="1">90㎡-120㎡</li>
                             <li data-target="2">120㎡以上</li>
                        </ul>
                        <div class="carousel">
                            <ul :style="{'margin-left':tabChangeMargin}">
                                <li><img :src="!topic_img?'':topic_img[2].img_oneUrl"></li>
                                <li><img :src="!topic_img?'':topic_img[2].img_twoUrl"></li>
                                <li><img :src="!topic_img?'':topic_img[2].img_threeUrl"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="right">
                        <div class="progress"><span>今日仅剩100个</span></div>
                        <form id="form">
                            <div>
                                <input placeholder="您的姓名?" class="input-margin">
                                <input  placeholder="输入联系方式抢专属定制名额">
                            </div>
                            <div class="study-input_select">
                                 <v-distpicker province="浙江省" city="杭州市" area="江干区" class="select-margin" id="selection"></v-distpicker>
                            </div>
                            <div>
                                <select>
                                    <option selected>选择您家的面积</option>
                                    <option>60-90㎡</option>
                                    <option>90-120㎡</option>
                                    <option>120㎡以上</option>
                                </select>
                            </div>
                            <ul id="ul-flex">
                                <li class="chb">需求</li>
                                <li class="chb"><input type="checkbox" checked><span>柜类</span></li>
                                <li class="chb"><input type="checkbox"><span>橱柜</span></li>
                                <li class="chb"><input type="checkbox"><span>木门</span></li>
                                <li class="chb"><input type="checkbox"><span>窗帘</span></li>
                            </ul>
                            <div>
                                <span>一键抢走</span>
                                <span>Go</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <img :src="!bg_img?'':bg_img[3].img_url">
            </div>
            <div><img :src="!bg_img?'':bg_img[4].img_url"></div>
            <div>
                <img :src="!bg_img?'':bg_img[5].img_url">
                <div class="house"><img :src="`http://127.0.0.1:3500/img/myImg/img_detail${house_img}_big.png`"></div>  
                <div class="btn-shadow"><img :src="!topic_img?'':topic_img[5].img_oneUrl"></div>
                <div class="btn-shadow"><img :src="!topic_img?'':topic_img[1].img_oneUrl"></div>
                <div id="btn-move">0元领取名额🙋‍</div>
            </div>
            <div>
                <img :src="!bg_img?'':bg_img[6].img_url">
                <div class="flex absolute" @mousemove="houseImg">
                    <img :src="`http://127.0.0.1:3500/img/myImg/img_detail1.png`" data-target="1"></img>
                    <img :src="`http://127.0.0.1:3500/img/myImg/img_detail2.png`" data-target="2"></img>
                    <img :src="`http://127.0.0.1:3500/img/myImg/img_detail3.png`" data-target="3"></img>
                    <img :src="`http://127.0.0.1:3500/img/myImg/img_detail4.png`" data-target="4"></img>
                </div>
            </div>
            <div id="middel-carousel">
                <img :src="!bg_img?'':bg_img[7].img_url">
                <ul class="flex absolute" @mousemove="smImg_tab">
                    <li><img :src="`http://127.0.0.1:3500/img/myImg/sm1.png`" data-target="0" ></li>
                    <li><img :src="`http://127.0.0.1:3500/img/myImg/sm2.png`" data-target="1"></li>
                    <li><img :src="`http://127.0.0.1:3500/img/myImg/sm3.png`" data-target="2"></li>
                </ul>
                <div class="absolute">
                    <ul class="flex" :style="{marginLeft}"><!--每张图片轮播的时候，是756px-->
                     <li><img :src="`http://127.0.0.1:3500/img/myImg/md1-${oneImg}.jpg`"></li>
                     <li><img :src="`http://127.0.0.1:3500/img/myImg/md2-${twoImg}.jpg`"></li>
                     <li><img src="http://127.0.0.1:3500/img/myImg/md3-1.jpg"></li>
                  </ul>
                </div> 
                <div class="absolute">
                    <ul>
                        <li><img :src="!topic_img?'':topic_img[5].img_twoUrl"></li>
                        <li><img :src="!topic_img?'':topic_img[1].img_oneUrl"></li>
                    </ul>
                    <div class="absolute"><img :src="!topic_img?'':topic_img[0].img_oneUrl"></div>
                </div>
            </div>
            <div id="img-overflow">
                <img :src="!bg_img?'':bg_img[8].img_url">
                <div class="absolute">
                    <div class="overflow-left">
                        <img :src="!topic_img?'':topic_img[3].img_oneUrl">
                        <img :src="!topic_img?'':topic_img[3].img_twoUrl">
                        <img :src="!topic_img?'':topic_img[3].img_threeUrl">
                    </div>
                    <ul class="flex">
                        <li><img :src="!topic_img?'':topic_img[5].img_threeUrl"></li>
                        <li><img :src="!topic_img?'':topic_img[1].img_threeUrl"></li>
                    </ul>
                    <div class="absolute" id="btn-lingqu">
                        <img :src="!topic_img?'':topic_img[0].img_threeUrl">
                    </div>
                </div>
            </div>
            <div>
                <img :src="!bg_img?'':bg_img[9].img_url">
                <div class="absolute">
                    <ul :style="{'margin-left':tabChangeMargin1}">
                        <li><img :src="!topic_img?'':topic_img[8].img_oneUrl"></li>
                        <!--每张轮播图片的margin-left是954*n+40-->
                        <li><img :src="!topic_img?'':topic_img[8].img_twoUrl"></li>
                        <li><img :src="!topic_img?'':topic_img[8].img_threeUrl"></li>
                    </ul>
                </div>
                <ul class="swiper-tab absolute flex" @mousemove="tabChange1" id="tabChange1">
                    <li data-target="0" class="active">布艺床</li>
                    <li data-target="1">布艺沙发</li>
                    <li data-target="2">餐桌椅</li>
                </ul>  
                <div>
                    <ul class="flex absolute">
                        <li><img :src="!topic_img?'':topic_img[6].img_twoUrl"></li>
                        <li><img :src="!topic_img?'':topic_img[1].img_twoUrl"></li>
                    </ul>
                    <img :src="!topic_img?'':topic_img[0].img_twoUrl" class="absolute last" id="last">
                </div>     
            </div>
            <div><img :src="!bg_img?'':bg_img[10].img_url"></div>
            <div id="video" class="relative">
                <img :src="!bg_img?'':bg_img[11].img_url">
                <div class="absolute">
                     <video src="http://127.0.0.1:3500/img/video_img/video.mp4" controls preload="auto" style="object-fit:fill;"></video>
                </div>
                 <div id="video_control" class="absolute" :style="{opacity}"><img src="http://127.0.0.1:3500/img/video_img/video.png" @click="bofang"></div>
            </div>
            <!--气球-->
            <div>
                <img :src="!bg_img?'':bg_img[12].img_url">
                <div class="absolute">
                    <img src="http://127.0.0.1:3500/img/myImg/ball-1.png">
                    <img src="http://127.0.0.1:3500/img/myImg/ball-2.png">
                </div>
            </div>
            <!--领取红包-->
            <div class="absolute" id="redPack"><img :src="!topic_img?'':topic_img[6].img_oneUrl" @click="formDisplay"></div>
            <div class="relative">
                <img :src="!bg_img?'':bg_img[13].img_url">
                <div class="absolute">
                    <a href="https://desk.v5kf.com/desk/kehu_zh.html?site=158021&human=2&oid=e85be9a698f648962e6507bd87302671&accountid=2694503025c1d&ip=122.224.144.210&location=%7B%22countries%22%3A%22%E4%B8%AD%E5%9B%BD%22%2C%22province%22%3A%22%E6%B5%99%E6%B1%9F%22%2C%22city%22%3A%22%E6%9D%AD%E5%B7%9E%22%7D&url=https%3A%2F%2Fwww.suofeiya.com%2Ftopic%2F927.html" target="_blank"><img src="http://127.0.0.1:3500/img/noRule/btn-footer.png"></a>
                </div>   
            </div> 
       </section>
       <footer class="good-footer">
            <div class="fixed">
                    <img src="http://127.0.0.1:3500/img/noRule/redpack-fixed.png" >
            </div> 
            <div>
                <div class="img-margin">
                    <img src="http://127.0.0.1:3500/img/noRule/ren_01.png">&nbsp;&nbsp;
                    <img src="http://127.0.0.1:3500/img/noRule/ren_02.png">
                </div>
                <div>
                    Copyright © 2019 索菲亚家居股份有限公司 All Right Reserved . 
                    <a href="javascript:;">粤ICP备10048445号</a>
                    温馨提示：除国家标准以外，本网站所示产品标准均为企业标准。
                     <a href="javascript:;">公司介绍</a>
                </div>
            </div>
               <!--固定定位在中间的那个form表单-->
            <div :class="{body_form}">
                  <div>
                      <div class="cha">
                         <span @click="removeForm" :style="{display:xdisplay}">x</span>
                      </div>
                  </div>
                  <form :style="{display:body_formStyle}"> 
                     <input type="text" placeholder="您的姓名" class="onlyInput" v-model="name">
                     <input type="text" placeholder="填写手机号码赢好礼" class="onlyInput" v-model="tel">
                     <v-distpicker province="浙江省" city="杭州市" area="江干区" class="select-margin" id="selection"></v-distpicker>
                     <div> 
                         <a href="javascript:;" @click="yanzheng"></a>
                     </div>
                  </form>
            </div>
       </footer>
    </div>
</template>



<script>

import VDistpicker from 'v-distpicker'
export default {
    data(){
        return{
            navlist:[],
            designlist:[],
            bg:{backgroundColor:""},
            show:{display:"",transition:''},
            fontc:{color:""},
            navimg:["http://127.0.0.1:3500/img/nav/logo.png"],
            pcolor:{color:""},
            components: { VDistpicker },
            bg_img:"",
            topic_img:"",
            house_img:1,
            oneImg:1,//图片定时器切换
            twoImg:1,
            marginLeft:0,
            opacity:0.6,
            body_form:"",
            body_formStyle:"none",
            tabChangeMargin:0,
            tabChangeI:0,
            tabChangeMargin1:0,
            name:"",
            tel:"",
            xdisplay:"none"
        }
    },
    methods: {
        nav(){
            var url="http://127.0.0.1:3500/header";
            this.axios.get(url).then(result=>{
                this.navlist=result.data.nav;
                this.designlist=result.data.design;
            })
        },
        navmouseenter(i){
            if(i==0){
                this.show.display="block";
                this.bg.backgroundColor="rgba(255,255,255,1)";
                this.fontc.color="#000";
                this.navimg="http://127.0.0.1:3500/img/nav/logo1.png";
                this.show.transition="all 0.3s"
            }else if(i!=0){
                this.show.display="none";
                this.bg.backgroundColor="rgba(0,0,0,0.7)";
                this.fontc.color="#fff";
                this.navimg="http://127.0.0.1:3500/img/nav/logo.png";
            }
        },
        navmouseleave(){
            this.show.display="none";
            this.bg.backgroundColor="rgba(0,0,0,0.7)";
            this.fontc.color="#fff";
            this.navimg="http://127.0.0.1:3500/img/nav/logo.png";
        },
        dropmouseenter(i){
                this.pcolor.color="#3cc5b4";
        
        },
        dropmouseleave(){
            this.pcolor.color="#000";
        },
        jumpGo(){
            this.$router.push("/index");
        },
        qump(e){
            var id=e.target.dataset.id;
            var path="/"
            if(id==0){
                path="/design"
            }else if(id==1){
                path="/ppsl"
            }else if(id==3){
                path="/baidu"
            }else if(id==4){
                path="/Topic"
            }else{
                path="/"
            }
            this.$router.push(path)
        },
        jump(e){
            var id=e.target.dataset.id;
            var path="/"
            if(id==0){
                path="/Customized"
            }else if(id==2){
                path="/Pro"
            }else if(id==3){
                path="/baidu"
            }else{
                path="/"
            }
            this.$router.push(path)
        },
        load_Img(){
            this.axios.get("http://localhost:3500/topic").then(res=>{
                this.bg_img=res.data.data.bg_img;
                this.topic_img=res.data.data.topic_img;
            })
        },
        houseImg(e){
            if(e.target.nodeName=="IMG"){
                var id=e.target.dataset.target;
                this.house_img=parseInt(id);
            }
        },
        toggle_img1(n,max){
            var this_=this;
             setInterval(function(){
              n++;
             if(n>max){
                n=1;
             }
              this_.oneImg=n;
         },2000)
      },
       toggle_img2(n,max){
            var this_=this;
             setInterval(function(){
              n++;
             if(n>max){
                n=1;
             }
             this_.twoImg=n;
         },2000)
      },
      smImg_tab(e){
          if(e.target.nodeName=="IMG"){ 
             var id=e.target.dataset.target;
               this.marginLeft=-1*id*756+"px";

         }
      },
      bofang(e){
          var e=e.target;
          var video=document.getElementsByTagName("video")[0];
          var div=document.getElementById("video_control");
          var redpack=document.getElementById("redPack");
          if(video.paused){//如果暂停的话
              video.play();//就播放
              this.opacity=0
              redpack.style.display="none";
          }else{
              video.pause();
              this.opacity=0.6;
              redpack.style.display="block";
          }
      },
      formDisplay(){
          this.body_form="body_form";
          this.body_formStyle="block";
          this.xdisplay="block";
      },
      removeForm(){
           this.body_form="";
           this.body_formStyle="none";
           this.xdisplay="none";
      },
      tabChange(e){
         if(e.target.nodeName=="LI"){
             var i=e.target.dataset.target;
              this.tabChangeMargin=-1*i*572+"px";
              var lis=document.querySelectorAll("#tabChange>li");

              for(var li of lis){
                  li.className=""
              }
             lis[i].className="active";
             console.log(lis[i]);   
         }
      },
      tabChange1(e){
           if(e.target.nodeName=="LI"){
             var i=e.target.dataset.target;
              this.tabChangeMargin1=-1*i*954+"px";
              var lis=document.querySelectorAll("#tabChange1>li");
              for(var li of lis){
                  li.className=""
              }
             lis[i].className="active";
         }
      },
      yanzheng(){
          if(!this.name){
              alert("请输入姓名");
              return;
          }
          if(!this.tel){
              alert("请输入电话号码");
              return;
          }
          var regName=/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;
          var regTel=/^1(3|4|5|7|8)\d{9}$/;
          if(!regName.test(this.name)){
              alert("姓名格式不正确");
              return;
          }
           if(!regTel.test(this.tel)){
              alert("手机格式不正确");
              return;
          }
      }
  },
    created() {
        this.nav();
        this.load_Img();
        this.toggle_img1(this.oneImg,3);
        this.toggle_img2(this.twoImg,4);
    },
}
</script>

<style scoped>
/* 导航栏样式 */
    .app-home{
        margin:0 auto;
        width:100%;
        height: 80px;
        position: absolute;
        top:0;
        left:0;
        z-index: 2;
        background-color:rgba(0,0,0,0.7);
        transition:all 0.4s;
    }
    .app-home>.app-home1{
        margin:0 auto;
        width:1200px;
    }
    .app-home>.app-home1>ul{
        list-style: none;
        display:flex;
    }
    .app-home>.app-home1>ul>li{
        margin:7px auto;
    }
    .app-home>.app-home1>ul>li>input{
        border-radius: 1.25rem;
        margin-top:0.6rem;
    }
    .app-home>.app-home1>ul>li>a{
        transition:all 0.5s !important;    
    }


    .study-input_select>>>.distpicker-address-wrapper select{
        border: 1px solid red !important;
        height: 56px !important;
        width: 151px !important;
        border: 1px solid #9d754e !important;
        margin-right:3px !important;
    }
     .study-input_select>>>.distpicker-address-wrapper select:first-child{
         margin-left:-1.5px !important;
         border: 1px solid #9d754e !important;
     }
    
    .app-topic .good-body .container .right form input, .app-topic .good-body .container .right form select{
        border: 1px solid #9d754e !important;
    }
     .app-topic #form>div:nth-child(3) select{
         width:469px;
     }
   


    .app-home>.app-home1>ul>li>a:hover{
        text-decoration: none;
        color: #3cc5b4 !important;
    }
    .app-home>.app-home1>ul>li>a{
        font-size: 18px;
        line-height: 56px;
        color: #ffffff;
    }

    /* 导航下拉列表 */
    .drop-down{
        width:100%;
        height:110px;
        position: absolute;
        top:5rem;
        padding: 0;
        background:#ffffff;
        display:none;
        z-index:2;
        transition:all 0.5s !important; 
        
    }
    .drop-down>.drop-down1{
        margin:0 auto;
        width:1200px;
    }
    .drop-down>.drop-down1>ul{
        list-style: none;
        display:flex;
        margin-left: 7rem;
    }
    .drop-down>.drop-down1>ul>li{
        padding:0;
        width:124px;
        margin-left: 4rem;
        text-align: center;
    }
    .drop-down>.drop-down1 ul li a:hover{
        text-decoration: none;
    }
    .ex_icon{
        width:38px;
        height:38px;
        margin-left:38px;
        background-repeat: no-repeat;
        background-position: left center;
        background-size: 200% 100%;
        position: absolute;
        top:1rem; 
        transition:all 0.5s !important;
    }
    a:hover>.ex_icon{
        background-position: right center;
        background-size: 200% 100%;
    }
    .drop-down>.drop-down1>ul>li>a p{
        font-size: 13px;
        color:#000000;
        margin-top:4rem;
        text-align: center;
        transition:all 0.5s !important;
    }
    .drop-down>.drop-down1>ul>li>a:hover>p{
        color: #3cc5b4;
    }
    .app-nav{
        position: relative;
    }
     .app-topic ul{
        list-style:none;
    }
     .app-topic a{
        text-decoration:none;
    }
    .app-topic .flex{
    display:flex;
    }
     .app-topic .absolute{
         position:absolute;
     }
     .app-topic .relative{
         position:relative;
     }
    /* 导航栏*/
    .app-topic .good-head{
            width:1920px;
            height: 58px;
            background:#786956;
            overflow:hidden;

    }
    .app-topic .good-head ul{
        margin-left:10%;   
        float:left;
        margin-bottom:0;
        height:75%;
    }
    .app-topic .good-head ul>li:first-child{
        margin-top:-5px;
        
    }
    .app-topic .good-head li{
         float:left;
         margin-right:30px;
         font-size: 18px;
         color: #fff;
         
     }
     .app-topic .good-head .content:after{
          content:"|";
          margin-left:30px;
          line-height:28px;
          color:#898989;    
    }
    .app-topic .good-head ul>li:nth-child(2):before{
         content:"|";
         margin-right:30px;
         color:#898989;   
    }
    .app-topic .good-head  a{
         color: #fff;
     }
     .app-topic .good-head li:last-child{
         color:#ff8b52;
         margin-right:0;
     }
      .app-topic .good-head li:last-child img{
          vertical-align:middle;
      }
      .app-topic .hover:hover{
          color:#30C2B0;
      }
      .app-topic .good-head div{
          margin-left:18%;
          margin-top:10px;
          width:150px;
          float:left;
          text-align:center;
      }
      .app-topic .good-head div a{
              font-size: 18px;
              color: #30c2b0;
              display:inline-block;
              margin-top:8px;
      }
       .app-topic .good-head div img{
           vertical-align:bottom;
      }

      /*中间主体部分*/
      .app-topic .good-body{
          position:relative;
         
      }
      .app-topic .good-body img{

          vertical-align:middle;
      }
      /*这是红色菱角的移动动画*/
       @keyframes img_move{
        0%{
            top:50px;
        }
        50%{
            top:90px;
        }
        100%{
            top:50px;
        }
    }
      .app-topic .good-body .img_move{
        position:absolute;
        animation:img_move 3s linear infinite;
    }
     /* 这是菱角这里的中间的三张小图片*/
      /*这是三个小图片的放大以及显示动画*/
   @keyframes three_img{
        0%{
            display:nonoe;
            top:640px;
            opacity:0;
        }
        100%{
            display:block;
            top:590px;
            opacity:1;
        }
    }
     .app-topic .good-body .three_img{
         position:absolute;
         left:25%;
         width:900px;
         height:150px;
         transition:all;
         animation:three_img 1s linear;
         margin-bottom:0;
         top:590px;
     }
    .app-topic .good-body .three_img li{
        float:left;
    }
    .app-topic .good-body .three_img li:nth-child(2){
        width:265px;
        margin:-10px 30px 0 30px;
        height:137px;
    } 
    /*锤子的旋转 */
    @keyframes hammer{
        0%{
            transform:rotate(0deg);      
        }
        50%{
            transform:rotate(-25deg);
        }
        100%{
            transform:rotate(0deg);
        }
    }
    /*锤子*/
    .app-topic .good-body .hammer{
        position:absolute;
        top:1000px;
        left:960px;
        transition:all;
        animation:hammer 1.9s linear infinite;
        transform-origin:100% 100%; 
        cursor:pointer;
        
    }
    /*金猪*/
    .app-topic .good-body ul.pig {
        width:1000px;
        position:absolute;
        margin-left:450px;
    
    }
    .app-topic .good-body .pig  li{
        width:200px;
        margin-left:100px;
        position:absolute;
    }
    /* 三只猪的动画*/
    /*第一只*/
      
    @keyframes pigOne{
        0%{
            top:0;
            left:0;
        }
        33%{
            top:100px;
            left:300px;
        }
        66%{
            top:0px;
            left:600px;
        }
        100%{
            top:0px;
            left:0px;
        }
    
    }
     /*第二只*/
     @keyframes pigTwo{
        33%{
            top:3px;
            left:592px;
        }
         66%{
            top:0px;
            left:0px;
        }
    }
     /*第三只*/
     @keyframes pigThree{
          33%{
               top:10px;
               left:-15px;
        }
        66%{
               top:100px;
               left:300px;
        }
    }
     .app-topic .good-body .pig  li:first-child{
        z-index:10;
        top:10px;
        animation: pigOne 7s linear infinite;
        left:0px;
     }
     .app-topic .good-body .pig  li:nth-child(2){
        z-index:100;
        top:100px;
        left:300px;
        animation: pigTwo 7s linear infinite;
     }
     .app-topic .good-body .pig  li:last-child{
        z-index:350;
        top:10px;
        left:600px;
        animation: pigThree 7s linear infinite;
        
     }
     
     /*窗口中的轮播图片*/
    .app-topic .good-body div.container{
        position:absolute;
        top:1671px;
        left:368px;
        width:1200px;
        height:463px;
    }
</style>
<style>
    /*轮播图上面的tab标签部分 */
    .app-topic .good-body div.container>div.left,.app-topic .good-body div.container>div.right{
        float:left;
    }

     .app-topic .good-body div.container>div.left{
         width:572px;
         height:463px;
         margin-left:60px;
     }
     .app-topic .good-body div.container>div.right{
         width:470px;
         height:40px;
         margin-left:48px;
         height:355px;
         margin-top:87px;
         position:absolute;
         top: -5px;
         left: 661px
     }
     .app-topic .good-body div.container .carousel-tab{
         width:500px;
         height:37px;
         margin:0;
         transition:all 1s;
     }
     .app-topic .good-body div.container .carousel-tab li{
         width:155px;
         height:37px;
         background:#dfa100;
         margin:0 4px;
         float:left;
         text-align:center;
         line-height:37px;
         color:white;
         cursor:pointer;
     }
     .app-topic .good-body div.container  .carousel-tab li.active{
         background:#b41b01;
     }
      /*轮播图部分*/
     .app-topic .good-body .carousel{
         margin-top:10px;
         width:572px;
         height:416px;
         padding:0;
         overflow:hidden;
         margin-left:-11px;

     }
     .app-topic .good-body .carousel ul{
         width:1716px;
         height:416px;
         padding:0;
         margin-left:-0px;
         transition:all 1s;
     }
     .app-topic .good-body .carousel ul li{
         width:572px;
         height:416px;
         float:left;
         margin-top:-6px;
     }
     /*轮播图右边部分*/
     .app-topic .good-body .container .progress{
        width: 468px;
        height: 24px;
        background: #c88c00;
        border-radius: 10px;
        transition: all 1s;
        text-align:center !important;
        color:#fff;
    }
    .app-topic .good-body .container .progress span{
        display:inline-block;
        margin-left:200px;
        line-height:24px;
    }
     .app-topic .good-body .container .right form{
         width:470px;
         text-align:center;
     }
    .app-topic .good-body .container .right form input,
    .app-topic .good-body .container .right form select
    {
        width:200px;
        height:50px;
        font-size: 20px;
        color: #7e511f;
        border: 1px solid #9d754e;
        padding-left: 13px;
        padding-right: 10px;
        background: #fbebdc;
        margin:12px 0;
        outline:none;
    }
     .app-topic .good-body .container .right form .input-margin{
         margin:19px 9px 19px 0;
     }
     .app-topic .good-body  .container .right form  input:first-child{
         width:1349x;
         margin-left:1px;
     }
     .app-topic .good-body .container .right form  input:first-child+input{
         width:309px;
     }
     
     /*
    .app-topic .good-body .container .right form .select-margin#selection{
           width:147px;
           margin:0 4.5px;
    }
    .app-topic .good-body .container .right form .select-margin.one{
          margin-left:-1px;
    }
    
     .app-topic .good-body .container .right form div+div+div>select:last-child{
         width:458px;
         margin-left:-2px;
     }
     */
     /*省级联动菜单 */
   .app-topic .good-body .container .right form input, .app-topic .good-body .container .right form select {
            width:149px;
    }
   .app-topic #form>div:nth-child(3) select{
       width:456px;
   }
  .app-topic .good-body #ul-flex{
       width:419px;
       height:30px;
       display:flex;
       margin:-5px 0 0 5px;
       justify-content:space-between;
       align-items:center;
       color:#7e511f;
       font-size:18px;
   }
  .app-topic .good-body #ul-flex>li{
       display:flex;
       align-items:center;
   }
   .app-topic .good-body #ul-flex>li:first-child{
       margin-top:-3px;
   }
  .app-topic .good-body #ul-flex>li>input{
        width:40px;
        height:19px;  
        position:relative
    }
  .app-topic .good-body #ul-flex>li>input[type=checkbox]:after {
        position: absolute;
        width: 10px;
        height: 15px;
        top: 1px;
        content: " ";
        background-color:rgba(251,235,220,0.4);
        color: #fff;
        display: inline-block;
        visibility: visible;
        padding: 0px 3px;
        border-radius: 3px;
        left:11px;
  } 

  /*一键抢走的动画*/
  @keyframes box{
      0%{
           border-radius:40px;
           width:220px;
           height:44px;
           margin-top:27.26px;
           line-height:44px;
           font-size:18px;
      }
      50%{
            border-radius:60px;
            margin-top:20px;
            line-height:50px;
            font-size:22px;
            width:260px;
            height:50px;
      }
       100%{
           border-radius:40px;
           width:220px;
           height:44px;
           margin-top:27.26px;
           line-height:44px;
           font-size:18px;
      }
   }
  .app-topic .good-body #ul-flex+div{
      cursor:pointer;
      background:#A31501;
      color:#fff;
      text-align:center;
      margin:0 auto;
      box-shadow:3px 3px 6px black;
      animation:box 1.5s linear infinite;
   }
   .app-topic .good-body #ul-flex+div>span:last-child{
       background:#F3B953;
       color:#A31501;
       border-radius:50%;
   }
   
   .app-topic .good-body div.house, .app-topic .good-body div.house+div, .app-topic .good-body div.house+div+div,#btn-move{
        position:absolute;
   }
    .app-topic .good-body div.house{
        top:2528px;
        left:652px;
    }
    .app-topic .good-body div.house+div{
        top:2600px;
        left:1300px;
        width:300px;
        height:100px;
    }
    .app-topic .good-body div.house+div+div{
        top:2780px;
        left:1300px;
    }
    /*按钮的上下动画*/
    @keyframes btn-shadow{
        0%{
            top:2780px;
        }
        40%{
            top:2770px;
        }
        80%{
            top:2770px;
        }
        100%{
            top:2780px;
        }
    }
    .app-topic .good-body #btn-move{
        left:1301px;
        width:181px;
        height:45px;
        background:#B01A00;
        border-radius:20px;
        animation:btn-shadow ease-in 1s infinite;
        cursor: pointer;
        text-align:center;
        line-height:45px;
        font-size:22px;
        color:#fff;
    }
    .app-topic .good-body div>div.flex.absolute{
        width:1350px;
        top:3055px;
        margin-left:180px;
        justify-content:space-around;
    }

    .app-topic .good-body #middel-carousel>ul:nth-child(2){
        top: 3596px;
        left: 358px;
        height:465px;
        flex-direction:column;
        justify-content:space-between;
        
    }
    .app-topic .good-body #middel-carousel>div.absolute:nth-child(3){
        width:756px;
        height:498px;
        overflow:hidden;
        top:3581px;
        left:579px;
    }
    .app-topic .good-body #middel-carousel>div.absolute:nth-child(3)>ul{
        width:3000px;
        margin-left:0px;
        padding:0;
        transition:all 1s;
    }
    .app-topic .good-body #middel-carousel>div.absolute:last-child{
        width:300px;
        height:10px;
        top:3595px;
        left:1370px;
    }
    .app-topic .good-body #middel-carousel>div.absolute:last-child li:last-child{
        margin-top:40px;
    }
    /*立即抢购的动画 */
    @keyframes btn-qianggou{
        0%{
            top:198px;
        }
        50%{
            top:190px;
        }
        80%{
            top:190px;
        }
        100%{
            top:198px;
        }
    }
    .app-topic .good-body #middel-carousel>div:last-child div{
        left:60px;
        width:182px;
        height:16px;
        animation:btn-qianggou ease-in 1s infinite;
    }
    .app-topic .good-body #middel-carousel>div:last-child div img{
        width:100%;
        position:absolute;
        top:-14px;
        left:0px;
    }
    .app-topic .good-body #img-overflow div.absolute{
        width:1000px;
        height:450px;
        top:4548px;
        left:390px;
    }
    .app-topic .good-body #img-overflow div.absolute>div.overflow-left{
        width:798px;
        height:440px;
        float:left;
        overflow-y:scroll;
    }

    .app-topic .good-body #img-overflow ::-webkit-scrollbar{
        background-color: #F7E0CA;
        width: 15px;
        height: 0.7px;
        padding:0;
    }
    .app-topic .good-body #img-overflow ::-webkit-scrollbar-thumb{
        background:url("http://127.0.0.1:3500/img/noRule/scroll.png") no-repeat;
    }

    .app-topic .good-body #img-overflow div.absolute ul{
        flex-direction:column;
        justify-content:space-between;
        height:230px;
        align-items:center;
        padding-left:90px;
    }
    /*立即领取的动画 */
    @keyframes btn-lingqu{
        0%{
            top:194px;
        }
        50%{
            top:186x;
        }
        80%{
            top:186px;
        }
        100%{
            top:194px;
        }
    }
    .app-topic .good-body div#btn-lingqu.absolute{
        left:854px;
        width:181px;
        height:45px;
        animation:btn-lingqu linear 1s infinite;
    }
    .app-topic .good-body #btn-lingqu img{
        position:absolute;
        top:-15px;
        left:0px;
        width:100%;
    }

    .app-topic .good-body #img-overflow+div>div:last-child ul.flex,.app-topic .good-body #img-overflow+div>div:last-child ul.flex+img{
    z-index:1000;

  }
    .app-topic .good-body #img-overflow+div div.absolute{
        overflow:hidden;
        top:5583px;
        left:429px;
        width:954px;
        margin:0;
        z-index:100
    }
    .app-topic .good-body #img-overflow+div div.absolute, .app-topic .good-body  #img-overflow+div div.absolute ul{
        height:590px;
        z-index:100
        
    }
    .app-topic .good-body  #img-overflow+div div.absolute>ul{
        margin-left:0px;
        padding:0;
        width:2862px;
        transition:all 1s;

    }
    .app-topic .good-body  #img-overflow+div div.absolute>ul>li{
        float:left;
    }

    .app-topic .good-body #img-overflow+div ul.swiper-tab.absolute{
        top:5634px;
        left:1384px;
        color:#fbebdc;
        font-size: 18px;
        padding: 0;
        margin: 0;
        justify-content:space-between;
        flex-direction:column;
        width:35px;
        height:280px;
        text-align:center;
        z-index:100;
    }
    .app-topic .good-body #img-overflow+div ul.swiper-tab.absolute li{
        background:#DFA100;
        
    }
   .app-topic .good-body #img-overflow+div ul.swiper-tab.absolute li.active{
        background:#B41B01;
    }
    .app-topic .good-body #img-overflow+div>div:last-child ul.flex{
        width:200px !important;
        height:210px !important;
        flex-direction:column;
        justify-content:space-between;
        text-align:center;
        top:5930px;
        left:1380px;
        margin:0;
        padding:0;
    }
    /*免费领取的动画 */
    @keyframes mianfeilingqu{  
        0%{
            top:6090px;
        }
        50%{
            top:6080x;
        }
        80%{
            top:6080px;
        }
        100%{
            top:6090px;
        }
    }
    .app-topic .good-body #img-overflow+div>div:last-child  #last{
        left: 1389px;
        width: 182px;
        animation:mianfeilingqu linear 1s infinite;
    }
    /*最底部的视频*/
    .app-topic .good-body #video img+div.absolute{
        top:794px;
        left:655px;
        width:587px;
        height:421px;
        z-index:10000;
    }
    .app-topic .good-body #video img+div.absolute video{
        width:100%;
        height:100%;
    }
    /* 用父元素的top控制两个气球往上往下走*/
    @keyframes ball{
        0%{
            top:6652px;
        }
        40%{
            top:6640px;
        }
        60%{
            top:6640px;
        }
        100%{
            top:6652px;
        }
    }
    .app-topic .good-body #video+div div{
        left: 493px;
        width: 925px;
        height: 356px;
        animation:ball 2s linear infinite;
        z-index:10000;

    }
    .app-topic .good-body #video+div div img{
        display:block;
        float:left;
        margin-top:110px;
    }
    .app-topic .good-body #video+div div img:last-child{
        float:right;
        margin-top:0;
    }
    /*领取红包的动画 */
    @keyframes lingquRedpack{
        0%{
        transform:rotate(-10deg);
        }
        15%{
        transform:rotate(10deg);
        }
        30%{
        transform:rotate(-10deg);
        }
        45%{
        transform:rotate(10deg);
        }
        60%{
        transform:rotate(-10deg);
        }
        75%{
        transform:rotate(10deg);
        }
        90%{
        transform:rotate(-10deg);
        }
        100%{
        transform:rotate(-10deg);
        }

    }
     .app-topic .good-body #redPack{
         z-index:100000;
     }
    .app-topic .good-body #video+div+div{
        left:666px;
        width:123px;
        top:6855px;
        z-index:1000000;
    }
    .app-topic .good-body #video+div+div img{
    animation:lingquRedpack 1.5s infinite;
    transform-origin:50% 50%;
    transform:rotate(-15deg);
    width:100%;
    cursor:pointer;
    }

    /*最底下的btn的动画*/
    @keyframes last-two{
        10%{
            margin-left:-12px;
        }
        20%{
            margin-left:12px;
        }
        30%{
            margin-left:-9px;
        }
        40%{
            margin-left:9px;
        }
        50%{
            margin-left:-6px;
        }
        60%{
            margin-left:6px;
        }
        70%{
            margin-left:-3px
        }
        80%{
            margin-left:3px
        }
        90%{
            margin-left:0
        }
        100%{
            margin-left:0
        }
    
    }
    .app-topic #video_control{
        top: 794px;
        left: 655px;
        z-index: 100000;
        width: 587px;
        height: 421px;
        background: black;
        opacity: 0.6;
        text-align:center;
        line-height:421px;
    }
     .app-topic #video_control img{
         cursor:pointer;
     }
    .app-topic .good-body>div:last-child div{
        top: 194px;
        left: 578px;
        animation:last-two 3s linear infinite;
    
    }
    .app-topic .good-footer div.fixed{
        position:fixed;
        z-index:10000;
        bottom:0;
        left:38px;
        cursor:pointer;
    }
    .app-topic .good-footer{
        background:black;
        width: 101%;
        height: 60px;
        background: #4c4b49;
    }
    .app-topic .good-footer>div:first-child{
        animation:last-two 3s linear infinite;
    }
    .app-topic .good-footer>div:first-child+div div{
        float:left;
    }
    .app-topic .good-footer>div:first-child+div div:first-child{
        margin-left:300px;
        margin-top:10px;
    }
    .app-topic .good-footer>div:first-child+div div:last-child{
        margin-top:20px;
        margin-left:150px;
        font-size:3px;
        color: #999;
    }
    .app-topic .good-footer>div:first-child+div div:last-child a{
        color:#fff;
    }
    .app-topic .good-footer .body_form{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index:1000000;

    }

    /*
      .app-topic .good-footer .body_form>div.absolute{
        position: fixed;
        top: 23%;
        left: 50%;
        width: 572px;
        margin-left: -250px;
        height: 500px;
        background-image: url(http://127.0.0.1:3500/img/form/form_bg.png);
        background-repeat: no-repeat;
    }
     .app-topic .good-footer .body_form form div.absolute{
         top:317px;
         left:90px;
         border:3px solid red;
         width:66%;
         height:162px;
     }
   */
    .app-topic .good-footer .body_form>div{
        background-image: url("http://127.0.0.1:3500/img/form/form_bg.png");
        background-repeat: no-repeat;
        width:520px;
        height:300px;
        margin-left:725px;
        margin-top:140px;
    }
      .app-topic .good-footer .body_form form{
        width:453px;
        height:300px;
        margin-left:779px;
        background:#ECCE9F;
      }
    .app-topic .onlyInput{
        float: left;
        height: 50px;
        padding-left: 13px;
        padding-right: 10px;
        margin-bottom: 12px;
        font-size: 20px;
        color: #7e511f;
        background: #fbebdc;
        border:1px solid #9d754e;
        width:10px;
        margin-top:10px;
        margin-bottom:10px;
        outline:none;
     }
     .app-topic .good-footer .body_form form input.onlyInput:first-child{
         width:92px;
         margin-left:53px;
         margin-right:6px;
     }
      .app-topic .good-footer .body_form form input.onlyInput:nth-child(2){
         width:213px;      
     }
     .app-topic .good-footer .distpicker-address-wrapper select{
        margin-left:14px;
        height: 50px;
        padding-left: 13px;
        padding-right: 10px;
        margin-bottom: 12px;
        font-size: 20px;
        color: #7e511f;
        background: #fbebdc;
        border:1px solid #9d754e;
        margin-top:10px;
        margin-bottom:10px;
        outline:none;
        width:118px; 
     }
     .app-topic .good-footer .distpicker-address-wrapper select+select{
         margin-left:0px;
     }
   .app-topic .good-footer form div{
        text-align:center;
    }
    .app-topic .good-footer form div a{
        width:266px;
        height:82px;
        background:red;
        background: url(http://127.0.0.1:3500/img/form/form_btn.png) no-repeat;
        background-position:0% 39%;
        display:inline-block;
    }
     .app-topic .good-footer>div:last-child div.cha{
         margin-left:490px;
         width:10px;
         font-size:25px;
         cursor:pointer;
     }
     /*x的动画 */
       @keyframes cha{
        0%{
        transform:rotate(0deg);
        }
        50%{
        transform:rotate(360deg);
        }
         100%{
        transform:rotate(0deg);
        }

    }
      .app-topic .good-footer>div:last-child div.cha:hover{
          transform-origin:center center;
          animation:cha 1s linear 1;
      }
</style>