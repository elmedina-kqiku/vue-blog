<template>
<VuejsPaginateNext :page-count="pageCount" :initial-page="initialPage" :click-handler="clickCallback" :prev-text="'Prev'" :next-text="'Next'" />
</template>

<script>
import VuejsPaginateNext from "vuejs-paginate-next";

export default {
      name: [
            'Pagination'
      ],
      components: {
            VuejsPaginateNext,
      },
      props: {
            pageCount: {
                  default: 1
            },
            initialPage: {
                  default: 1
            }
      },
      emits: ["pageChanged"],
      data() {
            return {}
      },
      methods: {
            clickCallback(item) {
                  this.$emit('pageChanged', item);
            }
      }
}
</script>

<style>
.pagination {
      display: flex;
      padding-left: 0;
      list-style: none;
}

.page-item.disabled .page-link {
      color: #6c757d;
      pointer-events: none;
      background-color: #fff;
      border-color: #dee2e6;
      cursor: default;
}

.page-item:first-child .page-link {
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
}

.page-item:not(:first-child) .page-link {
      margin-left: -1px;
}

.page-item.active .page-link {
      z-index: 3;
      color: #fff;
      background-color: #0d6efd;
      border-color: #0d6efd;
}

.page-link {
      cursor: pointer;
      position: relative;
      display: block;
      color: #0d6efd;
      text-decoration: none;
      background-color: #fff;
      border: 1px solid #dee2e6;
      transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
      padding: 8px 14px;
}
</style>
