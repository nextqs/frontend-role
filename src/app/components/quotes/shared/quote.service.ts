import { Injectable } from "@angular/core";
import type { Quote } from "./quote.model";

@Injectable({ providedIn: "root" })
export class QuoteService {
	async getQuotes(input?: string) {
		let count = 10;
		//Verificar se o input existe
		if (input) {
			const answer = Number(input);
			//Caso exista, verificar se o seu valor é um número diferente de 0
			if (!Number.isNaN(answer) && answer !== 0) {
				//Atribuir o input do usuário ao contador
				count = answer;
			}
		}

		//Fazer a requisição baseada no valor do contador
		const res = await fetch(
			`https://thesimpsonsquoteapi.glitch.me/quotes?count=${count}`,
		);
		//Caso ocorra algum erro, devolver o código de status
		if (!res.ok) {
			throw new Error(`Response status: ${res.status}`);
		}

		//Converter resposta em json e retornar
		const QUOTES: Quote[] = await res.json();
		return QUOTES;
	}
}
