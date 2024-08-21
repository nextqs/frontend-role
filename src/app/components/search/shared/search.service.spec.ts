import { TestBed } from "@angular/core/testing";

import { isObservable } from "rxjs";
import { SearchService } from "./search.service";

describe("SearchService", () => {
	let service: SearchService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(SearchService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});

	it("should send the subject with the input element", () => {
		const input = document.createElement("input");
		input.value = "test";
		service.getRefresh().subscribe((data) => {
			expect(data === input).toBeTrue();
		});
		service.sendRefresh(input);
	});

	it("return the subject as observable", () => {
		expect(isObservable(service.getRefresh())).toBeTruthy();
	});
});
