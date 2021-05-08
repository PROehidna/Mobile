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
        title: "edit",
        message: "new: ",
        okButtonText: "ok",
        cancelButtonText: "cancel",
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