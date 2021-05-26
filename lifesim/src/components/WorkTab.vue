<template>
<GridLayout height='100%' columns='10, auto, 10' rows='*'>
  <Progress height='100%' id='rotated' :value="mood" maxValue="100" />
  <StackLayout col='1' width='90%' orientation='vertical'>
    <Progress :value="health" maxValue="100"/>
    <label text="тута работа и че-то еще" />
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
  <StackLayout col='2'> //не работает растяжение
    <Progress id='rotated' :value="hunger" maxValue="100"/>
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