<template>
    <div class="app-index">

        <!-- 轮播图  -->
        <div class="rotation">
            <div class="carousel" data-ride="carousel" id="demo">
            <div class="carousel-inner">
                <div class="carousel-item" v-for="(item,i) of caselslist" :class="i==0?'active':''">
                    <router-link to="" >
                        <img :src='item.pic' />
                    </router-link>
                </div>
            </div>
            <ul class="carousel-indicators">
                <li class="active" data-slide-to="0" data-target="#demo"></li>
                <li data-slide-to="1" data-target="#demo"></li>
                <li data-slide-to="2" data-target="#demo"></li>
                <li data-slide-to="3" data-target="#demo"></li>
                <li data-slide-to="4" data-target="#demo"></li>
                <li data-slide-to="5" data-target="#demo"></li>
            </ul>
            <a href="#demo" class="carousel-control-prev" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a href="#demo" class="carousel-control-next" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
            </div>
        </div>

        <div class="step" :class="{step1:a}">
            <img src="http://127.0.0.1:3500/img/step.png">
        </div>

        <!-- 内容1 -->
        <div class="text-1">
            <img src="http://127.0.0.1:3500/img/textbg/text-1.png">
            <div class="bj-1">
                <ul>
                    <li v-for="item of lifelist" >
                        <h3>{{item.title}}</h3>
                        <p>{{item.subTitle}}</p>
                        <router-link :to="item.url" @click.native="sidebartop">
                            <img :src="item.pic">
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="icon-1">
            <div>
                <img src="http://127.0.0.1:3500/img/textbg/icon-1.png">
            </div>
        </div>
        </div>
        <!-- 花瓶1 -->
        <div class="icon-4">
            <div>
                <img src="http://127.0.0.1:3500/img/textbg/icon-4.png">
            </div>
        </div>
        <!-- 内容2轮播图 -->
        <div class="text-2">
            <img src="http://127.0.0.1:3500/img/textbg/text-2.png">
            <div class='bj-2'>
                <div class="carousel" data-ride="carousel" id="demomo">
                    <div class="carousel-inner">
                        <div class="carousel-item" v-for="(item,i) of designlist" :class="i==0?'active':''">
                            <router-link to="" class="a1">
                                <img :src="item.lpic"/>
                                <p>{{item.ltitle}}</p>
                            </router-link>
                            <router-link to="" class="a2">
                                <img :src="item.rpic" />
                                <p>{{item.rtitle}}</p>
                            </router-link>
                        </div>
                    </div>
                    <ul class="carousel-indicators">
                        <li class="active" data-slide-to="0" data-target="#demomo"></li>
                        <li data-slide-to="1" data-target="#demomo"></li>
                        <li data-slide-to="2" data-target="#demomo"></li>
                    </ul>
                </div>
            </div>
            <div class="icon-2">
                <img src="http://127.0.0.1:3500/img/textbg/icon-2.png">
            </div>
        </div>
        <!-- 花瓶2 -->
        <div class="icon-5">
            <div>
                <img src="http://127.0.0.1:3500/img/textbg/icon-5.png">
            </div>
        </div>
        <!-- 内容3 -->
        <div class="text-3">
            <img src="http://127.0.0.1:3500/img/textbg/text-3.png">
            <div class="bj-3">
                <ul>
                    <li v-for="item of actlist">
                        <img :src="item.pic">
                        <h3>{{item.title}}</h3>
                        <p>{{item.subTitle}}</p>
                    </li>
                </ul>
            </div>
            <div class="icon-3">
                <img src="http://127.0.0.1:3500/img/textbg/icon-3.png">
            </div>
        </div>

        <!-- 地图 -->
        <div class="map" v-show="mapshow" :style="styleshow">
            <div class="mapwidth">
                <ul>
                    <li class="mapimg"><img src="http://127.0.0.1:3500/img/bottom_logo1.png"></li>
                    <li>
                        <input name="a_name" id="name" placeholder="请输入姓名" v-model="uname" type="text" v-on:keyup.enter="login">
                       </li>
                    <li>
                        <input name="a_mobile" id="phone" placeholder="请输入手机号码" v-model="phone" type="text" v-on:keyup.enter="login">
                    </li>
                    <li>
                        <div>
                            <v-distpicker province="浙江省" city="杭州市" area="西湖区" class="ditu"></v-distpicker>
                        </div>
                    </li>
                    <li>
                        <div class="form_btn"  @click="login">免费预约</div> 
                    </li>
                    <li class="close" @click="close">
                        <img src="http://127.0.0.1:3500/img/products/public/close.png">
                    </li>
                </ul>
            </div>
        </div>
        <div class="sem_pop pop-wrap" id="defaultBox" v-show="ok">
            <div class="sem_info1">
                <div class="sem_close1">
                    <a  @click="o">
                        <img src="http://127.0.0.1:3500/img/products/public/close.png">
                    </a>
                </div> 
                <div class="info" style="opacity:0;">你报名成功</div>
                <img src="http://127.0.0.1:3500/img/products/public/pup1.png">
                <div class="sem_back1">
                    <router-link to="/" target="_blank"></router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import VDistpicker from 'v-distpicker'
    export default {
    components: { VDistpicker },
    data() {
        return {
            caselslist:[],
            actlist:[],
            designlist:[],
            lifelist:[],
            marginstep:{marginTop:"",marginBottom:""},
            stepClass:{step:false,step1:false},
            a:true,
            uname:"",
            phone:"",
            ok:false,
            mapshow:false,
            va:0,
            styleshow:{display:''}
        }
    },
    created() {
        this.index();
        setInterval(this.step,2000);
    },
    mounted(){
        window.addEventListener('scroll',this.top)
    },
    methods:{
        index(){
            var url="http://127.0.0.1:3500/index";
            this.axios.get(url).then(result=>{
                this.caselslist=result.data.casels;
                this.lifelist=result.data.life;
                this.designlist=result.data.design;
                this.actlist=result.data.act;
                
            })
        },
        sidebartop(){
            document.documentElement.scrollTop-=15;
            if(document.documentElement.scrollTop>=16){
                var c=setTimeout(()=>this.sidebartop(),1);
            }else{
                clearTimeout(c);
            }
        },
        step(){
            if(this.a==false){
                this.a=true;
                this.step1=true; 
            }else if(this.a==true){
                this.a=false;
                this.step1=false;
            }
        },
        login(){
            var u=this.uname;
            var p=this.phone;
            //创建正则表达式验证用户名和密码格式是否正确
            if(!u){
                alert("请输入称呼!");
                return;
            }else
            if(!p){
                alert("请输入手机号!");
                return;
            }else{
                var reg1=/^[\u4e00-\u9fa5]{0,5}$/i;
                var reg2=/^1[3-8]\d{9}$/
                if(!reg1.test(u)){
                    alert("用户名格式不正确，请检查");
                    return;
                }else if(!reg2.test(p)){
                    alert("手机号格式不正确，请检查");
                    return;
                }else{
                    this.ok="true";
                }
            }
        },
        o(){
            this.ok=false;
        },
        top(){
            var scrollTop=window.pageYOffset ||document.documentElement.scrollTop||document.body.scrollTop;
            if(scrollTop>600 && this.va==0){
               console.log(this.va)
                this.mapshow=true;
            }
            if(scrollTop<600){
                this.mapshow=false;
            } 
        },
        close(){
            if(this.mapshow==true){
                this.va=1;
                this.styleshow.display="none";
            }
        }
    },
}
</script>

<style scoped>
    /* 轮播图  */
    .rotation .carousel-item img{
        width: 100%;
        min-width:1288px;
    }
    .rotation .carousel-indicators{
        min-width:900px;
    }
    .rotation .carousel-indicators li{
        width:1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        background:#333;
        margin:0px 5px;
    }
    .rotation .carousel-indicators .active{
        background: #e9e9e9;
    }
    .rotation .carousel-control-prev,.carousel-control-next{
        background:rgba(0,0,0,0.5);
        width:60px;
        height:16%;
        border-radius:10%;
        top:42%;
    }

    .step{
        margin:0 auto;
        margin-top:7rem;
        margin-bottom:3rem;
        width:1288px;
        transition:all 1.5s !important; 
        
    }
    .step1{
        margin:0 auto;
        margin-top:3rem;
        margin-bottom:7rem;
        width:1288px;
        transition:all 1.5s !important; 
    }


    /* 内容1 */
    .text-1{
        margin:0 auto;
        width:1288px;
        position: relative;
        margin-bottom: 10rem;
    }
    .bj-1{
        margin-top:2rem;
        width:1288px;
        height:1033px;
        background: url(http://127.0.0.1:3500/img/textbg/bj-1.png);
        z-index: 3;
        position: relative;
    }
    .bj-1 ul{
        margin:0;
        padding:0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
    }
    .bj-1 ul li{
        margin-left:0.8rem;
        margin-top:1.2rem;
        width:32%;
        height:45%; 
        background: #ffffff;
        border-radius: 10px;
        transition:all 0.8s !important; 
    }
    .bj-1 ul li:hover{
        margin-top:0.5rem;
        box-shadow:5px 5px 5px #000;
    }
    .bj-1 ul li h3{
        margin-top:3rem;
    }
    .bj-1 ul li p{
        margin-top:1rem;
        font-size: 19px;
    }
    .bj-1 ul li img{
        z-index:3;
        width:340px;
        height:320px; 
        margin-top:1rem;
        margin-bottom: 2rem;
    }
    .icon-1{
        position: relative;
        top:-24rem; 
        left:0rem;
    }
    .icon-1>div{
        position: absolute;
        left:-5rem;
    }
    .icon-1 img{
        z-index: 1;
    }
    .icon-4{
        position: relative;
        top:-40rem; 
        left:0rem;
    }
    .icon-4>div{
        position: absolute;
        left:0rem;
    }

    /* 内容2轮播图 */
    .text-2{
        margin:0 auto;
        width:1288px;
        position: relative;
    }
    .bj-2{
        margin-top:2rem;
        width: 1288px;
        height: 448px;
        background:url(http://127.0.0.1:3500/img/textbg/bj-2.png);
        position: relative;
        z-index: 2;
    }
    .bj-2 .carousel-item{
        width: 1288px;
        height: 448px;
    }
    .bj-2 .carousel-item .a1{
        display: inline-block;
        width:630px;
        height: 390px;
        border-left:6px solid #d2b68c;
        border-top:6px solid #e2caa2;
        border-right:4px solid #cfb284;
        border-bottom:6px solid #a88242;
        background:#ffffff;
        position:relative;
        top:1.3rem;
        transition:all 0.8s !important; 
    }
    .bj-2 .carousel-item .a2{
        display: inline-block;
        width:630px;
        height: 390px;
        border-left:4px solid #d2b68c;
        border-top:6px solid #e2caa2;
        border-right:6px solid #cfb284;
        border-bottom:6px solid #a88242;
        background:#ffffff;
        position:relative;
        top:1.3rem;
        transition:all 0.8s !important; 
    }
    .bj-2 .carousel-item .a1 p,.a2 p{
        padding-top: 0.8rem;
        font-size: 18px;
        color:black;
    }
    .bj-2 .carousel-item .a1:hover{
        text-decoration: none;
        background: #e2caa2;
        position:relative;
        top:0.8rem;
    }
    .bj-2 .carousel-item .a2:hover{
        text-decoration: none;
        background: #e2caa2;
        position:relative;
        top:0.8rem;
    }
    .bj-2 .carousel-item img{
        width:620px;
        height:330px;
    }
    .bj-2 .carousel-indicators{
        min-width:900px;
        position: relative;
        top:-1.5rem;
    }
    .bj-2 .carousel-indicators li{
        width:14px;
        height: 14px;
        border-radius: 50%;
        background-image:radial-gradient(5px at center center,#ffffff 3px,#73531f );
        margin:0px 8px;
    }
    .bj-2 .carousel-indicators .active{
        background: #73531f;
    }
    .icon-2{
        z-index: 1;
        position: relative;
        top:-7rem; 
        left:-6rem;
    }
    .icon-5{
        position: relative;
        top:-38rem; 
        left:0rem;
    }
    .icon-5>div{
        position: absolute;
        left:106.7rem;
    }

    /* 内容3 */
    .text-3{
        margin:0 auto;
        width:1288px;
        position: relative;
        margin-bottom:10rem;
    }
    .bj-3{
        margin-top:2rem;
        width: 1288px;
        height: 419px;
        background:url(http://127.0.0.1:3500/img/textbg/bj-3.png);
        position: relative;
        z-index: 2;
    }
    .bj-3 ul {
        margin:0;
        padding:0;
    }
    .bj-3 ul li{
        display: inline-block;
        width: 302px;
        height:340px;
        background: #ffffff;
        border: 2px solid #ffffff;
        position:relative;
        top:2.5rem;
        margin-left: 10px;
        transition:all 0.8s !important;
    }
    .bj-3 ul li:hover{
        position:relative;
        top:1.5rem;
        box-shadow:5px 5px 5px #000;
        cursor: pointer;
    }
    .bj-3 ul li h3{
        margin-top:2rem;
    }
    .icon-3{
        z-index: 1;
        position: absolute;
        top:10rem; 
        left:-12rem;
    }

    /* 地图 */
    .map{
        width:100%;
        height: 88px;
        display: block;
        position: fixed;
        bottom:0%;
        background:rgba(0,0,0,0.5);
        z-index: 9998;
    }
    .mapimg{
        margin-top:-88px;
    }
    .mapwidth{
        width: 1288px;
        margin:0 auto;
    }
    .map ul{
        display:flex;
        list-style: none;
        margin-top:1.5rem;
    }
    .map ul li{
        margin-left: 1rem;
    }
    .map ul li input{
        width:150px;
        border-radius: 10px;
    }
    .ditu{
        width: 100%;
        height: 100px;
        display: flex;
    }
    .distpicker-address-wrapper>>>select{
        width: 120px;
        margin-right: 1rem !important;
        border-radius: 10px !important;
    }
    .form_btn {
        width: 100px;
        border-radius: 10px;
        line-height: 44px;
        background: #30c2b0;
        color: #fff;
        text-align: center;
        font-size: 16px;
    }
    .form_btn:hover{
        cursor: pointer;
    }
    .sem_pop {
        background: rgba(0,0,0,0.6);
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 9999;
    }
    .sem_pop .sem_info1 {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -325px;
        margin-left: -360px;
    }
    .sem_pop .sem_close1 {
        width: 44px;
        height: 44px;
        position: absolute;
        top: 135px;
        right: 60px;
    }
    .sem_pop .sem_back1 {
        width: 328px;
        position: absolute;
        bottom: 76px;
        left: 136px;
    }
    .sem_pop .sem_back1 a{
        display: block;
        width: 328px;
        height: 74px;
    }
    .close img{
        margin-left: 1rem;
        background-size: 40px 40px;
        transition: 0.5s ease-out;
    }
    .close:hover>img{
        transform: rotateZ(360deg);
    }
</style>