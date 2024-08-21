import { Component } from "@angular/core";
// biome-ignore lint/style/useImportType: <explanation>
import { SearchService } from "./shared/search.service";

@Component({
	selector: "app-search",
	standalone: true,
	imports: [],
	templateUrl: "./search.component.html",
	styleUrl: "./search.component.scss",
})
export class SearchComponent {
	constructor(public searchService: SearchService) {}
}
