<template>
<ProfileLayoutVue active="posts">

      <table class="w-full">
            <thead class="text-xs font-normal">
                  <tr>
                        <th class="p-3 text-left">TITLE</th>
                        <th class="p-3 text-left">COMMENTS</th>
                        <th class="p-3 text-left">CATEGORY</th>
                        <th class="p-3 text-left">POSTED BY</th>
                        <th class="p-3 text-left">POSTED AT</th>
                        <th class="p-3 text-left">LAST UPDATED</th>
                        <th> </th>
                  </tr>
            </thead>
            <tbody class="bg-white">
                  <tr v-for="post in posts" :key="post.id" :post="post" class="ml-6">
                        <td class="p-3 text-sm text-gray-900 font-normal flex flex-row">
                              <img :src="post.image" alt="" class="w-16 h-10" />
                              <p class="ml-2">{{post.title}}</p>
                        </td>
                        <td class="p-3 text-xs text-gray-500">{{post.comments}}</td>
                        <td class="p-3 text-xs text-gray-500">{{post.category}}</td>
                        <td class="p-3 text-xs text-gray-900 font-normal flex flex-row">
                              <img :src="post.user" alt="" class="w-6 h-6" />
                              <p class="ml-3">{{post.posted_by}}</p>
                        </td>
                        <td class="p-3 text-xs text-gray-500">{{post.posted_at}}
                        </td>
                        <td class="p-3 text-xs text-gray-500 flex flex-row">
                              <p>{{post.last_updated}}</p>

                              <button @click="toggleDetails" class="w-4 h-4">
                                    <img src="@/assets/images/threedots_vertical.svg" alt="" class="" />
                              </button>
                              <div v-if="detailsAreVisible" class="bg-white border border-md ">
                                    <ul>
                                          <li class="flex flex-row hover:bg-gray-100 p-2">
                                                <img src="@/assets/images/pen_icon.svg" class="w-4 h-4" />
                                                <p class="ml-3">Edit Post</p>
                                          </li>
                                          <li class="flex flex-row hover:bg-gray-100 p-2">
                                                <img src="@/assets/images/delete_icon.svg" class="w-4 h-4" />
                                                <p class="ml-3">Delete Post</p>
                                          </li>
                                    </ul>
                              </div>
                        </td>

                  </tr>
            </tbody>
      </table>

      <PaginationVue />
</ProfileLayoutVue>
</template>

<script>
import ProfileLayoutVue from '@/layouts/ProfileLayout.vue';
import PaginationVue from '@/components/Pagination/Pagination.vue';
export default {
      name: ["ProfilePosts"],
      components: {
            ProfileLayoutVue,
            PaginationVue
      },
      data() {
            return {
                  detailsAreVisible: false,
                  posts: []
            }
      },

      mounted() {
            this.getPosts();
            console.log('test')
            this.getApi();
      },
      methods: {
            toggleDetails() {
                  this.detailsAreVisible = !this.detailsAreVisible;
            },

            async getPosts() {
                  const posts = await fetch('https://dummyjson.com/products?limit=10')
                        .then(res => res.json())
                        .then(res => {
                              return res;
                        });

                  this.posts = posts.products.map((post) => {
                        return {
                              id: post.id,
                              image: post.thumbnail,
                              title: post.title,
                              comments: post.stock,
                              category: post.category,
                              user: require('@/assets/images/profileicon/profileicon1.svg'),
                              posted_by: post.brand,
                              posted_at: 'Nov, 21, 2021 10:23PM',
                              last_updated: 'Nov, 21, 2021 10:23PM',
                        }
                  });

            },
            getApi(){
            const api = fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population').then(res=>{
                  console.log(res.data.data)
            });
            return api;
            }


      }
}
</script>
