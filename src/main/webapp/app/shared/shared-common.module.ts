import { NgModule } from '@angular/core';

import { ProhillSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ProhillSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ProhillSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ProhillSharedCommonModule {}
