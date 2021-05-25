<template>
<Frame>
        <Page>
            <ActionBar title="сап ананасы"/>
            <TabView :selectedIndex="0">

            <TabViewItem title="статус">
              <status-tab></status-tab>
            </TabViewItem>

            <TabViewItem title="работа">
              <work-tab></work-tab>
            </TabViewItem>

            <TabViewItem title="потребности">
              <needs-tab></needs-tab>
            </TabViewItem>

            <TabViewItem title="недвижка">
              <label text="тута еще функционал" />
            </TabViewItem>

            <TabViewItem title="транспорт">
              <label text="ОПАЧКИ, ЕЩЕ ОДНА КРИВАЯ ВКЛАДКА В ТЕХНОДЕМКЕ" />
            </TabViewItem>

            <TabViewItem title="печка">
              <label text="ОПАЧКИ, ЕЩЕ ОДНА КРИВАЯ ВКЛАДКА В ТЕХНОДЕМКЕ" />
            </TabViewItem>
            
          </TabView>
        </Page>
        </Frame>
</template>

<script>

import {mapGetters, mapActions, mapMutations, mapState} from 'vuex';
import StatusTab from './StatusTab.vue';
import WorkTab from './WorkTab.vue';
import NeedsTab from './NeedsTab.vue'

export default {
  components: { StatusTab, WorkTab, NeedsTab },


}
</script>