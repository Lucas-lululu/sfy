<template>
    <div class="app-pro"> 
        <div class="start_tab">
           <div class="start_tab_box"  @click.stop="change">
                <div class="start_tab_title">空间</div>
                <a href="javascript:;" @click="btn1" class="active">全部</a>
                <a href="javascript:;" @click="btn2">餐厅</a>
                <a href="javascript:;">主卧</a>
                <a href="javascript:;">次卧</a>
                <a href="javascript:;">衣帽间</a>
                <a href="javascript:;">书房</a>
                <a href="javascript:;">阳台</a>
                <a href="javascript:;">客餐厅</a>
                <a href="javascript:;">入户</a>
                <a href="javascript:;">儿童房</a>
                <a href="javascript:;">全屋</a>
                <a href="javascript:;">客厅</a>
           </div>
           <div class="start_tab_box" id="s1"  @click.stop="change">
                <div class="start_tab_title">功能</div>
                <a href="javascript:;" @click="btn3"  class="active">全部</a>
                <a href="javascript:;" @click="btn4">衣柜</a>
                <a href="javascript:;">电视柜</a>
                <a href="javascript:;">餐酒柜</a>
                <a href="javascript:;">鞋柜</a>
                <a href="javascript:;">玄关柜</a>
                <a href="javascript:;">入户柜</a>
                <a href="javascript:;">橱柜</a>
                <a href="javascript:;">上下床</a>
                <a href="javascript:;">座位柜</a>
                <a href="javascript:;">矮柜</a>
                <a href="javascript:;">床头柜</a>
               <button @click="aaa" >
                    <img  src="http://127.0.0.1:3500/img/make_bottom.png" alt="">
                </button>
                <div id="a1" >
                    <div class="start_tab_title"></div>
                    <a href="javascript:;">梳妆台</a>
                    <a href="javascript:;">书柜</a>
                    <a href="javascript:;">榻榻米</a>
                    <a href="javascript:;">床</a>
                    <a href="#">阳台柜</a>
                </div>
            </div>
             
            <div class="start_tab_box" @click.stop="change">
                    <div class="start_tab_title">风格</div>
                    <a href="javascript:;" @click="btn5"  class="active">全部</a>
                    <a href="javascript:;">自然田园</a>
                    <a href="javascript:;">日式</a>
                    <a href="javascript:;">中式</a>
                    <a href="javascript:;">醇厚古典</a>
                    <a href="javascript:;">浪漫简欧</a>
                    <a href="javascript:;">现代简约</a>
            </div>
            <div class="start_tab_box" id="s2"  @click.stop="change">
                    <div class="start_tab_title">花色</div>
                    <a href="javascript:;" @click="btn6"  class="active">全部</a>
                    <a href="javascript:;">索菲亚红</a>
                    <a href="javascript:;">新草绿</a>
                    <a href="javascript:;">橡木白</a>
                    <a href="javascript:;">北美白橡</a>
                    <a href="javascript:;">浅布纹</a>
                    <a href="javascript:;">蓝色蜡木</a>
                    <a href="javascript:;">桃花心木</a>
                    <a href="javascript:;">北美枫木</a>
                    <a href="javascript:;">暖白栓木</a>
                    <a href="javascript:;">星空灰</a>
                    <button @click="bbb">
                        <img src="http://127.0.0.1:3500/img/make_bottom.png" alt="">
                    </button>
                    <div id="b1">
                        <div class="start_tab_title"></div>
                        <a href="javascript:;">乌木棕</a>
                        <a href="javascript:;">深布纹</a>
                        <a href="javascript:;">蔓籽绿</a>
                        <a href="javascript:;">胡桃木</a>
                        <a href="javascript:;">枫木色</a>
                        <a href="javascript:;">金刚栗</a>
                        <a href="javascript:;">果杏粉</a>
                        <a href="javascript:;">阿尔萨斯蓝</a>
                        <a href="javascript:;">静谧蓝</a>
                        <a href="javascript:;">香槟金</a>
                        <a href="javascript:;">红橡木</a> 
                    
                        <div class="start_tab_title"></div>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="javascript:;">阿黛灰</a>
                        <a href="javascript:;">云檀木</a>
                        <a href="javascript:;">芒通黄</a>
                        <a href="javascript:;">白蜡木</a>
                        <a href="javascript:;">金樱粉</a>
                        <a href="javascript:;">雅致白</a>
                    </div> 
            </div>
             
        </div>
        <div class="start_sel">
            <a href="javascript:;">最新发布</a>
            <a href="javascript:;">热门搜索</a>
        </div>
        <div class="start_list clearfix">
            <router-link :to="`/gallery?pid=${item.pid}`" v-for="item of list" :key="item.index">
                <img :src="item.pic">
                <div class="start_case_tips">
                    <img src="http://127.0.0.1:3500/img/hd_bbxg/icon1.png">
                    <span>3129</span>
                    <img src="http://127.0.0.1:3500/img/hd_bbxg/icon2.png">
                    <span>2</span>
                    <img src="http://127.0.0.1:3500/img/hd_bbxg/icon3.png">
                    <span>7</span>
                    <img src="http://127.0.0.1:3500/img/hd_bbxg/icon4.png">
                    <span>1</span>
                </div>
            </router-link>
               
        </div>
        <div class="start_move">
            <div class="button" @click="loadMore">点击加载更多</div>
        </div>  
      
    </div>
</template>

<script>
    
    export default{
        data(){
            return{
                list:[],
                pno:0
            }
        },
        created() {
            this.loadMore();
           // this.btn1();
        },
        methods: {
            change(e){
                $(e.target).addClass("active").siblings().removeClass("active");
            },
            btn1(){
                this.pno++;
                var url="http://127.0.0.1:3500/Pro/space";
                this.axios.get(url).then(result=>{
                     this.list=result.data.data;
                 this.pno=0;
                })
            },
               btn2(){
                this.pno++;
                var url="http://127.0.0.1:3500/Pro/s2";
                this.axios.get(url).then(result=>{
                    this.list=result.data.data;
                this.pno=0;
                })
            },
               btn3(){
                this.pno++;
                var url="http://127.0.0.1:3500/Pro/functions";
                this.axios.get(url).then(result=>{
                    this.list=result.data.data;
                this.pno=0;
                })
            },
             btn4(){
                this.pno++;
                var url="http://127.0.0.1:3500/Pro/f2";
                this.axios.get(url).then(result=>{
                    this.list=result.data.data;
                    this.pno=0;
                })
            },
             btn5(){
                this.pno++;
                var url="http://127.0.0.1:3500/Pro/style";
                this.axios.get(url).then(result=>{
                    this.list=result.data.data;
                    this.pno=0;
                })
            },
             btn6(){
                this.pno++;
                var url="http://127.0.0.1:3500/Pro/color";
                this.axios.get(url).then(result=>{
                    this.list=result.data.data;
                    this.pno=0;
                })
            },
            loadMore(){
                this.pno++;
                var url="http://127.0.0.1:3500/Pro/product?pno="+this.pno;
                //发送ajax请求
                this.axios.get(url).then(result=>{
                    // this.list=result.data.data;
                    var rows=this.list.concat(result.data.data);
                    this.list=rows;
                })
            },
            aaa(){
        var $s1=$("#s1");
        if($s1.is(":has(:hidden)")){
            $s1.children().show();
        }
        else{
            $s1.children("#a1").hide()
        }  
            },
            bbb(){
        var $s2=$("#s2");
        if($s2.is(":has(:hidden)")){
            $s2.children().show();
        }
        else{
            $s2.children("#b1").hide()
        }  
            },
        
        }
    }
  
</script>

<style>
    *{
        margin:0;
        padding:0;
    }
    a:hover{
        text-decoration: none;
    }
    .app-pro{
        width:100%;
        height:100%;
        background:#F1F2F3;
        margin:0;
        padding-top:10rem;
    }
    .start_tab{
        width:1180px;
        background:#fff;
        margin:0 auto;
        padding:0 30px;
    }
    .start_tab_box{
        width:100%;
        margin:auto;
        text-align:left;
        padding:20px 10px;
        border-bottom:1px dotted #DDDDDD;
        position:relative;
        
    }
    #a1{
        width:100%;
        margin:0 auto;
        padding:25px 10px;
        line-height:20px;
        position:relative;
        display:none;
    }
    #b1{
        width:100%;
        margin: auto;
        padding:10px 10px;
        line-height: 50px;
        position:relative;
        display:none;
    }

    .start_tab_box button{
        width:30px;height:35px;
        position:absolute;
        right:25px;
        top:middle;
        border:none;
    }

    .start_tab_title{
        width:80px;
        display:inline-block;
        color:#212121;
        font-weight: bold;
        }
        .start_tab_box a{
            text-align: center;
            padding:8px 12px;
            margin:5px ;
            color:#4A4A4A;
            font-size:14px;
            font-family: "微软雅黑";
        }
        .start_tab_box a:hover,.start_tab_box a.active{
            background:#30C2B0;
            color:#fff;
            border-radius:50%;
        }
       
    /* 主体 */
    div.start_sel{
        width:1180px;height:90px;
        margin:0 auto;
        padding:20px 0;
    }
    div.start_sel a{
        display:inline-block;
        width:132px;height:50px;
        text-align:center;
        line-height: 50px;
        border:1px solid #D2D2D2;
    }
    div.start_sel>:first-child{
        color:#4A4A4A;
    }
    div.start_sel>:last-child{
        color:#4FCBBC;
        background:#fff;
    }
    
    .start_list{
        margin:0 auto;
        width:1186px;
    }
    .clearfix::after{
        clear:both;
        display:block;
        content:"";
    }
    .start_list a{
        width:283px;
        float:left;
        position:relative;
        margin:0 13.5px 20px 0;
    }
    .start_list a>img{
        width:283px;margin:0;
    }
    .start_list a .start_case_tips{
        width:100%;height:40px;
        padding:10px;
        background:#fff;
    }
    .start_list a .start_case_tips img{
        vertical-align: middle;
        margin:0 5px;
    }
    .start_list a .start_case_tips span{
        color:#4A4A4A;
        font-size:6px;
    }
    .start_move{
        width:100%;
        margin:20px 0;
        background-color:#F7F7F7;
    }
    .start_move .button{
        width:750px;
        margin:0 auto;
        text-align:center;
        line-height: 50px;
        color:#70D5C8;
        cursor: pointer;
    }
  
</style>