<template>
  <div class="login-page">

    <div class="login-card">

      <h1>Login</h1>
      <p class="subtitle">Welcome Back</p>

      <!-- Alert -->

      <div
        v-if="message"
        :class="alertType === 'success'
        ? 'alert-success'
        : 'alert-error'"
      >
        {{ message }}
      </div>

      <form>
        <div class="input-group">
          <label>Email</label>

          <input
            type="text"
            placeholder="Enter your email"
            v-model="txt_username"
            autofocus
          />
        </div>

        <div class="input-group">
          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            v-model="txt_password"
          />
        </div>

        <button @click.prevent="authontication">
          Login
        </button>

      </form>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// router
const router = useRouter()

// state
const txt_username = ref("")
const txt_password = ref("")

const username = ref("a")
const password = ref("1")

// alert
const message = ref("")
const alertType = ref("")

// method
const authontication = () => {

  if (
    txt_username.value === username.value &&
    txt_password.value === password.value
  ) {

    message.value = "Welcome Login Successfully"
    alertType.value = "success"

    // الانتقال بعد ثانية ونصف
    setTimeout(() => {
      router.push('/home')
    }, 1500)

  } else {

    message.value = "Username or Password Wrong"
    alertType.value = "error"
    txt_username.value = ""
    txt_password.value = ""
  }
}
</script>

<style scoped>

.login-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    135deg,
    #1e3c72,
    #2a5298
  );
}

.login-card {
  width: 500px;
  background-color: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.login-card h1 {
  text-align: center;
  margin-bottom: 10px;
  color: #1e3c72;
}

.subtitle {
  text-align: center;
  color: gray;
  margin-bottom: 30px;
}

.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.input-group label {
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}

.input-group input {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: 0.3s;
}

.input-group input:focus {
  border-color: #2a5298;
  box-shadow: 0 0 5px rgba(42, 82, 152, 0.4);
}

button {
  width: 100%;
  padding: 12px;
  border: none;
  background-color: #2a5298;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #1e3c72;
}

/* Alerts */

.alert-success {
  background-color: #d4edda;
  color: #155724;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
}

.alert-error {
  background-color: #f8d7da;
  color: #721c24;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
}

</style>