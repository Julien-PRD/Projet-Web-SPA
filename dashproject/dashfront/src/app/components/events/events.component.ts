import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { AppServiceService } from 'src/app/app-service.service';

var lieu :String;
declare const myTest: any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  events = {
    evenement1: [" ", " "," ", " ", " "],
    evenement2: [" ", " "," ", " ", " "],
    evenement3: [" ", " "," ", " ", " "]
  };
  totalAngularPackages: any;
  constructor(private http: HttpClient) {}

  onClick(events1: any, events2: any, events3: any, events4: any, events5: any, events6: any, events7: any, events8: any, events9: any, events10: any, events11: any, events12: any, events13: any, events14: any, events15: any){
    myTest(events1,events2,events3,events4,events5,events6,events7,events8,events9,events10,events11,events12,events13,events14,events15);
  }

  ngOnInit() {
    this.http.get<any>('https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-cibul&q=&facet=tags&facet=placename&facet=date_start&facet=date_end&facet=pricing_info&facet=updated_at&facet=city_district&refine.placename=Le+Mans&refine.date_start=2021').subscribe(data => {
      this.totalAngularPackages = data.total;

      var tab=new Array();

      console.log(data);
    
      this.events.evenement1[0] = data.records[0].fields.title;
      this.events.evenement1[1] = data.records[0].fields.date_start;
      this.events.evenement1[2] = data.records[0].fields.address;
      this.events.evenement1[3] = data.records[0].fields.image;
      this.events.evenement1[4] = data.records[0].fields.description;

      this.events.evenement2[0] = data.records[1].fields.title;
      this.events.evenement2[1] = data.records[1].fields.date_start;
      this.events.evenement2[2] = data.records[1].fields.address;
      this.events.evenement2[3] = data.records[1].fields.image;
      this.events.evenement2[4] = data.records[1].fields.description;

      this.events.evenement3[0] = data.records[2].fields.title;
      this.events.evenement3[1] = data.records[2].fields .date_start;
      this.events.evenement3[2] = data.records[2].fields.address;
      this.events.evenement3[3] = data.records[2].fields.image;
      this.events.evenement3[4] = data.records[2].fields.description;



    })
  }

}
