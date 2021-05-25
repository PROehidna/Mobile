<template>
<ScrollView orientation="vertical" scrollBarIndicatorVisible="true">
  <StackLayout orientation="vertical">
    <label>еда</label>
    <Button class="button" text=">оче мали хрючево" @tap="eat(), dayCounter()"/>
    <Button class="button" text=">мали хрючево" @tap="eat(), dayCounter()"/>
    <Button class="button" text=">хрючево" @tap="eat(), dayCounter()"/>
    <Button class="button" text=">больче хрючево" @tap="eat(), dayCounter()"/>
    <Button class="button" text=">оче больче хрючево" @tap="eat(), dayCounter()"/>
    <Label>здоровье</Label>
    <Button class="button" text=">оче мали таблетки" @tap="heal(), dayCounter()"/>
    <Button class="button" text=">мали таблетки" @tap="heal(), dayCounter()"/>
    <Button class="button" text=">таблетки" @tap="heal(), dayCounter()"/>
    <Button class="button" text=">больче таблетки" @tap="heal(), dayCounter()"/>
    <Button class="button" text=">оче больче таблетки" @tap="heal(), dayCounter()"/>
    <label>развлекуха</label>
    <Button class="button" text=">оче мали кувшин" @tap="enjoy(), dayCounter()"/>
    <Button class="button" text=">мали кувшин" @tap="enjoy(), dayCounter()"/>
    <Button class="button" text=">кувшин" @tap="enjoy(), dayCounter()"/>
    <Button class="button" text=">больче кувшин" @tap="enjoy(), dayCounter()"/>
    <Button class="button" text=">оче больче кувшин" @tap="enjoy(), dayCounter()"/>

  </StackLayout>
</ScrollView>

</template>

<script>
import {mapGetters, mapActions, mapMutations, mapState} from 'vuex';

export default {
    computed: mapGetters(['rub', 'usd', 'health', 'hunger', 'mood', 'd', 'm', 'y']),
  methods:{
      onCloseTap: function(){
        this.$modal.close()
      },
      ...mapMutations(['work', 'eat', 'heal', 'enjoy', 'dayCounter']),
  }
}
</script>