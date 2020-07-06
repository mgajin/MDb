<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <a class="navbar-brand" href="#">MDb</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/flights" class="nav-link">Flights</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/profile" class="nav-link">Profile</router-link>
            </li>
            <!-- <li v-if="this.isLogged" class="nav-item">
              <router-link to="/profile" class="nav-link">Username</router-link>
            </li>
            <li v-if="this.isLogged" class="nav-item">
              <button class="nav-link" @click="logout">Log Out</button>
            </li> -->
            <!-- <li v-else class="nav-item">
              <router-link to="/login" class="nav-link">Log In</router-link>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </header>
</template>

<script>
export default {
    name: "Navbar"
}
</script>
