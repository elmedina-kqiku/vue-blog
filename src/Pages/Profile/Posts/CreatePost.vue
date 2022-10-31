

<template>
<ProfileLayoutVue>
      <div>
      <form @submit.prevent="createPost">
            <p class="text-base text-black">CREATE POST</p>

            <div class=" xl:flex-row justify-between md:space-x-0 xl:space-x-10 mt-5">

                  <div class="flex flex-cols justify-between space-x-10 just font-normal text-sm text-black ">
                        <div class="bg-gray-200 w-56 h-40 xl:w-96 xl:h-60 grid place-content-center mt-10">
                              <img :src="previewImage" class="uploading-image" />
                              <input type="file" accept="" @change=uploadImage >
                        </div>
                        <div class="w-full">
                              <div>
                                    <label for="">Title</label>
                                    <InputVue v-model="form.title" class="mt-2" />
                              </div>

                              <div>
                                    <label for="">Content</label>
                                    <TextareaVue v-model="form.content" rows="4" class="mt-2" />
                              </div>

                              <div v-if="categories">
                                    <label for="categories">Categories:</label>
                                    <div class="w-full">
                                          <select name="categories" id="categories" v-model="form.categories" multiple class="w-full bg-white rounded-lg p-2 border mt-2">
                                                <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</option>
                                          </select>
                                    </div>
                              </div>
                        </div>

                  </div>

            </div>

            <div class="flex justify-end space-x-5 mt-3">
                  <ButtonVue type="submit">Save</ButtonVue>
            </div>
      </form>
      </div>
</ProfileLayoutVue>
</template>

<script>
import InputVue from '@/components/Form/Input.vue';
import ButtonVue from '@/components/Buttons/Button.vue';
import ProfileLayoutVue from '@/layouts/ProfileLayout.vue';
// import UploadPhoto from '@/components/UploadPhoto/UploadPhoto.vue';
import axios from 'axios';
import TextareaVue from '@/components/Form/Textarea.vue';

export default {
      name: ["CreatePost"],
      components: {
            ProfileLayoutVue,
            InputVue,
            ButtonVue,
            TextareaVue
      },
      data() {
            return {
                  form: {
                        title: "",
                        content: "",
                        resources: [],
                        categories: [],
                        publish: true,
                  },
                  categories: [],
                  previewImage: null
            }
      },
      mounted() {
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
                        resources: this.resources,
                        categories: this.form.categories,
                        selectedFile: null,
                  }

                  axios.post(`https://ma.tenton.al/api/v1/posts`, data, {
                              headers
                        })
                        .then(res => {
                              this.$router.push({
                                    path: '/profile/posts/' + res.data.data.id
                              });
                        })

            },
            uploadImage(event){
                  this.selectedFile = event.target.files[0]
                  console.log(event)
            },
            
            getCategories() {
                  axios.get('https://ma.tenton.al/api/v1/base/post_categories')
                        .then(res => {
                              this.categories = res.data.data
                        }) 
            }
      }
}

</script> 
