<template>
    <Page  class="app">
     <ActionBar title="Calc"/>
         <GridLayout class="keyboard" columns="*, *, *, *" rows="*, *, *, *, *, *, *">
           <StackLayout row="0" col="0" colSpan="4" rowSpan='2' backgroundColor="#c0c0c0">
            <Label width='90%' height='90%' textWrap="true" class="output" v-model="result" />
           </StackLayout>
            <Button  class="btn" text="C" @tap="alldelete()" row="2" col="0" colSpan="2"/>
            <Button  class="btn" text="CE" @tap="onedelete()" row="2" col="2" colSpan="2"/>
            <Button  class="btn" text="/" @tap="input('/')" row="5" col="0"/>
            <Button  class="btn" text="7" @tap="input('7')" row="5" col="1"/>
            <Button  class="btn" text="8" @tap="input('8')" row="5" col="2"/>
            <Button  class="btn" text="9" @tap="input('9')" row="5" col="3"/>
            <Button  class="btn" text="*" @tap="input('*')" row="6" col="0"/>
            <Button  class="btn" text="4" @tap="input('4')" row="4" col="1"/>
            <Button  class="btn" text="5" @tap="input('5')" row="4" col="2"/>
            <Button  class="btn" text="6" @tap="input('6')" row="4" col="3"/>
            <Button  class="btn" text="-" @tap="input('-')" row="4" col="0"/>
            <Button  class="btn" text="1" @tap="input('1')" row="3" col="1"/>
            <Button  class="btn" text="2" @tap="input('2')" row="3" col="2"/>
            <Button  class="btn" text="3" @tap="input('3')" row="3" col="3"/>
            <Button  class="btn" text="+" @tap="input('+')" row="3" col="0"/>
            <Button  class="btn" text="0" @tap="input('0')" row="6" col="2"/>
            <Button  class="btn" text="." @tap="input('.')" row="6" col="1"/>
            <Button  class="btn calc" text="=" @tap="calc()" row="6" col="3" colSpan="1"/>
         </GridLayout>
    </Page>
</template>

<script >
   export default  {
    data() {
        return {
            result: '',
      }
    },
    methods:{
            input: function(char){
                this.result = this.result.toString();
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
                    this.result = 'invalid input';
                }
            },
            alldelete: function() {
              this.result = '';
		        },
            onedelete: function() {
              let exp = this.result;
              this.result = exp.substring(0, exp.length - 1);
            }
    }
  }
</script>

<style scoped>
    ActionBar {
      background-color: black;
      color: white;
    }

    Page{
        background-color: #808080;
        color: #ffffff;
    }

    .btn {
      background-color: #000000;
      color: #ffffff;
      font-size: 35;
      margin: -10px -5px -10px -5px;
    }
    .output{
      background-color: #c0c0c0;
      font-size: 34;
      color: #000000;
    }
    .calc{
      background-color: #ff9113;
      color: #ffffff;
      
    }
    .btn:active{
      background-color: #c0c0c0;
      color: #000000;
    }
</style>
