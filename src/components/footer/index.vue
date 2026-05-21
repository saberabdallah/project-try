<template>
  <footer class="footer">
    <div class="container">

      <div class="footer-content">

        <!-- Logo -->
        <div class="footer-section">
          <h2 class="logo">MyWebsite</h2>
          <p>
            Welcome to our website. We provide the best services
            with modern design and fast performance.
          </p>
        </div>

        <!-- Links -->
        <div class="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <router-link to="/home">Home</router-link>
            </li>

            <li>
              <router-link to="/about">About</router-link>
            </li>

            <li>
              <router-link to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer-section">
          <h3>Contact</h3>

          <p>Email: example@gmail.com</p>
          <p>Phone: +967 777 777 777</p>
          <p>Yemen - Sana'a</p>
        </div>

      </div>

      <!-- Bottom -->
      <div class="footer-bottom">
        <p>
          © 2026 All Rights Reserved
        </p>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style scoped>

.footer {
    background-color: #1f1f1f;
    color: white;
    padding-top: 50px;
    margin-top: 50px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}

.container {
  width: 90%;
  margin: auto;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
}

.footer-section {
  flex: 1;
  min-width: 250px;
}

.logo {
  color: #f0c14b;
  margin-bottom: 15px;
}

.footer-section h3 {
  margin-bottom: 15px;
  color: #f0c14b;
}

.footer-section p {
  line-height: 1.8;
  color: #ddd;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section a {
  color: #ddd;
  text-decoration: none;
  transition: 0.3s;
}

.footer-section a:hover {
  color: #f0c14b;
  padding-left: 5px;
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid #444;
  margin-top: 30px;
  padding: 20px 0;
  color: #aaa;
}

</style>