<script>
import CreateAndEdit from "../../share/components/create-and-edit.component.vue";
import PvFloatLabel from "../../main.js";
import PvInputText from "../../main.js";

export default {
  name: "category-create-and-edit-dialog",
  components: {PvInputText, PvFloatLabel, CreateAndEdit},
  props: {
    item: null,
    visible: Boolean
  },
  data() {
    return {
      submitted: false
    }
  },
  methods: {
    onCancelRequested() {
      this.$emit('cancel-requested');
    },
    onSaveRequested() {
      this.submitted = true;
      this.$emit('save-requested', this.item);
    }

  }

}
</script>

<template>
  <create-and-edit
    :entity="item"
    :visible="visible"
    :entity-name="Category"
    @cancel-requested="onCancelRequested"
    @save-requested="onSaveRequested">

    <template #content>
      <div class="p-fluid">
        <div class="field mt-5">
          <pv-float-label>
            <label for="name">Name</label>
            <pv-input-text id="name" v-model="item.name"
                           :class="{'p-invalid': submitted && !item.name}" />
          </pv-float-label>
        </div>
      </div>
    </template>
  </create-and-edit>
</template>

<style scoped>

</style>