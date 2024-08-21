import { TestBed } from "@angular/core/testing";

import type { Quote } from "./quote.model";
import { QuoteService } from "./quote.service";

describe("QuoteService", () => {
	let service: QuoteService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(QuoteService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});

	it("should load the API data with the desired number of quotes being 10 the default", async () => {
		const count = "";
		if (count) {
			await service.getQuotes(count).then((quotes) => {
				expect(quotes.length === Number(count)).toBeTrue();
			});
		} else {
			await service.getQuotes().then((quotes) => {
				expect(quotes.length === 10).toBeTrue();
			});
		}
	});
	it("should load all quote properties", async () => {
		const checked: Quote[] = [];
		await service.getQuotes().then((quotes) => {
			for (let i = 0; i < quotes.length; i++) {
				if (quotes[i].character && quotes[i].image && quotes[i].quote) {
					checked.push(quotes[i]);
				}
			}
			expect(checked.length === quotes.length).toBeTrue();
		});
	});
});
