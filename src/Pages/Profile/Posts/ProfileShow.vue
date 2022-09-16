<template>
<ProfileLayoutVue>
      <div class=" grid grid-cols-1 lg:grid-cols-3 lg:max-w-full max-w-2xl gap-20 gap-20 lg:gap-40  pt-12  text-sm ">
            <div class="col-span-1 lg:col-span-2 space-y-4">
                  <SinglePostVue :post="item" />
                  <div class="flex justify-between tracking-wider ">
                        <button>PREVIOUS</button>
                        <button class="uppercase">Next</button>
                  </div>

                  <div class="" v-for="comment in comments" :key="comment.id" :post="comment">
                        <p class="border-b border-gray-200 pb-4 text-sm font-normal text-black tracking-wider ">
                              Comments ({{comment.counted}})
                        </p>
                        <div class="flex flex-row space-x-5 justify-between ml-3 pt-8">
                              <img :src="comment.user" class="mb-12 h-14 w-14" />
                              <div class="flex flex-col py-2 px-6 space-y-1 bg-white w-full">
                                    <div class="flex flex-row space-x-3">
                                          <p class="text-xs text-black font-bold">{{comment.username}}></p>
                                          <p class="text-xs text-gray-500">21 Oct 2021 16:21</p>
                                    </div>

                                    <p class="text-xs text-gray-500">
                                          {{comment.comments}}
                                    </p>
                                    <p class="text-xs text-blue-500  font-bold flex justify-end">
                                          <a href="">Reply</a>
                                    </p>
                              </div>
                        </div>
                  </div>
                 <WriteComment />
            </div>
            <div class="col-span-1 lg:col-span-1  flex flex-col space-y-14">
                  <div class="flex flex-col space-y-3">
                        <p class="uppercase text-sm font-normal ">More like this</p>
                        <SugesstionsVue v-for="post in posts" :key="post.id" :post="post" />
                  </div>
                  <div class="flex flex-col space-y-3">
                        <p class="uppercase text-sm font-normal tracking-wider ">Categories</p>
                        <ul class="flex flex-col space-y-3 text-sm font-normal text-gray-500 tracking-wider">
                              <li><a href="">Food</a></li>
                              <li><a href="">Nature</a></li>
                              <li><a href="">Technology</a></li>
                              <li><a href="">Health</a></li>
                        </ul>

                  </div>
                  <div class="flex flex-wrap">
                        <BadgeVue class="mt-3">Smartphone</BadgeVue>
                        <BadgeVue class="ml-3 mt-3">Nokia</BadgeVue>
                        <BadgeVue class="mt-3">Samsung</BadgeVue>
                        <BadgeVue class="ml-3 mt-3">Iphone</BadgeVue>
                        <BadgeVue class="mt-3">Xiaomi</BadgeVue>
                        <BadgeVue class="ml-3 mt-3">Huawei</BadgeVue>
                  </div>
            </div>
      </div>

</ProfileLayoutVue>
</template>

<script>
import ProfileLayoutVue from '@/layouts/ProfileLayout.vue'
import SinglePostVue from '@/components/Posts/SinglePost.vue'
import SugesstionsVue from '@/components/ProfilePosts/Sugesstions.vue'
import BadgeVue from '@/components/Badge/Badge.vue'
import WriteComment from '@/components/Comments/WriteComment.vue'
import axios from 'axios'

export default {
      name: ["ProfileShow"],
      components: {
    ProfileLayoutVue,
    SinglePostVue,
    SugesstionsVue,
    BadgeVue,
    WriteComment
},
      data() {
            return {
                  item: {},
                  posts: [],
                  comments: []
            }

      },
      mounted() {
            this.getPosts();
            this.getItem(this.$route.params.id);
            this.getComments();
      },
      methods: {
            async getPosts() {
                  const posts = await fetch('https://ma.tenton.al/api/v1/posts')
                        .then(res => res.json())
                        .then(res => {
                              return res;
                        });

                  this.posts = posts.products.map((post) => {
                        return {
                              id: post.id,
                              title: post.title,
                              image: post.thumbnail,
                              user: require('@/assets/images/profileicon.svg'),
                              name: post.brand
                        }
                  });
            },

            async getItem(id) {
                  axios.get('https://ma.tenton.al/api/v1/posts/' + id)
                        .then(res => {
                              console.log('posttttt',res.data.data)
                              this.post = res.data.data
                        });
                        
                  }
            },

            async getComments() {
                  const id = this.$route.params.id;
                  const comments = await fetch(`https://ma.tenton.al/api/v1/discussions/post/${id}/messages`)
                        .then(res => res.json())
                        .then(res => {
                              return res;
                        });
                        console.log(comments,'elmedina comments')
                  this.comments = comments.data.map((comment) => {

                        console.log('elmedina comment',comment)
                        return {
                              id: comment.id,
                              user: require(`@/assets/images/profileicon.svg`),
                              comments: comment.text,
                              username: comment.user.first_name,
                              date: comment.created_at,

                        }
                  });

            }

      

}
</script>
