<template>
    <div id="main">
        <section>
            <div style="height:80px"></div>
    <!-- /* 面包屑 */ -->
            <div class="here">
                <router-link to="/">首页</router-link>
                <i>></i>
                <router-link to="/design">设计方案</router-link>
                <i>></i>
                <router-link to="/Pro">效果图库</router-link>
                <i>></i>
                <router-link to="">效果详情</router-link>
            </div>
            <div class="start_info">
            <!-- /* 左半部分 */ -->
                <div class="start_info_left">
                    <div class="start_info_ner">
                        <div class="start_info_title">
                            <span>{{list[0].title}}</span>
                            <router-link to="/"><i>床</i></router-link>
                            <router-link to="/"><i>橱柜</i></router-link>
                            <router-link to="/"><i>烤漆</i></router-link>
                            <router-link to="/"><i>现代简约</i></router-link>
                        </div>
                        <div class="start_info_swiper">
                            <div class="big swiper-container swiper-container-horizontal swiper-container-wp8-horizontal">
                                <div class="swiper-wrapper" :style="Wrapp">
                                    <div class="swiper-slide swiper-slide-active" style="width:800px" :class="{on:index===number}" v-for="(item,index) of list" @click="change(index)"  :key="item.index" >
                                        <img :src="item.img_url"  class="h">
                                    </div>
                                </div>
                                <div class="swiper-button-prev" @click="prev"></div>
                                <div class="swiper-button-next" @click="next"></div>
                            </div>
                            <div class="small swiper-container swiper-container-horizontal swiper-container-wp8-horizontal">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide" :class="{on:index===number}" v-for="(item,index) of list" @click="change(index)" :key="item.index" >
                                        <img :src="item.img_url" class="margin-left: -88.5px;">
                                        <span>
                                        <i>{{list[0].title}}</i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper_prev" @click="prev"></div>
                            <div class="swiper_next" @click="next"></div>
                        </div>
                        <div class="start_info_tips">
                                <router-link to="" class="start_info_tips_next" @click.native="ne">下一套图</router-link>
                                <router-link to="" class="start_info_tips_prev" @click.native="pr">上一套图</router-link>
                        </div>
                    </div>
                </div>
            <!-- /* 右半部分 */ -->
                <div class="start_info_right">
            <!-- /* 报名表单 */ -->
                    <div class="start_info_bao">
                        <form class="gallery_bao_box">
                            <div class="start_info_bao_title">
                                <img src="http://127.0.0.1:3500/img/products/gallary/bao_title.png" alt="">
                            </div>
                            <div class="start_info_bao_ner">
                                <div class="start_info_bao_text">
                                    <input name="a_name" id="name" placeholder="请输入您的称呼" v-model="uname" type="text" v-on:keyup.enter="login">
                                </div>
                                <div class="start_info_bao_text">
                                    <input name="a_mobile" id="phone" placeholder="请输入您的手机号码" v-model="phone" type="text" v-on:keyup.enter="login">
                                </div>
                                <div class="start_info_bao_text" style="">
                                    <v-distpicker province="浙江省" city="杭州市" area="西湖区" style=""></v-distpicker>
                                </div>
                                <div class="start_info_bao_text" style="height: auto;padding: 0 8px;box-sizing: border-box;">
                                    <li class="check_case">
                                        <span>定制需求：</span>
                                        <i v-for="(c,index) of cities" :class="{on:arr.includes(index)}" @click="checkedBox(index)" :key="c.index">{{c}}</i>
                                    </li>
                                </div>
                                <div class="start_info_bao_btn" @click="login">提交获取免费报价</div>
                            </div>
                        </form>
                    </div>
            <!-- /* 热门标签 */ -->
                    <div class="start_info_label">
                        <div class="start_info_label_title">热门标签</div>
                        <div class="start_info_label_ner">
                            <router-link to="/gallery?gid=3">主卧</router-link>
                            <router-link to="/gallery?gid=4">榻榻米</router-link>
                            <router-link to="/gallery?gid=5">电视柜</router-link>
                            <router-link to="/gallery?gid=6">餐酒柜</router-link>
                            <router-link to="/gallery?gid=7">入户柜</router-link>
                            <router-link to="/gallery?gid=8">中式</router-link>
                            <router-link to="/gallery?gid=9">日式</router-link>
                            <router-link to="/gallery?gid=10">客厅</router-link>
                            <router-link to="/gallery?gid=11">餐厅</router-link>
                            <router-link to="/gallery?gid=12">全屋</router-link>
                            <router-link to="/gallery?gid=13">橱柜</router-link>
                            <router-link to="/gallery?gid=14">星空灰</router-link>
                            <router-link to="/gallery?gid=15">雅致白</router-link>
                            <router-link to="/gallery?gid=16">浪漫简欧</router-link>
                            <router-link to="/gallery?gid=17">现代简约</router-link>
                        </div>
                    </div>
            <!-- /* 猜你喜欢 */ -->
                    <div class="start_info_like">
                        <div class="start_info_like_title">猜你喜欢</div>
                        <div class="start_info_like_ner">
                            <router-link to="/gallery?pid=3" class="start_info_like_case">
                                <img :src="list[1].galike" alt="" >
                                <i></i>
                            </router-link>
                            <router-link to="/gallery?pid=6" class="start_info_like_case">
                                <img :src="list[2].galike" alt="" >
                                <i></i>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <!-- 弹窗 -->
            <div class="sem_pop pop-wrap" id="defaultBox" v-show="ok">
                <div class="sem_info1">
                    <div class="sem_close1">
                        <a  @click="o">
                            <img src="http://127.0.0.1:3500/img/products/public/close.png">
                        </a>
                    </div> 
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
    components: { VDistpicker},
    data(){
        return{
            pid:this.$route.query.pid,
            cities : ["柜类","橱柜","木门","窗帘"],
            ok:false,
            arr:[],
            uname:"",
            phone:"",
            number:0,
            list:[
                {img_url:"",title:"",galike:""},
                {img_url:"",title:"",galike:""},
                {img_url:"",title:"",galike:""},
            ],
            Wrapp:{
                transform: "translate3d(0px, 0px, 0px)",transitionDuration:"0ms"
            },
            tan:0
        }
    },      
    methods:{
        pr(){
            var pid=this.pid;
            if(pid==1){
                pid=1;
                alert("已经是第一篇文章");
            }else{
                pid-=1;
            }
            this.$router.push('/gallery?pid='+pid);
            this.$router.go(0);
        },
        ne(){
            var pid=this.pid;
            if(pid==27){
                pid=27;
                alert("已经是最后一篇文章");
            }else{
                pid++;
            }
            this.$router.push('/gallery?pid='+pid);
            this.$router.go(0);
        },
        checkedBox(i){
			if(this.arr.includes(i)){
                this.arr=this.arr.filter(function (ele){return ele != i;});
			}else{
                this.arr.push(i);
			}
        },
        go(){
            this.$router.go(0)
        },
        login(){
            var u=this.uname;
            var p=this.phone;
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
        change(index){
            this.number=index;
        },
        next(){
            var tan=this.tan;
            tan-=800;
            this.Wrapp.transform="translate3d("+tan+"px, 0px, 0px)";
            return tan;
        },
        prev(){
            var tan=this.tan;
            if(tan<=0){
                this.Wrapp.transform="translate3d("+tan+"px, 0px, 0px)";
            }
            return tan;
        },
        myImg(){
            var url="http://127.0.0.1:3500/gallary/img?pid="+this.pid;
            this.axios.get(url).then(result=>{
                this.list=result.data.data;
            })
        }
    },
    created(){
        this.myImg();
    }
}
</script>

<style scoped>
    /* 公共样式 */
        *{margin:0;padding: 0;}
        *,
        *::before,
        *::after {
            box-sizing: content-box;
        }
        div{margin:0 auto;display: block}
        i, em {
            font-style: normal;
        }
        #main{
            width: 100%;
            line-height: 160%;
            font-size: 12px;
            background: #f2f2f2
        }
        a {
            color: #333;
            text-decoration: none;
        }
        li, ul {
            list-style: none;
            outside: none;
        }
        li {
            display: list-item;
            text-align: -webkit-match-parent;
        }
        img {
            border: 0;
            vertical-align: middle;
        }
        .start_info{
            width: 1180px;
            margin: 20px auto 0 auto;
            font-family: 微软雅黑;
        }
        input, select, textarea {
            resize: none;
            font-family: "å¾®è½¯é›…é»‘";
            outline: none;
        }
    /* 面包屑 */
        section{
            width: 1180px;
            margin: 0 auto;
            text-align: left;
        }
        .here {
            width: 1180px;
            margin: 0 auto;
            height: 20px;
            line-height: 20px;
            padding: 80px 0 30px 0;
        }
        .here a {
            float: left;
            color: #808080;
        }
        .here a:hover{
                color: #fb811a;
        }
        .here a:nth-last-child(1){
            cursor: auto;
            color: #999;
        }
        .here i {
            float: left;
            width: 14px;
            height: 20px;
        }
    /* 左半部分 */
        .start_info_left {
            width: 840px;
            float: left;
            margin: 0 20px 0 0;
        }
        .start_info_ner {
            width: 800px;
            padding: 20px;
            float: left;
            background: #f2f2f2;
        }
        .start_info_title {
            float: left;
            width: 100%;
            line-height: 20px;
        }
        .start_info_swiper {
            width: 100%;
            float: left;
            margin: 20px 0;
            position: relative;
        }
        .start_info_tips {
            width: 100%;
            float: left;
        }
        .start_info_title span {
            color: #666;
            width: 100%;
            font-size: 16px;
            font-weight: bold;
            float: left;
        }
        .start_info_title i {
            font-size: 12px;
            color: #959595;
            float: left;
            padding-right: 9px;
        }
    /* 右半部分 */
        .start_info_right {
            width: 320px;
            float: left;
        }
    /* 图片部分 */
        .swiper-container-wp8-horizontal, .swiper-container-wp8-horizontal>.swiper-wrapper {
            -ms-touch-action: pan-y;
            touch-action: pan-y;
        }
        .swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
            opacity: .35;
            cursor: auto;
            pointer-events: none;
        }
        .big .swiper-button-prev {
            /* display: none; */
            width: 62px;
            height: 62px;
            margin-top: -30px;
            background: url(http://127.0.0.1:3500/img/products/gallary/big_prev.png) no-repeat center center;
        }
        .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
            left: 10px;
            right: auto;
        }
        .big .swiper-button-next {
            width: 62px;
            height: 62px;
            margin-top: -30px;
            margin-left: 718px;
            background: url(http://127.0.0.1:3500/img/products/gallary/big_next.png) no-repeat center center;
        }
        .swiper-button-next, .swiper-button-prev {
            position: absolute;
            top: 50%;
            width: 27px;
            height: 44px;
            margin-top: -22px;
            z-index: 10;
            cursor: pointer;
            background-size: 27px 44px;
            background-position: center;
            background-repeat: no-repeat;
        }
        .swiper_prev {
            width: 20px;
            cursor: pointer;
            position: absolute;
            height: 133px;
            left: 0;
            margin: 0;
            bottom: 0;
            background: #e5e5e5 url(http://127.0.0.1:3500/img/products/gallary/small_prev.png) no-repeat center center;
            opacity: 1;
        }
        .swiper_next {
            width: 20px;
            cursor: pointer;
            position: absolute;
            height: 133px;
            right: 0;
            margin: 0;
            bottom: 0;
            background: #e5e5e5 url(http://127.0.0.1:3500/img/products/gallary/small_next.png) no-repeat center center;
            opacity: 1;
        }
    /* 大图片 */
        .swiper-container {
            margin: 0 auto;
            position: relative;
            overflow: hidden;
            list-style: none;
            padding: 0;
            z-index: 1;
        }
        .big {
            margin: 0 !important;
            float: left;
            width: 100%;
            height: auto;
        }
        .swiper-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            z-index: 1;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            -webkit-transition-property: -webkit-transform;
            transition-property: -webkit-transform;
            -o-transition-property: transform;
            transition-property: transform;
            transition-property: transform,-webkit-transform;
            -webkit-box-sizing: content-box;
            box-sizing: content-box;
        }
        .big .swiper-slide {
            width: 800px!important;
            height: 600px!important;
            overflow: hidden;
            position: relative;
            background: #f2f2f2!important;
        }
        .big .swiper-slide img {
            max-width: 800px;
            max-height: 600px;
        }
        .swiper-slide .h {
            width: auto;
            height: 100%;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%,0);
        }
    /* 小图片 */
        .small {
            margin: 10px 25px 0 25px !important;
            float: left;
            width: 750px;
            height: auto;
        }
        .small .swiper-slide {
            height: 133px;
            overflow: hidden;
            position: relative;
        }
        .small .swiper-slide {
            width: 177.5px!important;
            margin: 0 5px;
            cursor: pointer;
            background: #f2f2f2 !important;
        }
        .small .swiper-slide img {
            height: 100% !important;
            width: auto !important;
            position: absolute;
            top: 0;
            /* transform: translate(-50%,0); */
        }
        .small .swiper-slide span:hover {
            opacity: 1;
            background: rgba(170, 157, 157, 0.5)
        }
        .small .swiper-slide span {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
        }
        .small .swiper-slide i {
            width: 100%;
            line-height: 40px;
            color: #fff;
            text-align: center;
            font-size: 18px;
            position: absolute;
            top: 50%;
            left: 0;
            margin: -20px 0 0 0;
        }
    /* 收藏 */
        .start_info_tips_next, .start_info_tips_prev {
            float: right;
            margin: 0 0 0 15px;
            border: 1px solid #ddd;
            color: #999;
            line-height: 24px;
            padding: 0 10px;
            cursor: pointer;
        }
        .start_tips_ani {
            position: fixed;
            left: 50%;
            top: 50%;
            background: #f2f2f2;
            z-index: 9999;
            border-radius: 5px;
            display: none;
            padding: 25px 30px;
            font-size: 14px;
            line-height: 20px;
            margin: -35px 0 0 -270px;
            text-align: center;
            width: 160px;
            box-shadow: 0 0 3px #ddd;
        }
        .start_tips_ani.on {
            -webkit-animation: start_tips_ani 2.5s linear;
            -webkit-animation-fill-mode: both;
            display: block;
        }
    /* 报名表单 */
        .start_info_bao {
            width: 280px;
            padding: 0 20px;
            float: left;
            background: #f2f2f2;
        }
        .start_info_bao_title {
            margin: 24px 38px;
            float: left;
        }
        .start_info_bao_ner {
            width: 100%;
            float: left;
            margin: 0 0 20px 0;
        }
        .start_info_bao_text {
            float: left;
            margin: 0 -8px 10px -8px;
            width: 296px;
        }
        .start_info_bao_text input {
            width: 280px;
            margin: 0 8px;
            box-sizing: border-box;
            padding: 0 10px;
            border-radius: 4px;
            border: none;
            height: 40px;
            background: #fafafa;
        }
        .start_info_bao_text .check_case span {
            color: #333;
            font-size: 14px;
            line-height: 30px;
            display: block;
        }
        .start_info_bao_btn {
            width: 100%;
            line-height: 40px;
            background: #30c2b0;
            color: #f2f2f2;
            float: left;
            text-align: center;
            font-size: 16px;
            border-radius: 4px;
            cursor: pointer;
        }
        .start_info_bao_text .check_case i.on {
            color: #f2f2f2;
            background: #64cbc7 url(http://127.0.0.1:3500/img/products/gallary/checked.png) right bottom no-repeat;
        }
        .start_info_bao_text .check_case i:last-child {
            margin-right: 0;
        }
        .start_info_bao_text .check_case i {
            cursor: pointer;
            width: auto;
            margin-right: 5px;
            display: inline-block;
            position: relative;
            font-size: 12px;
            color: #898989;
            line-height: 22px;
            float: left;
            background: #eee url(http://127.0.0.1:3500/img/products/gallary/check.png) right bottom no-repeat;
            padding: 0 19px;
            -webkit-transition: all 0.5s;
            border-radius: 2px;
            overflow: hidden;
            margin-top: 4px;
            margin-right: 10px;
            margin-bottom: 5px;
        }
    /* 热门标签 */
        .start_info_label {
            width: 280px;
            padding: 0 20px;
            float: left;
            margin: 20px 0;
            background: #f2f2f2;
        }
        .start_info_label_title {
            float: left;
            line-height: 60px;
            font-size: 16px;
            font-weight: bold;
            width: 100%;
        }
        .start_info_label_ner a {
            margin: 0 0 8px 8px;
            float: left;
            line-height: 26px;
            text-align: center;
            width: 64px;
            color: #666;
            background: #f1f1f1;
        }
        .start_info_label_ner a:hover{
            background:#30c2b0;
        }
    /* 猜你喜欢 */
        .start_info_like {
            width: 280px;
            padding: 0 20px;
            float: left;
            background: #f2f2f2;
        }
        .start_info_like_title {
            float: left;
            line-height: 60px;
            font-size: 16px;
            font-weight: bold;
            width: 100%;
        }
        .start_info_like_ner {
            float: left;
            width: 290px;
            margin: 0 0 10px -10px;
        }
        .start_info_like_case {
            width: 135px;
            height: 100px;
            overflow: hidden;
            float: left;
            margin: 0 0 10px 10px;
            position: relative;
        }
        .start_info_like_case img {
            width: 100%;
            min-height: 100px;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translate(0,-50%);
        }
        .start_info_like_case i {
            width: 100%;
            height: 100%;
            opacity: 0.5;
            position: absolute;
            top: 0;
            left: 0;
            background: #fff;
        }
        .start_info_like_case i:hover {
            background: transparent
        }
    /* 三级联动 */
        .start_info_bao_text>>>.distpicker-address-wrapper select{
            font-size: 12px;
            float: left;
            margin: 0 0 0 8px;
            height: 40px;
            box-sizing: border-box;
            padding: 0;
            width: 88px;
            border: none;
            border-radius: 4px;
            background: #fafafa
        }
    /* 报名成功 */
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
        .sem_pop .sem_back1 a {
            display: block;
            width: 328px;
            height: 74px;
        }
</style>
