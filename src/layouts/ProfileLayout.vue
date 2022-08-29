<template>
<div class="flex flex-row overflow-hidden">
      <div class="hidden md:block">
            <div class="w-64 flex-shrink-0 h-screen  bg-blue-100 flex flex-col justify-between bg-white p-10 ">

                  <div class="">
                        <div class="flex flex-col shrink-0 items-center space-y-3 pb-5 border-b border-gray-200">
                              <img class="h-9 mb-9" src="@/assets/images/blog.svg" />
                              <img src="@/assets/images/profileicon.svg" class="h-20 w-20" />
                              <p class="text-base font-normal tracking-wider text-black">Carter Bator</p>
                              <p class="text-xs font-normal text-gray-500">carter@gmail.com</p>
                              <p class="text-xs font-normal text-gray-500 ">+1 23 435 546</p>
                        </div>

                        <ul class="pt-9 flex flex-col h-full">
                              <router-link to="/profile/dashboard" class="relative">
                                    <li :class="{'text-blue-500':active == 'dashboard'}" class="flex flex-row space-x-6 text-xs font-normal tracking-wider">

                                          <img src="@/assets/images/dashboardicon.svg" alt="" class="w-6 h-6" />
                                          <a href="">Dashboard </a>
                                    </li>
                              </router-link>
                              <router-link to="/profile/categories">
                                    <li :class="{'text-blue-500':active == 'categories'}" class="flex flex-row space-x-6 text-xs font-normal tracking-wider mt-6">

                                          <img src="@/assets/images/categoriesicon.svg" alt="" class="w-6 h-6" />
                                          <a href="">Categories</a>
                                    </li>
                              </router-link>
                              <router-link to="/profile/posts">
                                    <li :class="{'text-blue-500':active == 'posts'}" class="flex flex-row space-x-6 text-xs font-normal tracking-wider mt-6">

                                          <img src="@/assets/images/Postsicon.svg" alt="" class="w-6 h-6">
                                          <a href="">Posts</a>
                                    </li>
                              </router-link>

                        </ul>

                  </div>

                  <div class="flex flex-row space-x-6 text-xs font-normal tracking-wider mt-auto">
                        <img src="@/assets/images/logouticon.svg" alt="">
                        <a href="">Log Out</a>

                  </div>
            </div>
      </div>

      <div class="w-full bg-neutral-100 pt-6 px-12  pb-12 overflow-auto h-screen">
            <div class=" flex flex-row justify-between">
                  <form action="">
                        <label class="">
                              <SearchInputVue type="search" name="Search Posts" placeholder="Search Posts" />
                        </label>
                  </form>
                  <div class="flex flex-col space-y-2  md:flex-row md:space-x-9 md:space-y-0 ">
                        <div class="bg-white rounded-full p-1">
                              <!-- width po rritet kur bohet zoom-->
                              <img src="@/assets/images/notificationicon.svg" alt="" class="" />
                        </div>

                        <router-link to="/profile/posts/createpost">
                              <ButtonVue color="blue">CREATE POST</ButtonVue>
                        </router-link>
                  </div>
            </div>
            <div class="pt-11">
                  <slot />
            </div>
      </div>
</div>
</template>

<script>
import SearchInputVue from '@/components/Form/SearchInput.vue'
import ButtonVue from '@/components/Buttons/Button.vue'
export default {

      name: ["ProfileLayout"],

      components: {
            SearchInputVue,
            ButtonVue,
      },

      props: {
            active: {
                  default: null,
                  type: String,
            }
      },
}
</script>
