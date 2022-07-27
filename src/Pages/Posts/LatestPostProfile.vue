<template>
    <div class="flex flex-row items-center space-x-6">
        <div class="relative">
            <router-link to="">
                <div class="flex flex-row absolute justify-around px-1 py-0 bg-white w-11 h-5 top-1 right-1">
                    <img src="@/assets/images/messageicon.svg" class="mt-1  w-3 h-3">

                    <p class="text-xs"> ({{ post.comments_count }}) </p>
                </div>
            </router-link>
            <router-link to="/posts/1" class="flex shrink-0">
                <img :src="post.image" class="object-cover  w-44 h-20" />
            </router-link>
        </div>
        <div class="flex flex-col space-y-3 text-xs">
            <router-link to="/posts/1">
                <p class="font-normal  tracking-wider uppercase"> {{ post.title }} </p>
            </router-link>
            <div class="flex flex-row">
                <img :src="post.user" />
                <p class="pl-2">By <a href="" class="text-blue-400 "> {{ post.name }} </a></p>
            </div>
            <p class="text-xs text-gray-500 tracking-wider">Posted at {{ post.created_at}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: ["PostSugesstions"],
    props: [
        "post"
    ]
}
</script>