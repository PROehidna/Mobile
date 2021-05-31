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
      <TabViewItem title="образование">
        <ed-tab></ed-tab>
      </TabViewItem>
      <TabViewItem title="недвижимость">
        <estate-tab></estate-tab>
      </TabViewItem>
      <TabViewItem title="траснпорт">
        <tr-tab></tr-tab>
      </TabViewItem>            
    </TabView>
  </Page>
</Frame>
</template>

<script>
import StatusTab from './StatusTab.vue';
import WorkTab from './WorkTab.vue';
import NeedsTab from './NeedsTab.vue';
import EdTab from './EdTab.vue';
import EstateTab from './EstateTeb.vue';
import TrTab from './TrTab.vue'


export default {
  components: { StatusTab, WorkTab, NeedsTab, EdTab, EstateTab, TrTab },
}
</script>