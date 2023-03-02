import { useDispatch, useSelector } from 'react-redux';
import { baseUrl } from '@/api/baseUrls';
import { 
    onLoadResults,
    onLoadActiveResult,
    onEditResultDetail,
    onEditResult,
    onCleanState,
    onLoadError,
    onLoadingData,
} from '../store/crud';
import { RootState } from '../store';

export const useCrudStore = () => {
    const { rows, row, errorMessage, loadingData } = useSelector((state: RootState) => state.crud);
    const dispatch = useDispatch();

    const startLoadingRows = async (getAllApiUrl: string) => {
        try {
            dispatch(onLoadingData(true));
            const { data } = await baseUrl.get(getAllApiUrl);
        
            dispatch(onLoadResults(data));
            dispatch(onLoadingData(false));
        } catch (error) {
            dispatch(onLoadError('Server internal error'));
            setTimeout(() => {
                dispatch(onCleanState());
            }, 10);
        }
    };

    const startLoadingActiveResult = (activeRowId: number) => {
        dispatch(onLoadingData(true));
        dispatch(onLoadActiveResult(activeRowId));
        dispatch(onLoadingData(false));
    };
    
    const startEditingActiveResult = async (updateOneApiUrl: string, data: Object) => {
        try {
            await baseUrl.put(updateOneApiUrl, data);
    
            dispatch(onEditResultDetail(data));
        } catch (error) {
            dispatch(onLoadError('Server internal error'));
            setTimeout(() => {
                dispatch(onCleanState());
            }, 10);
        }
    };
        
    const startEditingResultStatus = async (updateOneStatusApiUrl: string, row: Object) => {
        try {
            await baseUrl.put(updateOneStatusApiUrl);
        
            dispatch(onEditResult(row));
        } catch (error) {
            dispatch(onLoadError('Server internal error'));
            setTimeout(() => {
                dispatch(onCleanState());
            }, 10);
        }
    };
        
    const startCreating = async (addOneApiUrl: string, data: Object) => {
        try {
        await baseUrl.post(addOneApiUrl, data);
        } catch (error) {
        dispatch(onLoadError('Server internal error'));
        setTimeout(() => {
            dispatch(onCleanState());
        }, 10);
        }
    };

    return {
        rows,
        row,
        errorMessage,
        loadingData,
        startLoadingRows,
        startLoadingActiveResult,
        startEditingActiveResult,
        startEditingResultStatus,
        startCreating,
    };
};