/*
 * Copyright © 2024 Hexastack. All rights reserved.
 *
 * Licensed under the GNU Affero General Public License v3.0 (AGPLv3) with the following additional terms:
 * 1. The name "Hexabot" is a trademark of Hexastack. You may not use this name in derivative works without express written permission.
 * 2. All derivative works must include clear attribution to the original creator and software, Hexastack and Hexabot, in a prominent location (e.g., in the software's "About" section, documentation, and README file).
 * 3. SaaS Restriction: This software, or any derivative of it, may not be used to offer a competing product or service (SaaS) without prior written consent from Hexastack. Offering the software as a service or using it in a commercial cloud environment without express permission is strictly prohibited.
 */

import { EventEmitter2 } from '@nestjs/event-emitter';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';

import {
  installPermissionFixtures,
  permissionFixtures,
} from '@/utils/test/fixtures/permission';
import {
  closeInMongodConnection,
  rootMongooseTestModule,
} from '@/utils/test/test';

import { ModelRepository } from '../repositories/model.repository';
import { PermissionRepository } from '../repositories/permission.repository';
import { RoleRepository } from '../repositories/role.repository';
import { ModelModel } from '../schemas/model.schema';
import { PermissionModel, Permission } from '../schemas/permission.schema';
import { RoleModel } from '../schemas/role.schema';
import { Action } from '../types/action.type';

describe('PermissionRepository', () => {
  let modelRepository: ModelRepository;
  let roleRepository: RoleRepository;
  let permissionRepository: PermissionRepository;
  let permissionModel: Model<Permission>;
  let permission: Permission;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(installPermissionFixtures),
        MongooseModule.forFeature([ModelModel, PermissionModel, RoleModel]),
      ],
      providers: [
        ModelRepository,
        RoleRepository,
        PermissionRepository,
        EventEmitter2,
      ],
    }).compile();
    roleRepository = module.get<RoleRepository>(RoleRepository);
    modelRepository = module.get<ModelRepository>(ModelRepository);
    permissionRepository =
      module.get<PermissionRepository>(PermissionRepository);
    permissionModel = module.get<Model<Permission>>(
      getModelToken('Permission'),
    );
    permission = await permissionRepository.findOne({
      action: Action.CREATE,
    });
  });

  afterAll(async () => {
    await closeInMongodConnection();
  });

  afterEach(jest.clearAllMocks);

  describe('findOneAndPopulate', () => {
    it('should find a permission and populate its role and model', async () => {
      jest.spyOn(permissionModel, 'findById');
      const role = await roleRepository.findOne(permission.role);
      const model = await modelRepository.findOne(permission.model);
      const result = await permissionRepository.findOneAndPopulate(
        permission.id,
      );
      expect(permissionModel.findById).toHaveBeenCalledWith(permission.id);
      expect(result).toEqualPayload({
        ...permissionFixtures.find(({ action }) => action === 'create'),
        role,
        model,
      });
    });
  });

  describe('findAndPopulate', () => {
    it('should find permissions, and for each permission, populate the corresponding role and model', async () => {
      jest.spyOn(permissionModel, 'find');
      const allModels = await modelRepository.findAll();
      const allRoles = await roleRepository.findAll();
      const allPermissions = await permissionRepository.findAll();
      const result = await permissionRepository.findAllAndPopulate();
      const permissionsWithRolesAndModels = allPermissions.reduce(
        (acc, currPermission) => {
          acc.push({
            ...currPermission,
            role: allRoles.find((role) => {
              return role.id === currPermission.role;
            }),

            model: allModels.find((model) => {
              return model.id === currPermission.model;
            }),
          });

          return acc;
        },
        [],
      );
      expect(permissionModel.find).toHaveBeenCalledWith({});
      expect(result).toEqualPayload(permissionsWithRolesAndModels);
    });
  });
});