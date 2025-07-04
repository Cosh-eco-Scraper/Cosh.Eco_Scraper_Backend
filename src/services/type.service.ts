import { TypeRepository } from '../repositories/type.repository';

const TypeService = {
  async findOrCreateType(typeName: string, description?: string) {
    return await TypeRepository.findOrCreateType(typeName, description);
  },

  async addTypeToStore(storeId: number, typeId: number) {
    return await TypeRepository.addTypeToStore(storeId, typeId);
  },
  async getAllTypes() {
    return await TypeRepository.getAllTypes();
  },
};

export default TypeService;
