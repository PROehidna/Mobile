const Details = {
    template:
        `<Page>
            <StackLayout class="modalForm" width="100%">
                <Label class="city" :text="city" width="100%" />
                <ScrollView orientation="horizontal" scrollBarIndicatorVisible="true">
                <StackLayout orientation="horizontal">
                    <Button text="o"/>
                    <Button text="o"/>
                    <Button text="o"/>
                    <Button text="o"/>
                    <Button text="o"/>
                    <Button />
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button text="o"/>
                </StackLayout>
                </ScrollView>
                <Button class="button" @tap="onCloseTap" text="Закрыть" />
                
            </StackLayout>
        </Page>`
    ,
    props: [],
    data() {
        return {
        };
    },
    methods:{
        onCloseTap: function(){
            this.$modal.close()
        }
    }
};

export default Details;