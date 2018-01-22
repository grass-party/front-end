<template>
<main>
    <section class="hero is-info">
        <div class="hero-body">
        <div class="container">
            <h1 class="title">
            키 발급
            </h1>
        </div>
        </div>
    </section>
    <form>
        <div class="notification">
            <ul>
                <li>Grassparty에서 안건을 등록하거나 투표를 하기 위해서는 키 발급이 필요합니다.</li>
                <li>발급된 private key를 안전한 장소에 백업하고, 안건 등록 및 투표시에 제출하십시오.</li>
                <li>자세한 설명은 xxxxx를 참고하세요.</li>
            </ul>
        </div>
        <button type="button" class="button is-info is-medium" @click="publishKey">
            키 발급하기
        </button>
    </form>
</main>
</template>
<script>

</script>
<style>
form {
    margin: 30px 1.5rem;
}
.choices {
    input {
        margin: 5px 0;
    }
}
@media screen and (min-width: 1024px) {
    form {
        max-width: 960px;
        width: 960px;
        margin: 30px auto;
    }
}
</style>