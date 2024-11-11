import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent implements OnInit {

  title: string = "Work Experience";
  // experience: string[] =
  //   ["Angel, Betrayed, start of time",
  //     "Devil, Grand Poo-Bah, year 1-present"
  //   ];
  experience: string[] | undefined;

  ngOnInit(): void {
    this.experience = ["Angel, Betrayed, start of time",
      "Devil, Grand Poo-Bah, year 1-present"
    ];
  }

  printToConsole(): void {
    console.log("Work XP Component - print to console method");
    console.log(this.experience);
  }
}
