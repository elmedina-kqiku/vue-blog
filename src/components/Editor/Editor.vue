<template>
<div class="bg-white sborder border-gray-300 w-full h-64">
  <div v-if="editor" class="border-b p-2 border-gray-300">
    <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }" class="ml-3">
      <img src="@/assets/images/format_bold_icon.svg" class="w-3 h-3" />
    </button>
    <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }" class="ml-3">
      <img src="@/assets/images/format_italic_icon.svg" class="w-3 h-3" />
    </button>
    <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }" class="ml-3">
      <img src="@/assets/images/format_list_bulleted_icon.svg" class="w-3 h-3"/>
    </button>
    <button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }" class="ml-3">
      <img src="@/assets/images/format_list_ordered_icon.svg" class="w-3 h-3" />
    </button>
  
   
  </div>
  <div>
  <editor-content :editor="editor" :value="modelValue" @input="updateValue"  class="h-auto"/>
  </div>
  </div>
</template>

<script>
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'

export default {
  name:["Editor"],
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
    }
  },

  props: {
        modelValue:{
            default:"",
        }
    },

  mounted() {
    this.editor = new Editor({
      editorProps: {
    attributes: {
      class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
    },
  },
      extensions: [
        StarterKit,
      ],
      content: ''
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
  methods: {
  updateValue(event) {
            this.$emit('update:modelValue', event.target.value);
        }
}
}

</script>

<style lang="scss">
/* Basic editor styles */
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }


  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0D0D0D;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }


  hr {
    border: none;
    border-top: 2px solid rgba(#0D0D0D, 0.1);
    margin: 2rem 0;
  }
}
</style>