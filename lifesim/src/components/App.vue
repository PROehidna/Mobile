<template>
    <Page> 
        <ActionBar title="добро пожаловать. снова."/>
            <StackLayout>
                <Button class="button" @tap="startNewGame(), newGameNormal()" text=">новая игра"/>
                <Button class="button" @tap="startLastSave()" text=">продолжить"/>
                <Button class="button" @tap="starAnySave()" text=">загрузить игру"/>            
                <Button class="button" @tap="settings()" text=">настройки"/>
                <Button class="button" @tap="about()" text=">о"/>
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
      startLastSave: function(event){
        this.$showModal(Game, {
          fullscreen: true,
        })  
      },
      starAnySave: function(event){
        this.$showModal(Saves, {
          fullscreen: true,
        })
      },
      settings: function(event){
        this.$showModal(Settings,{
          fullscreen: true,
        })
      },
      about() {
        alert(({
          title: "о",
          button: "о",
          okButtonText: "о"
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
