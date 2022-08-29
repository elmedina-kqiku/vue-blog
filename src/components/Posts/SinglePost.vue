<template>
    <div class="space-y-3">
    <img :src="post.image" alt="image" class="w-full object-cover h-96" />
    <p class="text-black font-bold uppercase">
      {{post.title}}
    </p>
    <div class="py-4 flex flex-row justify-between w-full border-y border-gray-200 ">
        <div class="flex flex-wrap flex-row">
            <img :src="post.user" alt='image' class="" />
            <p class="pl-2">
                By <a  class="text-blue-400">{{post.name}}</a>
            </p>
        </div>


        <p class="text-gray-500 text-xs tracking-wider">
            Posted at {{post.created_at}}
        </p>
    </div>
    <div class="flex flex-wrap gap-3 ">
        <BadgeVue>Iphone</BadgeVue>
        <BadgeVue>Samsung</BadgeVue>
        <BadgeVue>Nokia</BadgeVue>
    </div>
    <p class="text-xs text-gray-500 tracking-wider">{{post.description}}</p>
    <p class="text-xs text-gray-500 tracking-wider">Brand: {{post.brand}}</p>
    <p class="text-xs text-gray-500 tracking-wider">Category: {{post.category}}</p>
    <p class="text-xs text-gray-500 tracking-wider">Price: {{post.price}}</p>
    <p class="text-xs text-gray-500 tracking-wider">Discount Percentage: {{post.discountPercentage}}</p>
    <p class="text-xs text-gray-500 tracking-wider">Rating: {{post.rating}}</p>
    <p class="text-xs text-gray-500 tracking-wider">Stock: {{post.stock}}</p>
    </div>
</template>
<script>
import BadgeVue from '@/components/badge/Badge.vue';

export default {
    name: ["SinglePost"],
    components: {
        BadgeVue,
    },
    props: [
        "post"
    ]
}
</script>