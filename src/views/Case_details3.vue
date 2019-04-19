<template>
    <div id="main">
    <section>
        <div class="here">
            <router-link to="/">首页</router-link>
            <i>></i>
            <router-link to="/design">设计方案</router-link>
            <i>></i>
            <router-link to="/customized">定制案例</router-link>
            <i>></i>
            <router-link to="">案例详情</router-link>
        </div>
    <div class="case" >
        <div class="case_title">
            <span>{{lis[0].title}}</span><!--标题-->
            <i>
                <em>{{dTime}}</em>
                <em>来源: 索菲亚衣柜官网</em>
            </i>
        </div>
        <div class="case_box1"><!--一层介绍-->
            <div class="box_nar">
                <div class="box_img">
                    <img :src="info[0].pic" alt="img" title="img">
                </div>
                <div class="box_text">
                    <span>
                        <p>{{lis[0].intro}}</p>
                        <i> </i>
                    </span>
                </div>
            </div>
        </div>
        <div class="case_box2"><!--内容详解-->
            <div class="case_bt">
                <span>业主需求</span>
                <i>OWNER DEMAND</i>
            </div>
            <div class="case_text">
                <span>
                    “{{list[0]}}”
                </span>
                <i>——{{lis[0].owner}}</i>
            </div>
            <div class="case_img">
                <img :src="info[1].pic" alt="">
            </div>
        </div>
        <div class="case_box3"><!--设计理念-->
            <div class="case_bt">
                <span>设计理念</span>
                <i>DESIGN IDEA</i>
            </div>
            <div class="case_head">
                <img :src="info[2].pic" title="img" alt="img">
            </div>
            <div class="case_text">
                <span>
                    {{list[1]}}
                </span> 
            </div>
        </div>
        <div class="case_box4"><!--效果图介绍-->
            <div class="case_line"></div>
            <div class="case_bt">
                <span>空间格局</span>
                <i>SPATIAL PATTERN</i>
            </div>
            <div class="case_nar">
                <div class="case_bts">
                    <em>01</em>
                    <i>{{lis[0].functions}}</i>
                </div>
                <div class="case_img">
                    <div :class="{on:index===number}" v-for="(item,index) of item" @click="change(index)" :key="item.index">
                        <img :src="item.pic" alt="">
                        <i>{{yy[0]}}</i>
                    </div>
                </div>
                <div class="case_tab">
                    <div :class="{on:index===number}" v-for="(item,index) of item" @click="change(index)" :key="item.index" >
                        <img :src="item.pic" >
                        <i></i>
                    </div>
                </div>
                <div class="case_text">
                    <div :class="{on:index===number}" v-for="(item,index) of art" @click="change(index)" :key="item.index">
                        {{art[0]}}
                        {{art[1]}}
                    </div>
                </div>
            </div>
        </div>
        <div class="case_box5"><!-- 编辑点评-->
            <div class="case_bt">
                <span>编辑点评</span>
                <i>SPATIAL FRAMEWORK</i>
            </div>
            <div class="case_text">
                {{yy[1]}}
            </div>
        </div>
        <p><br></p>
        <div class="case_box6"><!--点赞-->
            <div class="case_box6_like" id="case_like" @click="top">喜欢({{lis[0].love}})</div>
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
                    <img src="http://127.0.0.1:3500/img/products/public/e1.jpg" alt="">
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
                        <div class="form_txt clear"></div>
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
        <div class="case_footer"><!--跳转链接-->
            <div>
                <span>
                    <i>装修攻略推荐</i>
                </span>
                <router-link to="/Case_details3?productId=1" target="_blank">欧派和索菲亚哪个好？这里详解两者的优势区别</router-link>
				<router-link to="/Case_details3?productId=2" target="_blank">索菲亚衣柜贵不贵？定做一个衣柜价格是多少？</router-link>
				<router-link to="/Case_details3?productId=3" target="_blank">索菲亚全屋定制家具多少钱？没你想象那么贵</router-link>
				<router-link to="/Case_details3?productId=4" target="_blank">全屋定制一般多少钱 全屋定制大概多少钱</router-link>
				<router-link to="/Case_details3?productId=5" target="_blank">真相揭秘 定制衣柜价格为何那么贵?</router-link>
            </div>
            <div>
                <span>
                    <i>设计师案例推荐</i>
                </span>
				<router-link to="/Case_details3?productId=1" target="_blank">三居室10平米客房改造  这样装修3房会变6房哦</router-link>
				<router-link to="/Case_details3?productId=2" target="_blank">一居室14平米单身公寓  震惊！这才叫生活</router-link>
				<router-link to="/Case_details3?productId=3" target="_blank">原木简约日式客厅装修  巧用空间演绎极致休闲</router-link>
				<router-link to="/Case_details3?productId=4" target="_blank">37平米单间变身多功能套间，北欧风一居室公寓改造太棒了！</router-link>
				<router-link to="/Case_details3?productId=5" target="_blank">一居室17平米全屋改造  功能完善三口之家很满足</router-link>
            </div>
            <div class="clear"></div>
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
            productId:this.$route.query.productId,
            cities : ["柜类","橱柜","木门","窗帘"],
            arr:[],
            list:[{text:''}],
            number:0,
            point:0,
            uname:"",
            phone:"",
            info:[
                {pic:''},
                {pic:''},
                {pic:''}
            ],
            item:[
                {pic:''},
                {pic:''},
                {pic:''}
            ],
            lis:[
                {dTime:'',functions:'',idea:'',intro:'',love:'',orDemand:'',owner:'',title:''}
            ],
            yy:[],
            art:[],
            ok:false,
            dTime:''
        }
    },
    methods:{
        change(index){
            this.number=index;
        },
        checkedBox(i){
			if(this.arr.includes(i)){
				//includes()方法判断是否包含某一元素,返回true或false表示是否包含元素，对NaN一样有效
				//filter()方法用于把Array的某些元素过滤掉，filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素：生成新的数组
                this.arr=this.arr.filter(function (ele){return ele != i;});
				//this.arr=this.arr.filter((ele)=>ele!=i);
				//filter()为假时删除
			}else{
                this.arr.push(i);
			}
		},
        top(){
            this.lis[0].love++;
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
        infor(){
            var url="http://127.0.0.1:3500/casedetails/head?productId="+this.productId;
            this.axios.get(url).then(result=>{
                this.info=result.data.data;
            });
            var url="http://127.0.0.1:3500/casedetails/body?productId="+this.productId;
            this.axios.get(url).then(result=>{
                this.item=result.data.data;
            })
            var url="http://127.0.0.1:3500/casedetails/foot?pid="+this.productId;
            this.axios.get(url).then(result=>{
                this.lis=result.data.data;
                var str=this.lis[0].idea;
                var stt=this.lis[0].orDemand;
                this.list=stt.split("@");
                this.yy=str.split("@");
                this.art=this.yy.splice(0,3);
                var time=this.lis[0].dTime;
                console.log(time);
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
/* body2 */
.case .case_box2 {
    display: inline-block;
    position: relative;
    margin-top: 90px;
    width: 100%;
    padding-bottom: 40px;
}
.case .case_box2 .case_bt {
    position: absolute;
    top: 150px;
    left: 0px;
    font-weight: bold;
    text-align: center;
    width: 220px;
}
.case .case_box2 .case_bt span {
    font-size: 38px;
    color: #30c2b0;
    width: 100%;
    float: left;
    line-height: 40px;
}
.case .case_box2 .case_bt i {
    font-size: 16px;
    color: #b2b2b2;
    width: 100%;
    float: left;
}
.case .case_box2 .case_text {
    width: 460px;
    height: 380px;
    float: left;
    border: 2px solid #eee;
    margin: 60px 0 0 100px;
}
.case .case_box2 .case_text span {
    text-indent: 2rem;
    font-size: 16px;
    line-height: 30px;
    float: left;
    width: 480px;
    margin: 60px 60px 0 -80px;
    padding: 120px 0 0 0;
    background: #fff;
}
.case .case_box2 .case_text i {
    text-indent: 2rem;
    text-align: right;
    font-size: 16px;
    line-height: 30px;
    float: left;
    width: 480px;
    margin: 0 60px 0 -80px;
    background: #fff;
}
.case .case_box2 .case_img {
    position: absolute;
    width: 400px;
    height: 300px;
    bottom: 82px;
    right: 60px;
}
.case .case_box2 .case_img img {
    width: 100%;
    height: 100%;
}
/* body3 */
.case .case_box3{
    margin: 20px 0 50px 0;
    display: inline-block;
    width: 100%;
    position: relative;
}
.case .case_box3 .case_bt {
    position: absolute;
    top: 80px;
    right: 58px;
    font-weight: bold;
    text-align: center;
    width: 220px;
}
.case .case_box3 .case_bt span {
    font-size: 38px;
    color: #30c2b0;
    width: 100%;
    float: left;
    line-height: 40px;
}
.case .case_box3 .case_bt i {
    font-size: 16px;
    color: #b2b2b2;
    width: 100%;
    float: left;
}
.case .case_box3 .case_head {
    margin: 5px 50px -5px 50px;
    float: left;
    width: 320px;
    height: 320px;
    position: relative;
}
.case .case_box3 .case_head img {
    border-radius: 50%;
    position: absolute;
    top: -5px;
    left: 0;
    width: 320px;
    height: 320px;
}
.case .case_box3 .case_text {
    width: 460px;
    height: 330px;
    float: left;
    border: 2px solid #eee;
    margin: -10px 0 0 50px;
}
.case .case_box3 .case_text span {
    text-indent: 2rem;
    font-size: 16px;
    line-height: 30px;
    float: left;
    width: 480px;
    margin: 60px -70px 0 50px;
    padding: 120px 0 30px 0;
    background: #fff;
}
/* price */
.case .case_box4 {
    margin: 20px 0 50px 0;
    display: inline-block;
    width: 100%;
    position: relative;
}
.case .case_box4 .case_line {
    width: 100%;
    height: 10px;
    background: #4d4d4d;
    margin: 100px 0 50px 0;
    float: left;
}
.case .case_box4 .case_bt {
    width: 540px;
    left: 50%;
    margin-left: -270px;
    top: 0;
    position: absolute;
    height: 97px;
    background: #eaeaea;
    border-bottom: 16px solid #30c2b0;
    text-align: center;
}
.case .case_box4 .case_bt span {
    float: left;
    width: 100%;
    margin-top: 15px;
    line-height: 50px;
    font-size: 42px;
    font-weight: bold;
    color: #30c2b0;
}
.case .case_box4 .case_bt i {
    float: left;
    width: 100%;
    line-height: 26px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
}
.case .case_box4 .case_nar {
    margin: 0 130px;
    float: left;
    width: 838px;
    border: 1px solid #ddd;
    padding: 34px 0 36px 0;
    position: relative;
}
.case .case_box4 .case_bts {
    width: 340px;
    height: 64px;
    margin-right: 500px;
    background: url(http://127.0.0.1:3500/img/products/public/p1.png) no-repeat top left;
    float: left;
}
.case .case_box4 .case_bts em {
    display: none;
}
.case .case_box4 .case_bts i {
    margin-left: 40px;
    padding-left: 27px;
    font-weight: bold;
    font-size: 22px;
    line-height: 58px;
    color: #fff;
    background: url(http://127.0.0.1:3500/img/products/public/i1.png) no-repeat center left;
}
.case .case_box4 .case_img {
    width: 550px;
    position: absolute;
    left: 340px;
    top: 34px;
}
.case .case_box4 .case_img div {
    float: left;
    width: 100%;
    position: relative;
    display: none;
    height: 412px;
}
.case .case_box4 .case_img div img {
    width: 100%;
    height: 412px;
}
.case .case_box4 .case_img div i {
    width: 100%;
    line-height: 36px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    background: rgba(0,0,0,.7);
    position: absolute;
    bottom: 0px;
    left: 0;
}
.case .case_box4 .case_img div.on {
    display: block;
}
.case .case_box4 .case_tab {
    margin: 16px 75px 0 75px;
    float: left;
    width: 190px;
}
.case .case_box4 .case_tab div {
    float: left;
    position: relative;
    width: 100%;
    margin: 26px 0 0 0;
    height: 142px;
    cursor: pointer;
}
.case .case_box4 .case_tab div img {
    width: 100%;
    height: 142px;
}
.case .case_box4 .case_tab div i {
    display: none;
    position: absolute;
    top: 50%;
    right: -9px;
    margin-top: -6px;
    width: 6px;
    height: 12px;
    background: url(http://127.0.0.1:3500/img/products/public/logo.png) no-repeat center center;
}
.case .case_box4 .case_tab div.on {
    border: 3px solid #f7c25e;
    margin: 23px -3px -3px -3px;
}
.case .case_box4 .case_text {
    width: 460px;
    line-height: 30px;
    font-size: 16px;
    color: #444;
    float: left;
    margin: 378px 0 0 0;
}
.case .case_box4 .case_text div {
    display: none;
    width: 100%;
    float: left;
}
.case .case_box4 .case_text div.on {
    display: block;
}
.case .case_box5 {
    margin: 50px 70px 20px 70px;
    display: inline-block;
    width: 960px;
    position: relative;
}
.case .case_box5 .case_bt {
    width: 958px;
    border: 2px solid #333;
    border-right: none;
    height: 56px;
    float: left;
    position: relative;
    z-index: 10;
}
.case .case_box5 .case_bt span {
    line-height: 40px;
    padding: 0 20px;
    position: absolute;
    top: -20px;
    left: 86px;
    background: #30c2b0;
    color: #fff;
    font-size: 24px;
}
.case .case_box5 .case_bt i {
    display: none;
}
.case .case_box5 .case_text {
    background: #fff;
    float: left;
    margin: -15px 0 0 65px;
    line-height: 30px;
    font-size: 16px;
    width: 870px;
    padding-left: 25px;
    position: relative;
    z-index: 20;
}
.case_box6 {
    float: left;
    width: 980px;
    margin: 30px 60px;
}
.case_box6_like {
    width: 150px;
    height: 42px;
    line-height: 42px;
    color: #fff;
    border-radius: 4px;
    text-align: center;
    margin-left: 20px;
    float: right;
    background: #11eeaa;
    font-size: 16px;
    cursor: pointer;
}
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
    width: 980px;
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
.case_box8_left {
    float: left;
}
.case_box8_right {
    float: right;
    width: 240px;
    padding: 25px 20px 0 20px;
    background: #fff;
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
    margin-top: 10px;
    float: left;
    height: 44px;
}
.form_txt input {
    width: 210px;
    height: 44px;
    border-radius: 4px;
    background: #f5f5f5;
    padding: 0 15px;
    border: none;
    line-height: 44px;
}
.form_txt .check_case span {
    color: #333;
    font-size: 14px;
    line-height: 30px;
    display: block;
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
    padding: 0 14px;
    -webkit-transition: all .5s;
    border-radius: 2px;
    overflow: hidden;
    margin-top: 4px;
    margin-right: 10px;
    margin-bottom: 5px;
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
/* 推荐 */
.case_footer{
    width: 100%;
    float: left;
    padding-bottom: 10px;
}
.case_footer div {
    width: 460px;
    float: left;
    margin-left: 60px;
}
.case_footer div span {
    width: 100%;
    border-bottom: 1px solid #ddd;
    float: left;
    margin-bottom: 15px;
}
.case_footer div span i {
    line-height: 44px;
    border-bottom: 3px solid #30c2b0;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: -1px;
    float: left;
}
.case_footer div a {
    line-height: 40px;
    font-size: 14px;
    float: left;
    width: 100%;
}
.case_footer div a:hover{ color: #30c2b0}
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
    height: 44px;
    border-radius: 4px;
    background: #f5f5f5;
    border: none;
    padding: 0 15px;
    font-size: 15px;
}
.form_txt>>>.distpicker-address-wrapper select:first-child{
    width: 100%;
}
.form_txt>>>.distpicker-address-wrapper select:nth-child(2){
    width: 115px;
}
.form_txt>>>.distpicker-address-wrapper select:last-child{
    width: 115px;
    float: right;
}
select{
    outline: none;
    cursor: pointer;
    -webkit-appearance: none;
}
</style>
