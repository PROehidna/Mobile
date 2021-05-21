const Settings = {
    template:
        `<Frame>
        <Page>
        <ActionBar title="настроечку"/>
        <StackLayout class="modalForm" width="100% ">
                <ScrollView orientation="vertical" scrollBarIndicatorVisible="true">
                <StackLayout orientation="vertical">
                    <Button text="o"/>
                    <Button text="o"/>
                    <Button text="o"/>
                    <Button text="o"/>
                    <Button text="o"/>
                    <Button text="o"/>
                    <Button class="button" @tap="onCloseTap" text="Закрыть" />
                </StackLayout>
                </ScrollView>
                
            </StackLayout>
        </Page>
        </Frame>
        <style src="./style.css"></style>
        `
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

export default Settings;