import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { QuotesComponent } from "./quotes/quotes.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, QuotesComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "frontend-role";
}
