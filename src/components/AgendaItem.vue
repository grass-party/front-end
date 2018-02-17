<template>
    <router-link tag="a" class="agenda-item" :to="'/agendas/' + agenda.id">
      <div class="agenda-list-left">
        <h1 class="agenda-title">{{ agenda.title }}</h1>
        <div>
          <span class="tag-list">민주당, 가상화폐</span>
          |
          <span class="created-at">{{ agenda.created_at }}</span>
          |
          <span class="creator">{{ agenda.owner.email }}</span>

        </div>
      </div>
      <div class="agenda-list-right">
        <div class="vote-num">12</div>
        <div>votes</div>
      </div>
    </router-link>
</template>
<script>
  export default {
      props: ['agenda'],
  }
</script>
<style lang="scss" scoped>
  .agenda-item {
    display: flex;
    align-items: center;
    min-height: 90px;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
  }

  .agenda-title {
    color: #3C4356;
    line-height: 30px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
    white-space: pre-wrap;
    word-break: break-all;
  }

  .agenda-list-left {
    flex: 1;
  }
  .agenda-list-right {
    width: 100px;
    flex: none;
    margin-left: auto;
    text-align: center;
    font-weight: bold;
    color: #333;
  }

  .vote-num {
    font-size: 45px;
    line-height: 40px;
  }

</style>
