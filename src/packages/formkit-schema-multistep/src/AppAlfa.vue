<script setup lang="ts">
import { reactive, ref, markRaw } from "vue";
import SlideToggle from "./components/ui/SlideToggle.vue";
import TransitionExpand from "./components/ui/TransitionExpand.vue";
// import { schemaCollection } from "./schema/beta";
import MyDiv from "./components/custom/MyDiv.vue";

const model = ref({});
const items = ref<IItem[]>();

interface IItem {
  label: string;
  value: string;
}

const r = () => (Math.random() + 1).toString(36).substring(7);

items.value = [
  {
    label: "😏",
    value: r(),
  },
];

function alterItems(event: MouseEvent, toRemove: any = null) {
  if (toRemove) {
    items.value = items.value?.filter((item) => item !== toRemove);
  } else {
    const random = r();
    items.value?.push({
      label: random,
      value: random,
    });
  }
}

const data = reactive({
  activeIndex: 0,
  toggleA: false,
  toggleB: false,
  stringify: (value: unknown) => JSON.stringify(value, null, 2),
  divBinds: {
    show: false,
  },
  propz: {
    "data-fruit": "I like fruit",
    //"to-be-or-not-to-be": false,
    toBeOrNotToBe: true,
    //show: true, //show: true - not working
    //"v-show": true, //v-show: true - not working
    //vShow: true, //vShow: true - not working
    class: "red",
    onClick: () => {
      if (data.propz.toBeOrNotToBe === true) {
        data.propz.toBeOrNotToBe = false;
      } else {
        data.propz.toBeOrNotToBe = true;
      }
    },
  },
  setPropz: (enable: boolean) => {
    data.propz.toBeOrNotToBe = enable;
  },
});

const library = markRaw({
  SlideToggle: SlideToggle,
  TransitionExpand: TransitionExpand,
  MyDiv: MyDiv,
});

const schema = ref([
  {
    $formkit: "form",
    id: "form",
    children: [
      {
        $cmp: "SlideToggle",
        children: [
          {
            $el: "div",
            key: "alfa",
            bind: "$divBinds",
            children: [
              {
                $formkit: "group",
                name: "study1",
                children: [
                  {
                    $formkit: "radio",
                    name: "explorePath",
                    label:
                      "Are you exploring you options as a student, individual, for your family, or for retirement?",
                    options: [
                      { value: 1, label: "Student" },
                      { value: 2, label: "Individual" },
                      { value: 3, label: "Family" },
                      { value: 4, label: "Retirement" },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        $cmp: "SlideToggle",
        children: [
          {
            $el: "div",
            key: "beta",
            //bind: "$divBinds",
            attrs: {
              style: {
                if: "$get(form).value.study1.explorePath !== 1",
                then: "display: none;",
              },
            },
            //if: "$get(form).value.study1.explorePath == 1",
            children: [
              {
                $formkit: "group",
                name: "study2",
                children: [
                  {
                    $formkit: "text",
                    label: "Tell me your name",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    $el: "pre",
    children: "$stringify($get(form).value)",
  },
  {
    $el: "div",
    attrs: {
      class: {
        if: "$get(form).value.study1.explorePath !== 1",
        then: "magic reveal",
        else: "magic",
      },
    },
    children: "Posty",
  },
  {
    $cmp: "SlideToggle",
    children: [
      {
        $cmp: "MyDiv",
        bind: "$propz",
        //bind: {
        //"v-show": "true",
        //},
        children: "Lil Romeo",
      },
    ],
  },
]);
</script>

<template>
  <h5 @click="alterItems($event)">Click emojis to remove them.</h5>
  <ul>
    <li
      v-for="item in items"
      :key="item.label"
      @click="alterItems($event, item)"
    >
      {{ item }}
    </li>
  </ul>

  <div>
    <button @click="data.toggleA = !data.toggleA">Toggle A</button>
    <SlideInOut>
      <div v-show="data.toggleA">
        <h2>Index 1</h2>
        <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>
        <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>
        <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>
        <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>
      </div>
    </SlideInOut>
  </div>

  <div>
    <button @click="data.toggleB = !data.toggleB">Toggle B</button>
    <SlideToggle>
      <div v-if="data.toggleB">
        <h2>Index 1</h2>
        <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>
        <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>
        <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>
        <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>
      </div>
    </SlideToggle>
  </div>

  <FormKitSchema
    :schema="schema"
    :library="library"
    :data="data"
  ></FormKitSchema>

  <FormKit type="form" v-model="model">
    <SlideToggle>
      <div v-show="data.activeIndex == 0">
        <FormKit type="group" name="study1">
          <FormKit
            type="radio"
            id="explorePath"
            name="explorePath"
            label="Are you
      exploring you options as a student, individual, for your family, or for
      retirement?"
            :options="[
              { value: 1, label: 'Student' },
              { value: 2, label: 'Individual' },
              { value: 3, label: 'Family' },
              { value: 4, label: 'Retirement' },
            ]"
            validation="required"
          />
        </FormKit>
      </div>
    </SlideToggle>

    <SlideToggle>
      <div v-show="model.study1.explorePath == 1">
        <FormKit type="group" name="study2">
          <FormKit type="text" label="Tell me your name"> </FormKit>
        </FormKit>
      </div>
    </SlideToggle>

    <pre>{{ model }}</pre>
  </FormKit>
  <button @click="data.activeIndex--">Back</button>
  <button @click="data.activeIndex++">Next</button>

  <MyDiv :to-be-or-not-to-be="true">Hello</MyDiv>
</template>

<style>
.magic {
  height: 100px;
  transition: height 0.3s linear, padding-top 0.3s linear,
    padding-bottom 0.3s linear, border-top-width 0.3s linear,
    border-top-width 0.3s linear;
}
.reveal {
  overflow: hidden;
  height: 0;
}
</style>
