<template>
    <p class="text-sm text-red-500">{{ error.$message }}</p>
</template>

<script>
export default{
      name: ["ValidationError"],
      props:["error"]
}
</script>