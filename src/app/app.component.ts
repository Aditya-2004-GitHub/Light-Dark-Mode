import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dark-light';

  mode = 'lightMode'
  toogle(){
    if(this.mode == 'lightMode'){
      this.mode = 'darkMode'
    }
    else{
      this.mode = 'lightMode'
    }
  }
}
