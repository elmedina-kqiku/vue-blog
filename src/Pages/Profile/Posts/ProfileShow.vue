<template>
<ProfileLayoutVue>
      <div class=" grid grid-cols-1 lg:grid-cols-3 lg:max-w-full max-w-2xl gap-20 gap-20 lg:gap-40  pt-12  text-sm ">
            <div class="col-span-1 lg:col-span-2 space-y-4">
                  <SinglePostVue :post="post" />
                  <div class="flex justify-between tracking-wider ">
                        <router-link v-if="previousPost" :to="'/profile/posts/'+previousPost.id">PREVIOUS</router-link>
                        <router-link v-if="nextPost" :to="'/profile/posts/'+nextPost.id" class="uppercase">Next</router-link>
                  </div>
                  <p class="border-b border-gray-200 pb-4 text-sm font-normal text-black tracking-wider ">
                        Comments ({{ comments.length}})
                  </p>
                  <div v-if="comments">
                        <div class="" v-for="comment in comments" :key="comment.id" :post="comment">

                              <div class="flex flex-row space-x-5 justify-between ml-3 pt-8">
                                    <img v-if="getCommentUserImage(comment)" :src="getCommentUserImage(comment)" class="mb-12 h-14 w-14" />
                                    <img v-if="!getCommentUserImage(comment)" src="@/assets/images/profileicon.svg" class="mb-12 h-14 w-14" />
                                    <div class="flex flex-col py-2 px-6 space-y-1 bg-white w-full">
                                          <div class="flex flex-row space-x-3">
                                                <p class="text-xs text-black font-bold">{{comment.user.first_name}}></p>
                                                <p class="text-xs text-gray-500">{{formatDate(comment.created_at)}}</p>
                                          </div>

                                          <div class="comment-reply flex my-1 mx-2 bg-gray-100 py-1 px-2 rounded-sm" v-if="comment && comment.replyable">
                                                <div class="flex icon items-center justify-center mr-1 transform rotate -rotate-90">
                                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 15l-6 6m0 0l-6-6m6 6V9a6 6 0 0112 0v3" />
                                                      </svg>
                                                </div>
                                                <div class="flex flex-col">
                                                      <p class="font-semibold">{{comment.replyable.user.first_name + ' ' + comment.replyable.user.last_name}}</p>
                                                      <p>{{ comment.replyable.text }}</p>
                                                </div>
                                          </div>

                                          <p class="text-xs text-gray-500">
                                                {{comment.text}}
                                          </p>

                                          <div class="w-16" v-if="comment && comment.resources.length >= 1">
                                                <img class="w-full h-full" :src="comment?.resources[0]?.preview_url" alt="comment image">
                                          </div>

                                          <p class="text-xs text-blue-500  font-bold flex justify-end">
                                                <a href="">Reply</a>
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div class="w-full py-2 flex items-center justify-center">
                        <button @click="loadMore" class="px-3 py-1 bg-transparent border border-blue-400 rounded-sm text-blue-400 uppercase">Load more</button>
                  </div>

                  <div>
                        <div class="send-comment flex flex-row justify-between bg-gray-200 px-5 py-5">
                              <img src="@/assets/images/profileicon/profileicon.svg" alt="" class="mb-12 h-14 w-14">
                              <div class="flex flex-col justify-between bg-white w-full ml-6 py-3 px-6">
                                    <textarea name="sendComment" v-model="commentToSend" rows="3"></textarea>
                                    <div class="flex flex-row justify-end items-center">
                                          <img src="@/assets/images/alternate_email_icon.svg" alt="" class="ml-5 -h-4 w-4">
                                          <img src="@/assets/images/emojiicon.svg" alt="" class="ml-5 h-4 w-4">
                                          <ButtonVue class="ml-5" @click="sendComment()">SEND COMMENT</ButtonVue>
                                    </div>
                              </div>
                        </div>

                  </div>
            </div>
            <div class="col-span-1 lg:col-span-1  flex flex-col space-y-14">
                  <div class="flex flex-col space-y-3">
                        <p class="uppercase text-sm font-normal ">More like this</p>
                        <SugesstionsVue v-for="post in posts" :key="post.id" :post="post" />
                  </div>
                  <div class="flex flex-col space-y-3" v-if="categories">
                        <p class="uppercase text-sm font-normal tracking-wider ">Categories</p>
                        <ul class="flex flex-col space-y-3 text-sm font-normal text-gray-500 tracking-wider">
                              <li v-for="category in categories" :key="category.id">{{category.name}}</li>

                        </ul>

                  </div>
                  <div class="flex flex-wrap">
                        <BadgeVue class="mt-3">Hair</BadgeVue>
                        <BadgeVue class="ml-3 mt-3">Nails</BadgeVue>
                        <BadgeVue class="mt-3">Make Up</BadgeVue>
                  </div>
            </div>
      </div>

</ProfileLayoutVue>
</template>

<script>
import ProfileLayoutVue from '@/layouts/ProfileLayout.vue'
import SinglePostVue from '@/components/ProfilePosts/SinglePost.vue'
import SugesstionsVue from '@/components/ProfilePosts/Sugesstions.vue'
import BadgeVue from '@/components/Badge/Badge.vue'
// import WriteComment from '@/components/Comments/WriteComment.vue'
import ButtonVue from '@/components/Buttons/Button.vue'
import axios from 'axios'

export default {
      name: ["ProfileShow"],
      components: {
            ProfileLayoutVue,
            SinglePostVue,
            SugesstionsVue,
            BadgeVue,
            ButtonVue
            // WriteComment
      },
      data() {
            return {
                  post: null,
                  posts: [],
                  postId: null,
                  comments: [],
                  categories: null,
                  commentsCurrentPage: 1,
                  commentsLastPage: null,
                  commentToSend: '',
                  currentPage: 0,
                  nextPost: null,
                  previousPost:null,

            }

      },
      mounted() {
            this.postId = this.$route.params.id;
            this.getPosts();
            this.getItem(this.$route.params.id);
            this.getComments();
            this.getCategories();

            this.mountNextPost();
            this.mountPreviousPost();
      },
      methods: {

            getItem(id) {
                  axios.get('https://ma.tenton.al/api/v1/posts/' + id)
                        .then(res => {
                              this.post = res.data.data
                        })

            },
            getPosts() {
                  axios.get(`https://ma.tenton.al/api/v1/posts?related_to=${this.postId}`)
                        .then(res => {
                              this.posts = res.data.data.slice(0, 4)
                        })
            },

            getCategories() {
                  axios.get('https://ma.tenton.al/api/v1/base/post_categories')
                        .then(res => {
                              console.log(res)
                              this.categories = res.data.data.slice(0, 4)
                        })
            },

            async getComments() {
                  const id = this.$route.params.id;
                  await axios.get(`https://ma.tenton.al/api/v1/discussions/post/${id}/messages`)
                        .then(res => {
                              this.comments = res.data.data;
                              this.commentsLastPage = res.data.pagination.last_page
                        });

            },

            loadMore() {
                  const id = this.$route.params.id;
                  if (this.commentsCurrentPage < this.commentsLastPage) {
                        this.commentsCurrentPage++
                        axios.get(`https://ma.tenton.al/api/v1/discussions/post/${id}/messages?page=${this.commentsCurrentPage}`)
                              .then(res => {
                                    console.log(res)
                                    this.comments = this.comments.concat(res.data.data)
                              })
                  }
            },
            sendComment() {
                  const token = localStorage.getItem('token')
                  const identifier = this.genRandomString(30)
                  axios.post(`https://ma.tenton.al/api/v1/discussions/post/${this.postId}/messages`, {
                        text: this.commentToSend,
                        identifier: identifier
                  }, {
                        headers: {
                              'Authorization': `Bearer ${token}`,
                              'Content-Type': 'application/json',
                        }
                  }).then(() => {
                        this.commentToSend = ''
                        this.getComments()
                  })
            },

            mountPreviousPost() {
                  const id = this.$route.params.id;

                  axios.get(`https://ma.tenton.al/api/v1/posts/${id}/previous`)
                        .then(res => {
                              this.previousPost = res.data.data;
                        })
            },

            mountNextPost() {
                  const id = this.$route.params.id;

                  axios.get(`https://ma.tenton.al/api/v1/posts/${id}/next`)
                        .then(res => {
                              this.nextPost = res.data.data;
                        })
            },

            getCommentUserImage(comment) {
                  if(!comment.user){
                        return null;
                  }

                  return comment.user.resource_url;
            },

            genRandomString(length) {
                  var result = '';
                  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                  var charactersLength = characters.length;

                  for (var i = 0; i < length; i++) {
                        result += characters.charAt(Math.floor(Math.random() *
                              charactersLength));
                  }
                  return result;
            },
            formatDate(dateString) {
                  const date = new Date(dateString);
                  // Then specify how you want your dates to be formatted
                  return new Intl.DateTimeFormat('default', {
                        dateStyle: 'long'
                  }).format(date);
            },
      }
}
</script>
