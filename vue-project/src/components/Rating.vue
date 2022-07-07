<script>
export default {
    props: {
        'name': String,
        'value': null,
        'id': String,
        'disabled': Boolean,
        'required': Boolean
    },

    data() {
        return {
            temp_value: null,
            ratings: [1, 2, 3, 4, 5]
        }
    },

    methods: {

        star_over: function (index) {
            var self = this;

            if (!this.disabled) {
                this.temp_value = this.value;
                return this.value = index;
            }

        },

        star_out: function () {
            var self = this;

            if (!this.disabled) {
                return this.value = this.temp_value;
            }
        },

        set: function (value) {
            var self = this;

            if (!this.disabled) {
                this.temp_value = value;
                return this.value = value;
            }
        },
    }
}

</script>

<template>

    <div class="Rating">
        <label class="Rating__star" v-for="rating in ratings" :class="{
            'is-selected'
                : ((value >= rating) && value != null), 'is-disabled': disabled
        }" v-on:click="set(rating)" v-on:mouseover="star_over(rating)" v-on:mouseout="star_out">
            <input class="Rating Rating__checkbox" type="radio" :value="rating" :name="name" v-model="value"
                :disabled="disabled">★</label>
    </div>

</template>

<style lang="scss" scoped>

  %visually-hidden {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
  }

  .Rating {

    &__star {
        display: inline-block;
        padding: 3px;
        vertical-align: middle;
        line-height: 1;
        font-size: 1.5em;
        color: #ABABAB;
        transition: color .2s ease-out;

        &:hover {
            cursor: pointer;
        }

        &.is-selected {
            color: #FFD700;
        }

        &.is-disabled:hover {
            cursor: default;
        }
    }

    &__checkbox {
        @extend %visually-hidden;
    }
  }
</style>