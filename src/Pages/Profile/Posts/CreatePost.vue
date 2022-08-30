<template>
<ProfileLayoutVue>
      <form>
     <p class="text-base text-black">CREATE POST</p>
      <p class="text-xs text-gray-500 mt-1">POST ID 214</p>
      <div class="flex flex-col xl:flex-row justify-between md:space-x-0 xl:space-x-10 mt-7">
            <div class="bg-gray-200 w-56 h-40 xl:w-96 xl:h-60 grid place-content-center">
                   <UploadPhoto />  
            </div> 
            <div action="" class="font-normal text-sm text-black">
                  <label for="">POST TITLE</label>
                  <InputVue  class="mt-2 mb-4" />
                  <label for="">POST TAGS</label>
                  <InputVue  class="mt-2 mb-4" />
                  <label for="">POST CATEGORY</label>
                  <InputVue  class="mt-2 mb-4" />
            </div>

      </div> 
      <p class="font-normal text-sm text-black mt-7 mb-5">WRITE BLOG POST</p>

      <Editor />

      <div class="flex justify-end space-x-5 mt-5">
            <ButtonVue>Preview</ButtonVue>
            <ButtonVue>Publish</ButtonVue>
      </div>
      </form>
</ProfileLayoutVue>
</template>

<script>
import InputVue from '@/components/Form/Input.vue';
import ButtonVue from '@/components/Buttons/Button.vue';
import ProfileLayoutVue from '@/layouts/ProfileLayout.vue';
import Editor from '@/components/Editor/Editor.vue';
import UploadPhoto from '@/components/UploadPhoto/UploadPhoto.vue';

export default {
      name: ["CreatePost"],
      components: {
        ProfileLayoutVue,
        InputVue,
        ButtonVue,
        Editor,
        UploadPhoto
},
}
</script>
