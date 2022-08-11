<template>
<HomePageLayoutVue>
      <div class=" grid grid-cols-1 lg:grid-cols-12 lg:max-w-full max-w-2xl gap-20 xl:gap-28 xl:gap-28 lg:pl-32 pt-12  text-sm ">
            <div class="col-span-1 lg:col-span-8 space-y-4">

                  <SinglePostVue :post="item" />

                  <div class="flex justify-between tracking-wider ">
                        <button>PREVIOUS</button>
                        <button class="uppercase">Next</button>

                  </div>
                  <div class="" v-for="comment in comments" :key="comment.id" :post="comment">
                        <p class="border-b border-gray-200 pb-4 text-sm font-normal text-black tracking-wider ">
                              Comments ({{comment.counted}})
                        </p>
                        <div class="flex flex-row space-x-5 justify-between ml-3 pt-4">
                              <img :src="comment.user" class="mb-12 h-14 w-14" />
                              <div class="flex flex-col py-2 px-6 space-y-1 bg-white w-full">
                                    <div class="flex flex-row space-x-3">
                                          <p class="text-xs text-black font-bold">{{comment.username}}></p>
                                          <p class="text-xs text-gray-500">{{comment.date}}</p>
                                    </div>

                                    <p class="text-xs text-gray-500">
                                          {{comment.comments}}
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

                  <div class="flex flex-col space-y-3">
                        <p class="uppercase text-sm font-normal tracking-wider ">Categories</p>
                        <ul class="flex flex-col space-y-3 text-sm font-normal text-gray-500 tracking-wider">
                              <li><a href="">Smartphones</a></li>

                        </ul>
                  </div>

                  <div class="flex flex-wrap ">
                        <BadgeVue class=" mt-3">Smartphone</BadgeVue>
                        <BadgeVue class="ml-3 mt-3">Nokia</BadgeVue>
                        <BadgeVue class=" mt-3">Iphone</BadgeVue>
                        <BadgeVue class="ml-3 mt-3">Xiaomi</BadgeVue>
                        <BadgeVue class="mt-3">Samsung</BadgeVue>
                        <BadgeVue class="ml-3 mt-3">Huawei</BadgeVue>

                  </div>

            </div>
      </div>
</HomePageLayoutVue>
</template>

<script>
import HomePageLayoutVue from '@/layouts/HomePageLayout.vue';
import BadgeVue from '@/components/Badge/Badge.vue';
import SinglePostVue from '@/Pages/Posts/SinglePost.vue';
import SugesstionsVue from './Sugesstions.vue';
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
                  item: {},
                  posts: [],
                  comments: [],
            }
      },

      mounted() {
            this.getPosts();
            this.getItem(this.$route.params.id);
            this.getComments();
      },

      methods: {
            async getPosts() {
                  const posts = await fetch('https://dummyjson.com/products?limit=4')
                        .then(res => res.json())
                        .then(res => {
                              return res;
                        });

                  this.posts = posts.products.map((post) => {
                        return {
                              id: post.id,
                              title: post.title,
                              image: post.thumbnail,
                              user: require(`@/assets/images/profileicon.svg`),
                              name: post.brand
                        }
                  });
            },
            async getItem(id) {
                  const item = await fetch('https://dummyjson.com/products/' + id)
                        .then(res => res.json())
                        .then(res => {
                              return res;
                        });

                  this.item = {
                        id: item.id,
                        image: item.thumbnail,

                        title: item.title,
                        user: require(`@/assets/images/profileicon.svg`),
                        name: item.brand,
                        created_at: '22.10.2020',
                        description: item.description,
                        price: item.price,
                        discountPercentage: item.discountPercentage,
                        rating: item.rating,
                        stock: item.stock
                  }

            },
            async getComments() {
                  const comments = await fetch('https://dummyjson.com/comments?limit=2')
                        .then(res => res.json())
                        .then(res => {
                              return res;
                        });
                  this.comments = comments.comments.map((comment) => {
                        return {
                              id: comment.id,
                              user: require(`@/assets/images/profileicon.svg`),
                              comments: comment.body,
                              username: comment.user.username,
                              counted: comment.total,
                              date: '20.10.2020'

                        }
                  });

            }
      }

}
</script>
