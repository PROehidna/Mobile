<template>
    <Page>
        <ActionBar title="God Eye"/>
        <StackLayout>
          <StackLayout>
            <label>имя героя:         {{this.name}}</label>
            <label>уровень:            {{this.level}}</label>
            <label>пол:                  {{this.gender}}</label>
            <label>гильдия:            {{this.clan}}</label>
            <label>ранг в гильдии:    {{this.clan_position}}</label>
            <label>здоровье:          {{this.health}}/{{this.max_health}}</label>
            <label>имя бога:          {{this.godname}}</label>
            <label>девиз:             {{this.motto}}</label>
            <label>имя питомца:       {{this.pet.pet_name}}</label>
            <label>уровень питомца:   {{this.pet.pet_level}}</label>
            <label>тип питомца:       {{this.pet.pet_class}}</label>
            <label>контужен?:         {{this.pet.wounded}}</label>
          </StackLayout>
          <StackLayout>
            <TextField class="input" v-model="godname" hint="write godname"  @returnPress= "newGod()"/>
            <Button text='check' @tap= "check()"/>
          </StackLayout>
        </StackLayout>
    </Page>
</template>

<script >
import { Http } from '@nativescript/core'
import * as ApplicationSettings from "application-settings";

  export default {
    data() {
      return {
        token: '',
        godname: '',
        ark_f: '',
        ark_m: '',
        arena_won: '',
        arena_lost: '',
        ark_completed_at: '',
        alignment: '',
        book_at: '',
        boss_name: '',
        bricks_cnt: '',
        clan: '',
        clan_position: '',
        gender: '',
        inventory_max_num: '',
        level: '',
        max_health: '',
        motto: '',
        name: '',
        pet: {
          pet_class: '',
          pet_level: '',
          pet_name: '',
          wounded: '',
        },
        savings: '',
        savings_completed_at: '',
        shop_name: '',
        t_level: '',
        temple_completed_at: '',
        wood_cnt: '',
        words: '',
      }
    },
    methods: {
      newGod() {
        if(this.godname != ''){
          this.msg = this.godname
          console.log(this.godname)
        }
      },
      check (){
        Http.getString('https://godville.net/gods/api/' + this.godname + '/' + this.token).then(
          (result) => {
            this.result = JSON.parse(result)
            this.ark_f = this.result.ark_f  
            this.ark_m = this.result.ark_m
            this.arena_won = this.result.arena_won
            this.arena_lost = this.result.arena_lost
            this.ark_completed_at = this.result.ark_completed_at
            this.alignment = this.result.alignment
            this.book_at = this.result.book_at  
            this.boss_name = this.result.boss_name
            this.bricks_cnt = this.result.bricks_cnt
            this.clan = this.result.clan
            this.clan_position = this.result.clan_position
            this.gender = this.result.gender
            this.inventory_max_num = this.result.inventory_max_num
            this.level = this.result.level
            this.max_health = this.result.max_health
            this.motto = this.result.motto
            this.name = this.result.name
            this.pet.pet_class = this.result.pet.pet_class
            this.pet.pet_name = this.result.pet.pet_name    
            this.pet.pet_level = this.result.pet.pet_level    
            this.pet.wounded = this.result.pet.wounded
            this.savings = this.result.savings    
            this.savings_completed_at = this.result.savings_completed_at    
            this.shop_name = this.result.shop_name    
            this.t_level = this.result.t_level    
            this.temple_completed_at = this.result.temple_completed_at       
            this.wood_cnt = this.result.wood_cnt       
            this.words = this.result.words   
            console.log(result)
          }
        )
    }
  }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }
    .text{
      text-align: center;

    }
</style>
