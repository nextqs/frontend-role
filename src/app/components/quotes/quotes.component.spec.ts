import { ComponentFixture, TestBed } from "@angular/core/testing";

import { QuotesComponent } from "./quotes.component";

describe("QuotesComponent", () => {
	let component: QuotesComponent;
	let fixture: ComponentFixture<QuotesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [QuotesComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(QuotesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
	it("should render quotes", async () => {
		component.quotes.set([
			{
				character: "Test",
				quote: "Test",
				image: "Test",
			},
			{
				character: "Test",
				quote: "Test",
				image: "Test",
			},
			{
				character: "Test",
				quote: "Test",
				image: "Test",
			},
		]);
		fixture.detectChanges();
		const compiled = (await fixture.nativeElement) as HTMLElement;
		const search = compiled.querySelector(".quote");
		expect(search).toBeTruthy();
	});
	it("should render loading if quotes array is empty", async () => {
		const compiled = (await fixture.nativeElement) as HTMLElement;
		const loading = compiled.querySelector("h1")?.textContent;
		expect(loading).toContain("Carregando...");
	});

	it("should call setQuotes on init", () => {
		spyOn(component, "setQuotes");
		component.ngOnInit();
		expect(component.setQuotes).toHaveBeenCalled();
	});
});
