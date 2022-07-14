<template>
    <div class="space-y-2 text-sm">
        <img src="../../assets/images/post1.svg" alt="image" class=" w-full h-40 object-cover" />
        
        <p class="text-gray-700 font-bold"> <a href="">
                {{ post.title }}
            </a>
        </p>
        <div class="py-1 flex flex-row justify-between w-full border-y border-gray-200 ">
            <img src="../../assets/images/profileicon.svg" alt=image class="" />

            <div class="text-gray-500 text-xs tracking-wider">
                Posted at {{ post.created_at }}
            </div>
        </div>
        <p class="text-gray-500">{{ post.description }}</p>
        <p><a href="" class="text-blue-500 font-medium tracking-wider">READ MORE</a></p>
    </div>
</template>
<script>
export default {
    name: ["Post"],
    props:[
        "post"
    ]

}
</script>