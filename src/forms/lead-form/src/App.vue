<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import {} from "@formkit/vue";

const formContainer = ref();
const fieldsetRef = ref();

const register = () => {};

const data = reactive({
  checked: false,
});

const formData = ref({
  firstname: null,
  email: "lyall.vanderlinde@iriesoft.net",
  residence: null,
});
const formSchema: any = reactive([
  {
    $formkit: "text",
    name: "firstname",
    label: "First name(s):",
    validation: "required",
    validationMessages: {
      required: "We need this information to assist you",
    },
  },
  {
    $formkit: "text",
    name: "lastname",
    label: "Last name:",
    validation: "required",
    validationMessages: {
      required: "We need this information to assist you",
    },
  },
  {
    $formkit: "text",
    name: "email",
    label: "Email address:",
    validation: "required|email",
    validationMessages: {
      required: "We need this information to assist you",
    },
  },
  {
    $formkit: "select",
    name: "residence",
    label: "Where do you currently reside?",
    options: [],
    validation: "required",
    validationMessages: {
      required: "We need this information to assist you",
    },
  },
  {
    $formkit: "checkbox",
    name: "eu_citizen",
    id: "eu",
    label: "Are you a european citizen?",
  },
  {
    $formkit: "select",
    if: "$get(eu).value", // 👀 Oooo, conditionals!
    name: "cookie_notice",
    label: "Cookie notice frequency",
    options: {
      refresh: "Every page load",
      hourly: "Ever hour",
      daily: "Every day",
    },
    help: "How often should we display a cookie notice?",
  },
]);

interface ISelectOption {
  value?: any;
  label: string;
  attrs?: Record<string, any>;
}

const populateSelect = () => {
  fetch(
    "https://webservices.1stcontact.com/crmproxy/api/v2/entities/lead/attributes/new_country"
  )
    .then((response) => response.json())
    .then((response) => {
      //console.log("response", response);
      const data: any[] = response.Result;
      let selectData: ISelectOption[] = data.map((d) => {
        return {
          value: d.Code,
          label: d.Description,
        };
      });

      selectData = [
        {
          label: "- Nothing selected -",
          attrs: {
            disabled: true,
          },
        },
        ...selectData,
      ];

      const r = formSchema.find((f: any) => f.name == "residence");
      r.options = selectData;
    });
};

onMounted(() => {
  populateSelect();
  /*const r = formSchema.find((f: any) => f.name == "residence");
  if (r) {
    r.options = [
      {
        label: "- Nothing selected -",
        attrs: {
          disabled: true,
        },
      },
      {
        value: 1,
        label: "Mecury",
      },
      {
        value: 2,
        label: "Venus",
      },
    ];
  }*/
});
</script>

<template>
  <div ref="formContainer">
    <FormKit type="form" v-model="formData" @submit="register">
      <FormKitSchema :schema="formSchema" />
    </FormKit>
  </div>

  <div ref="fieldsetRef">
    <input type="checkbox" v-model="data.checked" class="d-block" />
    <input v-if="data.checked" type="text" name="" id="" />
  </div>

  <pre>{{ formData }}</pre>
</template>

<style></style>
