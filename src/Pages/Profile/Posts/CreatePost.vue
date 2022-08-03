<template>
<ProfileLayoutVue>
    <p class="text-base text-black">CREATE POST</p>
    <p class="text-xs text-gray-500 mt-1">POST ID 214</p>
    <div class="flex flex-row justify-between mt-7">
        <div class="bg-gray-200 w-96 h-60 flex items-center">
        <p class="text-sm font-normal text-black">UPLOAD THUMBNAIL IMAGE</p>   
        </div>
        <form action="" class="font-normal text-sm text-black">
            <label for="">POST TITLE</label>
            <InputVue class="mt-2 mb-4" />
            <label for="">POST TAGS</label>
            <InputVue class="mt-2 mb-4" />
            <label for="">POST CATEGORY</label>
            <InputVue class="mt-2 mb-4" />
        </form>
    </div>
    <p class="font-normal text-sm text-black mt-7" >WRITE BLOG POST</p>
    <div class="bg-white border border-gray-300 w-full h-72 mt-4">
        <div class="flex flex-row items-center space-x-2 border-b  border-gray-300 pl-6 w-full h-11">
            <img src="@/assets/images/format_bold_icon.svg" alt="" class="h-4 w-4">
            <img src="@/assets/images/format_italic_icon.svg" alt="" class="h-4 w-4">
            <img src="@/assets/images/format_underlined_icon.svg" alt="" class="h-4 w-4">
            <img src="@/assets/images/strikethrough_s_icon.svg" alt="" class="h-4 w-4">
            <img src="@/assets/images/format_list_bulleted_icon.svg" alt="" class="h-4 w-4">
            <img src="@/assets/images/format_list_numbered_icon.svg" alt="" class="h-4 w-4">
            <img src="@/assets/images/attach_file_icon.svg" alt=""  class=" h-4 w-4">
        </div>
    </div>

    <div class="flex justify-end space-x-5 mt-5">
    <ButtonVue>Preview</ButtonVue>
    <ButtonVue>Publish</ButtonVue>
    </div>
</ProfileLayoutVue>
</template>


<script>
import InputVue from '@/components/Form/Input.vue';
import ButtonVue from '@/components/Buttons/Button.vue';
import ProfileLayoutVue from '@/layouts/ProfileLayout.vue';
export default {
    name: ["CreatePost"],
    components: {
    ProfileLayoutVue,
    InputVue,
    ButtonVue,
}

}
</script>