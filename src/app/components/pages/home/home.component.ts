import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

import { Moment } from '../../../interfaces/Moment';
import { MomentService } from '../../../services/moment.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  allMoments: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrl = environment.baseApiUrl;

  constructor(private momentService: MomentService){}

  ngOnInit(): void{
    this.momentService.getMoments().subscribe((items) => {
      const data = items.data;

      data.map((item) => {
        item.createdAt = new Date(item.createdAt!).toLocaleDateString('pt-BR');
      });

      this.allMoments = data;
      this.moments = data;
    });
  }
}
