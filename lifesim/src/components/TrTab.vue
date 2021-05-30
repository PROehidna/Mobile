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
    <Button v-if="!trTierTwo" class="button" text=">мали паук аркадий" @tap="trTierTwo()"/>
    <Button v-else isEnabled='false' class="button" text=">мали паук аркадий (куплена)"/>
    <Button v-if="!trTierThree" class="button" text=">паук аркадий" @tap="trTierThree()"/>
    <Button v-else isEnabled='false' class="button" text=">паук аркадий (куплена)"/>
    <Button v-if="!trTierFour" class="button" text=">больче паук аркадий" @tap="trTierFour()"/>
    <Button v-else isEnabled='false' class="button" text=">больче паук аркадий (куплена)"/>
    <Button v-if="!trTierFive" class="button" text=">оче больче паук аркадий" @tap="trTierFive()"/>
    <Button v-else isEnabled='false' class="button" text=">оче больче паук аркадий (куплена)"/>
  </StackLayout>
  <Label textWrap='true' row='2' v-else class="big-text" text='видимо, какой-то из параметров упал слишком настолько низко, что смерть настигла сего аватара'/>
</GridLayout>
</template>

<script>
import {mapGetters, mapActions, mapMutations, mapState} from 'vuex';

export default {
  computed: mapGetters(['rub', 'hunger', 'health', 'mood', 'trTierTwo', 'trTierThree', 'trTierFour', 'trTierFive']),
  methods:{
      onCloseTap: function(){
        this.$modal.close()
      },
      ...mapActions(['trTierTwo', 'trTierThree', 'trTierFour', 'trTierFive'])
  }
}
</script>