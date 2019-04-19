<template>
    <div class="app-VR">
        <div class="layer">
            <div class="layer-text">
                图片加载中.......
            </div>
        </div>
        <div class="wrapper"></div>    
        <div class="d1">
            <div class="pos1">
                <router-link to="/index">首页</router-link>
                <router-link to="" id="play">自动播放</router-link>
                <router-link to="" id="pause">暂停</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    created() {

    },
    methods: {

    },
    mounted() {
        let layer = document.querySelector(".layer");
        var play=document.getElementById("play");
        var pause=document.getElementById("pause");
        play.onclick=function(){
            w3d.play();
        }
        pause.onclick=function(){
            w3d.pause();
        }
        let w3d = new watch3D({
            wrapper : ".wrapper",
            autoplay : true,
            width: 5000,
            height : 2500,
            num : 80,
            maxY : 15,
            resource : "http://127.0.0.1:3500/img/155.jpg",
            loadstart : function(){
                layer.style.display = "block";
            },
            loadend : function(data){
                layer.style.display = "none";
            }
        });
    },
}
</script>

<style scoped>

    .wrapper{
        position: relative;
        height: 940px !important;
        max-height: 100%;
        margin : 0 auto;
        overflow: hidden;
    }
    ayer{
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        z-index: 1000;
    }
    .layer-text{
        position: absolute;
        left: 50%;
        top: 50%;
        width: 300px;
        text-align: center;
        font-size: 16px;
        color: #fff;
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
    }
    .d1{
        position: relative;
        display: flex;
        left: 35%;
        top:-70px;
    }
    .pos1{
        position: absolute;
    }
    .pos1 a{
        display: inline-block;
        width:200px;
        height: 40px;
        background: rgba(0,0,0,0.8);
        font-size:20px;
        color:#fff;
        line-height: 40px;
        transition: all 1s !important;
    }
    .pos1 a:hover{
        text-decoration: none;
        background: #fff;
        color:#3cc5b4;
    }
    .pos1 a:first-child{
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
    }
    .pos1 a:last-child{
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
    }
</style>