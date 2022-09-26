<template>
    <div @click="showItem(post.id)" class="space-y-2 text-sm">
        <div class="relative">
            <div class="flex flex-row absolute justify-around px-1 py-0 bg-white w-12 h-5 top-1 right-1">
                <img src="@/assets/images/messageicon.svg" class="mt-1 h-3 w-3">
               
                <p class="text-xs"> ({{ post.comments_count }}) </p>
            </div>
            <div v-if="post.resources[0]?.preview_url">
            <img :src="post.resources[0]?.preview_url" alt="image" class=" w-full h-40 object-cover">
            </div>
            <div v-else>
                
                    <img class="w-full h-40 object-cover" src="@/assets/images/defaultImage.svg" alt=""/>
            </div>
        </div>

        <p class="text-gray-700 font-bold truncate">
                {{ post.title }}
        </p>

        <div class="py-1 flex flex-row justify-between w-full border-y border-gray-200 ">
            <img src="@/assets/images/profileicon.svg" alt='image' class="" />

            <p class="text-gray-500 text-xs tracking-wider">
                Posted at {{ formatDate( post.created_at) }}
            </p>
        </div>
        <p class="text-gray-500 truncate">{{ post.content }}</p>
        <p class="text-blue-400 font-medium tracking-wider ">
            <span class=" hover:border-b border-blue-200 ">READ MORE</span>
        </p>
    </div>
</template>
<script>
export default {
    name: ["Postitem"],

    props: [
        "post"
    ],

    methods: {
        formatDate(dateString) {
            const date = new Date(dateString);
                // Then specify how you want your dates to be formatted
            return new Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(date);
        },
        
        showItem(id) {
            console.log(id);
            this.$router.push({
                path:`/profile/posts/${id}`
            })
        }
    }
}
</script>