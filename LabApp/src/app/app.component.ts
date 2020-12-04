import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpService} from './http.service';
import {User} from './user';
     
@Component({
    selector: 'my-app',
    template: `
                 <input type="number" name="num1" [(ngModel)]="num1">
                 <br>
                 <br>
                 <input type="number" name="num2" [(ngModel)]="num2">
                 <br>
                 <br>
                 <button (click)="multiply()">Умножить</button>
                 <br>
                 <h1>Результат = {{num3}}</h1>
                 <br>
                 <br>
                <div class="form-group">
                    <label>Имя</label>
                    <input class="form-control" name="username" [(ngModel)]="user.name" />
                </div>
                <div class="form-group">
                    <label>Возраст</label>
                    <input class="form-control" type="number" name="age" [(ngModel)]="user.age" />
                </div>
                <div class="form-group">
                    <button class="btn btn-default" (click)="submit(user)">Отправить</button>
                </div>
                <div *ngIf="done">
                    <div>Получено от сервера:</div>
                    <div>Имя: {{receivedUser.name}}</div>
                    <div>Возраст: {{receivedUser.age}}</div>
                </div>
              `,
              providers: [HttpService]
})
export class AppComponent { 
    public num1:number;
    public num2:number;
    public num3:number;

    multiply(){
      this.num3=this.num1*this.num2;
    }

    user: User=new User(); // данные вводимого пользователя
      
    receivedUser: User; // полученный пользователь
    done: boolean = false;
    constructor(private httpService: HttpService){}
    submit(user: User){
        this.httpService.postData(user)
                .subscribe(
                    (data: User) => {this.receivedUser=data; this.done=true;},
                    error => console.log(error)
                );
    }
}
