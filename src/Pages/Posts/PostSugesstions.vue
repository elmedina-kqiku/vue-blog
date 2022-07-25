<template>
    <div class="flex flex-row items-center space-x-6">
        <router-link to="/posts/1">
            <img :src="posts.image" class="object-cover w-16 h-16" />
        </router-link>
        <div class="flex flex-col space-y-2 text-xs">
            <router-link to="/posts/1">
                <p class="font-normal  tracking-wider uppercase"> {{posts.title}} </p>
            </router-link>
            <div class="flex flex-row">
                <img :src="posts.user" />
                <p class="pl-2">By <a href="" class="text-blue-400 "> {{posts.name}} </a></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:["PostSugesstions"],
    props : [
        "posts"
    ]
}
</script>