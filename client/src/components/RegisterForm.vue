<template>
    <div class="container">
        <form class="form-row" id="login-form">
            <div class="col-12 form-group">
                <label for="">username</label>
                <input type="text" class="form-control">
            </div>
            <div class="col-12 form-group">
                <label for="">password</label>
                <input type="password" class="form-control">
            </div>
            <div class="col-12 form-group">
                <label for="">confirm password</label>
                <input type="password" class="form-control">
            </div>
            <div class="col-12">
                <button class="btn">sign up</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'RegisterForm'
}
</script>
