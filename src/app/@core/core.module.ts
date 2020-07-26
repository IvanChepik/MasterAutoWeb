import { PatientsService } from './backend/common/services/patients.service';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule } from '@nebular/auth';

import { throwIfAlreadyLoaded } from './module-import-guard';
import {
  AnalyticsService,
  LayoutService,
  PlayerService,
  StateService,
} from './utils';

import { CommonBackendModule } from './backend/common/common-backend.module';
import { UserStore } from './stores/user.store';
import { UsersService } from './backend/common/services/users.service';
import { InitUserService } from '../@theme/services/init-user.service';
import { DateService } from './backend/common/services/date.service';

export const NB_CORE_PROVIDERS = [
  ...CommonBackendModule.forRoot().providers,

  PatientsService,
  DateService,
  AnalyticsService,
  LayoutService,
  PlayerService,
  StateService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
        UserStore,
        UsersService,
        InitUserService,
      ],
    };
  }
}
