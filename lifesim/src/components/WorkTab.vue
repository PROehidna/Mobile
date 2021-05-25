<template>
<StackLayout orientation="horizontal">
  <StackLayout width='5%'>
      <Progress class='rotated' :value="mood" maxValue="100" />
  </StackLayout>
  <StackLayout width='90%' orientation='vertical'>
    <Progress :value="health" maxValue="100"/>
    <label text="тута работа и че-то еще" />
    <Button class="button" text=">оче мали работа" @tap="workTierOne(), dayCounter()"/>
    <Button v-if='basics' class="button" text=">мали работа" @tap="workTierTwo(), dayCounter()"/>
    <Button v-else isEnabled='false' class="button" text=">мали работа" @tap="workTierTwo(), dayCounter()"/>
    <Button class="button" text=">работа" @tap="workTierThree(), dayCounter()"/>
    <Button class="button" text=">больче работа" @tap="workTierFour(), dayCounter()"/>
    <Button class="button" text=">оче больче работа" @tap="workTierFive(), dayCounter()"/>
  </StackLayout>
  <StackLayout height='500%' width='5%'>
    <Progress class='rotated' :value="hunger" maxValue="100"/>
  </StackLayout>
</StackLayout>
</template>

<script>
import {mapGetters, mapActions, mapMutations, mapState} from 'vuex';

export default {
    computed: mapGetters(['rub', 'usd', 'health', 'hunger', 'mood', 'd', 'm', 'y', 'basics']),
  methods:{
      onCloseTap: function(){
        this.$modal.close()
      },
      ...mapMutations(['dayCounter']),
        workTierOne(){
        this.$store.commit('workTierOne');
        if ((this.$store.getters.health | this.$store.getters.hunger | this.$store.getters.mood) <= 0 ){
          this.$modal.close();
          alert(({
            title: "e",
            button: "e",
            okButtonText: "e"
          }));
        }
      }

  }
}
</script>