<template>
<div class="relative">
      <div class="relative items-center ">
            <div class="flex absolute inset-y-0 pl-3 items-center pointer-events-none">
                  <img class="h-4" src="../../assets/images/searchicon.svg" />
            </div>
            <input v-model="query" @focus="open = true" type="search" placeholder="Search Posts..." class="border border-gray-300  lg:w-96 h-full rounded-full  px-9 py-2 text-left text-sm text-gray-500  outline-none" />
      </div>

      <div v-if="showTooltip" class="absolute rounded-md bg-white w-full z-10 overflow-auto max-h-[400px] shadow p-2 space-y-4">
            <router-link :to="getPostUrl(post)" v-for="post in posts" :key="post.id" class="flex flex-row items-center gap-4 hover:bg-gray-50">
                  <p class="flex shrink-0">
                        <template v-if="post.resources[0]?.preview_url">
                              <img :src="post.resources[0]?.preview_url" class="object-cover w-16 h-16" />
                        </template>
                        <template v-else>
                              <div>
                                    <img src="@/assets/images/defaultImage.svg" alt="" class="w-16 h-16" />
                              </div>
                        </template>
                  </p>
                  <div class="flex flex-col justify-between space-y-2 text-xs">
                        <p class="font-normal tracking-wider uppercase">
                              {{ post.title }}
                        </p>
                  </div>
            </router-link>
      </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
      name: ["SearchInput"],
      data() {
            return {
                  query: "",
                  posts: [],
                  open: false,
            }
      },
      created() {
      window.addEventListener('click', (e) => {
        if (!this.$el.contains(e.target)){
          this.open = false;
        }
      })
  },
      methods: {
            async getPosts() {
                  await axios(`https://ma.tenton.al/api/v1/posts?search=${this.query}`)
                        .then(res => {
                              this.posts = res.data.data;
                        })
            },
            getPostUrl(item) {
                  return "/posts/" + item.id;
            },

      },

      computed: {
            showTooltip() {
                  if (this.query.length == 0) {
                        return false;
                  }

                  if (!this.open) {
                        return false;
                  }

                  return this.posts.length > 0;
            }
      },

      watch: {
            query() {
                  this.getPosts();
            }
      }

}
</script>
