<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods: {
    
  },
}
</script>
<style>
  #app {
    font-family: 'STHeiti', 'Arial', 'sans-serif','Avenir','Helvetica';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
  .watch3D{
      position: relative;
      height: 100%;
  }
  .watch3D-container{
      position: relative;
      height: 100%;
      perspective: 1000px;
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
  }
  .watch3D-bg{
      position: absolute;
      width: 10000px;
      height: 10000px;
      left: 50%;
      top: 50%;
      -webkit-transform: translateX(-50%) translateY(-50%) translateZ(-1500px);
      transform: translateX(-50%) translateY(-50%) translateZ(-1500px);
  }
  .watch3D-wrapper{
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
  }
  .watch3D-lists{
      position: absolute;
      width: 100%;
      height: 100%;
      left: 50%;
      top: 50%;
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
      -webkit-transform: translate(-50%,-50%);
      transform: translate(-50%,-50%);
  }
  .watch3D-list{
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
      -webkit-transform-origin: 50% 50% 0px;
      transform-origin: 50% 50% 0px;
      -webkit-transform: translate(-50%,-50%);
      transform: translate(-50%,-50%);
  }
  .watch3D-tip{
      position: absolute;
      left: 50%;
      top: 50%;
      width: auto;
      height: auto;
      -webkit-transform-origin: 50% 50% 0px;
      transform-origin: 50% 50% 0px;
      -webkit-transform: translate3d(-50%,-50%,-1px) rotateY(180deg);
      transform: translate3d(-50%,-50%,-1px) rotateY(180deg);
      display: block;
  }
  .watch3D-tip-wrapper{
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100px;
      height: 100px;
      background: #6cf;
  }
  .watch3D-tpl-content{
      position: relative;
  }
</style>