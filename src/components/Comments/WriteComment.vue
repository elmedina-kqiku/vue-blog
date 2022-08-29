<template>
    <div class="flex flex-row justify-between bg-gray-200 px-5 py-5">
                        <img src="@/assets/images/profileicon/profileicon.svg" alt="" class="mb-12 h-14 w-14">
                        <div class="flex flex-col justify-between bg-white w-full ml-6 py-3 px-6">

                            <textarea  rows="" class="px-0 w-full text-xs text-gray-900 bg-white border-0  " placeholder="Write a comment..." />
                              <div class="flex flex-row justify-end items-center">
                                    <img src="@/assets/images/alternate_email_icon.svg" alt="" class="ml-5 -h-4 w-4">
                                    <img src="@/assets/images/emojiicon.svg" alt="" class="ml-5 h-4 w-4">
                                    <ButtonVue class="ml-5">COMMENT</ButtonVue>
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