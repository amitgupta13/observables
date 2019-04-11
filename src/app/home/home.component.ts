import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
numbers: Subscription;
obs: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = interval(1000)
      .pipe(map((data:number)=> data*2));
    this.numbers = myNumbers.subscribe((number:number)=>{
      console.log(number)
    })

    const myObservable = Observable.create((observer: Observer<string>)=>{
      setTimeout(()=>{
        observer.next('first package')
      }, 2000)
      setTimeout(()=>{
        observer.next('Second package')
      }, 4000)
      setTimeout(()=>{
        observer.complete();
      }, 5000)
      setTimeout(()=>{
        observer.next('Third package')
      }, 6000)
    })

    this.obs = myObservable.subscribe(
      (data: string)=>console.log(data),
      (error: string)=>console.log(error),
      ()=>console.log('completed')
    )
  }

  ngOnDestroy(){
    this.numbers.unsubscribe();
    this.obs.unsubscribe();
  }
}
