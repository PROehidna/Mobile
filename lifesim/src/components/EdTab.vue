<template>
<GridLayout columns='*' rows='30, 50, auto'>
  <label row='0' class="big-text">ПОСЫЧЕВАТЬ</label>
  <GridLayout row='1' columns='*, *, *' rows='20, 30'>
    <label class='text' col='0' row='0'>голод ({{hunger}}/100)</label>
    <Progress width='30%' col='0' row='1' :value="hunger" maxValue="100"/>
    <label class='text' col='1' row='0'>настроение ({{mood}}/100)</label>
    <Progress width='30%' col='1' row='1' :value="mood" maxValue="100" />
    <label class='text' col='3' row='0'>здоровье ({{health}}/100)</label>
    <Progress width='30%' col='2' row='1' :value="health" maxValue="100"/>
  </GridLayout>
  <StackLayout v-if="hunger>0 || health>0 || mood>0" row='2' width='' orientation='vertical'>
    <Button v-if="!edTierTwo" class="button" text=">мали учёба" @tap="edTierTwo()"/>
    <Button v-else isEnabled='false' class="button" text=">мали учёба (изучена)"/>
    <Button v-if="!edTierThree" class="button" text=">учёба" @tap="edTierThree()"/>
    <Button v-else isEnabled='false' class="button" text=">учёба (изучена)"/>
    <Button v-if="!edTierFour" class="button" text=">больче учёба" @tap="edTierFour()"/>
    <Button v-else isEnabled='false' class="button" text=">больче учёба (изучена)"/>
    <Button v-if="!edTierFive" class="button" text=">оче больче учёба" @tap="edTierFive()"/>
    <Button v-else isEnabled='false' class="button" text=">оче больче учёба (изучена)"/>
  </StackLayout>
  <Label textWrap='true' row='2' v-else class="big-text" text='видимо, какой-то из параметров упал слишком настолько низко, что смерть настигла сего аватара'/>
</GridLayout>
</template>

<script>
import {mapGetters, mapActions, mapMutations, mapState} from 'vuex';

export default {
  computed: mapGetters(['rub', 'hunger', 'health', 'mood', 'edTierTwo', 'edTierThree', 'edTierFour', 'edTierFive']),
  methods:{
      onCloseTap: function(){
        this.$modal.close()
      },
      ...mapActions(['edTierTwo', 'edTierThree', 'edTierFour', 'edTierFive'])
  }
}
</script>