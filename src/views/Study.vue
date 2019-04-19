<template>
    <div>
        <!-- 第一层 -->
        <div class="study">
        <div class="bg"></div><!--一楼图-->
        <div>
            <div class="study_sign clearfix">
                <!-- 大框 -->
                <div class="study_sign_box clearfix">
                    <!-- 左 -->
                    <div class="study_sign_left">
                        <div class="study_sign_title">
                            <img src="http://127.0.0.1:3500/img/study/sf-b1.jpg" alt="">
                        </div>
                        <form>
                            <input type="text" id="uname" v-model="uname" placeholder="请填写您的称谓（如：陈小姐）" class="study-input">
                            <input type="text" id="uphone" v-model="uphone" placeholder="请留下您的手机号码,方便与您沟通方案" class="study-input">
                            <div class="study-input_select">
                                <v-distpicker province="广东省" city="广州市" area="海珠区"></v-distpicker>
                            </div>
                            <div class="select-item">
                                <span>需求</span>
                                <ul>
                                    <li id="list1" v-for="(c,index) of list">
                                        <span @click="check(index)"></span>
                                        <div class="img_check" :class="{down:arr.includes(index)}" @click="check(index)">
                                            <img src="http://127.0.0.1:3500/img/study/check.png" alt="">
                                        </div>
                                        <i>{{c}}</i>
                                    </li>
                                </ul>
                            </div>
                            <div class="study_btn">
                                <a @click="change" style="cursor:pointer">立即申请</a>
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
                    <!-- 右 -->
                    <div class="study_sign_right">
                        <!-- 信封图 -->
                        <div class="div_pig">
                            <!-- 笔 -->
                            <img src="http://127.0.0.1:3500/img/study/sf-b3.png" alt="">
                        </div>

                        <div class="myscroll">
                            <!-- 滚动列表 没事别打开-->
                            <ul>
                                <li v-for="item of studyList" :key="item.id">
                                    <span>{{item.lname}}</span>
                                    <span>{{item.phone}}</span>
                                    <span>{{item.demand}}</span>
                                    <span>{{item.sppg}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <!-- 第二层 -->
        <div class="study_02">
            <div class="study_02_01">
                <div class="study_02_title">
                    <span>风格散雅,书韵飘香</span>
                </div>
                <div class="study_02_line">
                    <span>
                        
                        <em></em>
                    </span>
                </div>
                <div class="study_02_text">
                    10几种板色可选，多种风格搭配，经典古朴、简约时尚、优雅清新... <br>
                    为你制定专属书房。  
                </div>
                <!-- 文字 -->
                <div class="study_02_more">
                    <a href="javascript:;">了解风格</a>
                </div>
                <div class="clearfix"></div>
            </div>
            <!-- 列表图 -->
            <div class="study02_02 study_02_02_1" id="box">
                <div class="dh sfq">
                        <ul>
                            <li class="curr">
                                <a href="javascript:;"><img src="http://127.0.0.1:3500/img/study/sf-c11.jpg" alt=""></a>
                                <div class="layer">
                                    <p class="p1"><span class="col2"></span></p>
                                    <p class="p2"><b class="col2">现代简约</b><span class="col1">MODERN</span></p>
                                </div>
                            </li>
                            <li>
                            <a href="javascript:;"><img src="http://127.0.0.1:3500/img/study/sf-c22.jpg" alt=""></a>
                                 <div class="layer">
                                    <p class="p1"><span class="col2">自然田园</span></p>
                                    <p class="p2"><b class="col2">自然田园</b><span class="col1">NATURE</span></p>
                                </div>
                            </li>
                            <li>
                            <a href="javascript:;"><img src="http://127.0.0.1:3500/img/study/sf-c33.jpg" alt=""></a>
                                 <div class="layer">
                                   <p class="p1"><span class="col2">浪漫简欧</span></p>
                                    <p class="p2"><b class="col2">浪漫简
                                    </b><span class="col1">ROMANTIC</span></p>
                                </div>
                            </li>
                            <li>
                            <a href="javascript:;"><img src="http://127.0.0.1:3500/img/study/sf-c44.jpg" alt=""></a>
                                 <div class="layer">
                                    <p class="p1"><span class="col2">中式古典</span></p>
                                    <p class="p2"><b class="col2">中式古典</b><span class="col1">CLASSLCAL</span></p>
                                </div>
                            </li>
                            <li>
                            <a href="javascript:;"><img src="http://127.0.0.1:3500/img/study/sf-55.jpg" alt=""></a>
                                 <div class="layer">
                                    <p class="p1"><span class="col2">吉维尼风</span></p>
                                    <p class="p2"><b class="col2">吉维尼风</b><span class="col1">GIVENI</span></p>
                                </div>
                            </li>
                            <li>
                            <a href="javascript:;"><img src="http://127.0.0.1:3500/img/study/sf-c66.jpg" alt=""></a>
                                 <div class="layer">
                                    <p class="p1"><span class="col2">维尔风光</span></p>
                                    <p class="p2"><b class="col2">维尔风光</b><span class="col1">SCENERY</span></p>
                                </div>
                            </li>
                            <li>
                            <a href="javascript:;"><img src="http://127.0.0.1:3500/img/study/sf-c77.jpg" alt=""></a>
                                 <div class="layer">
                                    <p class="p1"><span class="col2">INDUSTRIAL</span></p>
                                    <p class="p2"><b class="col2">工业风格</b><span class="col1">工业风格</span></p>
                                </div>
                            </li>
                        </ul>
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
        <!-- 第三层 -->
        <div class="study_03">
            <div class="study_03_01">
                <div class="study_03_title">百变身姿，化鸡肋为风雅</div>
                <div class="study_02_line">
                    <span>
                        <em></em>
                    </span>
                </div>
                <div class="study_02_text">
                        10几种板色可选，多种风格搭配，经典古朴、简约时尚、优雅清新... <br>
                        为你制定专属书房。  
                    </div>
                    <!-- 文字 -->
                    <div class="study_02_more">
                        <a href="javascript:;" @click="sidebartop">了解扩容</a>
                    </div>
                </div>
            <div class="study_bg_3"></div>
            <!--  -->
            <div class="study_04">
                <div class="study_04_box">
                    <!-- 第一张卡片 -->
                    <div class="study_04_case">
                        <div>
                            <img src="http://127.0.0.1:3500/img/study/sf-e1.jpg" alt="">
                            
                        </div>
                        <span>转角空间不浪费</span>   
                        <em></em>
                            <i>
                                Z型书桌+吊柜圆滑接连
                                <br>
                                犄角旮旯也能书香四溢
                            </i>
                    </div>
                    <!-- 第二张卡片 -->
                    <div class="study_04_case">
                        <div>
                            <img src="http://127.0.0.1:3500/img/study/sf-e2.jpg" alt="">
                        </div>
                        <span>一体化功能升级</span>
                            <em></em>
                        <i>
                            书柜书桌榻榻米完美合体
                            <br>
                            书房既是客卧也是休闲室
                        </i>
                    </div>
                        <!-- 第三张卡片 -->
                    <div class="study_04_case">
                        <div>
                            <img src="http://127.0.0.1:3500/img/study/sf-e3.jpg" alt="">
                        </div>
                        <span>畸形空间巧利用</span>
                        <em></em>
                        <i>
                            异型书柜无缝嵌入
                            <br>
                            阁楼也能满载诗书
                        </i>
                    </div>
                </div>
            </div>
        
        <div class="clearfix"></div>
        
        </div>
        <!-- 第五层 -->
        <div class="study_05">
            <!-- 第一张 -->
            <div class="study_05_case">
                <div class="study_05_title">
                    雅苑书斋
                    <br>
                    与您品位地位相配
                </div>
                <!-- 点点点 -->
                <div class="study_05_line">
                    <span>
                    </span>
                    <em></em>
                </div>
            </div>
            <!-- 第二张 -->
            <div class="study_05_case">
                <img src="http://127.0.0.1:3500/img/study/sf-f1.jpg" alt="">
                <i>文人雅士</i>
            </div>
            <!-- 第三张 -->
            <div class="study_05_case">
                <img src="http://127.0.0.1:3500/img/study/sf-f2.jpg" alt="">
                <i>商界精英</i>
            </div>
            <div class="clearfix"></div>
            <!-- 第四张 -->
            <div class="study_05_case">
                <img src="http://127.0.0.1:3500/img/study/sf-g1.jpg" alt="">
                <i>白领丽人</i>
            </div>
            <!-- 第五张 -->
            <div class="study_05_case">
                <img src="http://127.0.0.1:3500/img/study/sf-g2.jpg" alt="">
                <i>童稚少年</i>
            </div>
            <!-- 第六张 -->
            <div class="study_05_case">
                <div class="study_05_text">
                     一个茶香墨韵、古色古香的书房，
                     <br>
                     在展现了其自身的外形与作用外，
                     <br>
                     因而书房，蕴藏的是使用者最真实的气质
                </div>
                <div class="study_02_more">
                    <a href="javascript:;" @click="sidebartop">了解设计</a>
                </div>
            </div>
            <div class="clearfix"></div>
            <!-- 第六 -->
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
        <div style="height:50px"></div>
    </div>
</template>
<script>
import VDistpicker from 'v-distpicker'
    export default {
    components: { VDistpicker },
    data() {
        return {
            list:["柜类","橱柜","厨房","阳台"],
            arr:[],
            ok:false,
            studyList:[],
            uname:"",
            uphone:""
        }
    },
    methods: {        
        roll(){
            $(function(){
                $('.myscroll').myScroll({
                    speed: 100,
                    rowHeight: 26
                });
            });
        },
        rlist(){
            (function($){
                $.fn.myScroll = function(options){
                //默认配置
                var defaults = {
                    speed:40,  //滚动速度,值越大速度越慢
                    rowHeight:50 //每行的高度
                };
                
                var opts = $.extend({}, defaults, options),intId = [];
                
                function marquee(obj, step){
                
                    obj.find("ul").animate({
                        marginTop: '-=1'
                    },0,function(){
                            var s = Math.abs(parseInt($(this).css("margin-top")));
                            if(s >= step){
                                $(this).find("li").slice(0, 1).appendTo($(this));
                                $(this).css("margin-top", 0);
                            }
                        });
                    }
                    
                    this.each(function(i){
                        var sh = opts["rowHeight"],speed = opts["speed"],_this = $(this);
                        intId[i] = setInterval(function(){
                            if(_this.find("ul").height()<=_this.height()){
                                clearInterval(intId[i]);
                            }else{
                                marquee(_this, sh);
                            }
                        }, speed);

                        _this.hover(function(){
                            clearInterval(intId[i]);
                        },function(){
                            intId[i] = setInterval(function(){
                                if(_this.find("ul").height()<=_this.height()){
                                    clearInterval(intId[i]);
                                }else{
                                    marquee(_this, sh);
                                }
                            }, speed);
                        });
                    
                    });

                }

            })(jQuery);
        },
        check(i){
            if(this.arr.includes(i)){
                this.arr=this.arr.filter((ele)=>ele!=i);
            }else{
                this.arr.push(i);
            }
        },
        study_list(){
            var url = "http://127.0.0.1:3500/study/list";
            this.axios.get(url).then(result=>{
                this.studyList=result.data.data;
            });
        },
        run(){
            $(function(){
                $('.dh ul li.curr').animate({width:'246px'},'slow');
                $('.dh ul li.curr .layer').animate({height:'60px'},'slow');
                $('.dh ul li.curr .layer .p1').animate({left:'-200%'},'slow');
                $('.dh ul li.curr .layer .p2').animate({right:'145px'},'slow');

	            $('.sfq ul li').hover(function(){
		            var _index = $(this).index();
                        $(this).addClass('curr')
                            .stop()
                            .animate({
                                width:'246px'
                            },'slow')
		                .siblings()
		                .stop()
		                .animate({
			                width:'108px'
		                },'slow')
                            .removeClass('curr');
                        $(this).find('.layer').stop().animate({height:'60px'},'slow').parent().siblings().find('.layer').stop().animate({
                            height: '100%'
                        },'slow');

                        $(this).find('.layer .p1').stop().animate({left:'-200%'},'slow').siblings('.p2').stop().animate({
                            right: '145px'
                        },'slow').parent().parent().siblings().find('.layer .p1').stop().animate({left:'10px'},'slow')  .siblings('.p2').stop().animate({
                            right: '-200%'
                        },'slow')
                },
                function(){})
            });
        },
        o(){
            this.ok=false;
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
        this.roll();
        this.rlist();
        this.study_list();
        this.run();
    },
}



</script>
<style scoped>

    *{
        margin: 0;
        padding: 0;
    }
    .clearfix::after {
        display: block;
        clear: both;
        content: "";
    }
    .study{
        width: 100%;
        min-width: 1200px;
    }
    .study_sign{
        width: 100%;
        min-width: 1200px;
        margin: 0 auto;
        padding-top: 96px;
        margin-bottom: 70px;
        position: relative;
    }
    div.bg{
        width: 100%;
        height: 890px;
        background: url(http://127.0.0.1:3500/img/study/sf-a1.jpg);
    }
    .clearfix::after {
        display: block;
        clear: both;
        content: "";
    }
    .study_sign_box{
        width: 1160px;
        height: auto;
        margin: 0 auto;
        position: relative;
    }
    .study_sign_left{
        width: 487px;
        height: 518px;
        background: #ffffff;
        float: left;
        position: relative;
        box-shadow: 0 0 30px rgba(181,186,208,.44);
        margin-top: 28px;
        padding-right: 24px;
        z-index: 120;
    }
    .study_sign_title{
        float: left;
        width: 100%;
        height: auto;
        text-align: center;
        margin-top: 52px;
        margin-left:91px;
        text-indent: 43px;
    }
    div.study_sign_left form{
        float: left;
        width: 100%;
        height: auto;
        margin-top: 30px;
    }
    .study-input{
        position: relative;
        width: 424px;
        height: 54px;
        border: 1px solid #aaa9a3;
        
        margin-left: 60px;
        margin-bottom: 10px;
        background: #ffffff;
        text-align: center;
        color: #414242;
        font-size: 20px;
    }
    .study_sign_right{
        position: relative;
        width: 649px;
        height: 573px;
        float: left;
        background: url(http://127.0.0.1:3500/img/study/sf-b2.jpg);
        box-shadow: 0 0 30px rgba(181,186,208,.7);
    }
    div.div_pig>img{
        border: 0;
        vertical-align: middle;
        padding: 0;
        margin: 0;
        float: right;
        z-index: 150;
    }
    .div_pig{
        width: 240px;
        height: auto;
        position: absolute;
        left: 445px;
        top: 153px;
        z-index: 110;
    }
    .study_list{
        width: 427px;
        height: 295px;
        position: absolute;
        right: 54px;
        line-height: 36px;
        font-size: 18px;
        color: #414242;
        overflow: hidden;
    }
    .myscroll ul{
        position: absolute;
        list-style: none;
        width: 100%;
    }
    .myscroll { 
        position: relative;
        width: 350px; 
        height: 260px; 
        top: 17em;
        margin: 0 189px 110px; 
        line-height: 26px; 
        font-size: 12px; 
        overflow: hidden;
    }
    .myscroll li { 
        height: 35px; 
        /* margin-left: 25px; */
        font-size: 16px;
        margin: 0;
        padding:0;
    }
    .myscroll li span{
        margin: 7px;
    }

    /*第二层*/

    .study_02_01{
        width: 1200px;
        margin: 0 auto;
        padding: 50px 0;
        font-size: 34px;
    }
    .study_02_title{
        width: 100%;
        color: #333;
        text-align: center;
        font-size: 34px;
        line-height: 40px;
    }
    .study_02_line {
        width: 100%;
        height: 3px;
        margin: 30px 0;
        position: relative;
    }
    .study_02_line span {
        width: 46px;
        height: 3px;
        padding: 0 5px;
        position: absolute;
        top: 0;
        left: 50%;
        margin: 0 0 0 -28px;
        background: #f5f5f5;
    }
    .study_02_line i {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        float: left;
        background: #737373;
        margin: 0 0 0 10px;
    }
    .study_02_line em {
        display: block;
        position: relative;
        margin-left: -191px;
        width: 436px;
        height: 1px;
        background: radial-gradient(#cecece,rgba(245,245,245,.0));
        float: left;
    }
    .study_02_text {
        width: 100%;
        color: #737373;
        text-align: center;
        font-size: 16px;
        line-height: 30px;
    }
    .study_02_more {
        width: 100%;
        text-align: center;
        line-height: 40px;
        margin: 35px 0;
    }
    .study_02_more a {
        color: #f6c11e;
        font-size: 20px;
        text-decoration: none;
    }
    .study_02_02 {
        width: 1190px;
        margin: 0 auto;
        position: relative;
        height: 304px;
        padding-bottom: 100px;
        cursor: default;
        padding: 0;
    }
    .study_02_case {
        position: absolute;
        height: 304px;
        box-shadow: 0 0 3px #ccc;
        z-index: 0;
        /* top: 0;*/
        left: 340px; 
        -webkit-transition: all 0.5s;
    }
    .study_02_left {
        float: left;
        width: 170px;
        cursor: default;
        margin: 0 auto;
        padding: 0;
    }
    .study_02_left span {
        line-height: 20px;
        width: 100%;
        float: left;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        margin: 10px auto;
    }
    .study_02_left i {
        line-height: 12px;
        width: 100%;
        float: left;
        font-size: 9px;
        color: #808080;
        text-align: center;
        letter-spacing: 4px;
    }
    .study_02_right {
        margin: 10px 0;
        position: relative;
        width: 0;
        overflow: hidden;
        transition: all 0.5s;
    }
    .study_02_02_2 {
        left: 513px;
    }
    .study_02_02_3{
        left:686px;
    }
    .study_02_02_4{
        left:859px;
    }
    .study_02_02_5{
        left:1032px;
    }
    .study_02_02_6{
        left:1205px;
    }
    .study_02_02_7{
        left:1378px;
    }
/*复选框效果*/
    .select-item{
        width: 100%;
        height: 27px;
        font-size: 19px;
        line-height: 27px;
        color: #414242;
        margin-top: 13px;
    }
    .select-item>span {
        vertical-align: top;
        margin-right: 18px;
        font-weight: 600;
        margin-left: 27px;
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
        cursor:pointer;
    }

/**/


    .study_03 {
        margin-top: 100px;
        position: relative;
        z-index: 100;
    }
    .study_03_01 {
        width: 1200px;
        margin: 0 auto;
        padding: 50px 0;
    }
    .study_03_title {
        width: 100%;
        color: #333;
        text-align: center;
        font-size: 34px;
        line-height: 40px;
    }
    /* 第三行 */
    .study_bg_3{
        background: url(http://127.0.0.1:3500/img/study/sf-d1.jpg);
        width: 100%;
        height: 590px;
    }
    .study_04 {
        background: #fff;
        width: 100%;
    }
    .study_04_box {
        width: 1500px;
        margin: 0 auto;
        padding: 140px 0;
    }
    .study_04_case {
        margin: 0 0 0 150px;
        width: 300px;
        float: left;
        text-align: center;
        overflow: hidden;
    }
    .study_04_case>div{
        width: 100%;
        height: 435px;
        float: left;
        overflow: hidden;
    }
    .study_04_case span {
        width: 100%;
        float: left;
        margin: 60px 0 0 0;
        line-height: 30px;
        font-size: 24px;
        overflow: hidden;
        cursor: default;
    }
    .study_04_case img {
        float: left;
        width: 100%;
        -webkit-transition: all 4s;
    }
    .study_04_case img:hover {
        width: 400px;
    }
    .study_04_case i {
        width: 100%;
        float: left;
        line-height: 30px;
        font-size: 20px;
        cursor: default;
    }
    .study_04_case em {
        width: 30px;
        height: 1px;
        background: red;
        margin: 10px 135px;
        float: left;
    }
    /* 第五 */
    .study_05 {
        width: 1440px;
        margin: 0 auto;
        padding: 50px 0;
    }
    .study_05_case {
        margin: 20px 0 0 120px;
        width: 320px;
        float: left;
        position: relative;
    }
    .study_05_title {
        width: 100%;
        float: left;
        line-height: 80px;
        margin: 80px 0 0 0;
        color: #333;
        font-weight: bold;
        font-size: 34px;
        text-align: center;
    }
    .study_05_line {
        width: 100%;
        height: 3px;
        margin: 30px 0;
        position: absolute;
        top: 130px;
        left: 0;
    }
    .study_05_line span {
        width: 46px;
        height: 3px;
        padding: 0 5px;
        position: absolute;
        top: 0;
        left: 50%;
        margin: 0 0 0 -28px;
        background: #f5f5f5;
    }
    .study_05_line>span>i {
        width: 3px;
        height: 3px;
        border-radius: 50%;
        float: left;
        background: #737373;
        margin: 0 0 0 10px;
        line-height: 60px;
        color: #333;
        font-size: 20px;
        text-align: center;
    }
    .study_05_line em {
        display: block;
        position: relative;
        margin-left: -53px;
        width: 436px;
        height: 1px;
        background: radial-gradient(#cecece,rgba(245,245,245,.0));
        float: left;
    }
    .study_05_case i {
        width: 100%;
        float: left;
        line-height: 60px;
        color: #333;
        font-size: 20px;
        text-align: center;
    }
    .study_05_text {
        width: 100%;
        float: left;
        line-height: 30px;
        color: #737373;
        font-size: 16px;
        text-align: center;
        margin: 70px 0 30px 0;
    }
    /* 第六 */
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
    .study-input_select{
        position: relative;
        margin-left: 50px;
    }
    .select-item input{
        margin-top: 17px;
        width:42px;
        height: 29px;
        /* float: left; */
    }
    .select-item i{
        display: inline;
        margin-top: 0;
    }
    .img_check{
        margin: 0;
        position: absolute;
        margin-left: -37px;
    }
    .down{
        display: none;
    }

    /* body{
            background-color: #292929
    } */
    ul li,ul ol{
        list-style: none;
    }
    i,b,em,strong{
        font-style: normal;
    }
    img{
        display: block;
    }
    .dh ul{
        position: relative;
        overflow: hidden;
        width: 900px;
        height: 306px;
        margin: 60px auto 0;
    }
    .dh ul li{
        float: left;
        width: 108px;
        overflow: hidden;
        height: 100%;
        position: relative;
        cursor: pointer;
    }
    .dh ul li a{
        display: block;
        width: 100%;
        height: 100%;
    }
    .dh ul li .layer{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background:rgba(27,29,36,0.75);
        height: 100%;
    }
    .dh ul li .layer .p1{
        position: absolute;
        bottom: 5px;
        left: 10px;
    }
    .dh ul li .layer .p2{
        position: absolute;
        bottom: 5px;
        right: -200%;
    }
    .dh ul li .layer .p2 b,
    .dh ul li .layer .p2 span{
        display: block;
        font-weight: bold;
        font-size: 20px;
    }
    .dh ul li .layer .p1 b,
    .dh ul li .layer .p1 span{
        display: block;
        font-weight: bold;
        font-size: 14px;
        }
    .col1{
        color:#3385ff;
    }
    .col2{
        color: #fff;
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
    .study-input_select>>>.distpicker-address-wrapper select{
        border: 1px solid red;
        height: 56px;
        width: 126px;
        border:1px solid #aaa9a3;
    }
</style>