import { Component } from '@angular/core';
import { SocketService } from '../../app/socket-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-a2page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './a2page.component.html',
  styleUrl: './a2page.component.css'
})
export class A2pageComponent {
  userCode: string = '';

  constructor(private socketService: SocketService) {}

  validateCode(): void {
    this.socketService.validateCode(this.userCode);

    this.socketService.onCodeValidationResult().subscribe((response: any) => {
      if (response.valid) {
        alert('Code is valid! Video controls are now enabled');
      } else {
        alert('Invalid code. Please try again');
      }
    });
  }

}
