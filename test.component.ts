import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
  hii {{name}}
  </h2>  
  <h2>{{2+2}}</h2>    
  <h2>{{name.length}}</h2>
  <h2> {{greetuser()}}</h2> 
  <h2 [style.color]="'red'" >Style binding</h2>
  <h2 [style.color]="pro ? 'red':'green'">style binding</h2>
  <h2 [ngStyle]="titlestyel" >ngStyle</h2>

  <h2 [style.color]="highlight">style binding</h2>

  <h2>{{window.l}</h2> 
  <h2>{{nme}}</h2>



  <input  [id]="Myid" type=" text" value="vishwas">
  
  <input [disabled]=pro id="{{Myid}}" type=" text" value="vishwas"><br><br>


  <h2>Event finding </h2>
    <button (click)="onclick($event)">clickbutton</button>

    {{eventbinding}}

    <button (click)="greeting='welcome  vishwas'">greeting</button>
    {{greeting}}
    <button (click)="doclick()">Double</button>
    <br>
    <br>

    <h2>template refrence variable</h2>

    <input #myinput type="text">
    <button (click)="logmsg(myinput.value)">Log</button>


    <h2>
      two way binding
    </h2>

    <input [(ngModel)]="name" type="text">
    {{name}}


    <h2>Structural directive</h2>

    <h5>ngif</h5>
    <h5>ngSwitch</h5>
    <h5>ngFor</h5>

    <h3 *ngIf="pro; else elk">when i selct true</h3>

    <ng-template #elk>

  

    <h3>name is hidden when value is false</h3>

    </ng-template>


<h2>another way</h2>


<div *ngIf="pro; then thenBlock; else elseBlock"></div>


<ng-template #thenBlock>
  <h2>hey hii</h2>

</ng-template>


<ng-template #elseBlock>
  <h3>hey bye</h3>
</ng-template>

<h5>ngSwitch</h5>

<div [ngSwitch]="color">
  <div *ngSwitchCase="'red'"> you picked    redcolor</div>
   <div *ngSwitchCase="'blue'" >ypu pick blue color</div>
<div  *ngSwitchCase="'orange'">ypu pick orange color</div>
  <div *ngSwitchCase="'green'">ypu pick green color</div>
  <h2>Employee Detail</h2>
  <ul *ngFor="" >

  <li></li>
  </ul>
  
</div>

<h5>ngFor</h5>

<div *ngFor="let col of arcolor;index as i">

<h2>{{i+1}}  {{col}}</h2>

</div>

<h1>{{parentData}}</h1>

<button (click)="firemethod()" >send event</button>

<h2>{{name}}


</h2>
<h2>{{name| lowercase}}
</h2>
<h2>{{name | uppercase}}</h2>
<h2>{{name | titlecase}}</h2>

<h2>{{name | slice:3}}</h2>
<h2>{{name | slice:0:3}}</h2> 
<h2>{{titlestyel | json }}</h2>

<h2>{{0.5 | percent}}</h2>
<h2>{{0.5 | currency}}</h2>
<h2>{{0.35 | currency : 'GBP'}}</h2>



<h2>{{date | date:'short'}}</h2>
<h2>{{date | date:'shortDate'}}</h2>
<h2>{{date | date:'shortTime'}}</h2>

  `,

  // <h2> 
  // hii
  // </h2>,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

public date=new Date();
  public arcolor=["red","blue","green","yello"]
  public name="Rupesh"
  public Myid="idtest"
  public greeting="";
  public color="red"
  
  public pro=true 
  public highlight="orange"
  public nme=window.location.href;
  public titlestyel={
    color:"blue",
    fontStyle:"italic"

  }

  public message="mmmm"
  // public nama="kjdbb"
  public eventbinding="";
  @Input() public parentData="";

  @Output() public childevent=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  greetuser(){
    return "hello "+this.name;

  }
  onclick(event:any)
  {
    
    console.log(event);
    this.eventbinding=event.type

  }
  doclick()
  {
    this.eventbinding="";
    this.greeting="";

  }
  logmsg(data:any)
  {
    console.log(data)
  }

  firemethod(){
    this.childevent.emit("hey codeevaluton")

  }
}
