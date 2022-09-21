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
import MostCommentsProfile from '@/components/ProfilePosts/MostCommentsProfile.vue';
import LatestPostProfile from '@/components/ProfilePosts/LatestPostProfile.vue';
import PostPerCategoryProfile from '@/components/ProfilePosts/PostPerCategoryProfile.vue';
import Pagination from '@/components/Pagination/Pagination.vue';
import axios from 'axios';

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
                  user:null,
            }
      },
      mounted() {
            // this.getItem();
            // this.getPosts();
            // this.getItems();
      },

      methods: {

            formatDate(dateString) {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(date);
            },
            
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
            getItem(id) {
                  axios.get('https://ma.tenton.al/api/v1/posts/' + id)
                        .then(res => {
                              console.log('posttttt',res.data.data)
                              this.post = res.data.data
                        });
                        

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

            },
      },

}

</script>
