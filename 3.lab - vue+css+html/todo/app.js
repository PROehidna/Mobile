var vue = new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todos: [],
        done: false,
    },
    methods: {
        newElem: function() {
            if (this.newTodo == ''){
                alert('ошибка');
            }
            else{
                this.todos.push({
                    title: this.newTodo,
                });
                this.newTodo = '';
            }
        },
        removeElem: function(todo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
        },
    }
})