<template>
  <StackLayout class="modalForm" width="100%">
    <ScrollView orientation='vertical' scrollBarIndicatorVisible="true">
    <StackLayout orientation='vertical'>
      <label>сегодня:</label>
      <DatePicker isEnabled="false" :day='d' :month='m' :year='y' />
        <label>рубли: {{rub}} и доллары {{usd}}</label>
        <label>health</label>
        <Progress :value="health" maxValue="100"/>
        <label>mood</label>
        <Progress :value="mood" maxValue="100"/>
        <label>hunger</label>
        <Progress :value="hunger" maxValue="100"/>
        <Button class="button" text=">work" @tap="workTierOne()"/>
        <Button class="button" text=">heal" @tap="healTierOne()"/>
        <Button class="button" text=">enjoy" @tap="enjoyTierOne()"/>
        <Button class="button" text=">eat" @tap="eatTierOne()"/>
        <Button class="button" @tap="onCloseTap" text="Закрыть" />
          
    </StackLayout>
    </ScrollView>
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
      ...mapActions(['workTierOne', 'eatTierOne', 'healTierOne', 'enjoyTierOne']),
  }
}
</script>
