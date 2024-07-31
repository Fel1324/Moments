import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../interfaces/Moment';

@Component({
  selector: 'app-moment',
  standalone: true,
  imports: [
    NgIf,
  ],
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css'
})
export class MomentComponent implements OnInit {
  moment?: Moment;

  constructor(private momentService: MomentService, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.momentService.getMoment(id).subscribe(item => this.moment = item.data);
  }
}
