<template>
<GridLayout columns='*' rows='50, auto'>
  <GridLayout row='0' columns='*, *, *' rows='20, 30'>
    <label class='text' col='0' row='0'>голод ({{hunger}}/100)</label>
    <Progress width='30%' col='0' row='1' :value="hunger" maxValue="100"/>
    <label class='text' col='1' row='0'>настроение ({{mood}}/100)</label>
    <Progress width='30%' col='1' row='1' :value="mood" maxValue="100" />
    <label class='text' col='3' row='0'>здоровье ({{health}}/100)</label>
    <Progress width='30%' col='2' row='1' :value="health" maxValue="100"/>
  </GridLayout>
  <StackLayout row='1' width='' orientation='vertical'>
    <Button class="button" text=">оче мали работа" @tap="workTierOne()"/>
    <Button v-if='edTierTwo' class="button" text=">мали работа" @tap="workTierTwo()"/>
    <Button v-else isEnabled='false' class="button" text=">мали работа" @tap="workTierTwo()"/>
    <Button v-if='edTierThree' class="button" text=">работа" @tap="workTierThree()"/>
    <Button v-else isEnabled='false' class="button" text=">работа" @tap="workTierThree()"/>
    <Button v-if='edTierThree' class="button" text=">больче работа" @tap="workTierFour()"/>
    <Button v-else isEnabled='false' class="button" text=">больче работа" @tap="workTierFour()"/>
    <Button v-if='edTierFour' class="button" text=">оче больче работа" @tap="workTierFive()"/>
    <Button v-else isEnabled='false' class="button" text=">оче больче работа" @tap="workTierFive()"/>
  </StackLayout>
</GridLayout>
</template>

<script>
import {mapGetters, mapActions, mapMutations, mapState} from 'vuex';

export default {
  computed: mapGetters(['rub', 'health', 'hunger', 'mood', 'edTierTwo', 'edTierThree', 'edTierFour', 'edTierFive']),
  methods:{
      onCloseTap: function(){
        this.$modal.close()
      },
      ...mapActions(['workTierOne', 'workTierTwo', 'workTierThree', 'workTierFour', 'workTierFive'])
  }
}
</script>