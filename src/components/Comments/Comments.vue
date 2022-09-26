<template>
<div class="">
      <div class="flex flex-row space-x-5 justify-between ml-3 pt-8">

            <img :src="post.comment?.user.resource_url ?? '@/assets/images/profileicon.svg'" class="mb-12 h-14 w-14" />
            <div class="flex flex-col py-2 px-6 space-y-1 bg-white w-full">
                  <div class="flex flex-row space-x-3">
                        <p class="text-xs text-black font-bold">{{post.comment.user.first_name}}></p>
                        <p class="text-xs text-gray-500">{{formatDate(post.comment.created_at)}}</p>
                  </div>

                  <div class="comment-reply flex my-1 mx-2 bg-gray-100 py-1 px-2 rounded-sm" v-if="comment && comment.replyable">
                        <div class="flex icon items-center justify-center mr-1 transform rotate -rotate-90">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 15l-6 6m0 0l-6-6m6 6V9a6 6 0 0112 0v3" />
                              </svg>
                        </div>
                        <div class="flex flex-col">
                              <p class="font-semibold">{{comment.replyable.user.first_name + ' ' + comment.replyable.user.last_name}}</p>
                              <p>{{ post.comment.replyable.text }}</p>
                        </div>
                  </div>

                  <p class="text-xs text-gray-500">
                        {{post.comment.text}}
                  </p>

                  <div class="w-16" v-if="comment && comment.resources.length >= 1">
                        <img class="w-full h-full" :src="post.comment?.resources[0]?.preview_url" alt="comment image">
                  </div>

                  <p class="text-xs text-blue-500  font-bold flex justify-end">
                        <a href="">Reply</a>
                  </p>
            </div>
      </div>
</div>
</template>

<script>
export default {
      name: ["comments"],
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
      }
}
</script>
