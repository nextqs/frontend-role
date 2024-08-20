// biome-ignore lint/style/useImportType: <explanation>
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import type { Quote } from "./quote.model";

@Injectable({ providedIn: "root" })
export class QuoteService {
	constructor(private http: HttpClient) {}
	async getQuotes() {
		const res = await fetch(
			"https://thesimpsonsquoteapi.glitch.me/quotes?count=10",
		);
		if (!res.ok) {
			throw new Error(`Response status: ${res.status}`);
		}

		const QUOTES: Quote[] = await res.json();
		return QUOTES;
	}
}
