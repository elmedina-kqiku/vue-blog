<template>
<AuthLayoutVue>
      <AuthCardVue>
            <template #title>
                  Register to Blog
            </template>

            <div class="flex justify-center">
                  <form @submit.prevent="submit" class="flex flex-col space-y-3 w-full">
                        <div>
                              <label>
                                    <InputVue v-model="v$.name.$model" type="text" autocomplete="name" placeholder="Full Name"  name="name" />
                              </label>
                              <ValidationError v-for="error of v$.name.$errors" :key="error.$uid" :error="error" />

                        </div>
                        <div>
                              <label>
                                    <InputVue v-model="v$.email.$model" type="email" autocomplete="name" placeholder="Email Address"  name="email" />
                              </label>
                              <ValidationError v-for="error of v$.email.$errors" :key="error.$uid" :error="error" />
                        </div>
                        <div>
                              <label>
                                    <InputVue v-model="v$.password.$model"  type="password" autocomplete="name" placeholder="Password" name="password" />

                              </label>
                              <ValidationError v-for="error of v$.password.$errors" :key="error.$uid" :error="error" />
                        </div>
                        <div>
                        <label>
                              <InputVue v-model="v$.confirmPassword.$model" type="password" autocomplete="name" placeholder="Confirm Password" data-vv-as="password" />
                        </label> 
                       <ValidationError v-for="error of v$.confirmPassword.$errors" :key="error.$uid" :error="error" />
                        </div>

                        <ButtonVue type="submit">
                              Sign Up
                        </ButtonVue>

                        <div class=" flex flex-row justify-center text-xs">
                              <p>Already have an account?</p>
                              <p class="text-blue-500">
                                    <router-link to="/login">Log In</router-link>
                              </p>

                        </div>
                        <div class="flex justify-center text-xs text-blue-500">
                              <p>
                                          <router-link to="/">
                                                Continue Without
                                                Account
                                          </router-link>
                              </p>
                        </div>
                    
                  </form>
            </div>

      </AuthCardVue>
</AuthLayoutVue>
</template>

<script>
import InputVue from '@/components/Form/Input.vue'
import AuthCardVue from '@/components/Utils/AuthCard.vue';
import AuthLayoutVue from '@/layouts/AuthLayout.vue';
import ButtonVue from '@/components/Buttons/Button.vue';
import ValidationError from '@/components/Form/ValidationError.vue';
import useVuelidate from '@vuelidate/core';
import {
      required,
      email,
      minLength,
      maxLength,
      sameAs
} from '@vuelidate/validators';

export default {
      name: ["Register"],
      components: {
            InputVue,
            AuthCardVue,
            AuthLayoutVue,
            ButtonVue,
            ValidationError,
      },
      setup() {
            return {
                  v$: useVuelidate()
            }
      },
      data() {
            return {
                  name: '',
                  email: '',
                  password: '',
                  confirmPassword: ''
            }
      },
      validations() {
            return {
                  name: {
                        required,
                        maxLength: maxLength(12)
                  },
                  email: {
                        required,
                        email,
                        $lazy: true
                  },
                  password: {
                        required,
                        minLength: minLength(8)
                  },

                  confirmPassword: {
                    required,
                    sameAs: sameAs(this.password)
                         
                  }
            }
      },
      methods: {
            async submit() {
                  const isFormCorrect = await this.v$.$validate()
                  if (!isFormCorrect)
                        return
                  alert('Submitted');
            }
      }

}
</script>
