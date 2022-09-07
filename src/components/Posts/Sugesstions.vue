<template>
    <div class="flex flex-row items-center space-x-6">
        <router-link :to="'/posts/'+post.id" class="flex shrink-0">
            <img :src="post.resources[0]?.preview_url" class="object-cover w-16 h-16" />
        </router-link>
        <div class="flex flex-col justify-between space-y-2 text-xs">
            <router-link :to="'/posts/' + post.id">
                <p class="font-normal  tracking-wider uppercase"> {{post.title}} </p>
            </router-link>
            <div class="flex flex-row ">
                <img src="@/assets/images/profileicon.svg" />
                <p class="pl-2">By <a  class="text-blue-400 "> Someone </a></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:["PostSugesstions"],
    props : [
        "post"
    ]
}
</script>