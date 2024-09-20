import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { SearchBarComponent } from './searchBar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoursesComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Lone Wolf';
}
