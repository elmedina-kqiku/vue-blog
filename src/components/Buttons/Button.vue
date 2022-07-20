<template>
    <button :class="getClasses">
        <slot />
    </button>
</template>
<script>
export default {
    name: ["Button"],
    props: {
        color: {
            type: String,
            default: "blue"
        },
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
                return "border border-blue-500 hover:bg-gray-200 text-blue-500"
            }
        }
    }
}

</script>