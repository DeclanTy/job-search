<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="
          flex flex-nowrap
          h-full
          px-8
          mx-auto
          border-b border-solid
          order-brand-gray-1
        "
      >
        <a :href="url" class="flex items-center text-xl">{{ company }}</a>

        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <a href="" class="flex items-center h-full py-2.5">{{
                menuItem
              }}</a>
              <!--Dynamic generated hmtl-->
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
          <action-button
            v-else
            text="Log in"
            type="primary"
            data-test="login-button"
            @click="loginUser"
          />

          <!--Same as js if else statement -->
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/ActionButton";
import ProfileImage from "@/components/ProfileImage";

//{} sends out a js object
export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
  },
  //give a formal name to the component
  data() {
    return {
      company: "Boba Careers",
      url: "https://careers.google.com",
      //This method of entering data in tags is forbideen in my team
      //May be called double gingering
      menuItems: [
        "Teams",
        "Locations",
        "Life at Boba Corp",
        "How we hire",
        "Students",
        "Jobs",
      ],
      isLoggedIn: false,
    };
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
