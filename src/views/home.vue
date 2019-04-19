<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Sidebar></Sidebar>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    Sidebar,
    Footer
  }
}
</script>
