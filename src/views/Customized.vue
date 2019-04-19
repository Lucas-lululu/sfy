<template>
    <div id='main'>
        <section>
            <nav>
                <router-link to="/">首页</router-link><b>></b>
                <router-link to="/design">设计方案</router-link><b>></b>
                <span>定制案例</span>
            </nav>
            <div class="content">
                <ul class="classify list-unstyled">
                    <li>
                        <h4>户型:</h4>
                        <a @click='change' v-for='(t,i) of types' data-id='0' :data-i='i' :class='{active:i==showT}' href="javascript:;">{{t.item}}</a>
                    </li>
                    <li>
                        <h4>空间:</h4>
                        <a @click='change' v-for='(s,i) of spaces' data-id='1' :data-i='i' :class='{active:i==showP}' href="javascript:;">{{s.item}}</a>
                    </li>
                    <li>
                        <h4>风格:</h4>
                        <a @click='change' v-for='(y,i) of styles' data-id='2' :data-i='i' :class='{active:i==showS}' href="javascript:;">{{y.item}}</a>
                    </li>
                </ul>
                <div>
                    <a @click='chgHot' href="javascript:;" :class="{active:order==0}">热门搜索 <b :class="{show:order==0}">▽</b></a>
                    <a @click='chgNew' href="javascript:;" :class="{active:order==1}">最新发布<b :class="{show:order==1}">▽</b></a>
                </div>
                <ul class="list-unstyled case">
                    <li v-for='c of cases'>
                        <a href='javascript:;'><img  @click='goDal' :data-id='c.pid':src="`http://localhost:3500${c.pic}`"></a>
                        <div class="case-right ml-3">
                            <a @click='goDal' :data-id='c.pid' href="javascript:;">{{c.title}}</a>
                            <div class="lable mt-4 mb-3">
                                <span v-for='l of c.lable'>{{l}}</span>
                            </div>
                            <p>{{c.intro}}</p>
                        </div>
                    </li>
                </ul>
                <ul class="list-unstyled page-ul" :class='{hide:pageCount<=0}'>
                    <li><a @click='first' href="javascript:;" class="first" :class='{hide:pno<5}'>首页</a></li>
                    <li><a @click='prev'  href="javascript:;" class="prev" :class='{hide:pno==0}'>上一页</a></li>
                    <li v-for='(p,i) of page'><a @click='changePage' :data-p='i+minP-1' href="javascript:;" :class="{active:pno==i+minP-1}">{{i+minP}}</a></li>
                    <li><a @click='next' href="javascript:;" class="next"  :class='{hide:pageCount-1==pno}'>下一页</a></li>
                    <li><a @click='last' href="javascript:;" class="last"  :class='{hide:pageCount-1==pno||pageCount<=5}'>尾页</a></li>
                    <div class="jump ml-2">
                        <span>共{{pageCount}}页</span>
                        <span :class='{hide:pageCount<=1}' class="ml-3 mr-2">跳转到:</span>
                        <input @keyup.13='goPage' :class='{hide:pageCount<=1}' v-model='jumpP' type="text" maxlength="5">
                        <a :class='{hide:pageCount<=1}' @click='jumpPage' class="ml-2" href="javascript:;">确定</a>
                    </div>
                </ul>
            </div>
        </section>
        <div @click='close' class="dialog" v-show='showMask'>
            <div class='mask'>
                超出页码范围，请输入符合条件的页码！
                <a @click='close' href="javascript:;">
                    <span>×</span>
                </a>
            </div>
        </div>                    
    </div>
</template>

<script>
export default {
    data() {
        return {
            types:[],
            spaces:[],
            styles:[],
            cases:[],
            pageCount:0,
            pno:0,
            url:'http://localhost:3500/customized',
            type:'全部',
            space:'全部',
            style:'全部',
            showT:0,
            showP:0,
            showS:0,
            order:0,
            minP:1,
            page:0,
            showMask:false,
            jumpP:'',
            kwords:this.$route.query.kwords
        }
    },
    created() {
        this.load();
        this.loadPage();
        console.log(this.kwords);
    },
    mounted() {
        this.search();
    },
    watch: {
        $route(){
            this.kwords=this.$route.query.kwords;
            this.search();
        }
    },
    methods: {
        loadPage(){
            var url=this.url+'/products?pno='+this.pno+'&types='+this.type;
            url+='&space='+this.space+'&style='+this.style;
            url+='&order='+this.order;
            this.axios.get(url).then(res=>{
                this.pno=res.data.content.pno;
                this.pageCount=res.data.content.pageCount;
                if(this.pageCount>5)
                    this.page=5;
                else
                    this.page=this.pageCount;
                var arr=res.data.content.products;
                for(var i in arr){
                    var arrT=[];
                    arrT=this.spStr(arrT,arr[i].types);
                    var arrS=[];
                    arrS=this.spStr(arrS,arr[i].space);
                    var arrY=[];
                    arrY=this.spStr(arrY,arr[i].style);
                    arr[i].lable=[...arrT,...arrS,...arrY];
                }
                this.cases=arr;
            })
        },
        load(url){
            var url=this.url;
            this.axios.get(url).then(res=>{
                this.types=res.data.types;
                this.spaces=res.data.space;
                this.styles=res.data.style;
            })
        },
        change(e){
            var id=e.target.dataset.id;                
            var i=e.target.dataset.i;
            if(id==0){
                this.showT=i;
                this.type=this.types[i].item;
            } 
            if(id==1){
                this.showP=i;
                this.space=this.spaces[i].item;
            }                 
            if(id==2){
                this.showS=i;
                this.style=this.styles[i].item;
            }
            this.kwords=""; 
            this.loadPage();
        },
        chgHot(){
            if(this.order==1){
                this.order=0;
                if(this.kwords){
                    this.search();
                }else{
                    this.loadPage();               
                } 
            }
        },
        chgNew(){
            if(this.order==0){
                this.order=1;
                if(this.kwords){
                    this.search();
                }else{
                    this.loadPage();               
                } 
            }
        },
        spStr(arr,str){
            return arr=str.split('@');
        },
        changePage(e){
            this.pno=e.target.dataset.p;
            if(this.pno<=3){
                this.minP=1;
            }else if(this.pno>3){
                this.minP=this.pno-3;
            }
            if(this.kwords){
            this.search();
            }else{
            this.loadPage(); 
            } 
            
            this.backTop();
        },
        prev(){
            if(this.minP>1){
                this.minP--;
            }
            this.pno--;
            if(this.kwords){
                this.search();
            }else{
                this.loadPage();               
            } 
            this.backTop();
        },
        next(){
            this.pno++;
            if(this.pno>this.minP+3){
                this.minP++;
            }
            if(this.kwords){
                this.search();
            }else{
                this.loadPage();               
            } 
            this.backTop();
        },
        first(){
            this.minP=1;
            this.pno=0;
            if(this.kwords){
                this.search();
            }else{
                this.loadPage();               
            } 
            this.backTop();
        },
        last(){
            this.minP=this.pageCount-4;
            this.pno=this.pageCount-1;
            if(this.kwords){
                this.search();
            }else{
                this.loadPage();               
            } 
            this.backTop();
        },
        close(){
            this.showMask=false;
        },
        jumpPage(){
            var reg=/^[1-9]\d*$/;
            var isNum=reg.test(this.jumpP);
            if(isNum&&this.jumpP<=this.pageCount){
                this.pno=this.jumpP-1;
                if(this.pno<=3){
                this.minP=1;
                }else if(this.pno>3){
                    this.minP=this.pno-3;
                }
                if(this.kwords){
                    this.search();
                }else{
                    this.loadPage();               
                } 
                this.backTop();
            }else{
                this.showMask=true;
                this.jumpP='';
            }
        },
        goPage(){
            this.jumpPage();
        },
        goDal(e){
            var pid=e.target.dataset.id;
            //console.log(pid);
            this.$router.push('/Case_details3?productId='+pid);
        },
        backTop(){
            document.documentElement.scrollTop-=20;
            if (document.documentElement.scrollTop>=200) {
                var c=setTimeout(()=>this.backTop(),5);
            }else {
                clearTimeout(c);
            }
        },
        search(){
            if(this.kwords){
                var url='http://localhost:3500/search/products?';
                url+='kwords='+this.kwords+'&pno='+this.pno;
                url+='&order='+this.order;
                this.axios.get(url).then(res=>{
                    console.log(res);
                    this.pno=res.data.content.pno;
                    this.pageCount=res.data.content.pageCount;
                    if(this.pageCount>5)
                        this.page=5;
                    else
                        this.page=this.pageCount;
                    var arr=res.data.content.products;
                    for(var i in arr){
                        var arrT=[];
                        arrT=this.spStr(arrT,arr[i].types);
                        var arrS=[];
                        arrS=this.spStr(arrS,arr[i].space);
                        var arrY=[];
                        arrY=this.spStr(arrY,arr[i].style);
                        arr[i].lable=[...arrT,...arrS,...arrY];
                    }
                    this.cases=arr;
                })
            }
        }
    },
}
</script>

<style scoped>
    *{margin: 0;padding: 0}
    a{
        color: #4a4a4a;
        text-decoration: none;
    }
    a:hover{
        color: #fb811a;
    }
    #main{
        width: 100%;
        padding: 120px 0;
        background: #f1f2f3;
    }
    section{
        width: 1180px;
        margin: 0 auto;
        text-align: left;
    } 
    section>nav{
        font-size: 12px;
    } 
    section>nav>a{
        color: #808080;
    }
    section>nav>span,section>nav>b{
        color: #999;
    } 
    section>div.content{
        background: #fff;
        padding: 20px 40px 40px;
    }
    section>div.content>ul.classify>li{
        padding: 20px 0;
        display: flex;
    }
    section>div.content>ul.classify>li+li{
        border-top: 1px dashed #ddd;
    }
    section>div.content>ul.classify>li>h4{
        font-size: 16px;
        width: 50px;
        font-weight: bold;
        margin-right: 10px;
        margin-top: 4px;
    }
    section>div.content>ul.classify>li>a{
        display: inline-block;
        padding: 5px 10px;
        margin-right: 30px;
        font-size: 14px;
        line-height: 1.3;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        border-radius: 15px;
        transition: all .3s;
    }
    section>div.content>ul.classify>li>a.active,section>div.content>ul.classify>li>a:hover{
        font-weight: bold;
        background: #30c2b0;
        color: #fff !important;
    }
    section>div.content>div{
        margin-top: 30px;
        position: relative;
    }
    section>div.content>div>a{
        font-size: 16px;
        font-weight: bold;
        margin-right: 50px;
    }
    section>div.content>div>a.active{
        color: #30c2b0;
    }
    section>div.content>div>a>b{
        font-size: 30px;
        position: relative;
        top: 5px;left: 0px;
        opacity: 0;
    }
    section>div.content>div>a>b.show{
        opacity: 1;
    }
    section>div.content>ul.case>li{
        padding: 20px 0;
        border-bottom: 1px dashed #ddd;
        display:flex; 
    }
    section>div.content>ul.case>li>a{
        display: block;
        width: 274px;
        height: 178px;
        overflow: hidden;
    }
    section>div.content>ul.case>li>a>img{    
        width: 274px;
        height: 178px;
        transition: all 1s;
    }
    section>div.content>ul.case>li>a>img:hover{
        transform: scale(1.1);
    }
    section>div.content>ul.case>li:first-child{
        border-top: 1px dashed #ddd;
    }
    section>div.content>ul.case>li>div.case-right{
        width: 810px;
    }
    section>div.content>ul.case>li>div.case-right>a{
        font-size: 18px;
        font-weight: bold;
    }
    section>div.content>ul.case>li>div.case-right>a:hover{
        color: #30c2b0;
    }
    section>div.content>ul.case>li>div.case-right>div.lable>span{
        display: inline-block;
        padding: 5px 10px;
        margin-right: 25px;
        font-size: 14px;
        line-height: 1.3;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        border: 1px dashed #ddd;
        border-radius: 15px;
        color: #30c2b0;
    }
    section>div.content>ul.case>li>div.case-right>p{
        font-size: 14px;
        color: #808080;
        line-height: 30px;
    }
    .page-ul{
        display: flex;
        margin: 0;
        margin-top: 20px;
        justify-content: center;
    }
    .page-ul>li+li{
        margin-left: 3px;
    }
    .page-ul>li>a{
        display: block;
        width: 36px;
        height: 36px;
        font-size: 14px;
        text-align: center;
        line-height: 36px;
        border: 1px solid #ccc;
        border-radius: 2px;
        box-sizing: content-box;
    }
    .page-ul>li>a:hover,.page-ul>li>a.active{
        background: #30c2b0;
        color: #fff ;
        border-color: #30c2b0;
    }
    .page-ul>li>a.prev,.page-ul>li>a.next,.page-ul>li>a.first,.page-ul>li>a.last{
        width: 80px;
    }
    .page-ul>li>a.prev.disabled,.page-ul>li>a.next.disabled{
        color:#bbb;
        cursor: not-allowed;
    }
    .page-ul>li>a.prev.disabled:hover,.page-ul>li>a.next.disabled:hover{
        background: #ddd !important;
        color: #bbb !important;
    }
    .page-ul>li>p{
        font-size: 14px;
        margin: 0;
        line-height: 30px;
    }
    .hide{
        display: none !important;
        margin: 0 !important;
        width: 0 !important;
    }
    section>div.content>.page-ul>div.jump{
        height: 38px;
        line-height:38px;
    }
    section>div.content>.page-ul>div.jump>span{
        font-size: 14px;
        color: #7f7f7f;
    }
    section>div.content>.page-ul>div.jump>input{
        width: 38px;
        height: 38px;
        outline-style: none;
        border: 1px solid #ebebeb;
        border-radius: 2px;
        color: #333;
        font-size: 14px;
        text-align: center;
    }
    section>div.content>.page-ul>div.jump>input:focus{
        border-color: #30c2b0;
    }
    section>div.content>.page-ul>div.jump>a{
        display: inline-block;
        width: 45px;
        height: 38px;
        line-height: 38px;
        text-align: center;
        font-size: 14px;
        background: #ddd;
    }
    section>div.content>.page-ul>div.jump>a:hover{
        background: #30c2b0;
        color: #fff;
    }
    #main>div.dialog{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: 100;
    }
    #main>div.dialog>div.mask{
        width: 400px;
        height: 120px;
        background: #ffffff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 8px;
        text-align: center;
        line-height: 120px;
        font-size: 18px;
        color: #000;
    }
    #main>div.dialog>div.mask>a{
        position: absolute;
        top: 15px;
        left: 365px;
        display:block;
        width:20px;
        height:20px;
        overflow: hidden;
    }
    #main>div.dialog>div.mask>a>span{
        position: absolute;
        top: -50px;
        left: 0px;
        font-size: 32px;
    }
</style>