<script>
  import gameItem from '../components/LibraryItem.vue';
  import backgroundImg from '../components/BackgroundImg.vue';
  // Sorry for the mess! Running low on time ;_;
  export default {
    components: {
      gameItem,
      backgroundImg
    },
    created() {
      this.$store.dispatch('getGames');
    },
    computed: {
      searchableData() {
        if (this.$store.state.gamesData) {
          return this.$store.state.gamesData.map((games) => ({
            ...games,
            searchable: `${games.title.toLowerCase()} ${games.publisher.toLowerCase()} ${games.developer.toLowerCase()} ${games.genre.toLowerCase()}`
          }));
        }
        return null;
      },
      games() {
        if (this.$store.state.gamesData) {
          return this.$store.state.gamesData.slice(0, this.displayedItems);
        }
        return null;
      },
      searchedGame() {
        return this.searchfilter.slice(0, this.displayedFilter);
      }
    },
    watch: {
      textvalue() {
        this.searchfilter = this.searchableData.filter((x) =>
          x.searchable.includes(this.textvalue)
        );
        this.displayedFilter = 12;
      }
    },
    data() {
      return {
        displayedItems: 12,
        displayedFilter: 12,
        textvalue: '',
        searchfilter: null
      };
    },
    methods: {
      testing() {
        console.log(this.searchfilter);
      },
      load() {
        this.displayedItems += 8;
      },
      loadFilter() {
        this.displayedFilter += 8;
      }
    }
  };
</script>

<template>
  <backgroundImg :route="'ARCANE ' + $route.params.currentPage" />
  <div class="search-game-container">
    <div class="search-group">
      <input
        type="search"
        class="search"
        v-model="textvalue"
        placeholder="Search game..."
      />
      <div @click="testing()" class="search-icon bg-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </svg>
      </div>
    </div>
  </div>
  <div v-if="textvalue !== ''">
    <div class="game-items-container">
      <gameItem v-for="game in searchedGame" :key="game.id" :game="game" />
    </div>
  </div>
  <div v-else>
    <div v-if="games !== null" class="game-items-container">
      <gameItem v-for="game in games" :key="game.id" :game="game" />
    </div>
    <span v-else>Loading items...</span>
  </div>
  <div v-if="games !== null" class="btn-group">
    <div v-if="textvalue !== ''">
      <button
        class="show-btn"
        v-if="searchfilter.length >= displayedFilter"
        @click="loadFilter()"
      >
        <span>Show more</span>
      </button>
      <span v-else>There is no more search results.</span>
    </div>
    <div v-else>
      <button
        class="show-btn"
        v-if="$store.state.gamesData.length >= displayedItems"
        @click="load()"
      >
        <span>Show more</span>
      </button>
      <span v-else>There is no more items.</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .search-game-container {
    padding: 20px;

    .search-group {
      margin: auto;
      display: flex;
      justify-content: center;
      .search {
        display: block;
        height: 40px;
        width: 300px;
        border-radius: 8px 0 0 8px;
        text-align: center;
        padding-bottom: 2px;

        outline: none;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
          rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
      }

      .search-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        border-radius: 0 8px 8px 0;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
          rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

        svg {
          color: white;
        }
      }
    }
  }
  .game-items-container {
    margin: auto;
    padding: 20px 0;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, 300px);
    border-bottom: 2.5px solid #ededed;
    border-top: 2.5px solid #ededed;
    grid-gap: 32px;

    .game-item-container {
      display: block;
    }
  }

  .btn-group {
    width: 100%;
    padding: 15px 30px 30px 30px;
    div {
      margin: auto;
      .show-btn {
        font-family: 'Roboto', sans-serif;
        width: 100px;
        padding: 5px;
        border: none;
        border-radius: 4px;
        background-color: #212529;
        color: white;
        margin: auto;

        span {
          display: block;
        }
      }
    }
  }
</style>
