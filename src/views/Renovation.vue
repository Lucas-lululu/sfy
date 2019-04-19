<template>
    <div>
        <div class="here">
            <router-link to="/">首页</router-link>
            <i>></i>
            <router-link to="/design">设计方案</router-link>
            <i>></i>
            <a href="javascript:;">装修攻略</a>
        </div>
        <div class="box" style="margin:0 auto;padding:20px 0 20px 0">
            <div class="reno_menu" @click="changelist">
                <div class="reno_down" style="height:190px">
                    <div class="reno_bt reno_bt_i">
                        <p style="margin-left:-180px">空间篇</p>
                        <i>
                            <img src="http://127.0.0.1:3500/img/gonglue/reno_menu_bg.png" alt="">
                        </i>
                    </div>
                    <div class="reno_opt ">
                        <a href="javascript:;">
                            <i>客厅</i>
                        </a>
                        <a href="javascript:;">
                            <i>厨房</i>
                        </a>
                        <a href="javascript:;">
                            <i>书房</i>
                        </a>
                        <a href="javascript:;">
                            <i>卫浴</i>
                        </a>
                        <a href="javascript:;">
                            <i>全屋</i>
                        </a>
                        <a href="javascript:;">
                            <i>餐厅</i>
                        </a>
                        <a href="javascript:;">
                            <i>儿童房</i>
                        </a>
                        <a href="javascript:;">
                            <i>阳台</i>
                        </a>
                        <a href="javascript:;">
                            <i>衣帽间</i>
                        </a>
                        <a href="javascript:;">
                            <i>卧室</i>
                        </a>
                    </div>
                </div>
                <div class="reno_down" style="height:56px">
                    <div class="reno_bt reno_bt_i">
                        <p style="margin-left:-180px">功能篇</p>
                        <i>
                            <img src="http://127.0.0.1:3500/img/gonglue/reno_menu_bg.png" alt="">
                        </i>
                    </div>
                    <div class="reno_opt">
                        <a href="javascript:;">
                            <i>客厅</i>
                        </a>
                        <a href="javascript:;">
                            <i>厨房</i>
                        </a>
                        <a href="javascript:;">
                            <i>书房</i>
                        </a>
                        <a href="javascript:;">
                            <i>卫浴</i>
                        </a>
                        <a href="javascript:;">
                            <i>全屋</i>
                        </a>
                        <a href="javascript:;">
                            <i>餐厅</i>
                        </a>
                        <a href="javascript:;">
                            <i>儿童房</i>
                        </a>
                        <a href="javascript:;">
                            <i>阳台</i>
                        </a>
                        <a href="javascript:;">
                            <i>衣帽间</i>
                        </a>
                        <a href="javascript:;">
                            <i>卧室</i>
                        </a>
                    </div>
                </div>
                <div class="reno_down" style="height:56px">
                    <div class="reno_bt reno_bt_i">
                        <p style="margin-left:-180px">风格篇</p>
                        <i>
                            <img src="http://127.0.0.1:3500/img/gonglue/reno_menu_bg.png" alt="">
                        </i>
                    </div>
                    <div class="reno_opt">
                        <a href="javascript:;">
                            <i>客厅</i>
                        </a>
                        <a href="javascript:;">
                            <i>厨房</i>
                        </a>
                        <a href="javascript:;">
                            <i>书房</i>
                        </a>
                        <a href="javascript:;">
                            <i>卫浴</i>
                        </a>
                        <a href="javascript:;">
                            <i>全屋</i>
                        </a>
                        <a href="javascript:;">
                            <i>餐厅</i>
                        </a>
                        <a href="javascript:;">
                            <i>儿童房</i>
                        </a>
                        <a href="javascript:;">
                            <i>阳台</i>
                        </a>
                        <a href="javascript:;">
                            <i>衣帽间</i>
                        </a>
                        <a href="javascript:;">
                            <i>卧室</i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="reno_list" v-for="item of list" :key="item.id">
                <div class="center">
                    <a href="javascript:;"  class="reno_img" @click="jump">
                        <img :src="item.pic" :data-gid="item.gid">
                    </a>
                    <div class="reno_right">
                        <a href="javascript:;" class="reno_name" @click="jump"  :data-gid="item.gid">{{item.title}}</a>
                        <div class="reno_time">{{item.time | datetime}}</div>
                        <div class="reno_tips">{{item.about}}</div>
                    </div>
                </div>
            </div>

        </div>
        <div class="pages">
            <div id="goPages" @click="change">
                <a class="action" @click="love">1</a>
                <a href="javascript:;" @click="love">2</a>
                <a href="javascript:;" @click="love">3</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:[],
            pno:0,
            a:true,

        }
    },
    methods: {
        love(e){
            if (!e){
                this.pno=1;
            }else{
                this.pno = $(e.target).html();
            }
            var url = "http://127.0.0.1:3500/Renovation/novation?pno="+this.pno;
            this.axios.get(url).then(result=>{
                this.list=result.data.data;
            });
        },
        change(e){
            $(e.target).addClass("action").siblings().removeClass("action");
        },
        jump(e){
            var gid = e.target.dataset.gid;
            this.$router.push("/gonglue?gid="+gid);
        },
        changelist(e){
            if (e.target.nodeName=="P"){
                if ($(e.target).parent().parent().css("height")==="190px"){
                $(e.target).parent().parent().css("height","56px");
            }else{
                $(e.target).parent().parent().css("height","190px");

            }
            };
            
        },
    },
    created() {
        this.love();
    },
}
</script>

<style scoped>
    *{
        margin: 0;
        padding:0;
    }
    a{
        text-decoration: none;
        font-size: 12px;
    }
    .here a:hover{
        color: #fb811a;
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
    .here i {
        float: left;
        width: 14px;
        height: 20px;
    }
    .here a:nth-last-child(1) {
        cursor: auto;
        color: #999;
    }
    .box {
        width: 1180px;
        margin: 0 auto;
    }
    .reno_menu {
        width: 280px;
        float: left;
        padding-top:32px; 
        height: 1900px !important;
    }
    .reno_menu a:hover,{
        color: #30c2b0;
    }
    .reno_menu a.active{
        height:266px;
    }
    .reno_down {
        width: 100%;
        float: left;
        cursor: pointer;
        overflow: hidden;
        margin-bottom: 2px;
        transition:all .5s;
        -webkit-transform: all .5s;
        -o-transform: all .5s;
        -moz-transform: all .5s;
    }
    .reno_bt {
        float: left;
        width: 277px;
        margin-left: -1px;
        border-left: 4px solid #30c2b0;
        background: #f2f2f2;
        height: 56px;
        line-height: 56px;
        font-size: 16px;
        font-weight: bold;
        color: #444;
        text-indent: 40px;
        position: relative;
    }
    .reno_bt_i>p{
        margin-left: -180px;
        font-size: 16px;
        color: #000;
    }
    .reno_bt i {
        position: absolute;
        right: 18px;
        top: 21px;
        width: 14px;
        height: 14px;
        -webkit-transition: all 0.3s;
    }
    .reno_bt i img {
        float: left;
    }
    .reno_opt {
        width: 300px;
        padding: 15px 40px;
        float: left;
        background: #fff;
        
    }
    .reno_opt a:hover{
        color:#3cc5b4;
    }
    a {
        text-decoration: none;
        color: #4a4a4a;
    }
    .reno_opt i {
        width: 100px;
        float: left;
        line-height: 30px;
        font-size: 14px;
    }











    /* 右边 */
    .reno_list {
        width: 820px;
        float: left;
        padding: 0 30px;
        -webkit-transition: all 0.3s;
        background: #fff;
        z-index:1;
        position: relative;
        margin-left: 20px;
    }
    .reno_list .center {
        width: 820px;
        float: left;
        border-bottom: 1px dashed #ccc;
        padding: 30px 0;
        -webkit-transition: all 0.3s;
    }
    .reno_list:hover{
        box-shadow:0 0 20px rgba(0,0,0,.2);
        z-index:10;
        padding:1px 30px 0 30px;
        margin-top:-1px;
    }
    .reno_list:hover .center{
        border-bottom:1px dashed #fff;
    }
    .reno_list .reno_right {
        width: 590px;
        float: left;
    }
    .reno_list .reno_img {
        width: 200px;
        height: 130px;
        float: left;
        overflow: hidden;
        margin-right: 30px;
    }
    .reno_img img {
        width: 100%;
    }
    .reno_list .reno_right {
        width: 590px;
        float: left;
    }
    .reno_list .reno_name {
        width: 100%;
        float: left;
        line-height: 36px;
        color: #30c2b0;
        font-size: 18px;
        margin-left: -99px;
    }
    .reno_list .reno_time {
        width: 100%;
        float: left;
        line-height: 40px;
        color: #b2b2b2;
        margin-left: -126px;
    }
    .reno_list .reno_tips {
        width: 83%;
        float: left;
        color: #666;
        line-height: 24px;
        padding: 10px 0;
        font-size: 15px;
    }


    .pages {
        width: 100%;
        float: left;
        padding: 15px 0 30px 0;
        color: #7f7f7f;
        font-size: 14px;
    }
    .pages a.action {
        color: #fff;
        background: #30c2b0;
        border-radius: 2px;
        padding: 0 15px;
        margin: 0;
        line-height: 38px;
        display: inline-block;
    }
    .pages a {
        display: inline-block;
        height: 36px;
        line-height: 36px;
        width: 36px;
        margin-left: -1px;
        text-align: center;
        border: 1px solid #cccccc;
    }
</style>
