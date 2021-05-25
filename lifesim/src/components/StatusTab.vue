<template>
  <StackLayout class="modalForm" width="100%">
    <StackLayout>
      <!--DatePicker :disabled="true" :day='d' :month='m' :year='y' /-->
        <label>сегодня {{d}} - {{m}} - {{y}}</label>
        <label>рубли: {{rub}} и доллары {{usd}}</label>
        <label>health</label>
        <Progress :value="health" maxValue="100"/>
        <label>mood</label>
        <Progress :value="mood" maxValue="100"/>
        <label>hunger</label>
        <Progress :value="hunger" maxValue="100"/>

    </StackLayout>
    <Button class="button" @tap="onCloseTap" text="Закрыть" />
  </StackLayout>
</template>

<script>
import {mapGetters, mapActions, mapMutations, mapState} from 'vuex';

export default {
  computed: mapGetters(['rub', 'usd', 'health', 'hunger', 'mood', 'd', 'm', 'y']),
  methods:{
      onCloseTap: function(){
        this.$modal.close()
      },
      ...mapMutations(['work', 'eat', 'heal', 'enjoy', 'dayCounter']),

  }
}
</script>
