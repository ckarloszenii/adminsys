import { MessageService } from '@progress/kendo-angular-l10n';

const messages = {
  'kendo.grid.noRecords': 'No hay datos disponibles.',
  'kendo.grid.groupPanelEmpty': 'Arrastre el encabezado de una columna y suéltelo aquí para agrupar por esa columna',
  'kendo.grid.pagerFirstPage': 'Inicio',
  'kendo.grid.pagerPreviousPage': 'Anterior',
  'kendo.grid.pagerNextPage': 'Siguiente',
  'kendo.grid.pagerLastPage': 'Fin',
  'kendo.grid.pagerPage': 'Página',
  'kendo.grid.pagerOf': 'de',
  'kendo.grid.pagerItems': 'registros',
  'kendo.grid.pagerItemsPerPage': 'Registros por página',
  'kendo.grid.filter': 'Filtrar',
  'kendo.grid.filterEqOperator': 'Es igual a',
  'kendo.grid.filterNotEqOperator': 'No es igual a',
  'kendo.grid.filterIsNullOperator': 'Es nulo',
  'kendo.grid.filterIsNotNullOperator': 'No es nulo',
  'kendo.grid.filterIsEmptyOperator': 'Está vacio',
  'kendo.grid.filterIsNotEmptyOperator': 'No esta vacío',
  'kendo.grid.filterStartsWithOperator': 'Inicia con',
  'kendo.grid.filterContainsOperator': 'Contiene',
  'kendo.grid.filterNotContainsOperator': 'No contiene',
  'kendo.grid.filterEndsWithOperator': 'Termina con',
  // 'kendo.grid.filterGteOperator': '',
  // 'kendo.grid.filterGtOperator': '',
  // 'kendo.grid.filterLteOperator': '',
  // 'kendo.grid.filterLtOperator': '',
  // 'kendo.grid.filterIsTrue': 'Es Verdadero',
  // 'kendo.grid.filterIsFalse': 'Es Falso',
  // 'kendo.grid.filterAfterOrEqualOperator': '',
  // 'kendo.grid.filterBooleanAll': '',
  // 'kendo.grid.filterAfterOperator': '',
  // 'kendo.grid.filterBeforeOperator': '',
  // 'kendo.grid.filterBeforeOrEqualOperator': '',
  'kendo.grid.filterFilterButton': 'Filtrar',
  'kendo.grid.filterClearButton': 'Limpiar',
  'kendo.grid.filterAndLogic': 'Y',
  'kendo.grid.filterOrLogic': 'O',
  'kendo.grid.loading': 'Cargando',
  'kendo.grid.columnMenu': 'Dime si vas a volver algun dia',
  'kendo.grid.columns': 'Columnas',
  'kendo.grid.lock': 'Bloquear',
  'kendo.grid.unlock': 'Desbloquear',
  // 'kendo.grid.sortable': '',
  // 'kendo.grid.sortAscending': '',
  // 'kendo.grid.sortDescending': '',
  // 'kendo.grid.sortedAscending': '',
  // 'kendo.grid.sortedDescending': '',
  // 'kendo.grid.sortedDefault': '',
  // 'kendo.grid.columnsApply': '',
  // 'kendo.grid.columnsReset': '',
  // 'kendo.grid.detailExpand': '',
  // 'kendo.grid.detailCollapse': ''
  'kendo.calendar.today': 'Hoy',
  'kendo.datepicker.today': 'Hoy'

};

export class MyMessageService extends MessageService {
  public get(key: string): string {
    return messages[key];
  }
}

