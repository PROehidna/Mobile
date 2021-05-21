import { Http } from '@nativescript/core'

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
const Game = {
    template:
        `<Page>
            <StackLayout class="modalForm" width="100%">
                <Label class="city" :text="city" width="100%" />
                <GridLayout columns="*, *" rows="50, 50, 50, 50, 50, 50">
                    <label  class="weatherTable" horizontalAlignment="center" :text="weather" row="0" col="0" colSpan="2" />
                    <label  class="weatherTable" horizontalAlignment="center" text="Температура" row="1" col="0" />
                    <label  class="weatherTable" :text="temp" row="1" col="1" />
                    <label  class="weatherTable" horizontalAlignment="center" text="Ощущается как" row="2" col="0" />
                    <label  class="weatherTable" :text="feels_like" row="2" col="1" />
                    <label  class="weatherTable" horizontalAlignment="center" text="Давление" row="3" col="0" />
                    <label  class="weatherTable" :text="pressure" row="3" col="1" />
                    <label  class="weatherTable" horizontalAlignment="center" text="Влажность" row="4" col="0" />
                    <label  class="weatherTable" :text="humidity" row="4" col="1" />
                    <label  class="weatherTable" horizontalAlignment="center" text="Облачность" row="5" col="0" />
                    <label  class="weatherTable" :text="clouds" row="5" col="1" />
                </GridLayout>
                <Button @tap="onCloseTap" text="Закрыть" />
            </StackLayout>
        </Page>`
    ,
    props: ['id'],
    data() {
        return {
            result: '',
            city: '',
            weather: '',
            temp: '',
            feels_like: '',
            pressure: '',
            humidity: '',
            clouds: '',
            cities: ["Moscow","Saint Petersburg","Tver","Omsk",
                     "Kazan","Ekaterinburg","Khanty-Mansiysk",
                     "Krasnoyarsk","Magadan","Khabarovsk"]
        };
    },
    methods:{
        onCloseTap: function(){
            this.$modal.close()
        }
    }
};

export default Game;