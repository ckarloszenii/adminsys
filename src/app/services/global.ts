import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import swal from 'sweetalert2';

const flatten1 = filter => {
  const filters = filter.filters;
  if (filters) {
    return filters.reduce((acc, curr) => acc.concat(curr.filters ? flatten1(curr) : [curr]), []);
  }
  return [];
};
const myToast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 4000
});
const swall = swal.mixin({
  toast: false,
  position: 'center',
  showConfirmButton: true,
  timer: 4000,
});
const swalTxt = swal.mixin({
  input: 'textarea', inputPlaceholder: 'Razón de la cancelación...', showCancelButton: true, showConfirmButton: true,
  showLoaderOnConfirm: true,
  preConfirm: (razon) => {
    if (!razon) {
      swal.showValidationMessage(`Ingrese una razón!`);
    }
  }
});

export const GLOBAL = {
  url: environment.apiUrl,
  urlPhp: environment.ipPhp,
  ipserver: environment.ipServer,
  iplogin: environment.ipLogin,
  iplogout: environment.ipLogout,
  ipLoginProgress: environment.ipLoginProgress,
  char174: String.fromCharCode(174),
  char169: String.fromCharCode(169),
  noRecords: 'No hay resultados para mostrar',
  textError: 'Algo salio mal.',
  textSuccess: 'Bien! Registro actualizado.',
  textDeleteSuccess: 'Registro eliminado.',
  errorPdf: ['Error al generar PDF!.', 'Intentelo nuevamente o reportelo al administrador del sistema'],
  formatIso: 'YYYY-MM-DD',
  toast: myToast,
  swal: swall,
  swalTxt: swalTxt,
  loadingColor: { primaryColour: '#3F51B5', secondaryColour: '#3F51B5', tertiaryColour: '#3F51B5', backdropBorderRadius: '3px' },
  flatten: flatten1,
  httpOptions: {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  },
  pageSize: 10,
  personas: [
    'Sencillo',
    'Doble',
    'Triple',
    'Cuádruple',
    'Quíntuple',
    'Séxtuple',
    'Séptuple',
    'Óctuple',
    'Nónuplo',
    'Décuplo',
  ],
  profileImg: 'assets/images/avatars/avatar1.png'
};

