<template>
    <Frame>
        <Page>
        <ActionBar title="настроечку"/>
        <StackLayout class="modalForm" width="100% ">
                <ScrollView orientation="vertical" scrollBarIndicatorVisible="true">
                <StackLayout orientation="vertical">
                    <Button class="button" text="o"/>
                    <Button class="button" text="o"/>
                    <Button class="button" text="o"/>
                    <Button class="button" text="o"/>
                    <Button class="button" text="o"/>
                    <Button class="button" text="o"/>
                    <Button class="button" @tap="onCloseTap" text="Закрыть" />
                </StackLayout>
                </ScrollView>
                
            </StackLayout>
        </Page>
        </Frame>
</template>

<script>
export default {
    props: [],
    data: function() {
        return {
        };
    },
    methods:{
        onCloseTap: function(){
            this.$modal.close()
        }
    }
}
</script>

<style src="./style.css"></style>