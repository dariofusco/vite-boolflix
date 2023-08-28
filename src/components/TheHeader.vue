<script>
export default {}
</script>

<template>
    <header>
        <nav class="navbar navbar-light bg-black px-3">
            <a class="navbar-brand">Boolflix</a>
            <form class="form-inline d-flex">
                <input class="form-control bg-light mx-2" type="cerca" placeholder="Cerca" aria-label="Cerca">
                <button class="btn btn-outline-danger mx-2" type="submit">Cerca</button>
            </form>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.navbar-brand {
    color: red;
    font-size: 2rem;
}
</style>
