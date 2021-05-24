<template>
<Frame>
        <Page>
            <ActionBar title="сап ананасы"/>
            <TabView :selectedIndex="0">
            <TabViewItem title="статус">
                <StackLayout class="modalForm" width="100%">
                <StackLayout>
                    <label>{{moneyRUB}}</label>
                    <label>health</label>
                    <Progress :value="health" maxValue="100"/>
                    <label>mood</label>
                    <Progress :value="mood" maxValue="100"/>
                    <label>hunger</label>
                    <Progress :value="hunger" maxValue="100"/>
                    <Button class="button" text="work" @tap="work()"/>
                    <Button class="button" text="eat" @tap="eat()"/>
                    <Button class="button" text="heal" @tap="heal()"/>
                    <Button class="button" text="enjoy" @tap="enjoy()"/>
                </StackLayout>
                <Button class="button" @tap="onCloseTap" text="Закрыть" />
                </StackLayout>
            </TabViewItem>
            <TabViewItem title="Tab 2">
              <label text="тута работа и че-то еще" />
            </TabViewItem>
            <TabViewItem title="Tab 3">
              <label text="тута еда лечение и развлекуха" />
            </TabViewItem>
            <TabViewItem title="Tab 4">
              <label text="тута еще функционал" />
            </TabViewItem>
            <TabViewItem title="Tab 6">
              <label text="ОПАЧКИ, ЕЩЕ ОДНА КРИВАЯ ВКЛАДКА В ТЕХНОДЕМКЕ" />
            </TabViewItem>
          </TabView>
        </Page>
        </Frame>
</template>

<script>
import {mapGetters, mapActions, mapMutations, mapState} from 'vuex';

export default {

    computed: mapGetters(['moneyRUB', 'health', 'hunger', 'mood']),
    methods:{
        onCloseTap: function(){
          this.$modal.close()
        },
        work(){
          this.$store.commit('work')
        }
    }
}
</script>