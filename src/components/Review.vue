<template>
	<div id="review">
		<div class="review">
			<div class="head">
				<div class="image">
					<img src="../assets/bottle.png" />
				</div>
				<div class="intro">
					<div class="name">{{ whisky.name }}</div>
					<div class="style">{{ whisky.style }}</div>
					<div class="location">{{ whisky.distillery }}, {{ whisky.country }}</div>
				</div>
			</div>
			<div class="body">
				<div class="details" v-if="whisky.details">
					<div class="row">
						<div class="detail score">
							<div class="title">Score</div>
							<div class="value"><span class="number">{{ whisky.rating }}</span><img class="star" src="../assets/rating-star.svg" /></div>
						</div>
					</div>
					<div class="row">
						<div class="detail notes">
							<div class="title">Notes</div>
							<div class="value">Nose: <span class="note">{{ whisky.notes.nose }}</span></div>
							<div class="value">Palette: <span class="note">{{ whisky.notes.palette }}</span></div>
							<div class="value">Finish: <span class="note">{{ whisky.notes.finish }}</span></div>
						</div>
					</div>
					<div class="row">
						<div class="detail price">
							<div class="title">Price</div>
							<div class="value">{{ whisky.details.price }}</div>
						</div>
						<div class="detail age">
							<div class="title">Age</div>
							<div class="value">{{ whisky.details.age !== 'NAS' ? whisky.details.age + ' Year' : whisky.details.age }}</div>
						</div>
						<div class="detail abv">
							<div class="title">ABV</div>
							<div class="value">{{ whisky.details.abv }}</div>
						</div>
						<div class="detail cask">
							<div class="title">Cask Type</div>
							<div class="value">{{ whisky.details.cask }}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Review',
		data() {
			return {
				id: this.$route.params.id,
				whisky: {}
			}
		},
		async created() {
			let response = await this.$http.get('/whiskies.json');
			this.whisky = response.data.whiskies.reduce((obj, w) => {
				return w.id === this.id && (obj = w), obj;
			}, {});

			/* eslint-disable no-console */
			console.log(this.whisky)
			/* eslint-enable no-console */
		}
	}
</script>

<style scoped>
	.review {
		position: relative;
		max-width: 1300px;
		min-width: 500px;
		margin: 0 auto;
		padding: 100px 0;
	}
	.head .image {
		display: inline-block;
		width: 250px;
		height: 250px;
		vertical-align: top;
		margin-right: 50px;
	}
	.head .image img {
		width: 100%;
		height: 100%;
	}
	.head .intro {
		display: inline-block;
		width: 1000px;
		height: 250px;
		text-align: left;
		vertical-align: top;
	}
	.head .intro .name {
		font-family: "Arial Black";
		font-size: 32px;
		color: #fdfdfd;
		line-height: 42px;
		text-transform: uppercase;
		margin-bottom: 25px;
	}
	.head .intro .style,
	.head .intro .location {
		font-family: "Arial Black";
		font-size: 12px;
		color: #cd2a1e;
		line-height: 15px;
		text-transform: uppercase;
		margin-bottom: 10px;
	}
	.body {
		width: 66%;
		background-color: #fdfdfd;
		border-top: 4px solid #cd2a1e;
	}
	.body .details {
		padding: 30px;
	}
	.body .details .row {
		border-bottom: 1px solid #d8d8d8;
		padding: 20px 0;
	}
	.body .details .row:last-child {
		border: 0;
	}
	.body .detail {
		width: 25%;
		display: inline-block;
		vertical-align: top;
	}
	.body .detail .title {
		font-family: "Arial Black";
		font-size: 12px;
		color: #cd2a1e;
		text-transform: uppercase;
		margin-bottom: 10px;
	}
	.body .detail .value {
		font-family: "Arial Black";
		font-size: 14px;
		line-height: 20px;
		vertical-align: middle;
	}
	.body .detail.notes {
		width: 50%;
	}
	.body .detail.notes .value {
		text-align: left;
	}
	.body .detail.notes .value .note {
		font-family: Arial;
	}
	.body .detail.score .title {
		color: #100c08;
	}
	.body .detail.score .value .number {
		font-size: 32px;
		line-height: 0;
		vertical-align: middle;
	}
	.body .detail.score .value .star {
		width: 24px;
		height: 24px;
		vertical-align: middle;
		padding-left: 5px;
	}
</style>