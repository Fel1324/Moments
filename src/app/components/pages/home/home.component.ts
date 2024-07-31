import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
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

  searchTerm: string = '';

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

  search(e: Event): void{
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.moments = this.allMoments.filter(moment =>
      moment.title.toLocaleLowerCase().includes(value)
    );
  }
}
