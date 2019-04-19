<template>
  <div class="app-sidebar">
    <div class="sidebar" v-show="showtop">
        <ul>
            <li class="l1">
                <a href="https://desk.v5kf.com/desk/kehu_zh.html?site=158021&human=2&oid=e85be9a698f648962e6507bd87302671&accountid=2694503025c1d&ip=122.224.144.210&location=%7B%22countries%22%3A%22%E4%B8%AD%E5%9B%BD%22%2C%22province%22%3A%22%E6%B5%99%E6%B1%9F%22%2C%22city%22%3A%22%E6%9D%AD%E5%B7%9E%22%7D&url=https%3A%2F%2Fwww.suofeiya.com%2Ftopic%2F927.html">
                    <img src="http://127.0.0.1:3500/img/sidebar/ricn_01.png">
                    <p>咨询客服</p>
                </a>
            </li>
            <li>
                <router-link to="">
                    <img src="http://127.0.0.1:3500/img/sidebar/ricn_02.png">
                    <p>免费预约</p>
                </router-link>
            </li>
            <li>
                <router-link to="/Topic">
                    <img src="http://127.0.0.1:3500/img/sidebar/ricn_03.png">
                    <p>优惠活动</p>
                </router-link>
            </li>
            <li class="l4">
                <a href="javascript:;" @click="sidebartop()" >
                    <img src="http://127.0.0.1:3500/img/sidebar/ricn_04.png" >
                </a>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return{
        showtop:false,
      }
    },
    created() {

    },
    mounted(){
        window.addEventListener('scroll',this.top)
    }, 
    methods:{
        top(){
            var scrollTop=window.pageYOffset ||document.documentElement.scrollTop||document.body.scrollTop;
            if(scrollTop>300){
                this.showtop=true;
            }else if(scrollTop<300){
                this.showtop=false;
            }   
        },
        sidebartop(){
            // var scrollTop=window.pageYOffset ||document.documentElement.scrollTop||document.body.scrollTop;
            document.documentElement.scrollTop-=15;
            if(document.documentElement.scrollTop>=16){
                var c=setTimeout(()=>this.sidebartop(),1);
            }else{
                clearTimeout(c);
            }
        }
    },
}
</script>

<style scoped>
    .app-sidebar .sidebar{
        width:78px;
        height:auto;
        position: fixed;
        top:25%;
        right: 30px;
        background:rgba(255,255,255,0.8);
        z-index: 9999;
        transition: all 0.8s !important;
    }
    .app-sidebar .sidebar ul{
        list-style: none;
        padding:0;
    }
    .app-sidebar ul li{
        width: 70px;
        height:50px;
        margin-top:2rem;
        padding-left:0.5rem;
        text-align: center;
    }
    .app-sidebar ul .l1{
        margin-top:1rem!important;
    }
    .app-sidebar ul .l4{
        padding-top:1rem!important;
    }
    .app-sidebar ul li p{
        border-bottom: 1px solid rgb(104, 99, 99);
        margin-top: 0.5rem;
        padding-bottom: 1rem;
    }
    .app-sidebar ul li a{
        color:#000;
        font-size: 12px;
        transition: all 0.8s !important;
    }
    .app-sidebar ul li a:hover{
        text-decoration: none;
    }
    .app-sidebar ul li a:hover>img{
        transform:scale(1.1);
    }
    .app-sidebar ul li a:hover>p{
        color:#3cc5b4;
        text-decoration: none;
    }
</style>