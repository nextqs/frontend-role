import { Component, Input } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { Information } from '../../../Info'; 

@Component({
  selector: 'app-card', 
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './card.component.html', 
  styleUrls: ['./card.component.css'] 
})
export class CardComponent {
  @Input() information: Information | undefined; // Input property to receive data from parent component
}
