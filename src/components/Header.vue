<template>
    <div class="app-nav">
        <div class="app-home" :style="bg">
            <div class="app-home1">
                <ul>
                    <li @click="jumpGo"><img :src="navimg"></li>
                    <li v-for="(item,i) of navlist" @mouseenter='navmouseenter(i)'>
                        <router-link to="" :style="fontc" >
                            <span @click.prevent="qump" :data-id="i">{{item.title}}</span>
                        </router-link>
                    </li>
                    <li  @mouseleave="search_mou">
                        <input type="text" class="textch" v-model='kwords' spellcheck ='false' placeholder="大家都在搜"  @focus='mousearch'  @blur="mousearch1" ref="input" @keyup.13="search" @keyup.38="ktxt(-1)" @keyup.40="ktxt(1)">
                        <div class="search" @click="search"><img src="http://127.0.0.1:3500/img/timg.png" alt=""></div> 
                        <ul class="search_ul" v-show="search_show"  v-if="kList.length>0">
                            <li v-for='(k,i) of kList' @click="search_li" :data-liid="k.item" :class="{bgcolor:a==i}" >{{k.item}}</li>
                        </ul>
                    </li> 
                </ul>
            </div>
        </div>
        <!--下拉-->
        <div class="drop-down" :style="show" @mouseleave='navmouseleave()'>
            <div class="drop-down1">
                <ul>
                    <li v-for="(item,i) of designlist">
                        <router-link to="">
                            <div class="ex_icon" :style="'background-image:url('+item.pic+')'"  @click.prevent="jump" :data-id="i"></div>
                            <p :style="pcolor">{{item.title}}</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            navlist:[],
            designlist:[],
            bg:{backgroundColor:""},
            show:{display:"",transition:''},
            fontc:{color:""},
            navimg:["http://127.0.0.1:3500/img/nav/logo.png"],
            pcolor:{color:""},
            search_show:false,
            kwords:'',
            kList:[],
            a:-1,
            b:''
        }
    },
    created() {
        this.nav();
    },
    watch: {
        kwords(){
            if(this.a==-1){
                this.associate();
                this.a=-1;
                this.b=this.kwords
            }
        }
    },
    methods:{
        nav(){
            var url="http://127.0.0.1:3500/header";
            this.axios.get(url).then(result=>{
                this.navlist=result.data.nav;
                this.designlist=result.data.design;
            })
        },
        navmouseenter(i){
            if(i==0){
                this.show.display="block";
                this.bg.backgroundColor="rgba(255,255,255,1)";
                this.fontc.color="#000";
                this.navimg="http://127.0.0.1:3500/img/nav/logo1.png";
                this.show.transition="all 0.3s";
            }else if(i!=0){
                this.show.display="none";
                this.bg.backgroundColor="rgba(0,0,0,0.7)";
                this.fontc.color="#fff";
                this.navimg="http://127.0.0.1:3500/img/nav/logo.png";
            }
        },
        navmouseleave(){
            this.show.display="none";
            this.bg.backgroundColor="rgba(0,0,0,0.7)";
            this.fontc.color="#fff";
            this.navimg="http://127.0.0.1:3500/img/nav/logo.png";
        },
        dropmouseenter(i){
            this.pcolor.color="#3cc5b4";
        },
        dropmouseleave(){
            this.pcolor.color="#000";
        },
        jumpGo(){
            this.$router.push("/index");
        },
        qump(e){
            var id=e.target.dataset.id;
            var path="/"
            if(id==0){
                path="/design"
            }else if(id==1){
                path="/ppsl"
            }else if(id==2){
                path="/Vr"
            }else if(id==3){
                path="/Topic"
            }else{
                path="/"
            }
            this.$router.push(path)
        },
        jump(e){
            var id=e.target.dataset.id;
            var path="/"
            if(id==0){
                path="/Customized"
            }else if(id==1){
                path="/Renovation"
            }else if(id==2){
                path="/Pro"
            }else if(id==3){
                path="/baidu"
            }else{
                path="/"
            }
            this.$router.push(path)
        },
        search(){
            var k=this.kwords.trim();
            if(k.length>0){
                this.$router.push('/customized?kwords='+k);
            }
            this.$refs.input.blur();
        },
        associate(){
            //console.log(this.kwords);
            var url='http://localhost:3500/search/kwords?kwords='+this.kwords;
            this.axios.get(url).then(res=>{
                this.kList=res.data;
            })
        },
        mousearch(){
            this.search_show=true;
        },
        mousearch1(){
            setTimeout(()=>{
                this.search_show=false;
            },100)
        },
        search_mou(){
            this.$refs.input.blur();
        },
        search_li(e){
            this.search_show=true;
            var a=e.target.dataset.liid;
            this.kwords=a;
            var k=this.kwords.trim();
            if(k.length>0)
                this.$router.push('/customized?kwords='+k);
        },
        ktxt(i){
            this.a+=i;
            if(this.a<-1){
                this.a=this.kList.length-1;
            }
            if(this.a>=this.kList.length){
                this.a=-1;
            }
            if(this.a==-1){
                this.kwords=this.b;
                return;
            }
            this.kwords=this.kList[this.a].item;
        },
    },
}
</script>

<style scoped>
    /* 导航栏样式 */
    .app-home{
        margin:0 auto;
        width:100%;
        height: 80px;
        position: absolute;
        top:0;
        left:0;
        z-index: 2;
        background-color:rgba(0,0,0,0.7);
        transition:all 0.4s;
    }
    .app-home>.app-home1{
        margin:0 auto;
        width:1200px;
    }
    .app-home>.app-home1>ul{
        list-style: none;
        display:flex;
    }
    .app-home>.app-home1>ul>li{
        margin:7px auto;
    }
    .app-home>.app-home1>ul>li:first-child{
        cursor: pointer;
    }
    .app-home>.app-home1>ul>li>a{
        transition:all 0.5s !important;    
    }
    .app-home>.app-home1>ul>li>a:hover{
        text-decoration: none;
        color: #3cc5b4 !important;
    }
    .app-home>.app-home1>ul>li>a{
        font-size: 18px;
        line-height: 56px;
        color: #ffffff;
    }


    /* 导航下拉列表 */
    .drop-down{
        width:100%;
        height:110px;
        position: absolute;
        top:5rem;
        padding: 0;
        background:#ffffff;
        display:none;
        z-index:2;
        transition:all 0.8s !important; 
        
    }
    .drop-down>.drop-down1{
        margin:0 auto;
        width:1200px;
    }
    .drop-down>.drop-down1>ul{
        list-style: none;
        display:flex;
        margin-left: 7rem;
    }
    .drop-down>.drop-down1>ul>li{
        padding:0;
        width:124px;
        margin-left: 4rem;
        text-align: center;
    }
    .drop-down>.drop-down1 ul li a:hover{
        text-decoration: none;
    }
    .ex_icon{
        width:38px;
        height:38px;
        margin-left:38px;
        background-repeat: no-repeat;
        background-position: left center;
        background-size: 200% 100%;
        position: absolute;
        top:1rem; 
        transition:all 0.5s !important;
    }
    a:hover>.ex_icon{
        background-position: right center;
        background-size: 200% 100%;
    }
    .drop-down>.drop-down1>ul>li>a p{
        font-size: 13px;
        color:#000000;
        margin-top:4rem;
        text-align: center;
        transition:all 0.5s !important;
    }
    .drop-down>.drop-down1>ul>li>a:hover>p{
        color: #3cc5b4;
    }
    .app-nav{
        position: relative;
    }
    
    .textch{
        width:200px;
        margin-top:0.6rem;
        padding-right: 50px;
    }
    .search{
        width:25px;
        height: 25px;
        margin:0;
        position: relative;
        top:-49px;
        left:157px;
    }
    .search:hover{
        cursor: pointer;
    }
    .search img{
        width: 25px;
        height: 25px;
    }
    .search_ul{
        list-style: none;
        width: 200px;
        background: #ffffff;
        margin-top:-40px;
        box-shadow:5px 5px 15px rgb(14, 13, 13);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .search_ul li{
        font-size: 20px;
        text-align: left;
        padding:5px 0;
        padding-left:  20px;
    }
    .search_ul li:hover{
        background:rgba(60,197,180,0.8);
        color:#ffffff;
        cursor: pointer;
    }
    .bgcolor{
        background:rgba(60,197,180,0.8);
        color:#ffffff;
    }
</style>