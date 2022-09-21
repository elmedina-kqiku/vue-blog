<template>
<HomePageLayoutVue>
      <div class=" grid grid-cols-1 lg:grid-cols-12 lg:max-w-full max-w-2xl gap-20 xl:gap-28 xl:gap-28 lg:pl-32 pt-12  text-sm ">
            <div class="col-span-1 lg:col-span-8 space-y-4">

                  <SinglePostVue v-if="post" :post="post" />

                  <div class="flex justify-between tracking-wider ">
                        <button >PREVIOUS</button>
                        <button >NEXT</button>

                  </div>
                  <p class="border-b border-gray-200 pb-4 text-sm font-normal text-black tracking-wider ">
                              Comments ()
                        </p>
                  <div class="" v-for="comment in comments" :key="comment.id" :post="comment">
                        <div class="flex flex-row space-x-5 justify-between ml-3 pt-4">
                              <img :src="comment?.user.resource_url ?? '@/assets/images/profileicon.svg'" class="rounded-full mb-12 h-16 w-20" />
                              <div class="flex flex-col py-2 px-6 space-y-1 bg-white w-full">
                                    <div class="flex flex-row space-x-3">
                                          <p class="text-xs text-black font-bold">{{comment.user.first_name}}></p>
                                          <p class="text-xs text-gray-500">{{formatDate(comment.created_at)}}</p>
                                    </div>

                                    <p class="text-xs text-gray-500">
                                          {{comment.text}}
                                    </p>
                                    <p class="text-xs text-blue-500 font-bold flex justify-end">
                                          <a href="">Reply</a>
                                    </p>
                              </div>
                        </div>
                        <!-- <div class="flex flex-row space-x-5 justify-between  pl-10 pt-3">
            <img :src="comment.user_reply" class="mb-12 h-14 w-14" />
            <div class="flex flex-col py-4 px-6 space-y-1 bg-white">
                  <div class="flex flex-row space-x-3">
                        <p class="text-xs text-black font-bold">{{comment.username_reply}}</p>
                        <p class="text-xs text-gray-500">21 Oct 2021 16:27</p>
                  </div>

                  <p class="text-xs text-gray-500">
                        {{comment.comment_reply}}
                  </p>
                  <p class="text-xs text-blue-500 font-bold flex justify-end">
                        <a href="">Reply</a>
                  </p>
            </div>
      </div> -->
                  </div>
            </div>
            <div class="col-span-1 lg:col-span-4 w-60 flex flex-col space-y-14">
                  <div class="flex flex-col space-y-3">
                        <p class="uppercase text-sm font-normal ">More like this</p>
                        <SugesstionsVue v-for="post in posts" :key="post.id" :post="post" />

                  </div>

                  <div class="flex flex-col space-y-3" v-if="categories">
                        <p class="uppercase text-sm font-normal tracking-wider ">Categories</p>
                        <ul  class="flex flex-col space-y-3 text-sm font-normal text-gray-500 tracking-wider">
                              <li v-for="category in categories" :key="category.id">{{category.name}}</li>

                        </ul>
                  </div>

                  <div class="flex flex-wrap ">
                        <BadgeVue class=" mt-3">Hair</BadgeVue>
                     

                  </div>

            </div>
      </div>
</HomePageLayoutVue>
</template>

<script>
import HomePageLayoutVue from '@/layouts/HomePageLayout.vue';
import BadgeVue from '@/components/Badge/Badge.vue';
import SinglePostVue from '@/components/Posts/SinglePost.vue';
import SugesstionsVue from '@/components/Posts/Sugesstions.vue';
import axios from 'axios'
// import { title } from 'process';

export default {
      name: ["Show"],
      components: {
            HomePageLayoutVue,
            BadgeVue,
            SinglePostVue,
            SugesstionsVue,
      },
      data() {
            return {
                  post: null,
                  posts: [],
                  comments: [],
                  categories: null
            }
      },

      mounted() {
            this.getPosts();
            this.getItem(this.$route.params.id);
            this.getComments();
            this.getCategories();
      },

      methods: {
            
            getPosts() {
                  axios.get('https://ma.tenton.al/api/v1/posts')
                  .then(res => {
                        this.posts = res.data.data.slice(0,4)
                  })
            },
            getCategories() {
                  axios.get('https://ma.tenton.al/api/v1/base/post_categories')
                        .then(res => {
                              console.log(res)
                              this.categories = res.data.data.slice(0, 4)
                        })
            },
            async getItem(id) {

                  axios.get('https://ma.tenton.al/api/v1/posts/' + id)
                        .then(res => {
                              console.log('posttttt',res.data.data)
                              this.post = res.data.data
                        });
                        

            },
            async getComments() {
                  const id = this.$route.params.id;
                  await axios.get(`https://ma.tenton.al/api/v1/discussions/post/${id}/messages`)
                        .then(res => {
                        this.comments = res.data.data
                  });
       },
            formatDate(dateString) {
                  const date = new Date(dateString);
                  // Then specify how you want your dates to be formatted
                  return new Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(date);
            },
      },
}
</script>
