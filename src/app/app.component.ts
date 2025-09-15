import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './components/test/test.component';

@Component({
  selector: 'app-root',
  imports: [ TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'interview-master';
  messageFromParents = "Я твій батько";
  messageFromChild = "";
  getMessageFromChild(message: string) {
    this.messageFromChild = message;
  }
}
