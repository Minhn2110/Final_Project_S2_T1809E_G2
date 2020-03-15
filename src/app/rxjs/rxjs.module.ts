import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsExampleComponent } from './rxjs-example/rxjs-example.component';

@NgModule({
    declarations: [RxjsExampleComponent],
    imports: [ CommonModule, RxjsRoutingModule],
    exports: [],
    providers: [],
})
export class RxjsModule {}