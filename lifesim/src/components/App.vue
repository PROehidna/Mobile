<template>
    <Page> 
        <ActionBar title="добро пожаловать. снова."/>
            <StackLayout>
                <Button class="button" @tap="startNewGame(), newGameNormal()" text=">новая игра"/>
                <Button class="button" @tap="about()" text=">about"/>
                <Button class="button" @tap="closeApp()" text=">выход"/>
            </StackLayout>
    </Page>
</template>

<script >
import {mapMutations,  mapActions } from 'vuex';
import Game from './Game';
import Settings from './Settings';
import Saves from './Saves';
import * as application from "@nativescript/core/application";

  export default {
    methods:{
      ...mapActions(['mounted']),
      ...mapMutations(['newGameNormal']),
      mounted(){mounted()},
      startNewGame: function(event){
        this.$showModal(Game, {
          fullscreen: true,
        })
      },
      about() {
        alert(({
          title: "about",
          message: "разработал всеволод \"panlukaszgelmintowski\" доронин",
          okButtonText: "ок"
        }));
      },
      closeApp() {
        if (application.android) {
          application.android.foregroundActivity.finish();
        } else {
          exit(0);
        }
      }
    }
  }
</script>

<style src="./style.css"></style>
