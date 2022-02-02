<template>
	<div class="exchange">
		<h2 class="exchange--title">Exchange</h2>
		<div class="exchange__row">
			<select class="exchange--select" v-model="currency_one" @change="calculateResults">
				<option
					v-for="currency in currencies"
					:key="currency"
					:value="currency"
				>
					{{ currency }}
				</option>
			</select>

			<input
				type="number"
				v-model="amount_one"
				@input="calculateResults"
				class="exchange--input"
			/>
		</div>
		<div class="exchange__row centered">
			<button @click="switchCurrency" class="exchange--btn">Switch</button>
		</div>
		<div class="exchange__row">
			<select class="exchange--select" v-model="currency_two" @change="calculateResults">
				<option
					v-for="currency in currencies"
					:key="currency"
					:value="currency"
				>
					{{ currency }}
				</option>
			</select>

			<input
				disabled
				type="number"
				v-model="amount_two"
				@input="calculateResults"
				class="exchange--input"
			/>
		</div>
	</div>
</template>

<script>
import {ref} from "vue";
import {BASIC_CURRENCIES} from "../../constants/currencies.js";
import {getRates} from "../../api/rates";

export default {
	setup() {
		const currency_one = ref(BASIC_CURRENCIES[0]);
		const amount_one = ref(1);

		const currency_two = ref(BASIC_CURRENCIES[1]);
		const amount_two = ref(0);

		const calculateResults = async () => {
			if (amount_one.value <= 0) {
				amount_two.value = 0;
				return;
			}

			try {
				const rates = await getRates(currency_one.value);
				const rate = rates[currency_two.value];
				amount_two.value = (amount_one.value * rate).toFixed(2);
			} catch (error) {
				console.error("NO response from API", error);
			}
		};

		const switchCurrency = () => {
			if (amount_one.value <= 0) {
				amount_one.value = 1;
			}

			const temp = currency_one.value;
			currency_one.value = currency_two.value;
			currency_two.value = temp;

			calculateResults();
		};

		calculateResults();

		return {
			calculateResults,
			switchCurrency,
			currencies: BASIC_CURRENCIES,
			currency_one,
			amount_one,
			currency_two,
			amount_two,
		};
	},
};
</script>

<style lang="scss">
.exchange {
	display: flex;
	flex-direction: column;
	align-items: center;

	&--title {
		margin-bottom: 22px;
	}

	&--btn {
		margin: 12px 0;
	}
}
</style>