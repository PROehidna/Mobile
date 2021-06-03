<template>
<Frame>
    <Page> 
    <ActionBar title="загрузить"/>
        <StackLayout>
            <ListView  class="save" for="save in saves">
            <v-template>
                <GridLayout columns="250%, 70, 70">
                <Button  class="button" textWrap="true" col="0" @tap="load(), this.$showModal(Game,{fullscreen: true,})">{{save.title}}</Button>
                <Button  class="btn remove-btn" text="X" @tap="remove(save.id)" col="2"/> 
                </GridLayout>
            </v-template>
            </ListView>
        </StackLayout>
    </Page>
</Frame>
</template>

<script>
import * as ApplicationSettings from "application-settings";

import {mapGetters, mapActions, mapMutations, mapState} from 'vuex';

export default {
  methods:{
      onCloseTap: function(){
        this.$modal.close()
      },
      ...mapActions(['load']),
  }
}
</script>
