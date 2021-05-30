<template>
<GridLayout columns='*' rows='30, 50, auto'>
  <label row='0' class="big-text">ПОУЧИТЬСЯ</label>
  <GridLayout row='1' columns='*, *, *' rows='20, 30'>
    <label class='text' col='0' row='0'>голод ({{hunger}}/100)</label>
    <Progress width='30%' col='0' row='1' :value="hunger" maxValue="100"/>
    <label class='text' col='1' row='0'>настроение ({{mood}}/100)</label>
    <Progress width='30%' col='1' row='1' :value="mood" maxValue="100" />
    <label class='text' col='3' row='0'>здоровье ({{health}}/100)</label>
    <Progress width='30%' col='2' row='1' :value="health" maxValue="100"/>
  </GridLayout>
  <StackLayout v-if="hunger>0 || health>0 || mood>0" row='2' width='' orientation='vertical'>
    <Button v-if="!edTierTwoGtr" class="button" text=">мали учёба (1000р)" @tap="edTierTwoAct()"/>
    <Button v-else isEnabled='false' class="button" text=">мали учёба (изучена)"/>
    <Button v-if="!edTierThreeGtr" class="button" text=">учёба (50000р)" @tap="edTierThreeAct()"/>
    <Button v-else isEnabled='false' class="button" text=">учёба (изучена)"/>
    <Button v-if="!edTierFourGtr" class="button" text=">больче учёба (100000р)" @tap="edTierFourAct()"/>
    <Button v-else isEnabled='false' class="button" text=">больче учёба (изучена)"/>
    <Button v-if="!edTierFiveGtr" class="button" text=">оче больче учёба (500000р)" @tap="edTierFiveAct()"/>
    <Button v-else isEnabled='false' class="button" text=">оче больче учёба (изучена)"/>
  </StackLayout>
  <Label textWrap='true' row='2' v-else class="big-text" text='видимо, какой-то из параметров упал слишком настолько низко, что смерть настигла сего аватара'/>
</GridLayout>
</template>

<script>
import {mapGetters, mapActions, mapMutations, mapState} from 'vuex';

export default {
  computed: mapGetters(['rub', 'hunger', 'health', 'mood', 'edTierTwoGtr', 'edTierThreeGtr', 'edTierFourGtr', 'edTierFiveGtr']),
  methods:{
      onCloseTap: function(){
        this.$modal.close()
      },
      ...mapActions(['edTierTwoAct', 'edTierThreeAct', 'edTierFourAct', 'edTierFiveAct'])
  }
}
</script>