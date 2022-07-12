<template>
   
    <div class="h-10"> 
         <div>
          <img class="h-9" src="../assets/images/blog.svg" />
        </div>
        <form action="" class="flex flex-wrap h-full ">
      
        <div class="">
            <input type="text" placeholder="search" name="search">
        </div>
        <div class="">
            <ButtonVue class="bg-white border border-blue-600 text-blue-600 ">
            Log In
            </ButtonVue>
        </div>
        <div class="">
            <ButtonVue class=" border border-blue-600">
             Sign Up
            </ButtonVue>
        </div>
        </form>
    </div>
</template>
<script>
import ButtonVue from './Buttons/Button.vue'

export default {
    name: ["HomePage"],
    components: {
        ButtonVue,
    }
}
</script>