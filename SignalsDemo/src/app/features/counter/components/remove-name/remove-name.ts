import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamesService } from '../../services/names-service';

@Component({
  selector: 'app-remove-name',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './remove-name.html',
  styleUrls: ['./remove-name.css'],
})
export class RemoveName {
  private namesService=inject(NamesService);
  @Input() public name:string='';
  
  removeName(name:string){
    this.namesService.removeName(name);
  }
}
