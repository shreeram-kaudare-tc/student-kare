import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  @Input() placeholder: string = 'Search products...';
  @Output() searchChange = new EventEmitter<string>();
  query: string = '';
  onSearch() { this.searchChange.emit(this.query); }
  onClear()  { this.query = ''; this.searchChange.emit(''); }
}