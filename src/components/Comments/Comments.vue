<template>
<div class="">
      <p class="border-b border-gray-200 pb-4 text-sm font-normal text-black tracking-wider ">
            Comments (2)
      </p>
      <div class="flex flex-row space-x-5 justify-between ml-3 pt-8">
            <img :src="post.user" class="mb-12 h-14 w-14" />
            <div class="flex flex-col lg:py-4 px-6 space-y-1 bg-white">
                  <div class="flex flex-row space-x-3">
                        <p class="text-xs text-black font-bold">{{post.username}}></p>
                        <p class="text-xs text-gray-500">21 Oct 2021 16:21</p>
                  </div>

                  <p class="text-xs text-gray-500">
                        {{post.comment}}
                  </p>
                  <p class="text-xs text-blue-500  font-bold flex justify-end">
                        <a href="">Reply</a>
                  </p>
            </div>
      </div>
      <div class="flex flex-row space-x-5 justify-between  pl-10 pt-3">
            <img :src="post.user_reply" class="mb-12 h-14 w-14" />
            <div class="flex flex-col py-4 px-6 space-y-1 bg-white">
                  <div class="flex flex-row space-x-3">
                        <p class="text-xs text-black font-bold">{{post.username_reply}}</p>
                        <p class="text-xs text-gray-500">21 Oct 2021 16:27</p>
                  </div>

                  <p class="text-xs text-gray-500">
                        {{post.comment_reply}}
                  </p>
                  <p class="text-xs text-blue-500 font-bold flex justify-end">
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
      ]
}
</script>
