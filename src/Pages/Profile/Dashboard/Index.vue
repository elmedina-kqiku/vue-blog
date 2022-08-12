<template>
<ProfileLayoutVue active="dashboard">
      <div class="flex flex-col justify-between space-y-16">
            <div class="grid grid-cols-1 lg:grid-cols-5 justify-between gap-20 ">

                  <div class="cols-span-1 lg:col-span-3 space-y-3">
                        <p class="text-base font-normal tracking-wider text-black">MOST COMMENTS</p>
                        <div>
                              <MostCommentsProfile :post="item" />
                        </div>
                  </div>

                  <div class="col-span-1 lg:col-span-2 space-y-3">
                        <p class="text-base font-normal tracking-wider text-black">LATEST POST</p>
                        <LatestPostProfile v-for="post in posts" :key="post.id" :post="post" />
                        <Pagination class="flex flex-start" />
                  </div>

            </div>
            <div class="">
                  <p class="text-base font-normal tracking-wider text-blue mb-4">POST PER CATEGORY</p>
                  <div class="grid grid-cols-2 lg:grid-cols-4 space-x-8">
                        <PostPerCategoryProfile v-for="item in items" :key="item.id" :post="item" />
                  </div>
            </div>
      </div>

</ProfileLayoutVue>
</template>

<script>
import ProfileLayoutVue from '@/layouts/ProfileLayout.vue';
import MostCommentsProfile from '@/Pages/Posts/MostCommentsProfile.vue';
import LatestPostProfile from '@/Pages/Posts/LatestPostProfile.vue';
import PostPerCategoryProfile from '@/Pages/Posts/PostPerCategoryProfile.vue';
import Pagination from '@/components/Pagination/Pagination.vue';

export default {
      name: ["ProfileDashboardIndex"],

      components: {
            ProfileLayoutVue,
            MostCommentsProfile,
            LatestPostProfile,
            PostPerCategoryProfile,
            Pagination
      },
      data() {
            return {

                  item: {},
                  posts: [],
                  items: [],
            }
      },
      mounted() {
            this.getItem();
            this.getPosts();
            this.getItems();
      },

      methods: {
            async getItem() {
                  const item = await fetch('https://dummyjson.com/products/1')
                        .then(res => res.json())
                        .then(res => {
                              return res;
                        });

                  this.item = {
                        id: item.id,
                        image: item.thumbnail,
                        comments_count: item.stock,
                        title: item.title,
                        user: require(`@/assets/images/profileicon.svg`),
                        name: item.brand,
                        created_at: "Nov, 25, 2021",
                        description: item.description
                  }
            },
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
                              comments_count: post.stock,
                              user: require(`@/assets/images/profileicon.svg`),
                              name: post.brand,
                              created_at: "Nov, 25, 2021",
                        }
                  });
            },
            async getItems() {
                  const items = await fetch('https://dummyjson.com/products?limit=4')
                        .then(res => res.json())
                        .then(res => {
                              return res;
                        });

                  this.items = items.products.map((item) => {
                        return {
                              id: item.id,
                              title: item.title,
                              created_at: "Nov, 25, 2021",
                              description: item.description,
                              comments_count: item.stock,
                              category: item.category,
                              posts_count: "3",
                              image: item.thumbnail,
                              user: require(`@/assets/images/profileicon.svg`),
                              name: item.brand


                            
                        }
                  });
            },

      }

}
</script>
