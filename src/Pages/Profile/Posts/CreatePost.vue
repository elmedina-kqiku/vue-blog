<template>
<ProfileLayoutVue>
      <form @submit.prevent="createPost">
            <p class="text-base text-black">CREATE POST</p>
            <p class="text-xs text-gray-500 mt-1">POST ID 214</p>

            <div class="flex flex-col xl:flex-row justify-between md:space-x-0 xl:space-x-10 mt-5">
                  <div class="bg-gray-200 w-56 h-40 xl:w-96 xl:h-60 grid place-content-center">
                        <UploadPhoto class="w-full" />
                  </div>
                  <div class="font-normal text-sm text-black">
                        <label for="">POST TITLE</label>
                        <InputVue v-model="form.title" class="mt-2 mb-4" />
                        <label for="">Content</label>
                        <InputVue v-model="form.content" class="mt-2 mb-4" />
                        
                        <div v-if="categories">       
                              <label for="categories">Categories:</label>
                              <select name="categories" id="categories" v-model="form.categories" multiple>
                                    <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</option>
                              </select>
                        </div>
                       
                  </div>

            </div>
            <p class="font-normal text-sm text-black mt-5 mb-3">WRITE BLOG POST</p>

            <Editor   />

            <div class="flex justify-end space-x-5 mt-3">
                  <ButtonVue>Preview</ButtonVue>
                  <ButtonVue type="submit">Publish</ButtonVue>
            </div>
      </form>
</ProfileLayoutVue>
</template>

<script>

import InputVue from '@/components/Form/Input.vue';
import ButtonVue from '@/components/Buttons/Button.vue';
import ProfileLayoutVue from '@/layouts/ProfileLayout.vue';
import Editor from '@/components/Editor/Editor.vue';
import UploadPhoto from '@/components/UploadPhoto/UploadPhoto.vue';
import axios from 'axios';

export default {
      name: ["CreatePost"],
      components: {
    ProfileLayoutVue,
    InputVue,
    ButtonVue,
    Editor,
    UploadPhoto,
},
      data() {
            return {
                  form: {
                        title: "",
                        content: "",
                        resources: "",
                        categories: [],
                        publish: true,
                  },
                  categories: []
            }
      },
      mounted() {
            this.createPost();
            this.getCategories();
      },
      methods: {
            createPost() {
                  const headers = {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer 4143|Dde5OpSuYnN9Sz3YFSkHedmidCiLW1Wyxt4jDVNc'
                  };

                  const data = {
                        post: {
                              title: this.form.title,
                              content: this.form.content
                        },
                        categories: this.categories,
                  }

                  axios.post(`https://ma.tenton.al/api/v1/posts`, data, {
                              headers
                        })
                        .then(res => {
                              console.log(res);
                              this.title = '';
                              this.content = '';
                              this.categories = [];

                        })
            },
            getCategories() {
                  axios.get('https://ma.tenton.al/api/v1/base/post_categories')
                  .then(res => {
                        console.log('categories test',res)
                        this.categories = res.data.data
                  })
            }
      }
}
</script>
