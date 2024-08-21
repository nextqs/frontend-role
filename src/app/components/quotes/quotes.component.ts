import { Component, type OnInit, signal } from "@angular/core";
import { SearchComponent } from "../search/search.component";
// biome-ignore lint/style/useImportType: <explanation>
import { SearchService } from "../search/shared/search.service";
import type { Quote } from "./shared/quote.model";
// biome-ignore lint/style/useImportType: <explanation>
import { QuoteService } from "./shared/quote.service";

@Component({
	selector: "app-quotes",
	standalone: true,
	imports: [SearchComponent],
	templateUrl: "./quotes.component.html",
	styleUrl: "./quotes.component.scss",
})
export class QuotesComponent implements OnInit {
	quotes = signal<Quote[]>([]);
	constructor(
		private quoteService: QuoteService,
		private searchService: SearchService,
	) {
		//Recarregar citações baseado no valor do input caso o botão do componente Search tenha sido apertado
		this.searchService.getRefresh().subscribe((input) => {
			this.setQuotes(input);
		});
	}
	//Definir as citações na variável local a partir do serviço
	setQuotes(input?: HTMLInputElement) {
		this.quoteService
			.getQuotes(input)
			.then((quotes) => this.quotes.set(quotes));
	}

	//Gerar 10 citações ao carregar a página
	ngOnInit() {
		this.setQuotes();
	}
}
