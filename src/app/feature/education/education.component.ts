import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
title: string = "Education";
type: string = "High School";
name: string = "Angelic Academy";
gradYear: number = 1;
}
