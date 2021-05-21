

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
const Game = {
    template:
        `<Frame>
        <Page>
            <ActionBar title="сап ананасы"/>
            <StackLayout class="modalForm" width="100%">
                <Label class="city" :text="city" width="100%" />
                <StackLayout>
                    <label>money - {{this.character.moneyRUB}}</label>
                    <label>year - {{this.year}} ; day - {{this.day}}</label>
                    <label>health</label>
                    <Progress :value="this.character.health" maxValue="100"/>
                    <label>mood</label>
                    <Progress :value="this.character.mood" maxValue="100"/>
                    <label>hunger</label>
                    <Progress :value="this.character.hunger" maxValue="100"/>
                    <Button class="button" text="work" @tap="work()"/>
                    <Button class="button" text="eat" @tap="eat()"/>
                    <Button class="button" text="heal" @tap="heal()"/>
                    <Button class="button" text="enjoy" @tap="enjoy()"/>
                </StackLayout>
                <Button class="button" @tap="onCloseTap" text="Закрыть" />
            </StackLayout>
        </Page>
        </Frame>`
    ,
    props: [],
    data() {
        return {
            character: {
                age: 18,
                health: 50,
                mood: 50,
                hunger: 50,
                moneyRUB: 50,
                moneyUSD: '',
            },
            year: 0,
            day: 0,
        };
    },
    methods:{
        work(){
            this.dayCounter();
            this.character.moneyRUB +=50;
            this.character.health -=5;
            this.character.mood -=5;
            this.character.hunger -=5;
            console.log(this.character.health);
            if (this.character.health <= 0 || this.character.mood <= 0 || this.character.hunger <= 0){
                this.$modal.close();
                alert(({
                    title: "исход",
                    okButtonText: "ладно",
                  }));
                  
            }
        },

        eat(){
            this.dayCounter();
            if (this.character.moneyRUB >= 10){
                this.character.moneyRUB -=10;
                this.character.hunger +=10;
                if (this.character.hunger >= 100){
                    this.character.hunger = 100;
                }
            }
            else{
                alert(({
                    title: "денях нет",
                    okButtonText: "ладно",
                  }));
            }
        },

        heal(){
            this.dayCounter();
            if (this.character.moneyRUB >= 10){
                this.character.moneyRUB -=10;
                this.character.health +=10;
                if (this.character.health >= 100){
                    this.character.health = 100;
                }
            }
            else{
                alert(({
                    title: "денях нет",
                    okButtonText: "ладно",
                  }));
            }
        },

        enjoy(){
            this.dayCounter();
            if (this.character.moneyRUB >= 10){
                this.character.moneyRUB -=10;
                this.character.mood +=10;
                if (this.character.mood >= 100){
                    this.character.mood = 100;
                }
            }
            else{
                alert(({
                    title: "денях нет",
                    okButtonText: "ладно",
                  }));
            }
        },

        onCloseTap: function(){
            this.$modal.close()
        },

        dayCounter(){
            this.day +=1;
            if (this.day === 365 && this.year % 4 !== 0){
                this.year +=1;
                this.day = 0;
            }
            else if (this.day === 366 && this.year % 4 === 0){
                this.year +=1;
                this.day = 0;
            }
        }
    }
};

export default Game;