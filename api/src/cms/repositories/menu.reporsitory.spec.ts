/*
 * Copyright © 2024 Hexastack. All rights reserved.
 *
 * Licensed under the GNU Affero General Public License v3.0 (AGPLv3) with the following additional terms:
 * 1. The name "Hexabot" is a trademark of Hexastack. You may not use this name in derivative works without express written permission.
 * 2. All derivative works must include clear attribution to the original creator and software, Hexastack and Hexabot, in a prominent location (e.g., in the software's "About" section, documentation, and README file).
 * 3. SaaS Restriction: This software, or any derivative of it, may not be used to offer a competing product or service (SaaS) without prior written consent from Hexastack. Offering the software as a service or using it in a commercial cloud environment without express permission is strictly prohibited.
 */

import { EventEmitter2 } from '@nestjs/event-emitter';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';

import { LoggerModule } from '@/logger/logger.module';
import {
  installMenuFixtures,
  rootMenuFixtures,
} from '@/utils/test/fixtures/menu';
import {
  closeInMongodConnection,
  rootMongooseTestModule,
} from '@/utils/test/test';

import { MenuRepository } from './menu.repository';
import { MenuModel } from '../schemas/menu.schema';
import { MenuType } from '../schemas/types/menu';

describe('MenuRepository', () => {
  let menuRepository: MenuRepository;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(installMenuFixtures),
        MongooseModule.forFeature([MenuModel]),
        LoggerModule,
      ],
      providers: [MenuRepository, EventEmitter2],
    }).compile();
    menuRepository = module.get<MenuRepository>(MenuRepository);
  });
  afterAll(async () => {
    await closeInMongodConnection();
  });

  afterEach(jest.clearAllMocks);

  describe('findOneAndPopulate', () => {
    it('should return a populated version of the document', async () => {
      const parent = await menuRepository.create({
        title: 'Test1',
        type: MenuType.nested,
      });
      const child = await menuRepository.create({
        ...rootMenuFixtures[0],
        parent: parent.id,
      });
      const result = await menuRepository.findOneAndPopulate(child.id);
      expect(result).toEqual({ ...child, parent });
    });
  });
});