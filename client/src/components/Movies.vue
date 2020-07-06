<template>
<div class="row">
    <div 
        v-for="movie in movies"
        :key="movie.id"
        :value="movie"
        class="col-6 col-sm-4 col-md-3 col-lg-2">
        <div class="movie-card">
            <img :src="movie.poster"/>
            <div class="card-info">
                <p><i class="fas fa-star"></i>{{ movie.rating }}</p>
                <button class="btn">Button</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "Movies",
  props: ["movies"]
}
</script>
