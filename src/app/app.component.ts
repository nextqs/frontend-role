import { Component, OnInit } from '@angular/core'; 
import { RouterOutlet } from '@angular/router'; 
import { CardComponent } from './components/card/card.component'; 
import { CommonModule } from '@angular/common'; 
import { Information } from '../Info'; 
import { ServiceServices } from './services/services.service'; 

@Component({
  selector: 'app-root', 
  standalone: true, 
  imports: [RouterOutlet, CardComponent, CommonModule], 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit {
  informations: Information[] = []; // Array to hold data of type Information

  // Constructor to inject the service
  constructor(private infoService: ServiceServices) {}

  // Called when the component is initialized
  ngOnInit(): void {
    this.fetchData(); // Fetch data from the service on initialization
  } 

  fetchData(): void {
    this.infoService.getData().subscribe((info: Information[]) => {
      this.informations = info; // Store the fetched data
    });
  }
  
  onRefresh(): void {
    this.fetchData(); // Call the API and refrech the data 
  }
}
