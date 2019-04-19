<template>
    <!--地图容器-->
    <div class="bgcolor">
    <div class="baidu">
        <div class="span"><router-link to="/index">首页</router-link>>附近门店</div>
        <div class="baidu1">
            <div class="ditu">
                <ul>
                    <li v-for='item of baidulist' @click="tiao" :data-lng="item.lng" :data-lat="item.lat">
                        <img :src="item.pic" alt="" width="11px" height="18px;" style="margin:3px;">
                        <span @click="tiao" :data-lng="item.lng" :data-lat="item.lat">{{item.ltitle}}</span>
                        <p>{{item.rtitle}}</p>
                        <router-link to="">查看详情></router-link>
                    </li>
                </ul>
            </div>
            <div id="XSDFXPage" class="XSDFXPage"></div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:'',
    data () {
        return {
            dituip:{lng:120.103309,lat:30.320464},
            baidulist:[]
        }
    },
    mounted() {
        // 百度地图API功能
        // 创建Map实例
        var map = new BMap.Map("XSDFXPage",{enableMapClick:true});
        // 初始化地图,设置中心点坐标和地图级别
        map.centerAndZoom(new BMap.Point(116.4035,39.915), 11);
        // 添加地图类型控件
        map.addControl(new BMap.MapTypeControl());  
        // 设置地图显示的城市 此项是必须设置的
        map.setCurrentCity("杭州");    
        // 开启鼠标滚轮缩放      
        map.enableScrollWheelZoom(true);

        /************************************************
        添加工具条、比例尺控件
        *************************************************/
        map.addControl(new BMap.ScaleControl({anchor:BMAP_ANCHOR_TOP_LEFT}));
        map.addControl(new BMap.NavigationControl());
        map.addControl(new BMap.NavigationControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,type:BMAP_NAVIGATION_CONTROL_SMALL}));
        /************************************************
        添加自定义控件类，放大ZoomControl
        *************************************************/
        function ZoomControl() {
            //默认停靠位置和偏移量
            this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
            this.defaultOffset = new BMap.Size(50,23);
        }
        //通过JavaScript的prototype属性继承于BMap.Control
        ZoomControl.prototype = new BMap.Control();
        //自定义控件必须实现自己的initialize方法，并且将控件的DOM元素返回
        //在本方法中创建div容器，并将其添加到地图容器中
        ZoomControl.prototype.initialize = function(map) {
            //创建一个DOM元素
            var div = document.createElement('div');
            //添加文字说明
            div.appendChild(document.createTextNode('放大两级'));
            //添加样式
            div.style.color = '#40C5CC'; 
            div.style.cursor = 'pointer';
            div.style.border = '3px solid gray';
            div.style.backgroundColor = '#eee';
            //绑定事件，点击触发
            div.onclick = function(e) {
                map.setZoom(map.getZoom() + 2);
            }
            //添加DOM元素到地图上
            map.getContainer().appendChild(div);
            //将DOM元素返回
            return div;
        }
        //创建控件
        var myZoomCtrl = new ZoomControl();
        map.addControl(myZoomCtrl)

        /************************************************
        添加添加城市列表控件
        *************************************************/
        map.addControl(new BMap.CityListControl({
            anchor:BMAP_ANCHOR_BOTTOM_RIGHT,
            offset:new BMap.Size(130,23)
            // 切换城市之间事件
            // onChangeBefore: function(){
            //    alert('before');
            // },
            // 切换城市之后事件
            // onChangeAfter:function(){
            //   alert('after');
            // }
        }));
        /************************************************
        添加新图标
        *************************************************/
         
        

        /************************************************
        添加曲线
        *************************************************/
        // var beijingPosition=new BMap.Point(116.432045,39.910683),
        //     hangzhouPosition=new BMap.Point(120.129721,30.314429),
        //     taiwanPosition=new BMap.Point(121.491121,25.127053);
        // var point = [beijingPosition,hangzhouPosition,taiwanPosition];

        /************************************************
        给地图添加右键菜单
        *************************************************/
        var menu = new BMap.ContextMenu();

        var txtMenuItem = [
            {
                text:'放大',
                callback:function(){map.zoomIn()}
            },
            {
                text:'缩小',
                callback:function(){map.zoomOut()}
            }
        ];
        for(var i=0; i < txtMenuItem.length; i++){
            menu.addItem(new BMap.MenuItem(txtMenuItem[i].text,txtMenuItem[i].callback,100));
        }
        map.addContextMenu(menu);
        var geolocation = new BMap.Geolocation(); //创建geolocation实例，返回用户当前的位置
        // 开启SDK辅助定位
        var ab=this.dituip;
        geolocation.enableSDKLocation();
        geolocation.getCurrentPosition(function(r){ //返回用户当前位置。当定位成功时，回调函数的参数为GeolocationResult对象，否则为null
            if(this.getStatus() == BMAP_STATUS_SUCCESS){
                sessionStorage.setItem("SDKLng",r.point.lng);
                sessionStorage.setItem("SDKLat",r.point.lat);
                $.ajax({
                    url:'http://api.map.baidu.com/geocoder/v2/?ak=Ya2nSaqjT3vNrIgba1v4nfWzSxGdtgZD&location=' + r.point.lat + ',' + r.point.lng + '&output=json',
                    dataType: 'jsonp',
                    callback: 'BMap._rd._cbk43398',
                    success: function(res) {
                        var result = res.result,
                            addressComponent = result.addressComponent,
                            adcode = addressComponent.adcode
                        //定义新图标
                        // 设置定时器，对地图进行自动移动
                        // setTimeout(()=>{
                            map.panTo(new BMap.Point(ab.lng,ab.lat));
                        //}, 1000);
                        //setTimeout(()=>{
                            map.setZoom(14);
                        //},2000);
                        /************************************************
                        添加折线
                        *************************************************/
                        var pointGZ = new BMap.Point(ab.lng,ab.lat);
                        var pointHK = new BMap.Point(result.location.lng-0.07919341999992,result.location.lat+0.02374048197923);
                        //setTimeout(function(){
                            var polyline = new BMap.Polyline([pointGZ,pointHK],{strokeColor:"red",strokeWeight:5,strokeOpacity:0.5});
                            map.addOverlay(polyline);
                        //},3000);
                        // "http://developer.baidu.com/map/jsdemo/img/fox.gif"
                        var myIcon = new BMap.Icon("http://127.0.0.1:3500/img/baidu.png",new BMap.Size(20,64));
                        //创建标注
                        var marker = new BMap.Marker(pointHK,{icon:myIcon});
                        var marker1 = new BMap.Marker(pointGZ,{icon:myIcon});
                        //将标注放大地图上
                        map.addOverlay(marker);
                        map.addOverlay(marker1);
                        //文字提示
                        var a=result.formatted_address.split("市")
                        var label = new BMap.Label(a[0]+"市",{offset:new BMap.Size(-26.86,-26.14)});
                        marker.setLabel(label);
                        //添加新图标的监听事件
                        marker.addEventListener('click',function(){
                            var p = marker.getPosition();//获取位置
                            alert("点击的位置是：" + p.lng + ',' + p.lat);
                        })
                    } ,
                    error:function(){

                    }
                });
            }
            else {
                alert('failed'+this.getStatus());
            }
        },{enableHighAccuracy: true});
    },
    created() {
        this.baidu();
    },
    methods: {
        baidu(){
            var url="http://127.0.0.1:3500/baidu";
            this.axios.get(url).then(result=>{
                console.log(result.data)
                this.baidulist=result.data;
            })
        },
        tiao(e){
            var lng=e.target.dataset.lng;
            var lat=e.target.dataset.lat;
            this.dituip.lng=lng;
            this.dituip.lat=lat;
            var map = new BMap.Map("XSDFXPage",{enableMapClick:true});
            map.centerAndZoom(new BMap.Point(120.140182,30.282985), 14);
            map.addControl(new BMap.MapTypeControl());  
            map.setCurrentCity("杭州"); 
            map.enableScrollWheelZoom(true);
            map.addControl(new BMap.ScaleControl({anchor:BMAP_ANCHOR_TOP_LEFT}));
            map.addControl(new BMap.NavigationControl());
            map.addControl(new BMap.NavigationControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,type:BMAP_NAVIGATION_CONTROL_SMALL}));
            function ZoomControl() {
                this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
                this.defaultOffset = new BMap.Size(50,23);
            }
            ZoomControl.prototype = new BMap.Control();
            ZoomControl.prototype.initialize = function(map) {
                var div = document.createElement('div');
                div.appendChild(document.createTextNode('放大两级'));
                div.style.color = '#40C5CC'; 
                div.style.cursor = 'pointer';
                div.style.border = '3px solid gray';
                div.style.backgroundColor = '#eee';
                div.onclick = function(e) {
                    map.setZoom(map.getZoom() + 2);
                }
                map.getContainer().appendChild(div);
                return div;
            }
            var myZoomCtrl = new ZoomControl();
            map.addControl(myZoomCtrl)
            map.addControl(new BMap.CityListControl({
                anchor:BMAP_ANCHOR_BOTTOM_RIGHT,
                offset:new BMap.Size(130,23)
            }));
            var menu = new BMap.ContextMenu();
            var txtMenuItem = [
                {
                    text:'放大',
                    callback:function(){map.zoomIn()}
                },
                {
                    text:'缩小',
                    callback:function(){map.zoomOut()}
                }
            ];
            for(var i=0; i < txtMenuItem.length; i++){
                menu.addItem(new BMap.MenuItem(txtMenuItem[i].text,txtMenuItem[i].callback,100));
            }
            map.addContextMenu(menu);
            var geolocation = new BMap.Geolocation();
            var ab=this.dituip;
            geolocation.enableSDKLocation();
            geolocation.getCurrentPosition(function(r){ 
                if(this.getStatus() == BMAP_STATUS_SUCCESS){
                    sessionStorage.setItem("SDKLng",r.point.lng);
                    sessionStorage.setItem("SDKLat",r.point.lat);
                    $.ajax({
                        url:'http://api.map.baidu.com/geocoder/v2/?ak=Ya2nSaqjT3vNrIgba1v4nfWzSxGdtgZD&location=' + r.point.lat + ',' + r.point.lng + '&output=json',
                        dataType: 'jsonp',
                        callback: 'BMap._rd._cbk43398',
                        success: function(res) {
                            var result = res.result,
                                addressComponent = result.addressComponent,
                                adcode = addressComponent.adcode
                            // setTimeout(()=>{
                            //     map.panTo(new BMap.Point(ab.lng,ab.lat));
                            // }, 2000);
                            // setTimeout(()=>{
                            //     map.setZoom(14);
                            // },4000);
                            map.panTo(new BMap.Point(ab.lng,ab.lat));
                            map.setZoom(14);
                            var pointGZ = new BMap.Point(ab.lng,ab.lat);
                            var pointHK = new BMap.Point(result.location.lng-0.07919341999992,result.location.lat+0.02374048197923);
                            // setTimeout(function(){
                            //     var polyline = new BMap.Polyline([pointGZ,pointHK],{strokeColor:"red",strokeWeight:5,strokeOpacity:0.5});
                            //     map.addOverlay(polyline);
                            // },6000);
                            var polyline = new BMap.Polyline([pointGZ,pointHK],{strokeColor:"red",strokeWeight:5,strokeOpacity:0.5});
                                map.addOverlay(polyline);
                                var myIcon = new BMap.Icon("http://127.0.0.1:3500/img/baidu.png",new BMap.Size(20,64));
                            var marker = new BMap.Marker(pointHK,{icon:myIcon});
                            var marker1 = new BMap.Marker(pointGZ,{icon:myIcon});
                            map.addOverlay(marker);
                            map.addOverlay(marker1);
                            var a=result.formatted_address.split("市")
                            var label = new BMap.Label(a[0]+"市",{offset:new BMap.Size(-26.86,-26.14)});
                            marker.setLabel(label);
                            marker.addEventListener('click',function(){
                                var p = marker.getPosition();
                                alert("点击的位置是：" + p.lng + ',' + p.lat);
                            })
                        } ,
                        error:function(){

                        }
                    });
                }
                else {
                    alert('failed'+this.getStatus());
                }
            },{enableHighAccuracy: true});
        }
    },
}
</script>
<style scoped>
    .bgcolor{
        background: #e9e9e9;
        padding-top:8rem;
    }
    .baidu{
        margin:0 auto;
        padding:2rem;
        width:1288px;
    }
    .baidu1{
        display:flex;
        background: #fff;
    }
    .span{
        color: #000;
        font-size: 14px;
        text-align: left;
        margin-bottom: 1rem;
    }
    .span a{
        color:#000;
    }
    .span a:hover{
        text-decoration: none;
        color:#3cc5b4;
    }
    .ditu{
        width:450px;
        height:700px;
        overflow-y:scroll; 
        overflow-x:hidden;
        table-layout: fixed;
        word-wrap:break-word;
        word-break:break-all;
    }
    .ditu ul{
        list-style: none;
        padding:0;
    }
    .ditu ul li{
        padding-left:1.5rem;
        padding-top:1.8rem;
        padding-bottom: 0.5rem;
        text-align: left;
        transition:all 0.5s !important; 
    }
    .ditu ul li:hover{
        background:#e9e9e9;
    }
    .ditu ul li span:hover{
        color: #3cc5b4;
        cursor: pointer;
    }
    .ditu ul li a{
        margin-left:20rem;
        color: #3cc5b4;
        font-size: 14px;
        transition:all 0.5s !important; 
    }
    .ditu ul li a:hover{
        text-decoration: none;
        color: #fb811a;
    }
    .XSDFXPage{
        width: 780px;
        height: 700px;
        background: #000;
        overflow: hidden;
        margin: 0;
        margin-left:1rem;
    }
</style>