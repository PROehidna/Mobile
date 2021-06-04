<template>
  <StackLayout class="modalForm" width="100%">
    <ScrollView orientation='vertical' scrollBarIndicatorVisible="true">
    <StackLayout orientation='vertical'>
      <label class='big-text'>сегодня</label>
      <DatePicker isEnabled="false" :day='d' :month='m' :year='y' />
      <label  class="big-text">возраст: {{age}}</label>
        <label class='big-text'>рубли: {{rub}}</label>
        <label class='big-text'>здоровье</label>
        <Progress :value="health" maxValue="100"/>
        <label class='big-text'>настроение</label>
        <Progress :value="mood" maxValue="100"/>
        <label class='big-text'>голод</label>
        <Progress :value="hunger" maxValue="100"/>
    </StackLayout>
    </ScrollView>
  </StackLayout>
</template>

<script>
import {mapGetters, mapActions, mapMutations, mapState} from 'vuex';

export default {
  computed: mapGetters(['rub', 'usd', 'health', 'hunger', 'mood', 'd', 'm', 'y', 'age']),
  methods:{
      onCloseTap: function(){
        this.$modal.close()
      },
      ...mapActions(['workTierOne', 'eatTierOne', 'healTierOne', 'enjoyTierOne', 'save']),
  }
}
</script>
