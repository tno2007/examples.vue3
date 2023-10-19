<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { markRaw, onMounted, reactive, ref } from "vue";
import ListingCard from "./components/ListingCard.vue";
import ProfileCard from "./components/ProfileCard.vue";
import { AgGridVue } from "ag-grid-vue3";

const data = ref();

const library = markRaw({
  ListingCard: ListingCard,
});

const schema = ref([
  {
    $cmp: "ListingCard",
    props: {
      title: "Outstanding actions",
      icon: "bell",
    },
  },
  {
    $el: "div",
    attrs: {
      class:
        "w-full --max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mb-4",
    },
    children: [
      {
        $el: "div",
        attrs: {
          class: "flex items-center --justify-between mb-4",
        },
        children: [
          {
            $el: "div",
            attrs: {
              class: "flex-shrink-0 p-1 bg-gray-300 rounded-full",
            },
            children: [
              {
                $el: "svg",
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 16 16",
                  class: "text-cyan-800 fill-current h-6 w-6",
                },
                children: [
                  {
                    $el: "path",
                    attrs: {
                      d: "M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7c0-2.42-1.72-4.44-4.005-4.901z",
                    },
                  },
                ],
              },
            ],
          },
          {
            $el: "h5",
            attrs: {
              class:
                "pl-3 text-lg font-medium leading-none text-gray-900 dark:text-white",
            },
            children: "Outstanding actions",
          },
        ],
      },
    ],
  },
]);

// Set rowData to Array of Objects, one Object per Row
const rowData = reactive({
  value: [],
});

// Each Column Definition results in one Column.
const columnDefs = reactive({
  value: [{ field: "candidate" }, { field: "model" }, { field: "price" }],
});

// DefaultColDef sets props common to all Columns
const defaultColDef = {
  sortable: true,
  filter: true,
  flex: 1,
};

const gridApi = ref(null); // Optional - for accessing Grid's API

// Obtain API from grid's onGridReady event
const onGridReady = (params: any) => {
  // console.log("onGridReady");
  // console.log(params);
  gridApi.value = params.api;
};

// Example of consuming Grid Event
const cellWasClicked = (event: any) => {
  console.log("cell was clicked", event);
};

onMounted(() => {
  fetch("https://www.ag-grid.com/example-assets/row-data.json")
    .then((result) => result.json())
    .then((remoteRowData) => (rowData.value = remoteRowData));
});
</script>

<template>
  <div>
    <ProfileCard></ProfileCard>

    <ag-grid-vue
      class="ag-theme-alpine"
      style="height: 500px"
      :columnDefs="columnDefs.value"
      :rowData="rowData.value"
      :defaultColDef="defaultColDef"
      rowSelection="multiple"
      animateRows="true"
      @cell-clicked="cellWasClicked"
      @grid-ready="onGridReady"
    >
    </ag-grid-vue>

    <FormKitSchema :schema="schema" :data="data" :library="library" />
  </div>
</template>

<style lang="scss">
// Core grid CSS, always needed
@import "ag-grid-community/styles/ag-grid.css";
// Optional theme CSS
@import "ag-grid-community/styles/ag-theme-alpine.css";
</style>
