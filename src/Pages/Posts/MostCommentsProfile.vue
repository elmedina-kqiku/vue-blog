<template>
    <div class="space-y-3">
        <div class="relative">
            <router-link to="">
                <div
                    class="absolute flex flex-row justify-between px-3 py-1 bg-white w-20 h-9 top-2 right-2">
                    <img src="@/assets/images/messageicon.svg" class=" mt-1 object-cover h-5 w-6">

                    <p class="text-base"> ({{ post.comments_count }}) </p>
                </div>
            </router-link>
            <img :src="post.image" alt="image" class="w-full object-cover h-72" />
        </div>
        <p class="text-gray-900 font-normal uppercase">
            {{ post.title }}
        </p>
        <div class="py-4 flex flex-row justify-between w-full border-y border-gray-200 ">
            <div class="flex flex-wrap flex-row">
                <img :src="post.user" alt='image' class="" />
                <p class="pl-2">
                    By <a href="" class="text-blue-400">{{ post.name }}</a>
                </p>
            </div>


            <p class="text-gray-500 text-xs tracking-wider">
                Posted at {{ post.created_at }}
            </p>
        </div>

        <p class="text-xs text-gray-500 tracking-wider">
            {{ post.description }}
        </p>
    </div>
</template>
<script>

export default {
    name: ["MostCommentsProfile"],
    
    props: [
        "post"
    ]
}
</script>