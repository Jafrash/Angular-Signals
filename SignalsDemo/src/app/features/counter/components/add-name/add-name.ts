import { Component, inject } from '@angular/core';
import { NamesService } from '../../services/names-service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-add-name',
  imports: [FormsModule],
  templateUrl: './add-name.html',
  styleUrls: ['./add-name.css'],
})
export class AddName {
  private namesService=inject(NamesService);
  public name:string='';

 
  addName(name:string){
    this.namesService.addName(name);
  }
}
