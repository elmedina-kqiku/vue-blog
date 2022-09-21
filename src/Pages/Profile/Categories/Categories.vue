<template>
<ProfileLayoutVue active="categories">
      <nav class="pt-14">
            <ul class="flex flex-col lg:flex-row border-b border-gray-200 lg:space-x-5 text-sm font-medium tracking-wider text-gray-400 ">

                  <li v-for="category in categories" :key="category.id" :class="{'border-b-2 border-blue-400 text-blue-400': category.id == selectedCategoryId}" class="pb-2 px-2 text-gray-400">
                        <a href="#" @click.prevent="categoryClicked(category)">
                              {{ category.name }}
                        </a>
                  </li>
            </ul>
      </nav>
      <div>
            <Base-spinner v-if="isLoading"></Base-spinner>
      </div>

      <div class="pt-8 pl-0 grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Postitem v-for="item in items" :key="item.id" :post="item" />
      </div>

      <Pagination class="mt-8 flex justify-end" 
      :page-count="last_page" @pageChanged="pageChanged" />

</ProfileLayoutVue>
</template>

<script>
import ProfileLayoutVue from '@/layouts/ProfileLayout.vue';
import Pagination from '@/components/Pagination/Pagination.vue';
import Postitem from '@/components/ProfilePosts/Postitem.vue';
import BaseSpinner from '@/components/BaseSpinner.vue'
import axios from 'axios';

export default {
      name: ["Categories"],
      components: {
            ProfileLayoutVue,
            Pagination,
            Postitem,
            BaseSpinner,
      },

      data() {
            return {
                  items: [],
                  categories: [{
                        id: null,
                        name: "All"
                  }, ],
                  selectedCategoryId: null,
                  current_page: 1,
                  last_page: 1,
                  isLoading: true,
            }
      },
      mounted() {
            this.mountCategories();
            this.getItems();
      },
      methods: {

            async mountItems() {
                  const urlQueryParam = this.selectedCategoryId ? `category[]=${this.selectedCategoryId}` : null;
                  await axios(`https://ma.tenton.al/api/v1/posts?${urlQueryParam}`)
                        .then(res => {
                              this.items = res.data.data;
                              console.log(this.items)
                              this.last_page = res.data.pagination.last_page;
                        })
                  this.isLoading = false
            },

            async mountCategories() {
                  axios.get('https://ma.tenton.al/api/v1/base/post_categories')
                        .then(res => {
                              this.categories = res.data.data.slice(0, 4);
                              this.categories.unshift({
                                    id: null,
                                    name: 'All'
                              })
                        })
            },

            categoryClicked(category) {
                  this.selectedCategoryId = category.id;
                  this.mountItems();
            },

            pageChanged: function (pageNum) {
                  this.current_page = pageNum;
                  this.mountItems()
            },

            formatDate(dateString) {
                  const date = new Date(dateString);
                  return new Intl.DateTimeFormat('default', {
                        dateStyle: 'long'
                  }).format(date);
            },
      }
}
</script>
