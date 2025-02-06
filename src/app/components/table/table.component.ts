import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalsComponent } from '../modals/modals.component';
@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  data = [
    { class: "الشركة القابضة", assignmentDate: "01/12/2024", responsible: "عبدالرحيم إسماعيل", freeMinutes: "122" },
    { class: "الشركة القابضة", assignmentDate: "01/12/2024", responsible: "عبدالرحيم إسماعيل", freeMinutes: "122" }
  ];

  constructor(public dialog: MatDialog) {}

  openModal() {
    this.dialog.open(ModalsComponent, {
      width: '400px'
    });
  }
}
