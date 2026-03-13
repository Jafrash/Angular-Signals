import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamesService } from '../../services/names-service';
import { RemoveName } from '../remove-name/remove-name';
import { EditName } from '../edit-name';

@Component({
  selector: 'app-show-names',
  standalone: true,
  imports: [CommonModule, RemoveName,EditName],
  templateUrl: './show-names.html',
  styleUrls: ['./show-names.css'],
})
export class ShowNames {
  private namesService=inject(NamesService);
  
  showNames(){
    return this.namesService.getNames();
  }
}
