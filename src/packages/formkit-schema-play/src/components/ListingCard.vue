<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
  },
  title: {
    type: String,
  },
});
</script>

<template>
  <div
    class="w-full --max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mb-4"
  >
    <div class="flex items-center --justify-between mb-4">
      <!-- rounded-icon -->
      <div class="flex-shrink-0 p-1 bg-gray-300 rounded-full">
        <!-- icon -->
        <fa-icon
          v-if="props.icon"
          :icon="['fas', props.icon]"
          class="text-cyan-800 h-6 w-6"
        />
      </div>
      <!-- /rounded-icon -->
      <h5
        class="pl-3 text-lg font-medium leading-none text-gray-900 dark:text-white"
      >
        {{ props.title }}
      </h5>
    </div>
    <div class="flow-root">
      <div class="relative overflow-x-auto">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Candidate</th>
              <th scope="col" class="px-6 py-3">Note from case worker</th>
              <th scope="col" class="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Paul Brown
              </th>
              <td class="px-6 py-4">
                We are waiting on documents to submit his application.
              </td>
              <td class="px-6 py-4">21 Nov 2022</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Ryan Smith
              </th>
              <td class="px-6 py-4">Please update Ryan's profile.</td>
              <td class="px-6 py-4">18 Nov 2022</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
