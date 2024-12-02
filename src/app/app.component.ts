import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { A2pageComponent } from "../components/a2page/a2page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, A2pageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'a2page';
}
