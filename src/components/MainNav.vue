<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid order-brand-gray-1"
      >
        <a href="/" class="flex items-center text-xl">{{ company }}</a>
        <h2 class="flex items-center h-full ml-8">Developed by {{ author.firstName }} {{author.lastName}}
        </h2>
      </div>
    </div>
  </header>
</template>
<script>
//Typically this is used, standard export out of js file
//{} sends out a js object
export default {
  name: "MainNav",
  //give a formal name to the component
  data(){
    return{
        company: "Boba Careers",
        author: {
            firstName: "Declan",
            lastName: "Tyson",
        },
        //This method of entering data in tags is forbideen in my team
        //May be called double gingering
    };
  }
};
</script>
