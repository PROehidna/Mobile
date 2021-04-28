<template>
    <Page  class="app">
     <ActionBar title="Calculator"/>
         <GridLayout class="keyboard" columns="*, *, *, *" rows="*, *, *, *, *, *">
            <Label textWrap="true" class="result" v-model="result" row="0" col="0" colSpan="4"/>/>
            <Button  class="btn act" text="C" @tap="del()" row="1" col="0" colSpan="3"/>
            <Button  class="btn act" text="/" @tap="input('/')" row="1" col="3"/>
            <Button  class="btn" text="7" @tap="input('7')" row="2" col="0"/>
            <Button  class="btn" text="8" @tap="input('8')" row="2" col="1"/>
            <Button  class="btn" text="9" @tap="input('9')" row="2" col="2"/>
            <Button  class="btn act" text="*" @tap="input('*')" row="2" col="3"/>
            <Button  class="btn" text="4" @tap="input('4')" row="3" col="0"/>
            <Button  class="btn" text="5" @tap="input('5')" row="3" col="1"/>
            <Button  class="btn" text="6" @tap="input('6')" row="3" col="2"/>
            <Button  class="btn act" text="-" @tap="input('-')" row="3" col="3"/>
            <Button  class="btn" text="1" @tap="input('1')" row="4" col="0"/>
            <Button  class="btn" text="2" @tap="input('2')" row="4" col="1"/>
            <Button  class="btn" text="3" @tap="input('3')" row="4" col="2"/>
            <Button  class="btn act" text="+" @tap="input('+')" row="4" col="3"/>
            <Button  class="btn" text="0" @tap="input('0')" row="5" col="0"/>
            <Button  class="btn" text="." @tap="input('.')" row="5" col="1"/>
            <Button  class="btn act" text="=" @tap="calc()" row="5" col="2" colSpan="2"/>
         </GridLayout>
    </Page>
</template>

<script >
    let invalid = 'invalid input';
    export default  {
    data() {
        return {
            result: '',
      }
    },
    methods:{
            input: function(char){
                this.result = this.result.toString();
                if (this.result === invalid){
                    this.result = '';   
                }
                this.result += char;
            },
            calc: function(){
                try{
                    this.result = eval(this.result);
                    if (isNaN(this.result)) {
                        throw new Error();
                  }
                }
                catch{
                    this.result = invalid;
                }
            },
            del: function(){
                this.result = '';
            }
    }
  }
</script>

<style scoped>
    .app{
        background-color: #000000;
    }
    .result{
        background-color: #fff;
        text-align: right;
        font-size: 28px;
        overflow-wrap: break-word;
        color: #000;
    }
    .btn{
        height: 20%;
        width: 25%;
        color: #0000ff;
        background-color: #ffffff;
    }
    .btn[text="="]{
        width: 50%
    }
    .btn[text="C"]{
        width: 75%;
    }
    .btn:active {
        color: #fff;
        background-color: #0000ff;
    }
    .act {
        color: #fff;
        background-color: #0000ff;
    }
    .act:active {
        color: #0000ff;
        background-color: #ffffff;
    }
</style>