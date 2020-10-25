import { setItemAction, resetItemAction } from '../../shared/commonUpdateState';
const initialState = {
    medicine: null,
    medicineList: [],
    action: {
        type: null,
        isSuccess: false,
        data: null
    },
    isLoading: false
}
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'SET_MEDICINE_ACTION': return setItemAction(state, payload, 'MEDICINE');
        case 'RESET_MEDICINE_ACTION': return resetItemAction(state, 'MEDICINE');
        default: return state
    }
}