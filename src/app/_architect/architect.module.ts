import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { AgmCoreModule } from '@agm/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { NgxLoadingModule } from 'ngx-loading';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ClipboardModule } from 'ngx-clipboard';
import { ColorPickerModule } from 'ngx-color-picker';
import { GaugeModule } from 'angular-gauge';

import { OptionsDrawerComponent } from './ThemeOptions/options-drawer/options-drawer.component';
import { PageTitleComponent } from './Layout/Components/page-title/page-title.component';
import { HeaderComponent } from './Layout/Components/header/header.component';
// import { DotsComponent } from './Layout/Components/header/elements/dots/dots.component';
// import { SearchBoxComponent } from './Layout/Components/header/elements/search-box/search-box.component';
// import { MegamenuComponent } from './Layout/Components/header/elements/mega-menu/mega-menu.component';
// import { MegapopoverComponent } from './Layout/Components/header/elements/mega-menu/elements/megapopover/megapopover.component';
// import { UserBoxComponent } from './Layout/Components/header/elements/user-box/user-box.component';
// import { DrawerComponent } from './Layout/Components/header/elements/drawer/drawer.component';
import { SidebarComponent } from './Layout/Components/sidebar/sidebar.component';
import { LogoComponent } from './Layout/Components/sidebar/elements/logo/logo.component';
// import { FooterComponent } from './Layout/Components/footer/footer.component';
// import { FooterDotsComponent } from './Layout/Components/footer/elements/footer-dots/footer-dots.component';
// import { FooterMenuComponent } from './Layout/Components/footer/elements/footer-menu/footer-menu.component';
import { ConfigActions } from './ThemeOptions/store/config.actions';
import { ThemeOptions } from './theme-options';
import { MenuPmsService } from '../services/menu.service';
import { ArchitectUIState, rootReducer } from './ThemeOptions/store';
import { SignaturePadModule } from 'angular2-signaturepad';
import { WebcamModule } from 'ngx-webcam';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTreeModule } from '@angular/material/tree';
import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';
import { AppsLayoutComponent } from './Layout/apps-layout/apps-layout.component';
import { PagesLayoutComponent } from './Layout/pages-layout/pages-layout.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    declarations: [
        // LAYOUT
        BaseLayoutComponent,
        AppsLayoutComponent,
        PagesLayoutComponent,
        PageTitleComponent,
        OptionsDrawerComponent,
        // HEADER

        HeaderComponent,
        // SIDEBAR
        SidebarComponent,
        LogoComponent,
    ],
    imports: [
        CommonModule,

        //  -------------------------
        NgReduxModule,
        LoadingBarRouterModule,

        // Angular Bootstrap Components

        PerfectScrollbarModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        NgBootstrapFormValidationModule.forRoot(),
        NgxLoadingModule.forRoot({}),
        RoundProgressModule,
        SlickCarouselModule,
        AngularEditorModule,
        HttpClientModule,
        ClipboardModule,
        ColorPickerModule,
        WebcamModule,
        // Charts
        GaugeModule.forRoot(),

        // Angular Material Components

        MatCheckboxModule,
        MatButtonModule,
        // MatBadgeModule,
        MatInputModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatRadioModule,
        MatSelectModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatStepperModule,
        MatTabsModule,
        MatExpansionModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        // MatDialogModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule, // Paginación
        MatTreeModule, // Dividir en arbol tu form
        MatRippleModule // Efecto al hacer click
    ],
    providers: [
        {
            provide:
                PERFECT_SCROLLBAR_CONFIG,
            // DROPZONE_CONFIG,
            useValue:
                DEFAULT_PERFECT_SCROLLBAR_CONFIG,
            // DEFAULT_DROPZONE_CONFIG,
        },
        ConfigActions,
        ThemeOptions,
        MenuPmsService
    ],
    exports: [
        CommonModule,

        // LAYOUT

        BaseLayoutComponent,
        AppsLayoutComponent,
        PagesLayoutComponent,
        PageTitleComponent,
        OptionsDrawerComponent,
        // HEADER

        HeaderComponent,
        // SIDEBAR

        SidebarComponent,
        LogoComponent,

        // FOOTER
        //  -------------------------
        NgReduxModule,
        LoadingBarRouterModule,

        // Angular Bootstrap Components

        PerfectScrollbarModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        NgBootstrapFormValidationModule,
        NgxLoadingModule,
        RoundProgressModule,
        SlickCarouselModule,
        AgmCoreModule,
        AngularEditorModule,
        HttpClientModule,
        ClipboardModule,
        ColorPickerModule,
        WebcamModule,

        // Charts
        SignaturePadModule,
        GaugeModule,

        // Angular Material Components

        MatCheckboxModule,
        MatButtonModule,
        // MatBadgeModule,
        MatInputModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatRadioModule,
        MatSelectModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatStepperModule,
        MatTabsModule,
        MatExpansionModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        // MatDialogModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatTreeModule,
        MatRippleModule
    ]
})
export class ArchitectModule {
    constructor(private ngRedux: NgRedux<ArchitectUIState>,
        private devTool: DevToolsExtension) {

        this.ngRedux.configureStore(
            rootReducer,
            {} as ArchitectUIState,
            [],
            [devTool.isEnabled() ? devTool.enhancer() : f => f]
        );

    }
}
