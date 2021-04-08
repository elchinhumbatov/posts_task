import { Component, OnInit } from '@angular/core';

interface SMS {
  id?: number;
  isChecked?: boolean;
  text?: string;
}

@Component({
  selector: 'app-second-task',
  templateUrl: './second-task.component.html',
  styleUrls: ['./second-task.component.css'],
})
export class SecondTaskComponent implements OnInit {
  value = '';
  id = 0;
  messages = [];
  filterArr = [];
  randomObj = {};
  executed = false;
  constructor() {}

  ngOnInit(): void {}
  addSms(): any {
    if (this.value.trim()) {
      this.id++;
      this.messages.push({
        id: this.id,
        isChecked: false,
        text: this.value,
      });
      this.value = '';
      if (!this.executed) {
        this.showRandomSms();
        this.executed = true;
      }
    }
  }
  onChange(id): void {
    const bol = this.messages[id - 1].isChecked;
    this.messages[id - 1].isChecked = !bol;
  }
  onChangeBack(id): void {
    const bol = this.messages[id - 1].isChecked;
    this.messages[id - 1].isChecked = !bol;
  }
  showRandomSms(): void {
    setInterval(() => {
      this.filterArr = this.messages.filter(sms => {
        return sms.isChecked === false;
      });
      this.randomObj = this.filterArr[this.getRndSms(this.filterArr.length)];
    }, 4000);
  }
  getRndSms(max): number {
    return Math.floor(Math.random() * max);
  }
}
