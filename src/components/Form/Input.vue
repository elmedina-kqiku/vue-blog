<template>
    <input 
    :value="modelValue" @input="updateValue"
    class="border border-gray-300 rounded-full w-full px-3 py-2 text-xs text-gray-500">
</template>
<script>
export default {
    name: ["Input"],
    props: {
        modelValue:{
            default:"",
        }
    },
    methods: {
        updateValue(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>