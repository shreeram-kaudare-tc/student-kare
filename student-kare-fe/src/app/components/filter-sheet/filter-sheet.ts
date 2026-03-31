import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface FilterState {
  price: { min: number; max: number };
  brands: string[];
  schools: string[];
  grades: string[];
  houses: string[];
  gender: string;
}

interface CheckItem { name: string; checked: boolean; color?: string; }

@Component({
  selector: 'app-filter-sheet',
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-sheet.html',
  styleUrl: './filter-sheet.css',
})
export class FilterSheet implements OnChanges {
  @Input() visible = false;
  @Output() closed = new EventEmitter<void>();
  @Output() applied = new EventEmitter<FilterState>();

  isClosing = false;
  activeSection = 'price';

  // Price
  readonly priceAbsMin = 18;
  readonly priceAbsMax = 75;
  priceMin = 20;
  priceMax = 60;

  // Brands
  brandSearch = '';
  brands: CheckItem[] = [
    { name: "Levi's", checked: false },
    { name: 'Kare', checked: false },
  ];

  // School
  schoolSearch = '';
  schools: CheckItem[] = [
    { name: 'VIBGYOR Roots and Rise – Nashik', checked: false },
    { name: 'VIBGYOR Kids and High – HSR Layout', checked: false },
    { name: 'VIBGYOR Roots and Rise – Indore', checked: false },
    { name: 'VIBGYOR Kids and High – Jakkur', checked: false },
    { name: 'VIBGYOR Kids and High – Lucknow', checked: false },
    { name: 'VIBGYOR Roots and Rise – Panathur', checked: false },
    { name: 'VIBGYOR Kids and High – Magarpatta', checked: false },
    { name: 'VIBGYOR Kids and High – Malad East', checked: false },
    { name: 'VIBGYOR Kids and High – Vadodara', checked: false },
  ];

  // Grade
  gradeSearch = '';
  grades: CheckItem[] = [
    'Grade I','Grade II','Grade III','Grade IV','Grade V','Grade VI',
    'Grade VII','Grade VIII','Grade IX','Grade X','Grade XI','Grade XII','Nursery',
  ].map(n => ({ name: n, checked: false }));

  // House
  houses: CheckItem[] = [
    { name: 'Air',   color: '#E07B39', checked: false },
    { name: 'Earth', color: '#4CAF50', checked: false },
    { name: 'Fire',  color: '#E53935', checked: false },
    { name: 'Water', color: '#3B5ED6', checked: false },
  ];

  // Gender
  gender = '';

  sections = [
    { key: 'price',  label: 'Price'  },
    { key: 'brands', label: 'Brands' },
    { key: 'school', label: 'School' },
    { key: 'grade',  label: 'Grade'  },
    { key: 'house',  label: 'House'  },
    { key: 'gender', label: 'Gender' },
  ];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['visible']?.currentValue === true) {
      this.isClosing = false;
    }
  }

  close() {
    this.isClosing = true;
    setTimeout(() => { this.closed.emit(); }, 320);
  }

  clearAll() {
    this.priceMin = this.priceAbsMin;
    this.priceMax = this.priceAbsMax;
    this.brands.forEach(b => b.checked = false);
    this.schools.forEach(s => s.checked = false);
    this.grades.forEach(g => g.checked = false);
    this.houses.forEach(h => h.checked = false);
    this.gender = '';
    this.brandSearch = '';
    this.schoolSearch = '';
    this.gradeSearch = '';
  }

  apply() {
    this.applied.emit({
      price: { min: this.priceMin, max: this.priceMax },
      brands:  this.brands.filter(b => b.checked).map(b => b.name),
      schools: this.schools.filter(s => s.checked).map(s => s.name),
      grades:  this.grades.filter(g => g.checked).map(g => g.name),
      houses:  this.houses.filter(h => h.checked).map(h => h.name),
      gender:  this.gender,
    });
    this.close();
  }

  // Range slider helpers
  get minThumbPct() {
    return ((this.priceMin - this.priceAbsMin) / (this.priceAbsMax - this.priceAbsMin)) * 100;
  }
  get maxThumbPct() {
    return ((this.priceMax - this.priceAbsMin) / (this.priceAbsMax - this.priceAbsMin)) * 100;
  }
  onMinChange(val: number) {
    if (val < this.priceMax - 1) this.priceMin = val;
  }
  onMaxChange(val: number) {
    if (val > this.priceMin + 1) this.priceMax = val;
  }

  filteredBrands()  { return this.brands.filter(b  => b.name.toLowerCase().includes(this.brandSearch.toLowerCase())); }
  filteredSchools() { return this.schools.filter(s => s.name.toLowerCase().includes(this.schoolSearch.toLowerCase())); }
  filteredGrades()  { return this.grades.filter(g  => g.name.toLowerCase().includes(this.gradeSearch.toLowerCase())); }
}
