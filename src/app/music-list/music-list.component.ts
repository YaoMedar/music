import { Component, Input, OnInit } from '@angular/core';
import { Music } from '../model/music';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})

export class MusicListComponent implements OnInit {

  @Input()

  public musics!: Music[];

  ngOnInit(): void {
  }

}
