<template>
    <Page> 
        <ActionBar title="добро пожаловать. снова."/>

            <StackLayout>
                <Button class="message" @tap="startNewGame()" text=">новая игра"/>
                <Button class="message" text=">продолжить"/>
                <Button class="message" text=">загрузить игру"/>            
                <Button class="message" text=">настройки"/>
                <Button class="message" @tap="about()" text=">о"/>
                <Button class="message" @tap="closeApp()" text=">выход"/>
            </StackLayout>
    </Page>
</template>

<script >
import Game from './Game'
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

      about() {
        alert(({
          title: "о",
          message: "о",
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
    .message {
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
