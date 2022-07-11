<template>
  <div class="main-search-input">
    <div class="main-search-input-item location">
      <div id="autocomplete-container">
        <input
          id="autocomplete-input"
          type="text"
          placeholder="Location"
          v-model="keyword"
        />
      </div>
      <a href="#"><i class="fa fa-map-marker"></i></a>
      <!-- Nếu có danh sách location và có keyword thì hiện ra danh sách -->
      <ul v-if="locationList.length > 0 && keyword" class="list-location">
        <li v-for="(location, index) in locationList" :key="index">
          <span class="im im-icon-Location-2"></span>
          <span class="location-item-title">{{ location.name }}</span>
        </li>
      </ul>
    </div>

    <button
      class="button"
      onclick="window.location.href='listings-half-screen-map-list.html'"
    >
      Search
    </button>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const keyword = ref("");
    const store = useStore();

    watch(keyword, (newKeyword) => {
      // theo dõi biến keyword nếu có giá trị mới thì truyền vào hàm
      store.dispatch("location/getLocationListAction", newKeyword);
    });

    const locationList = computed(() => store.state.location.locationList);

    return {
      locationList,
      keyword,
    };
  },
};
</script>

<style lang='scss'>
.main-search-input-item.location {
  position: relative;
  .list-location {
    position: absolute;
    top: 150%;
    list-style: none;
    background-color: white;
    color: #222;
    width: 100%;
    border-radius: 20px;
    padding: 7px;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    li {
      padding: 10px;
      font-size: 20px;
      &:hover {
        cursor: pointer;
        background-color: #f7f7f7;
      }
      .location-item-title {
        margin-left: 10px;
      }
    }
  }
}
</style>