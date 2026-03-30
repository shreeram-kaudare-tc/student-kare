import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-chip',
  imports: [CommonModule],
  templateUrl: './category-chip.html',
  styleUrl: './category-chip.css',
})
export class CategoryChip {
  @Input() label: string = '';
  @Input() active: boolean = false;
  @Output() chipClick = new EventEmitter<string>();
  onClick() { this.chipClick.emit(this.label); }
}