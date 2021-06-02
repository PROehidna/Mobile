<template>
<ScrollView orientation="vertical" scrollBarIndicatorVisible="true">
  <StackLayout orientation="vertical">
    <label class="big-text">ПОКУШАТЬ</label>
    <label class='text'>голод ({{hunger}}/100)</label>
    <Progress width='80%' :value="hunger" maxValue="100"/>
    <StackLayout v-if="hunger>0 || health>0 || mood>0">
      <Button class="button" text=">оче мали хрючево (-10р)" @tap="eatTierOne(), showRub()"/>
      <Button class="button" text=">мали хрючево (-50р)" @tap="eatTierTwo(), showRub()"/>
      <Button class="button" text=">хрючево (-100р)" @tap="eatTierThree(), showRub()"/>
      <Button class="button" text=">больче хрючево (-500р)" @tap="eatTierFour(), showRub()"/>
      <Button class="button" text=">оче больче хрючево (-1000р)" @tap="eatTierFive(), showRub()"/>
    </StackLayout>
    <label class="big-text">ПОЛЕЧИТЬСЯ</label>
    <label class='text'>здоровье ({{health}}/100)</label>
    <Progress width='80%' :value="health" maxValue="100"/>
    <StackLayout v-if="hunger>0 || health>0 || mood>0">
      <Button class="button" text=">оче мали таблетки (-10р)" @tap="healTierOne(), showRub()"/>
      <Button class="button" text=">мали таблетки (-50р)" @tap="healTierTwo(), showRub()"/>
      <Button class="button" text=">таблетки (-100р)" @tap="healTierThree(), showRub()"/>
      <Button class="button" text=">больче таблетки (-500р)" @tap="healTierFour(), showRub()"/>
      <Button class="button" text=">оче больче таблетки (-1000р)" @tap="healTierFive(), showRub()"/>
    </StackLayout>
    <label class="big-text">ПОРАЗВЛЕЧЬСЯ</label>
    <label class='text'>настроение ({{mood}}/100)</label>
    <Progress width='80%' :value="mood" maxValue="100"/>
    <StackLayout v-if="hunger>0 || health>0 || mood>0">
      <Button class="button" text=">оче мали двач (-10р)" @tap="enjoyTierOne(), showRub()"/>
      <Button class="button" text=">мали двач (-50р)" @tap="enjoyTierTwo(), showRub()"/>
      <Button class="button" text=">двач (-100р)" @tap="enjoyTierThree(), showRub()"/>
      <Button class="button" text=">больче двач (-500р)" @tap="enjoyTierFour(), showRub()"/>
      <Button class="button" text=">оче больче двач (-1000р)" @tap="enjoyTierFive(), showRub()"/>
    </StackLayout>
    <Label textWrap='true' row='2' v-else class="big-text" text='видимо, какой-то из параметров упал слишком настолько низко, что смерть настигла сего аватара'/>

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