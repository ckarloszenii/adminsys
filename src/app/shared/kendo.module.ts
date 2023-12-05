// Modulos Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Modulos Kendo UI For Angular
import { DialogModule, WindowModule } from '@progress/kendo-angular-dialog';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { CheckBoxModule, NumericTextBoxModule, TextBoxModule } from '@progress/kendo-angular-inputs';
import { MaskedTextBoxModule } from '@progress/kendo-angular-inputs';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { CalendarModule } from '@progress/kendo-angular-dateinputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ExcelModule, GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { MultiCheckFilterComponent } from '../components/multicheck-filter.component';
import { InputFilterComponent } from '../components/input-filter.component';
import { DateRangeFilterComponent } from '../components/date-range-filter.component';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
@NgModule({
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    ButtonsModule,
    DropDownsModule,
    DateInputsModule,
    GridModule,
    LayoutModule,
    IntlModule,
    CalendarModule,
    MaskedTextBoxModule,
    NumericTextBoxModule,
    InputsModule,
    DialogModule,
    WindowModule,
    PDFExportModule,
    PDFModule,
    OrderModule,
    DatePickerModule,
    ExcelModule,
    SchedulerModule,
    // QRCodeModule
  ],
  declarations: [
    MultiCheckFilterComponent,
    InputFilterComponent,
    DateRangeFilterComponent
  ],
  exports: [
    InputFilterComponent,
    MultiCheckFilterComponent,
    DateRangeFilterComponent,
    ButtonsModule,
    DropDownsModule,
    DateInputsModule,
    GridModule,
    LayoutModule,
    IntlModule,
    CheckBoxModule,
    TextBoxModule,
    CalendarModule,
    MaskedTextBoxModule,
    NumericTextBoxModule,
    InputsModule,
    DialogModule,
    WindowModule,
    PDFExportModule,
    PDFModule,
    OrderModule,
    DatePickerModule,
    ExcelModule,
    SchedulerModule,
    // QRCodeModule
  ],
  providers: []
})
export class KendouiModule {
}
