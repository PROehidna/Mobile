<template>
<ScrollView orientation="vertical" scrollBarIndicatorVisible="true">
  <StackLayout orientation="vertical">
    <label class="big-text">ПОКУШАТЬ</label>
    <label class='text'>голод ({{hunger}}/100)</label>
    <Progress width='80%' :value="hunger" maxValue="100"/>
    <StackLayout v-if="hunger>0 || health>0 || mood>0">
      <Button class="button" text=">еда lvl_1 (-10р)" @tap="eatTierOne(), showRub()"/>
      <Button class="button" text=">еда lvl_2 (-50р)" @tap="eatTierTwo(), showRub()"/>
      <Button class="button" text=">еда lvl_3 (-100р)" @tap="eatTierThree(), showRub()"/>
      <Button class="button" text=">еда lvl_4 (-500р)" @tap="eatTierFour(), showRub()"/>
      <Button class="button" text=">еда lvl_5 (-1000р)" @tap="eatTierFive(), showRub()"/>
    </StackLayout>
    <label class="big-text">ПОЛЕЧИТЬСЯ</label>
    <label class='text'>здоровье ({{health}}/100)</label>
    <Progress width='80%' :value="health" maxValue="100"/>
    <StackLayout v-if="hunger>0 || health>0 || mood>0">
      <Button class="button" text=">лечение lvl_1 (-10р)" @tap="healTierOne(), showRub()"/>
      <Button class="button" text=">лечение lvl_2 (-50р)" @tap="healTierTwo(), showRub()"/>
      <Button class="button" text=">лечение lvl_3 (-100р)" @tap="healTierThree(), showRub()"/>
      <Button class="button" text=">лечение lvl_4 (-500р)" @tap="healTierFour(), showRub()"/>
      <Button class="button" text=">лечение lvl_5 (-1000р)" @tap="healTierFive(), showRub()"/>
    </StackLayout>
    <label class="big-text">ПОРАЗВЛЕЧЬСЯ</label>
    <label class='text'>настроение ({{mood}}/100)</label>
    <Progress width='80%' :value="mood" maxValue="100"/>
    <StackLayout v-if="hunger>0 || health>0 || mood>0">
      <Button class="button" text=">развлечение lvl_1 (-10р)" @tap="enjoyTierOne(), showRub()"/>
      <Button class="button" text=">развлечение lvl_2 (-50р)" @tap="enjoyTierTwo(), showRub()"/>
      <Button class="button" text=">развлечение lvl_3 (-100р)" @tap="enjoyTierThree(), showRub()"/>
      <Button class="button" text=">развлечение lvl_4 (-500р)" @tap="enjoyTierFour(), showRub()"/>
      <Button class="button" text=">развлечение lvl_5 (-1000р)" @tap="enjoyTierFive(), showRub()"/>
    </StackLayout>
    <Label textWrap='true' row='2' v-else class="big-text" text='видимо, какой-то из параметров упал настолько низко, что смерть настигла сего аватара'/>
  </StackLayout>
</ScrollView>

</template>

<script>
import {mapGetters, mapActions, mapMutations, mapState} from 'vuex';


export default {
    computed: mapGetters(['rub', 'health', 'hunger', 'mood', 'd', 'm', 'y']),
  methods:{
      onCloseTap: function(){
        this.$modal.close()
      },
      ...mapActions(['eatTierOne',   'healTierOne',   'enjoyTierOne',
                     'eatTierTwo',   'healTierTwo',   'enjoyTierTwo',
                     'eatTierThree', 'healTierThree', 'enjoyTierThree',
                     'eatTierFour',  'healTierFour',  'enjoyTierFour',
                     'eatTierFive',  'healTierFive',  'enjoyTierFive', 'showRub'])
  }
}
</script>