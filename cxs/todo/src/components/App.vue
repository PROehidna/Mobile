<template>
  <Page  class="app">
    <StackLayout>
      <FlexboxLayout>
        <TextField width='80%' class="input" v-model="newText" hint="write task"  @returnPress="newTask()"/>
        <Button width='15%' class="btn" text="Add" @tap="newTask()"/>
      </FlexboxLayout>
      <ScrollView orientation="horizontal">
        <ListView width='100%' class="task" for="task in tasks">
          <v-template width='100%'>
            <GridLayout columns="*, *" rows='*, *'>
            <label  class="task-text done" v-if="task.done" textWrap="true" col='0' row='0' colSpan='2'>{{task.title}}</label>
            <label  class="task-text" v-else  @tap="edit(task.id, task.title)" textWrap="true" col='0' row='0' colSpan="2">{{task.title}}</label>
            <Button  class="btn check-btn" text="✔" @tap="taskDone(task.id)" row='1' col='0'/>
            <Button  class="btn del-btn" text="✗" @tap="remove(task.id)" row='1' col='1'/> 
            </GridLayout>
          </v-template>
        </ListView>
      </ScrollView>
    </StackLayout>
  </Page>

</template>

<script >
import * as ApplicationSettings from "application-settings";

export default {
  data () {
    return {
      newText: '',
      tasks: []
    }
  },
  mounted(){
    if(ApplicationSettings.getString('tasks')){
      this.tasks=Object.values(JSON.parse(ApplicationSettings.getString('tasks')));
    }
  },
  methods: {
    newTask () {
      if(this.newText != ''){
        this.tasks.push({
          id: Math.random(),
          title: this.newText,
          done: false
        });
        this.newText = '';
      }
      this.save();
    },

    taskDone (id) {
      this.tasks = this.tasks.map(task => {
        if (task.id == id) task.done = !task.done;
        return task;
      })
      this.save();
    },

    remove (id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
      this.save();
    },

    save(){
      let toSave = Object.assign({}, this.tasks);
      ApplicationSettings.setString('tasks', JSON.stringify(toSave));
    },
    
    edit(id, old_text) {
      prompt({
        title: "Изменение задачи",
        okButtonText: "OK",
        cancelButtonText: "Отмена",
        defaultText: old_text,
      })
      .then(result => {
         this.tasks.forEach(task => {
          if (task.id == id && result.text != ''){
            task.title = result.text;
            this.save();
          }    
         });
      })
    }
  }
}
</script>

<style scoped>
  .app{
      background-color: #808080;
  }

  .task-text{
    margin: 30px 20px;
    background-color: #808080;
    border-radius: 10%;
    color: #000000;
    text-align: center;
    font-size: 24px;
  }

  .done {
    text-decoration: line-through;
    background-color: #5f5f5f;
  }

  .btn{
    background-color: #e27d01;
    border-radius: 10%;
    color: #ffffff;
    margin: 30px 3px;
  }

  .del-btn{
    background-color: #e20101;
    border-radius: 10%;
    color: #ffffff;
    margin: 30px 10px;
  }

  .check-btn{
    background-color: #01e214;
    border-radius: 10%;
    color: #ffffff;
    margin: 30px 10px;
  }

  .btn:active {
    background-color: #696969;
  }

  .input{
    background-color: #494b47;
    border-radius: 10%;
    font-size: 18px;
    color: #000000;
    margin: 50px 30px;
    text-align: center;
  }

  .input:focus{
      background-color: #e27d01;
  }
</style>
