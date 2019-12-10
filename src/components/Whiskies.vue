<template>
	<div id="whiskies">
		<div class="whiskies">
			<div class="subnav">
				<span>Sort by:</span>
				<select v-model="sortType" @change="sortWhiskies">
					<option value="name">Name</option>
					<option value="style">Style</option>
					<option value="rating" selected="selected">Rating</option>
				</select>
				<span>Direction:</span>
				<select v-model="sortOrder" @change="sortWhiskies">
					<option value="asc">Ascending</option>
					<option value="desc">Descending</option>
				</select>
			</div>
			<router-link class="whisky" v-for="whisky in paginatedWhiskies" :key="whisky.id" :to="{ name: 'Review', params: { id: whisky.id } }">
				<div class="wrapper">
					<div class="inner">
						<div class="cell name">{{ whisky.name }}</div>
						<div class="cell location">{{ whisky.style }}, {{ whisky.country }}</div>
						<div class="cell rating"><span class="number">{{ whisky.rating }}</span><img src="../assets/rating-star.svg" /></div>
					</div>
				</div>
			</router-link>
			<div class="pages">
				<button @click="prevPage" :disabled="pageNumber == 0">Previous</button>
				<button @click="nextPage" :disabled="pageNumber >= totalPages">Next</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Whiskies',
		props: ['whiskies'],
		data() {
			return {
				sortType: 'rating',
				sortOrder: 'desc',
				pageNumber: 0,
				pageLimit: 5
			}
		},
		sortMethods: {
			'name': {
				'asc': (a, b) => a.name.localeCompare(b.name),
				'desc': (a, b) => b.name.localeCompare(a.name)
			},
			'style': {
				'asc': (a, b) => a.style.localeCompare(b.style),
				'desc': (a, b) => b.style.localeCompare(a.style)
			},
			'rating': {
				'asc': (a, b) => a.rating.localeCompare(b.rating),
				'desc': (a, b) => b.rating.localeCompare(a.rating)
			}
		},
		methods: {
			sortWhiskies() {
				const sortMethod = this.$options.sortMethods[this.sortType][this.sortOrder];
				this.whiskies.sort(sortMethod);
			},
			nextPage() {
				this.pageNumber++;
			},
			prevPage() {
				this.pageNumber--;
			}
		},
		computed: {
			paginatedWhiskies() {
				const start = this.pageNumber * this.pageLimit;
				const end = start + this.pageLimit;
				return this.whiskies.slice(start, end);
			},
			totalPages() {
				return Math.floor(this.whiskies.length / this.pageLimit);
			}
		},
		created() {
			this.sortWhiskies();
		}
	}
</script>

<style scoped>
	.subnav {
		text-align: right;
		font-size: 14px;
		color: #fdfdfd;
		line-height: 16px;
		margin-bottom: 10px;
	}
	.subnav select {
		font-family: 'Arial Black';
		color: #fdfdfd;
		background-color: #262d38;
		border: 0;
		border-bottom: 2px solid #fdfdfd;
		cursor: pointer;
		margin: 0 10px;
		-webkit-transition: all 0.25s ease-in-out;
		-moz-transition: all 0.25s ease-in-out;
		transition: all 0.25s ease-in-out;
	}
	.subnav select:active,
	.subnav select:focus,
	.subnav select:hover {
		outline: 0;
		border-bottom-color: #cd2a1e;
	}
	.whiskies {
		position: relative;
		max-width: 1300px;
		min-width: 500px;
		margin: 0 auto;
		padding: 100px 0;
	}
	.whisky {
		display: block;
		width: 100%;
		height: 80px;
		color: #100c08;
		text-decoration: none;
		text-align: left;
		background-color: #fdfdfd;
		margin-bottom: 15px;
		cursor: pointer;
		-webkit-transition: all 0.25s ease-in-out;
		-moz-transition: all 0.25s ease-in-out;
		transition: all 0.25s ease-in-out;
	}
	.whisky:hover {
		color: #cd2a1e;
	}
	.whisky .wrapper {
		height: 100%;
		padding: 0 15px;
	}
	.whisky .inner {
		position: relative;
		display: table;
		width: 100%;
		height: 100%;
	}
	.whisky .cell {
		display: table-cell;
	}
	.whisky .name {
		width: 30%;
		font-family: 'Arial Black';
		font-size: 16px;
		line-height: 20px;
		text-transform: uppercase;
		vertical-align: middle;
	}
	
	.whisky .location {
		width: 30%;
		font-size: 14px;
		color: #cd2a1e;
		line-height: 16px;
		vertical-align: middle;
	}
	.whisky .rating {
		width: 15%;
		font-family: 'Arial Black';
		font-size: 32px;
		text-align: right;
		vertical-align: middle;
	}
	.whisky .rating .number {
		vertical-align: middle;
	}
	.whisky .rating img {
		width: 20px;
		height: 20px;
		vertical-align: middle;
		padding-left: 5px;
	}
</style>