import { Component } from '@angular/core';
import { Person } from '../../model/person';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
  title: string = "Personal Info";
  person: Person = new Person("Beelz", "666 Brimstone Ct.", "666-6666", "fallenangel@gmail.com");
}
