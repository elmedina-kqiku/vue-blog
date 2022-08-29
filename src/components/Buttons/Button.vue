<template>
    <router-link :class="getClasses" :to="url">
        <slot />
    </router-link>
</template>
<script>
export default {
    name: ["Button"],
    props: {
        color: {
            type: String,
            default: "blue"
        },
        url:{
            type: String,
            default: ''
        }
    },
    computed: {
        getClasses() {
            return this.getPropsClass() + " rounded-full w-auto px-6 py-2 text-center text-sm font-normal tracking-wider";
        },

    },
    methods: {
        getPropsClass() {
            if (this.color === 'blue') {
                return "bg-blue-500 hover:bg-blue-600 text-white"
            }

            if (this.color === 'white') {
                return "bg-white border border-blue-400 hover:bg-gray-200 text-blue-500"
            }
        }
    }
}

</script>