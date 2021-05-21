<template>
    <Page> 
        <ActionBar title="добро пожаловать. снова."/>

            <StackLayout>
                <Button class="button" @tap="startNewGame()" text=">новая игра"/>
                <Button class="button" @tap="startLastSave()" text=">продолжить"/>
                <Button class="button" @tap="starAnySave()" text=">загрузить игру"/>            
                <Button class="button" @tap="settings()" text=">настройки"/>
                <Button class="button" @tap="about()" text=">о"/>
                <Button class="button" @tap="closeApp()" text=">выход"/>
            </StackLayout>
    </Page>
</template>

<script >
import Game from './Game';
import Settings from './Settings';
import * as application from "@nativescript/core/application";

  export default {
    data() {
      return {
        msg: 'Hello World!'
      }
    },
    methods:{
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
        this.$showModal(Game, {
          fullscreen: true,
        })
      },

      settings: function(event){
        this.$showModal(Settings,{
          fullscreen: false,
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

<style scoped>
    TabView {
        width: 200%;
    }

    ActionBar {
        background-color: #ff9113;
        color: #fefefe;
    }
    Page {
        background-color: #eeeeee;
    }
    .button {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #789922;
        background-color: #dddddd;
        font-size: 16px;
        font-family: sans-serif;
        width: 75%;
        height: 36rem;
        margin-top: 12rem;
        border-radius: 15%;
    }
</style>
