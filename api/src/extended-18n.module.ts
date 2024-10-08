/*
 * Copyright © 2024 Hexastack. All rights reserved.
 *
 * Licensed under the GNU Affero General Public License v3.0 (AGPLv3) with the following additional terms:
 * 1. The name "Hexabot" is a trademark of Hexastack. You may not use this name in derivative works without express written permission.
 * 2. All derivative works must include clear attribution to the original creator and software, Hexastack and Hexabot, in a prominent location (e.g., in the software's "About" section, documentation, and README file).
 * 3. SaaS Restriction: This software, or any derivative of it, may not be used to offer a competing product or service (SaaS) without prior written consent from Hexastack. Offering the software as a service or using it in a commercial cloud environment without express permission is strictly prohibited.
 */

import { DynamicModule, Global, Inject, Module } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import {
  I18N_OPTIONS,
  I18N_TRANSLATIONS,
  I18nModule,
  I18nOptions,
  I18nTranslation,
} from 'nestjs-i18n';
import { Observable } from 'rxjs';

import { ExtendedI18nService } from './extended-i18n.service';

@Global()
@Module({})
export class ExtendedI18nModule extends I18nModule {
  constructor(
    i18n: ExtendedI18nService,
    @Inject(I18N_TRANSLATIONS)
    translations: Observable<I18nTranslation>,
    @Inject(I18N_OPTIONS) i18nOptions: I18nOptions,
    adapter: HttpAdapterHost,
  ) {
    super(i18n, translations, i18nOptions, adapter);
  }

  static forRoot(options: I18nOptions): DynamicModule {
    const { providers, exports } = super.forRoot(options);
    return {
      module: ExtendedI18nModule,
      providers: providers.concat(ExtendedI18nService),
      exports: exports.concat(ExtendedI18nService),
    };
  }
}
