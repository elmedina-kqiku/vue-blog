<template>
    <div class="space-y-3">
        <img :src="post.image" alt="image" class="w-full object-cover h-40" />
        <p class="text-black font-bold uppercase">
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