<template>
<div @click="showItem(post.id)" class="space-y-3">
      <div class="relative">
            <div class="absolute flex flex-row justify-between px-3 py-1 bg-white w-20 h-9 top-2 right-2">

                  <img src="@/assets/images/messageicon.svg" class=" mt-1 object-cover h-5 w-6">

                  <p class="text-base"> ({{ post.comments_count }}) </p>
            </div>
            <template v-if="post.resources[0]?.preview_url">
                  <img :src="post.resources[0]?.preview_url" alt="image" class="w-full object-cover h-72" />
            </template>
            <template v-else>
                  <div class=" ">
                        <img src="@/assets/images/defaultImage.svg" alt="" class="w-full object-cover h-72" />
                  </div>
            </template>
      </div>
      <p class="text-gray-900 font-normal uppercase">
            {{ post.title }}
      </p>
      <div class="py-4 flex flex-row justify-between w-full border-y border-gray-200 ">
            <div class="flex flex-wrap flex-row">
                  <img src="@/assets/images/profileicon.svg" alt='image' class="" />
                  <p class="pl-2">
                        By <a href="" class="text-blue-400">{{ post.first_name }}</a>
                  </p>
            </div>

            <p class="text-gray-500 text-xs tracking-wider">
                  Posted at {{ post.created_at }}
            </p>
      </div>

      <p class="text-xs text-gray-500 tracking-wider">
            {{ post.content }}
      </p>
</div>
</template>

<script>
export default {
      name: ["MostCommentsProfile"],

      props: [
            "post"
      ],

      methods: {
            formatDate(dateString) {
                  const date = new Date(dateString);
                  // Then specify how you want your dates to be formatted
                  return new Intl.DateTimeFormat('default', {
                        dateStyle: 'long'
                  }).format(date);
            },

            showItem(id) {
                  console.log(id);
                  this.$router.push({
                        path: `/posts/${id}`
                  })
            }
      }
}
</script>
