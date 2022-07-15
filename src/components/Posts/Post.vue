<template>
    <div class="space-y-2 text-sm">
        <div class="relative">
            <div class="flex flex-row absolute justify-around px-1 py-0 bg-white w-12 h-5 top-1 right-1">
                <img src="../../assets/images/messageicon.svg" class="mt-1 h-3 w-3">
                <p class="text-xs"> ({{ post.comments_count }}) </p>
            </div>
            <img :src="post.image" alt="image" class=" w-full h-40 object-cover">

        </div>
        <p class="text-gray-700 font-bold"> <a href="">
                {{ post.title }}
            </a>
        </p>
        <div class="py-1 flex flex-row justify-between w-full border-y border-gray-200 ">
            <img :src="post.user" alt='image' class="" />

            <div class="text-gray-500 text-xs tracking-wider">
                Posted at {{ post.created_at }}
            </div>
        </div>
        <p class="text-gray-500">{{ post.description }}</p>
        <p><a href="" class="text-blue-400 font-medium tracking-wider">READ MORE</a></p>
    </div>
</template>
<script>
export default {
    name: ["Post"],
    props: [
        "post"
    ]

}
</script>