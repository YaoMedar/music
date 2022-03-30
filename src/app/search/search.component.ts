import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItuneService } from '../service/itune-service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {

  constructor(public ituneservice: ItuneService) { }

  ngOnInit(): void {
  }

  onsubmit(form: NgForm){
    this.ituneservice.searchMusic(form.value.search)
   
  }

}
