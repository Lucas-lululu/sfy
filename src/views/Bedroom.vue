<template>
    <div>
        <div class="bedroom">
                <!-- 一楼大图 -->
            <div class="bedroom_01"></div>
            <!-- box -->
            <div class="sign-box">
                <div class="sign-box-content">
                    <div class="sign-box-bg ">
                        <img src="http://127.0.0.1:3500/img/bedroom/ws-b1.png" alt="">
                    </div>
                    <div class="sign-box-main">
                        <div class="sign-box-form fl">
                            <form class="form-main-01">
                                <input type="text" id="uname" v-model="uname" placeholder="请填写您的姓名" class="input_text username">
                                <input  type="text" id="uphone" v-model="uphone" placeholder="请填写您的电话" class="input_text mobile">
                                <!-- <v-distpicker province="广东省" city="广州市" area="海珠区"></v-distpicker> -->
                                <div class="select-item">
                                
                                    <ul>
                                        <li  id="list1" v-for="(c,index) of list">
                                            <span @click="check(index)"></span>
                                            <div class="img_check" :class="{down:arr.includes(index)}" @click="check(index)">
                                                <img src="http://127.0.0.1:3500/img/study/check.png" alt="">
                                            </div>
                                            <i>{{c}}</i>
                                        </li>
                                    </ul>
                                </div>
                                <div class="study_btn">
                                    <a href="javascript:;" @click="change">预约申请</a>
                                </div>
                            </form>

                            <div class="sem_pop pop-wrap" v-show="ok">
                            <div class="sem_info1">
                                <div class="sem_close1">
                                    <a  @click="o">
                                        <img src="http://127.0.0.1:3500/img/study/_20190325145525.png">
                                    </a>
                                </div> 
                                <img src="http://127.0.0.1:3500/img/study/_20190325145458.png">
                                <div class="sem_back1">
                                    <router-link to="/" target="_blank"></router-link>
                                </div>
                            </div>
                        </div>

                        </div>
                        <!--图上的字 -->
                        <div class="sign-box-details">
                            <div class="sign-tips">注：以上服务全国统一，配送、设计仅极少区域收费， <br>具体可咨询当地门店或
                                <a href="javascript:;" class="wapleyu">线上客服</a>
                            </div>
                        </div>
                        <!-- 结束 -->
                    </div>
                    


                </div>
            </div>
            <!-- 第三层 -->
            <div class="bedroom_02">
                <div class="bedroom_02_01">
                    <div class="bedroom_02_title">拒绝窄小，卧要大的才舒服</div>
                    <div class="bedroom_02_line">
                        <span>
                            <i></i>
                            <i></i>
                            <i></i>
                        </span>
                        <em></em>
                    </div>
                    <div class="bedroom_02_text">
                        我们善于搞大你的空间，一体化的定制设计，让小卧室不再功能单一、拥挤压抑；<br>
                        缜密、合理的规划，满足你的无限居住需求。
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="bedroom_02_02"></div>
            </div>
            <!-- 第四层 -->
            <div class="bedroom_03">
                <div class="bedroom_03_box">
                    <div class="bedroom_03_case">
                        <div class="">
                            <img src="http://127.0.0.1:3500/img/bedroom/ws-d1.jpg" alt="">
                        </div>
                        <span>置顶设计 · 强化储能</span>
                        <em></em>
                        <i>收纳添一点</i>
                    </div>
                    <div class="bedroom_03_case">
                        <div class="">
                            <img src="http://127.0.0.1:3500/img/bedroom/ws-d2.jpg" alt="">
                        </div>
                        <span>塌床一体 · 一物几用</span>
                        <em></em>
                        <i>功能强一点</i>
                    </div>
                    <div class="bedroom_03_case">
                        <div class="">
                            <img src="http://127.0.0.1:3500/img/bedroom/ws-d3.jpg" alt="">
                        </div>
                        <span>墙面利用 · 节省空间</span>
                        <em></em>
                        <i>扩容多一点</i>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <!-- 第五层 -->
            <div class="bedroom_04">
                <div class="bedroom_04_01">
                    <div class="bedroom_04_title">倍感舒逸，卧有卧风格</div>
                    <div class="bedroom_02_line">
                        <span>
                            <i></i>
                            <i></i>
                            <i></i>
                        </span>
                    </div>
                    <div class="bedroom_04_text">多样的风格，新颖的设计搭配，满足你不一样的生活需求。这里有浪漫的欧式风格，也有清新的田园风格，还有复古的中式风格，更有流行的简约风格......</div>
                    <div class="bedroom_04_add">
                        <a href="javascript:;">
                            <img src="http://127.0.0.1:3500/img/bedroom/ws-e1.png" alt="">
                        </a>
                    </div>
                </div>
                <div class="bedroom_04_02">
                    <img src="http://127.0.0.1:3500/img/bedroom/ws-e2.jpg" alt="">
                </div>
            </div>
            <div class="bedroom_05">
                <div class="bedroom_02_01">
                    <div class="bedroom_02_title">大、美、多，卧能轻松变废为宝</div>
                    <div class="bedroom_02_line">
                        <span>
                            <i></i>
                            <i></i>
                            <i></i>
                        </span>
                        <em></em>
                    </div>
                    <div class="bedroom_02_text">
                        无惧户型奇异，再鸡肋的空间都有妙招相救。
                    </div>  
                    <div class="clearfix"></div>
                </div>
                <div class="bedroom_05_02"></div>
            </div>
            <!-- 第七层 -->
            <div class="bedroom_06">
                <div class="bedroom_06_box">
                    <div class="bedroom_06_case">
                        <div>
                            <img src="http://127.0.0.1:3500/img/bedroom/ws-g1.jpg" alt="">
                        </div>
                        <span>梳妆·办公·收纳<br>利用高</span>
                        <em></em>
                        <i>转交空间秒变大</i>
                    </div>
                    <div class="bedroom_06_case">
                        <div>
                            <img src="http://127.0.0.1:3500/img/bedroom/ws-g2.jpg" alt="">
                        </div>
                        <span>休闲·品茶·阅读<br>惬意多</span>
                        <em></em>
                        <i>飘窗空间瞬变美</i>
                    </div>
                    <div class="bedroom_06_case">
                        <div>
                            <img src="http://127.0.0.1:3500/img/bedroom/ws-g3.jpg" alt="">
                        </div>
                        <span>衣物·被褥·枕头<br>都能纳</span>
                        <em></em>
                        <i>凹陷空间储物多</i>
                    </div>
                    <div></div>
                </div>
            </div>
                    <div class="clearfix"></div>
                    <div class="study_06">
                        <table></table>
                        <a href="javascript:;">
                            <div class="study_06_title">品味生活，从书房开始</div>
                            <div class="study_06_line"></div>
                            <div class="study_06_text">Taste life, start from the study</div>
                        </a>
                    </div>
                    <div class="study_06_more">
                        <a href="javascript:;"></a>
                        <a @click="sidebartop">more</a>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
    </div>
</template>
<script>
// import VDistpicker from 'v-distpicker'
export default {
    //  components: { VDistpicker },
     data() {
         return {
             list:["柜类","橱柜","厨房","阳台"],
             arr:[],
              ok:false,
              uname:'',
              uphone:""
         }
     },
     methods: {
        check(i){
            if(this.arr.includes(i)){
                this.arr=this.arr.filter((ele)=>ele!=i);
            }else{
                this.arr.push(i);
            }
        },
        change(){
            if (!this.uname){
                alert("名称不能为空");
                return;
            }
            if (!this.uphone){
                alert("电话不能为空");
                return;
            }
            this.ok="true";
        },
        o(){
            this.ok=false;
        },
        sidebartop(){
            document.documentElement.scrollTop-=15;
            if(document.documentElement.scrollTop>=900){
                var c=setTimeout(()=>this.sidebartop(),1);
            }else{
                clearTimeout(c);
            }
        }
     },
     created() {
        // this.into();
    },
}
</script>
<style scoped>
    .clearfix::after {
        display: block;
        clear: both;
        content: "";
    }
    .bedroom{
        width: 100%;
        min-width: 1200px;
    }
    .bedroom_01{
        width: 100%;
        height: 890px;
        background: url(http://127.0.0.1:3500/img/bedroom/ws-a1.jpg);
        opacity:1;
    }
    .sign-box {
        margin: 68px 0 34px;
    }
    .sign-box .sign-box-content {
        width: 1084px;
        position: relative;
    }
    .sign-box .sign-box-main {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .sign-box-bg>img{
        margin-left: 414px;
        margin-right: auto;
    }
    /* 表单 */
    .form-main-01{
        width: 423px;
        margin-left: 471px;
        margin-top: 252px;
        height: 100%;
        position: relative;
    }
    .input_text {
        display: block;
        float: left;
        width: 100%;
        height: 54px;
        padding-left: 13px;
        padding-right: 10px;
        margin-bottom: 10px;
        font-size: 20px;
        color: #414242;
        background: #edeef2;
        border: 1px solid #a3a9aa;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        position: relative;
        z-index: 6;
    }
    /* .select-item{
        width: 100%;
        height: 27px;
        font-size: 19px;
        line-height: 27px;
        color: #414242;
        margin-top: 13px;
    } */
    .select-item>span {
        position: absolute;
        vertical-align: top;
        margin-right: 18px;
        font-weight: 600;
        margin-top: 13px;
        font-size: 19px;
    }

    .select-item ul {
        display: inline-block;
        vertical-align: top;
        list-style: none;
    }
    .select-item ul li {
        float: left;
        position: relative;
        padding-left: 35px;
        margin-right: 22px;
        /* cursor: pointer; */
    }
    .select-item ul li span {
        display: inline-block;
        width: 24px;
        height: 24px;
        position: absolute;
        top: 50%;
        margin-top: -12px;
        left: 0;
        background: #fff;
        border: 1px solid #6b6b6b;
        cursor: pointer;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .select-item ul li span:first-child{
        margin-left: 10px;
    }
    .study_btn{
        width: 100%;
        height: auto;
        float: left;
        text-align: center;
    }
    .study_btn a {
        width: 314px;
        height: 64px;
        line-height: 64px;
        background: #443e3b;
        color: #fff;
        font-size: 26px;
        text-align: center;
        display: inline-block;
        border-radius: 4px;
        margin-left: 22px;
        text-decoration: none;
        margin-top:23px;
    }

    .sign-box-details {
        margin-left: 120px;
        margin-top: 430px;
    }
    .sign-box-details .sign-tips {
        font-size: 16px;
        color: #414242;
        line-height: 26px;
        margin-top: -413px;
        margin-left: 440px;
        width: 100%;
    }
    .sign-box-details .sign-tips a {
        color: #000;
        font-weight: 600;
        cursor: pointer;
        border-bottom: 1px solid #676767;
        text-decoration: none;
    }

    /* 第三层 */
    .bedroom_02_01 {
        width: 1200px;
        margin: 0 auto;
        padding: 50px 0;
    }
    .bedroom_02_title {
        width: 100%;
        color: #333;
        text-align: center;
        font-size: 34px;
        line-height: 40px;
    }
    .bedroom_02_line {
        width: 100%;
        height: 3px;
        margin: 30px 0;
        position: relative;
    }
    .bedroom_02_text {
        width: 100%;
        color: #737373;
        text-align: center;
        font-size: 16px;
        line-height: 30px;
    }
    .bedroom_02_line span {
        width: 46px;
        height: 3px;
        padding: 0 5px;
        position: absolute;
        top: 0;
        left: 50%;
        margin: 0 0 0 -28px;
        background: #f5f5f5;
    }
    .bedroom_02_line i {
        width: 3px;
        height: 3px;
        border-radius: 50%;
        float: left;
        background: #737373;
        margin: 0 0 0 10px;
    }
    .bedroom_02_line em {
        width: 100%;
        margin: 1px 0;
        height: 1px;
        background: radial-gradient(#cecece, rgba(245, 245, 245, 0));
        float: left;
    }
    .bedroom_02_02{
        width: 100%;
        height: 598px;
        background: url(http://127.0.0.1:3500/img/bedroom/ws-c1.jpg);
    }
    /* 第四层 */
    .bedroom_03 {
        margin: 20px;
    }
    .bedroom_03_box {
        width: 1500px;
        margin: 0 auto;
        padding: 140px 0;
    }
    .bedroom_03_case {
        margin: 0 0 0 150px;
        width: 300px;
        float: left;
        text-align: center;
        overflow: hidden;
    }
    .bedroom_03_case > div {
        width: 100%;
        height: 430px;
        float: left;
        transition:all 3s;
        overflow: hidden;
    }
    .bedroom_03_case > div>img:hover{  
        width:380px;
    }
    .bedroom_03_case span {
        width: 100%;
        float: left;
        margin: 60px 0 0 0;
        line-height: 30px;
        transition:all 1s;
        font-size: 24px;
        cursor: default;
    }
    .bedroom_03_case span:hover{
        color:#eee;
    }
    .bedroom_03_case em {
        width: 30px;
        height: 1px;
        background: red;
        margin: 30px 135px;
        float: left;
    }
    .bedroom_03_case i {
        width: 100%;
        float: left;
        line-height: 30px;
        font-size: 20px;
        cursor: default;
    }
    .bedroom_03_case img {
        float: left;
        width: 100%;
        -webkit-transition: all 4s;
    }
    /* 第五层 */
    .bedroom_04 {
        width: 100%;
        height: 888px;
        background-color: #ab9e96;
        position: relative;
        z-index: 100;
    }
    .bedroom_04_01 {
        position: absolute;
        left: 0;
        top: 50%;
        width: 50%;
        margin: -144px 0 0 0;
    }
    .bedroom_04_title {
        width: 100%;
        color: #fff;
        text-align: center;
        font-size: 34px;
        line-height: 40px;
    }
    .bedroom_04_line {
        width: 100%;
        height: 3px;
        margin: 30px 0;
        position: relative;
    }
    .bedroom_04_text {
        position: relative;
        width: 90%;
        color: #eae4e0;
        text-align: center;
        font-size: 16px;
        line-height: 30px;
        margin: 0 5%;
    }
    .bedroom_04_add {
        width: 100%;
        height: 66px;
        position: relative;
        float: left;
        margin: 58px 0 0 0;
    }
    .bedroom_04_add>a:hover{
        transform:rotate(360deg);
    }
    .bedroom_04_02 {
        width: 50%;
        float: left;
        margin: 0 0 0 49%;
    }
    .bedroom_04_add a {
        position: absolute;
        left: 50%;
        margin: 0 0 0 -33px;
        top: 0;
        -webkit-transition: all 0.5s;
    }
    .bedroom_05_02{
        width: 100%;
        height: 590px;
        background: url(http://127.0.0.1:3500/img/bedroom/ws-f1.jpg);
    }
    /* 第七层 */
    .bedroom_06_box {
        width: 1500px;
        margin: 0 auto;
        padding: 140px 0;
    }
    .bedroom_06_case {
        margin: 0 0 0 150px;
        width: 300px;
        float: left;
        text-align: center;
        overflow: hidden;
    }
    .bedroom_06_case > div {
        width: 100%;
        height: 430px;
        float: left;
        overflow: hidden;
        transition:all 3s;
        margin-top: 31px;
    }
    .bedroom_06_case > div >img:hover{
        width:380px;
    }
    .bedroom_06_case span {
        width: 100%;
        float: left;
        margin: 60px 0 0 0;
        line-height: 30px;
        transition:all 1s;
        font-size: 24px;
        cursor: default;
    }
    .bedroom_06_case span:hover{
        color:#eee;
    }
    .bedroom_06_case em {
        width: 30px;
        height: 1px;
        background: red;
        margin: 30px 135px;
        float: left;
    }
    .bedroom_06_case i {
        width: 100%;
        float: left;
        line-height: 30px;
        font-size: 20px;
        cursor: default;
    }
    .bedroom_06_case img {
        float: left;
        width: 100%;
        -webkit-transition: all 4s;
    }
    .study_06 {
        width: 1200px;
        margin: 0 auto;
        padding: 100px 0;
        text-align: center;
        position: relative;
    }
    .study_06 a{
        text-decoration: none;
        color: #4a4a4a;
    }
    .study_06_title {
        width: 100%;
        font-size: 26px;
        color: #333;
    }
    .study_06_line {
        width: 30px;
        position: absolute;
        top: 220px;
        left: 50%;
        margin: 0 0 0 -15px;
        height: 2px;
        background: #ddd;
    }
    .study_06_more {
        height: 26px;
        width: 100%;
        position: relative;
    }
    .study_06_more a {
        width: 120px;
        margin: 0 0 0 -60px;
        border-radius: 13px;
        position: absolute;
        left: 50%;
        top: -90px;
        line-height: 26px;
        background: #fcd54a;
        color: #333;
        font-size: 16px;
    }
    .study_06_text {
        width: 100%;
        font-size: 12px;
        color: #333;
        padding: 40px 0 60px 0;
        font-style: italic;
    }
    .img_check{
        margin: 0;
        position: absolute;
        margin-left: -24px;
    }
    .down{
        display: none;
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
    .sem_pop .sem_back1 a {
        display: block;
        width: 328px;
        height: 74px;
    }
</style>