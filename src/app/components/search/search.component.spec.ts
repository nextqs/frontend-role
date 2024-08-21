import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchComponent } from "./search.component";

describe("SearchComponent", () => {
	let component: SearchComponent;
	let fixture: ComponentFixture<SearchComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SearchComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(SearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should render .search div and it's content", () => {
		const compiled = fixture.nativeElement as HTMLElement;
		const search = compiled.querySelector(".search");
		expect(search?.children).toBeTruthy();
	});

	it("should call sendRefresh() when button clicked", () => {
		spyOn(component.searchService, "sendRefresh");
		const compiled = fixture.nativeElement as HTMLElement;
		const button = compiled.querySelector("button");
		button?.click();
		expect(component.searchService.sendRefresh).toHaveBeenCalled();
	});
});
