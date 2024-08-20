import { Component, type OnInit, signal } from "@angular/core";
import type { Quote } from "./shared/quote.model";
// biome-ignore lint/style/useImportType: <explanation>
import { QuoteService } from "./shared/quote.service";

@Component({
	selector: "app-quotes",
	standalone: true,
	imports: [],
	templateUrl: "./quotes.component.html",
	styleUrl: "./quotes.component.scss",
})
export class QuotesComponent implements OnInit {
	quotes = signal<Quote[]>([]);
	constructor(private quoteService: QuoteService) {}

	ngOnInit() {
		this.quoteService.getQuotes().then((quotes) => this.quotes.set(quotes));
	}
}
