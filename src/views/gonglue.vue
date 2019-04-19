<template>
    <div id="main">
    <section>
        <div class="here">
            <router-link to="/">首页</router-link>
            <i>></i>
            <router-link to="/design">设计方案</router-link>
            <i>></i>
            <router-link to="/renovation">装修攻略</router-link>
            <i>></i>
            <router-link to="">攻略详情</router-link>
        </div>
    <div class="case" >
        <div class="case_title">
            <span>{{list[0].title}}</span><!--标题-->
            <i>
                <em>{{dTime}}</em>
                <em>来源: 索菲亚衣柜官网</em>
            </i>
        </div>
        <div class="case_box1"><!--一层介绍-->
            <div class="box_nar">
                <div class="box_img">
                    <img :src="list[0].pic" alt="img" title="img">
                </div>
                <div class="box_text">
                    <span>
                        <p>{{list[0].about}}</p>
                        <i> </i>
                    </span>
                </div>
            </div>
        </div>
        <div class="reno_text_fan">
            <router-link to="" @click.native="prev" class="prev">
                上一篇
            </router-link>
            <router-link to="" @click.native="next" class="next">
                下一篇
            </router-link>
        </div>
        
        <div class="case_box7"><!--设计表单标题-->
            <div class="case_bt">
                <span>实力设计师团队</span>
                <i>DESIGNER TEAM</i>
            </div>
            <div class="case_line">
                <i></i>
            </div>
            <div class="case_box8_bt">
                为您倾力解读家装定制
            </div>
            <div class="case_box8_text">
                全国专业设计师，联袂打造家装顾问团，为您倾力解读家装定制。尊重您的需求，为您量身定制家居配备。 成全别人，快乐自己，索菲亚实力设计师团队为千万家庭实现家居梦想。
            </div>
            <div class="case_box8_nar"><!--设计提交表单-->
                <div class="case_box8_left">
                    <img src="http://127.0.0.1:3500/img/gonglue/1.jpg" alt="">
                </div>
                <div class="case_box8_right">
                    <div class="case_box8_bts">
                        设计师免费量尺
                    </div>
                    <form class="case_form">
                        <div class="form_txt">
                            <input name="a_name" id="name" placeholder="请输入您的称呼" v-model="uname" type="text" v-on:keyup.enter="login">
                        </div>
                        <div class="form_txt">
                            <input name="a_mobile" id="phone" placeholder="请输入您的手机号码" v-model="phone" type="text" v-on:keyup.enter="login">
                        </div>
                        <div class="form_txt">
                            <v-distpicker province="浙江省" city="杭州市" area="西湖区" ></v-distpicker>
                        </div>
                        <div class="form_txt">
                            <li class="check_case">
                                <span>定制需求：</span>
                                <i v-for="(c,index) of cities" :class="{on:arr.includes(index)}" @click="checkedBox(index)" :key="c.index">{{c}}</i>
                            </li>
                        </div>
                        <div class="form_btn"   @click="login">提交申请</div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </section>
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
    components: { VDistpicker},
    data(){
        return {
            gid:this.$route.query.gid,
            cities : ["柜类","橱柜","木门","窗帘"],
            ok:false,
            uname:'',
            phone:'',
            arr:[],
            dTime:'',
            list:[{list:'',title:'',pic:'',time:''}]
        }
    },
    methods:{
        prev(){
            var gid=this.gid;
            if(gid==1){
                gid=1;
                alert("已经是第一篇文章");
            }else{
                gid-=1;
            }
            this.$router.push('/gonglue?gid='+gid);
            this.$router.go(0);
        },
        next(){
            var gid=this.gid;
            if(gid==24){
                gid=24;
                alert("已经是最后一篇文章");
            }else{
                gid++;
            }
            this.$router.push('/gonglue?gid='+gid);
            this.$router.go(0);
        },
        checkedBox(i){
			if(this.arr.includes(i)){
                this.arr=this.arr.filter(function (ele){return ele != i;});
			}else{
                this.arr.push(i);
			}
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
        infor(){
            var url="http://127.0.0.1:3500/gonglue/about?gid="+this.gid;
            this.axios.get(url).then(result=>{
                this.list=result.data.data;
                var time=this.list[0].time;
                var d = new Date(time);
                this.dTime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ';
            })
        },
        o(){
            this.ok=false;
        }
    },
    created(){
        this.infor();
    }
}
</script>
<style scoped>
/* public */
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
            background: #f1f2f3;
            line-height: 160%;
            font-size: 12px;
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
    .case{
        width: 1180px;
        padding: 10px 40px;
        background: #fff;
        margin-top:80px;
        margin: 20px auto 0 auto;
        font-size: 12px;
    }
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
        padding: 120px 0 0 0;
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
    img {
        padding: 0;
        margin: 0;
        vertical-align: top;
        border: none;
    }
    .clear {
        clear: both;
        height: 0;
        width: 100%;
    }
    /* 案例主题 */
    .case_title{
        width: 100%;
        display: inline-block;
        padding-bottom: 20px;
        border-bottom: 1px dashed #ccc;
    }
    .case_title span {
        width: 100%;
        float: left;
        font-size: 32px;
        font-weight: bold;
        line-height: 80px;
        padding-top: 15px;
        color: #444;
        float: left;
    }
    .case_title i {
        line-height: 20px;
        float: left;
        width: 100%;
        color: #888;
    }
    .case_title i em {
        float: left;
        margin-right: 25px;
    }
/* body2 */
    .case .case_box1 {
        width: 1060px;
        padding: 20px;
        margin: 30px 0 20px 0;
        display: inline-block;
        background: url(http://127.0.0.1:3500/img/products/public/a11.jpg) left top;
    }
    .case .case_box1 .box_nar {
        padding: 30px;
        background: #fff;
        float: left;
        width: 1000px;
    }
    .case .case_box1 .box_img {
        width: 510px;
        height: 330px;
        float: left;
    }
    .case .case_box1 .box_img img {
        width: 510px;
        height: 330px;
    }
    .case .case_box1 .box_text {
        width: 380px;
        margin: 0 40px 0 70px;
        float: left;
        height: 330px;
        line-height: 330px;
    }
    .case .case_box1 .box_text span {
        width: 300px;
        padding: 40px;
        display: inline-block;
        vertical-align: middle;
        background: url(http://127.0.0.1:3500/img/products/public/a12.jpg) no-repeat top left;
        position: relative;
    }
    .case .case_box1 .box_text span p {
        width: 100%;
        float: left;
        font-size: 16px;
        color: #666;
        line-height: 30px;
        max-height: 240px;
        overflow: hidden;
    }
    .case .case_box1 .box_text span i {
        position: absolute;
        width: 26px;
        height: 26px;
        background: url(http://127.0.0.1:3500/img/products/public/a13.jpg) no-repeat top left;
        right: 0;
        bottom: 0;
    }
    /* 设计表单 */
    .case_box7 {
        float: left;
        width: 100%;
    }
    .case_box7 .case_bt {
        width: 50%;
        height: 100px;
        background: #eaeaea;
        float: left;
        margin: 0 25%;
    }
    .case_box7 .case_bt span {
        color: #30c2b0;
        font-weight: bold;
        font-size: 42px;
        line-height: 50px;
        float: left;
        width: 100%;
        text-align: center;
        margin-top: 15px;
    }
    .case_box7 .case_bt i {
        color: #333;
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        float: left;
        width: 100%;
        text-align: center;
    }
    .case_box7 .case_line {
        width: 100%;
        height: 10px;
        background: #4d4d4d;
        margin: 5px 0;
        float: left;
    }
    .case_box7 .case_line i {
        width: 50%;
        height: 20px;
        background: #30c2b0;
        margin: -5px 25%;
        float: left;
    }
    .case_box8_bt {
        width: 980px;
        margin: 40px 60px 0 60px;
        float: left;
        line-height: 50px;
        font-size: 36px;
        color: #30c2b0;
        font-weight: bold;
    }
    .case_box8_text {
        width: 1060px;
        margin: 5px 60px;
        float: left;
        line-height: 26px;
        font-size: 16px;
        color: #777;
    }
    .case_box8_nar {
        width: 980px;
        margin: 40px 60px;
        float: left;
    }
    .case_box8_left{
        float: left;
    }
    .case_box8_right {
        float: right;
        width: 300px;
        padding: 25px 20px 0 20px;
        background: #fff;
        margin-right: -80px
    }
    .case_box8_bts {
        width: 100%;
        float: left;
        font-size: 24px;
        font-weight: bold;
        color: #30c2b0;
        line-height: 50px;
    }
    .form_txt, .form_yan {
        width: 100%;
        margin-top: 30px;
        float: left;
        height: 44px;
    }
    .form_txt input {
        width: 280px;
        height: 44px;
        border-radius: 4px;
        background: #f5f5f5;
        padding: 0 15px;
        border: none;
        line-height: 44px;
    }
    .form_txt .check_case span {
        color: #333;
        font-size: 17px;
        line-height: 20px;
        display: block;
        margin-bottom: 20px;
    }
    .form_txt .check_case i.on {
        color: #fff;
        background: #64cbc7 url(http://127.0.0.1:3500/img/products/public/checked.png) right bottom no-repeat;
    }
    .form_txt .check_case i:last-child {
        margin-right: 0;
    }
    .form_txt .check_case i {
        cursor: pointer;
        width: auto;
        margin-right: 5px;
        display: inline-block;
        position: relative;
        font-size: 12px;
        color: #898989;
        line-height: 22px;
        float: left;
        background: #eee url(http://127.0.0.1:3500/img/products/public/check.png) right bottom no-repeat;
        padding: 0 20px;
        -webkit-transition: all .5s;
        border-radius: 2px;
        overflow: hidden;
        margin-right: 10px;
        margin-bottom: 15px;
    }
    .form_btn {
        width: 100%;
        border-radius: 4px;
        line-height: 44px;
        background: #30c2b0;
        color: #fff;
        text-align: center;
        font-size: 16px;
        float: left;
        margin: 25px 0 25px 0;
    }
    /* 弹窗 */
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
    .form_txt>>>.distpicker-address-wrapper select{
        font-size: 16px;
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

/* 上一篇 */
    .reno_text_fan {
        font-weight: bold;
        font-size: 20px;
    }
    .reno_text_fan .next {
        float: right;
    }
</style>
