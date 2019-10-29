<template>
	<div id="whiskies">
		<div class="whisky" v-for="scotch in whiskies.scotch" :key="scotch.name">
			<div class="name">{{ scotch.name }}</div>
			<div class="location">{{ scotch.style }} // {{ scotch.country }}</div>
			<div class="rating">Rating: {{ scotch.rating }} / 100</div>
			<div class="notes">
				<div class="title">Tasting Notes</div>
				<div class="note">N: {{ scotch.tastingNotes.nose }}</div>
				<div class="note">P: {{ scotch.tastingNotes.palette }}</div>
				<div class="note">F: {{ scotch.tastingNotes.finish }}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Whiskies',
		data() {
			return {
				whiskies: {}
			}
		},
		async mounted() {
			let response = await this.$http.get('/whiskies.json');
			this.whiskies = response.data.whiskies;
		}
	}
</script>

<style scoped>
	#whiskies {
		position: relative;
		max-width: 1400px;
		margin: 0 auto;
		padding: 100px 0;
	} 

	.whisky {
		display: inline-block;
		width: 380px;
		background-color: #ffffff;
		margin: 0 10px;
		padding: 20px;
	}

	.name {
		font-family: "Arial Black";
		font-size: 20px;
		text-transform: uppercase;
	}

	.location {
		font-family: Arial;
		font-size: 14px;
		text-transform: uppercase;
		margin-bottom: 20px;	
	}

	.rating {
		margin-bottom: 20px;
	}

	.notes {
		text-align: center;
	}

	.notes .title {
		margin-bottom: 10px;
	}

	.notes .note {
		text-align: left;
	}
</style>
