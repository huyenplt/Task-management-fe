<template>
  <div class="container">
    <div class="form-login form-wrap">
      <form @submit.prevent="handleSubmit">
        <h3>Register</h3>
        <div v-show="error" class="alert alert-danger" role="alert">
          {{ errorMsg }}
        </div>
        <div class="form-group">
          <label for="">Name</label>
          <input
            type="text"
            class="form-control"
            v-model="form.name"
            placeholder="name"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            class="form-control"
            v-model="form.email"
            placeholder="Email"
            required
          />
        </div>
        <div class="form-group">
          <label for="">Password</label>
          <input
            type="password"
            class="form-control"
            v-model="form.password"
            placeholder="Password"
            required
          />
        </div>
        <div class="form-group">
          <label for="">Password Confirmation</label>
          <input
            type="password_confirmation"
            class="form-control"
            v-model="form.password_confirmation"
            placeholder="Password Confirmation"
            required
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block">Login</button>
          Don't have an account yet?
          <!-- <router-link to="/register">Create a new account</router-link> -->
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { reactive } from 'vue'
// import { api_url } from '../../utils/const';

export default {
    setup() {
        const form = reactive({
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        })

        const handleSubmit = async () => {
            console.log(form)
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/register', {
                    ...form
                });
                const token = response.data.token;
                sessionStorage.setItem('token', token)

            } catch (err) {
                console.log(err);
            }
        }

        return {
            form,
            handleSubmit
        }
    }
}

</script>

<style scoped>
.btn {
  margin-right: 10px;
}
</style>
