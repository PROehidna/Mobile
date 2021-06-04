<template>
<GridLayout columns='*' rows='30, 50, auto'>
  <label row='0' class="big-text">ЗА РАБОТУ</label>
  <GridLayout row='1' columns='*, *, *' rows='20, 30'>
    <label class='text' col='0' row='0'>голод ({{hunger}}/100)</label>
    <Progress width='30%' col='0' row='1' :value="hunger" maxValue="100"/>
    <label class='text' col='1' row='0'>настроение ({{mood}}/100)</label>
    <Progress width='30%' col='1' row='1' :value="mood" maxValue="100" />
    <label class='text' col='3' row='0'>здоровье ({{health}}/100)</label>
    <Progress width='30%' col='2' row='1' :value="health" maxValue="100"/>
  </GridLayout>
  <StackLayout v-if="hunger>0 || health>0 || mood>0" row='2' width='' orientation='vertical'>
    <Button class="button" text=">работа lvl_1 (+100р)" @tap="workTierOne()"/>
    <Button v-if='edTierTwoGtr == true' isEnabled='true' class="button" text=">работа lvl_2 (+500р)" @tap="workTierTwo()"/>
    <Button v-else isEnabled='false' class="button" text=">работа lvl_2 (+500р)" @tap="workTierTwo()"/>
    <Button v-if='edTierThreeGtr == true' isEnabled='true' class="button" text=">работа lvl_3 (+1000р)" @tap="workTierThree()"/>
    <Button v-else isEnabled='false' class="button" text=">работа lvl_3 (+1000р)" @tap="workTierThree()"/>
    <Button v-if='edTierFourGtr == true' isEnabled='true' class="button" text=">работа lvl_4 (+5000р)" @tap="workTierFour()"/>
    <Button v-else isEnabled='false' class="button" text=">работа lvl_4 (+5000р)" @tap="workTierFour()" />
    <Button v-if='edTierFiveGtr == true' isEnabled='true' class="button" text=">работа lvl_5 (+1000р)" @tap="workTierFive()"/>
    <Button v-else isEnabled='false' class="button" text=">работа lvl_5 (+10000р)" @tap="workTierFive()"/>
  </StackLayout>
  <Label textWrap='true' row='2' v-else class="big-text" text='видимо, какой-то из параметров упал настолько низко, что смерть настигла сего аватара'/>
</GridLayout>
</template>

<script>
import {mapGetters, mapActions, mapMutations, mapState} from 'vuex';

export default {
  computed: mapGetters(['rub', 'health', 'hunger', 'mood', 'edTierTwoGtr', 'edTierThreeGtr', 'edTierFourGtr', 'edTierFiveGtr']),
  methods:{
      onCloseTap: function(){
        this.$modal.close()
      },
      ...mapActions(['workTierOne', 'workTierTwo', 'workTierThree', 'workTierFour', 'workTierFive'])
  }
}
</script>