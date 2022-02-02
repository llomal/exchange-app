<template>
	<div class="rates">
		<div class="rates__header">
			<h2>Rates</h2>
			<select class="rates--select" v-model="basic_currency" @change="fetchRates">
				<option
					v-for="currency in currencies"
					:key="currency"
					:value="currency"
				>
					{{ currency }}
				</option>
			</select>
		</div>
		<div class="rates__ul">
			<div v-for="rate in rates" :key="rate.currency" class="rates__li">
				<span class="rates__li--rate">
					<strong>1</strong>
					{{ basic_currency }}
				</span>

				<span>=</span>

				<span class="rates__li--rate">
					<strong>
						{{ rate.rate }}
					</strong>
					{{ rate.currency }}
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import {ref, toRefs, reactive} from "vue";
import {BASIC_CURRENCIES, BASIC_CURRENCY} from "../../constants/currencies";
import {getRates} from "../../api/rates";

export default {
	setup() {
		const basic_currency = ref(BASIC_CURRENCY);

		const state = reactive({
			rates: []
		})

		const fetchRates = async () => {
			try {
				const rates = await getRates(basic_currency.value);
				state.rates = BASIC_CURRENCIES.map((currency) => ({
						rate: Number(rates[currency]).toFixed(4),
						currency,
					})
				);
			} catch (error) {
				console.error("NO response from API", error);
			}
		};

		fetchRates();

		return {
			...toRefs(state),
			basic_currency,
			currencies: BASIC_CURRENCIES,
			fetchRates,
		};
	},
}
</script>

<style lang="scss" scoped>
.rates {
	display: flex;
	flex-direction: column;
	align-items: center;

	&--select {
		margin-left: 20px;
		height: 32px;
	}

	&__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 30px;
	}

	&__ul {
		min-width: 320px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	&__li {
		border-bottom: 1px solid #eee;
		height: 46px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 290px;
		width: 100%;

		span {
			text-align: center;
		}

		&--rate {
			width: 140px;
			text-align: left;
		}
	}
}
</style>