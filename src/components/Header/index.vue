

<template>
  <div class="">

    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <a class="navbar-brand text-success" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link " aria-current="page" ><router-link to="/home">Home</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" ><router-link to="/about">About</router-link></a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" ><router-link to="/todo">ToDo</router-link></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="'true'">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"><router-link to="/home">Home</router-link></a></li>
                <li><a class="dropdown-item" href="#"><router-link to="/about">About</router-link></a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    
  </div>
</template>

<script >


export default {
  name: 'HeaderView',

  setup() {

    //data

    // You can add any logic or data properties here if needed
  }
}

</script>

<style scoped>



nav {
    background-color: #b7a975;
    padding: 17px;
}

.navbar-brand {
    color: #fff;
    font-weight: bold;
    padding-right: 15px;
    font-size: 22px;

}

a {
    color: #010000;
    text-decoration: none;
    font-weight: bold;
    padding: 0;
    margin: 0;
    font-size: 19px;
}

 .nav-item .router-link-active {
    font-weight: bold;
    color: #0b552a;
    padding: 3px 6px;
    border-bottom: #000000 solid 3px;
}

.dropdown-menu {
    background-color: #b7a97587;
    padding: 10px;
}

.dropdown-menu a {
    color: #120404;
    padding: 5px 10px;
    display: block;
}
.dropdown-menu a:hover {
    background-color: transparent;
}

 .dropdown-item .router-link-active {
    font-weight: bold;
    color: #000000;
    padding: 4px;
}

</style>