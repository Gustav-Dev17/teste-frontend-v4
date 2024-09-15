import equipments from '../data/equipment.json';
import equipmentModels from '../data/equipmentModel.json';
import equipmentPositionsHistory from '../data/equipmentPositionHistory.json';
import equipmentStates from '../data/equipmentState.json';
import equipmentStatesHistory from '../data/equipmentStateHistory.json';

export const dataService = {
  getEquipments() {
    return equipments;
  },
  getEquipmentModels() {
    return equipmentModels;
  },
  getEquipmentPositionHistory() {
    return equipmentPositionsHistory;
  },
  getEquipmentStates() {
    return equipmentStates;
  },
  getEquipmentStateHistory() {
    return equipmentStatesHistory;
  },
};
