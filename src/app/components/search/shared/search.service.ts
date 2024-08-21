import { Injectable } from "@angular/core";
import { type Observable, Subject } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class SearchService {
	private subject = new Subject<HTMLInputElement>();

	sendRefresh(input: HTMLInputElement) {
		this.subject.next(input);
	}

	getRefresh(): Observable<HTMLInputElement> {
		return this.subject.asObservable();
	}
}
