import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  title = 'Це інтерполяція';
  firstName = 'Інна';
  lastName = 'Мартинюк';
  isEnable: boolean = false;

  isActive: boolean = false;
  isDisable: boolean = true;

  isClickedState: boolean = false;

  inputText: string = "";

  @Input() childMessage: string = "";
  @Output() messageFromChild = new EventEmitter<string>();

  getFullName() {
    return `Мене  звуть ${this.firstName} ${this.lastName}`;
  }

  toggleState() {
    this.isClickedState = true;
  };

  sendMessageToParents() {
    this.messageFromChild.emit('Я твій син');
  }
}
