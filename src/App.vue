<template>
  <MainNav></MainNav>
  <!--Use a self closing tag wher no internal content is needed-->
  <!--Call in the mainNav component-->
  <main-nav />
</template>
<script>
import MainNav from "@/components/MainNav.vue";
export default {
  name: "App",
  components: {
    MainNav: MainNav, //1st part is the key to render it into a html tag, 2ns part is the same name as the import that is also the name of the expoort from the component
    // In es6 you can enter just: MainNav,
  },
  //register components= render components so they can run here
};
</script>
