import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NamesService } from '../../services/names-service';

@Component({
  selector: 'app-edit-name',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-name.html',
  styleUrls: ['./edit-name.css'],
})
export class EditName {
  @Input() public name = '';
  public editing = false;
  public value = '';
  private namesService = inject(NamesService);

  startEdit(){
    this.value = this.name;
    this.editing = true;
  }

  cancel(){
    this.editing = false;
  }

  save(){
    const trimmed = this.value?.trim();
    if(trimmed && trimmed !== this.name){
      this.namesService.editName(this.name, trimmed);
    }
    this.editing = false;
  }
}
