<template>
    <div class="app-footer">
        <!-- 底部导航 -->
        <div class="nav_footer">
            <ul>
                <li v-for="item of footerlist">
                    <router-link to="">
                    <span class="border"></span>
                    {{item.ltitle}}
                    </router-link>
                </li>
            </ul>
            <ul>
                <li v-for="item of footerlist">
                    <router-link to="">
                    <span class="border"></span>
                    {{item.ctitle}}
                    </router-link>
                </li>
            </ul>
            <ul>
                <li v-for="(item,i) of footerlist">
                    <p :class="i==0?'p1':''">{{item.rtitle}}</p>
                </li>
            </ul>
            <!-- 二维码 -->
            <div class="wechat_1">
                <img src="http://127.0.0.1:3500/img/footer/wechat_1.jpg">
                <p>官方微信</p>
            </div>
            <!-- 二维码 -->
            <div class="wechat_2">
                <img src="http://127.0.0.1:3500/img/footer/wechat_1.jpg">
                <p>手机商城</p>
            </div>
        </div>
        <!-- 底部导航版权 -->
        <div class="footer">
            <div>
                <img src="http://127.0.0.1:3500/img/footer/ren_01.png">
                <img src="http://127.0.0.1:3500/img/footer/ren_02.png">
                <span>Copyright © 2019 索菲亚家居股份有限公司 All Right Reserved .</span>
                <p>粤ICP备10048445号</p>
                <span>温馨提示：除国家标准以外，本网站所示产品标准均为企业标准。</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            footerlist:[],
        }
    },
    created() {
        this.footer();
    },
    methods:{
        footer(){
            var url="http://127.0.0.1:3500/footer";
            this.axios.get(url).then(result=>{
                this.footerlist=result.data
            })
        },
    },
}
</script>

<style scoped>
    /* 底部导航样式 */
    .app-footer .nav_footer{
        margin:0 auto;
        margin-top:5rem;
        width:1288px;
        height:300px;
        position: relative;
        display: flex;
    }
    .app-footer ul{
        list-style: none;
        margin: 0 auto;
    }
    .app-footer ul li{
        margin-top:2rem;
        text-align: left;
    }
    .app-footer ul li a{
        color:#000;
        transition: all 0.5s;
    }
    .p1{
        color:#000;
        font-size: 17px;
    }
    .app-footer ul li a:hover{
        color:#8f8f94;
        text-decoration: none;
    }
    .app-footer ul li .border{
        display: inline-block;
        width:5px;
        height:14px;
        background: #fb811a;
        border-radius: 15px;
        margin-right: 1rem;
    }

    /* 底部导航二维码 */
    .app-footer .wechat_1,.wechat_2{
        margin-top:2rem;
        margin-right: 3rem;
    }
    .app-footer .wechat_1 p,.wechat_2 p{
        font-size: 16px;
        color:#000;
    }

    /* 底部版权 */
    .footer{
        background: #4c4b49;
        width:100%;
        height: 60px;
    }
    .footer>div{
        width:1288px;
        height: 60px;
        margin:0 auto;
    }
    .footer img{
        margin-left:1rem;
    }
    .footer span{
        display: inline-block;
        color:#999;
        font-size: 12px;
        margin-top:1.3rem;
        margin-left:1rem;
    }
    .footer p{
        display: inline-block;
        color:#fff;
        margin-left:1rem;
    }
</style>