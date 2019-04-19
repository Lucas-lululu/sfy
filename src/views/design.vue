<template>
    <div>
        <div style="height:80px"></div>
        <!-- 导航栏 -->
        <div class="ga_here">
            <router-link to="/">首页</router-link><i>></i>
            <router-link to="/">设计方案</router-link>
        </div>
        <div class="title_box">
            <div class="title_left">
                <span>定制案例</span>
                <a href="javascript:;">更多</a>
            </div>
            <div class="title_right">
                <span>热门内容排行</span>
                <a href="javascript:;">更多</a>
            </div>
        </div>
        <div style="height:20px;"></div>
        <!-- 轮播 -->
        <div class="box" style="padding:0">
            <div class="tab_banner">
                <div v-for='(item,i) of navlist' :key="item.id">
                    <a><img :src=item.img_url alt="" v-show='b==i'></a>     
                </div>
                <div class="tb_tab">
                    <ul style="list-style:none">
                        <li @click="b=0" :class="{tb_tab_i:b==0}">
                            <i style="border:none;">全屋</i>
                        </li>
                        <li @click="b=1" :class="{tb_tab_i:b==1}">
                            <i>卧室</i>
                        </li>
                        <li @click="b=2" :class="{tb_tab_i:b==2}">
                            <i>客厅</i>
                        </li>
                        <li @click="b=3" :class="{tb_tab_i:b==3}">
                            <i>书房</i>
                        </li>
                        <li @click="b=4" :class="{tb_tab_i:b==4}">
                            <i>青年书房</i>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="hot_no">
                <a href="javascript:;" class="hot_no_jing">
                    <img src="http://127.0.0.1:3500/img/design/b113b17518ed068cc871a1d8c538f986.png" alt="">
                
                    <h1>
                        欧派和索菲亚哪个好？这里详解两者的优势区别
                        <i></i>
                    </h1>
                    <h2>装修刚弄好，马上又要去买家具了~真是一波未平一波又起。精明的...</h2>
                </a>
                <div class="hot-no_list">
                    <a href="javascript:;">
                        <i></i>
                        索菲亚衣柜贵不贵？定做一个衣柜价格是多少？
                    </a>
                    <a href="javascript:;">
                        <i></i>
                        全屋定制一般多少钱 全屋定制大概多少钱
                    </a>
                    <a href="javascript:;">
                        <i></i>
                        真相揭秘 定制衣柜价格为何那么贵?
                    </a>
                </div>
            </div>
            
            <div class="clear"></div>
        </div>
        <!-- 第二层 -->
        <div class="title_box">
            <span>装修攻略</span>
            <a href="javascript:;">
                更多
            </a>
        </div>
        <div style="height:20px;"></div>
        <div class="box" style="padding:0;margin-top:10px">
            <div class="stra">
                <a href="javascript:;" class="stra_box ml-5">
                    <div class="stra_img">
                        <img src="http://127.0.0.1:3500/img/design/e5d39a7e6a050a349e70efc6602f125b.jpg" alt="">
                    </div>
                    <div class="stra_label">
                        <i></i>
                    </div>
                    <div class="stra_name">
                        全屋定制一般多少钱 全屋定制大概多少钱
                    </div>
                    <div class="stra_tips">
                        因为越来越多的消费者主张先定制家具后装修，照这样的形式发展，...
                    </div>
                </a>
                <a href="javascript:;" class="stra_box  ml-5">
                    <div class="stra_img">
                        <img src="http://127.0.0.1:3500/img/design/6e69e3823eaaf739a738974a39f362ee.jpg" alt="">
                    </div>
                    <div class="stra_label">
                        <i></i>
                    </div>
                    <div class="stra_name">真相揭秘 定制衣柜价格为何那么贵?</div>
                    <div class="stra_tips">一位业内人士介绍称，定制衣柜的价格相当于相同尺寸的成品衣柜价...</div>
                </a>
                <a href="javascript:;" class="stra_box  ml-5">
                    <div class="stra_img">
                        <img src="http://127.0.0.1:3500/img/design/195f050ef445ed1082baf8f161684310.jpg" alt="">
                    </div>
                    <div class="stra_label">
                        <i></i>
                    </div>
                    <div class="stra_name">全屋定制-索菲亚衣柜官网商城</div>
                    <div class="stra_tips">一、什么是全屋定制是一项家具设计及定制、安装等服务为一体的家...</div>
                </a>
                <a href="javascript:;" class="stra_box  ml-5">
                    <div class="stra_img">
                        <img src="http://127.0.0.1:3500/img/design/cf76fe582332beca55184df9128a5c32.png" alt="">
                    </div>
                    <div class="stra_label">
                        <i></i>
                    </div>
                    <div class="stra_name">索菲亚衣柜多少钱？衣柜定制价格多少钱一平米？</div>
                    <div class="stra_tips">对于成品衣柜和定制衣柜堪称是继豆花是甜咸之争外又一个世纪大难...</div>
                </a>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            navlist:[
                {id:1,img_url:'http://127.0.0.1:3500/img/design/b44eedcfec854acd14d2dc4b4a8db82f.jpg',js:'全屋',href:'http://127.0.0.1:8080/#/'},
		        {id:2,img_url:'http://127.0.0.1:3500/img/design/84dc4e72aa120d5bc40a04f0b4414ee5.jpg',js:'卧室',href:'http://127.0.0.1:8080/#/'},
		        {id:3,img_url:'http://127.0.0.1:3500/img/design/71e838e711012ca42ceea5bae5e94379.jpg',js:'客厅',href:'http://127.0.0.1:8080/#/'},
		        {id:4,img_url:'http://127.0.0.1:3500/img/design/475eadae54aaf423114bf7a2a1403784.jpg',js:'书房',href:'http://127.0.0.1:8080/#/'},
		        {id:5,img_url:'http://127.0.0.1:3500/img/design/21a843a11374d279a6df8aa2997d17b6.jpg',js:'青少年房',href:'http://127.0.0.1:8080/#/'},
	        ],
            b:0,
            i:0,    
        }
    },
    methods: {
        wrap(){
            this.i++;
            if(this.i<5){
                this.b=this.i;
               if(this.i==4){
                   this.i=-1;
               }
            }
        },
    },
    created() {
        setInterval(this.wrap,2000);
    },
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
        color:#333;
    }
    .box {
        width: 1180px;
        margin: 0 auto;
    }
    .clear {
        clear: both;
        height: 0;
        width: 100%;
    }
    .ga_here {
        width: 1180px;
        margin: 0 auto;
        height: 20px;
        padding: 40px;
        line-height: 20px
        }
    .ga_here a {
        float: left;
        color: #808080;
    }
    .ga_here a:hover{
        color: #fb811a;
    }
    .ga_here a:nth-last-child(1){
        cursor: auto;
        color: #999;
    }
    .ga_here i {
        float: left;
    }
    .title_box {
        width: 1180px;
        margin: 0 auto;
        height: 20px;
        padding: 20px 0;
    }
    .title_left {
        width: 880px;
        float: left;
    }
    .title_box span {
        border-left: 4px solid #30c2b0;
        font-size: 20px;
        text-indent: 10px;
        float: left;
        line-height: 20px;
        height: 20px;
    }
    .title_box a {
        float: right;
        line-height: 20px;
        height: 20px;
        padding-right: 10px;
        background: url(http://127.0.0.1:3500/img/design/jiao_move.png) no-repeat right center;
        -webkit-transition: all 0.3s;
    }
    .title_right {
        width: 280px;
        float: right;
    }
    .stra {
        width: 1200px;
        float: left;
        margin-left: -20px;
    }
    .stra_box {
        padding: 0 20px;
        width: 240px;
        margin-left: 20px;
        background: #fff;
        float: left;
        -webkit-transition: all 0.3s;
    }
    .stra_img {
        width: 100%;
        height: 156px;
        float: left;
        overflow: hidden;
        margin: 20px 0;
    }
    .stra_img img {
        width: 100%;
    }
    .stra_label {
        width: 100%;
        float: left;
        text-align: center;
    }
    .stra_label i {
        margin: 0 5px;
        padding: 0 15px;
        border: 1px dashed #e7e7e7;
        line-height: 22px;
        border-radius: 12px;
        font-size: 12px;
        color: #92744b;
        display: inline-block;
    }
    .stra_name {
        line-height: 40px;
        float: left;
        width: 100%;
        height: 40px;
        font-size: 15px;
        font-weight: bold;
        color: #444;
        text-align: center;
        overflow: hidden;
        padding-top: 10px;
    }
    .stra_tips {
        line-height: 25px;
        width: 100%;
        text-align: center;
        padding-bottom: 40px;
    }
    /* 轮播 */
    .tab_banner {
        width: 880px;
        height: 380px;
        float: left;
    }
    .tb_banner {
        width: 100%;
        height: 330px;
        float: left;
        overflow: hidden;
    }
    /* .tb_banner li {
        width: 100%;
        height: 330px;
        float: left;
        position: relative;
        display: none;
    }
    .tb_banner li img {
        width: 100%;
        height: 100%;
    } */
    .tb_banner li i {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 56px;
        padding-top: 5px;
        line-height: 56px;
        color: #fff;
        text-align: center;
        background: url(http://127.0.0.1:3500/img/design/tab_banner_bg.png) repeat-x bottom left;
    }
    .tb_tab {
        width: 100%;
        height: 50px;
        background: #fff;
        float: left;
    }
    .tb_tab li {
        width: 176px;
        height: 50px;
        float: left;
        font-size: 15px;
        text-align: center;
        cursor: pointer;
        -webkit-transition: all 0.3s;
    }
    .tb_tab li i {
        width: 100%;
        height: 16px;
        line-height: 16px;
        margin: 17px 0;
        float: left;
        border-left: 1px solid #e6e6e6;
    }
    .tb_tab_i, .tb_tab li:hover {
        background: #30c2b0;
        color: #fff;
    }
    /*  */
    /* hot */
    .hot_no {
        padding: 20px;
        float: right;
        width: 240px;
        background: #fff;
    }
    .hot_no_jing {
        width: 100%;
        float: left;
        padding-bottom: 16px;
        border-bottom: 1px dashed #e6e6e6;
    }
    .hot_no_jing img {
        width: 100%;
        height: 105px;
        float: left;
    }
    .hot_no_jing h1 {
        line-height: 30px;
        height: 30px;
        padding: 10px 0 4px 0;
        width: 100%;
        float: left;
        color: #bfab93;
        font-size: 15px;
        text-indent: 20px;
        position: relative;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .hot_no_jing h1 i {
        width: 6px;
        height: 2px;
        position: absolute;
        left: 4px;
        top: 22px;
        background: #bfab93;
    }
    .hot_no_jing h2 {
        width: 100%;
        float: left;
        color: #808080;
        line-height: 20px;
        max-height: 40px;
        font-size: 12px;
        font-weight: normal;
    }
    .hot-no_list {
        padding: 14px 0 0 0;
        width: 100%;
        float: left;
    }
    .hot-no_list a {
        float: left;
        line-height: 30px;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        position: relative;
        text-indent: 20px;
        margin:10px 0px;
        -webkit-transition: all 0.3s;
    }
    .hot-no_list a i {
        width: 6px;
        height: 2px;
        position: absolute;
        left: 4px;
        top: 14px;
        background: #bfab93;
    }
    .hot-no_list a:hover {
        color: #bfab93;
    }
    .stra_box:hover{
        box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        margin-top:-4px;
    }
    .stra_box:hover .stra_name{
        color:#30c2b0;
    }
    .stra_box:hover .stra_tips{
        color:#fb811a;
    }
</style>
