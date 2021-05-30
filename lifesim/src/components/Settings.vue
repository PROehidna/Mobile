<template>
    <Frame>
        <Page>
        <ActionBar title="настроечку"/>
        <StackLayout class="modalForm" width="100% ">
                <ScrollView orientation="vertical" scrollBarIndicatorVisible="true">
                <StackLayout orientation="vertical">
                    <Button class="button" text="ничего не прикрутил"/>
                    <Button class="button" text="абсолютно"/>
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
    methods:{
        onCloseTap: function(){
            this.$modal.close()
        }
    }
}
</script>
