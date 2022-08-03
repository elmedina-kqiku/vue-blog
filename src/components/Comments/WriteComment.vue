<template>
    <div class="flex flex-justify-between bg-gray-500">
        <img src="@/assets/images/profileicon/profileicon.svg" alt="" class="h-14 w-14">
        <div class="">
            <div class="flex flex-col bg-white ">
            <p>
                <slot />
            </p>
            </div>
            <div class="flex flex-row justify-end space-x-5">
                <img src="@/assets/images/alternate_email_icon.svg" alt="" class="h-4 w-4">
                <img src="@/assets/images/emojiicon.svg" alt="" class="h-4 w-4">
                <ButtonVue>COMMENT</ButtonVue>
            </div>
        </div>
    </div>
</template>
<script>
import ButtonVue from '../Buttons/Button.vue';
export default {
    name: ["WriteComment"],
    components: { ButtonVue,
     }
}
</script>