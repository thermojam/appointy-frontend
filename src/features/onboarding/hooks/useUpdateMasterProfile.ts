'use client';

import { useMutation } from '@tanstack/react-query';
// ИЗМЕНЕНИЕ: Исправлен путь импорта
import { updateMasterProfile, UpdateMasterProfileDto } from '../api/onboarding.api';

/**
 * Кастомный хук для обновления профиля мастера.
 * Он предоставляет доступ к состоянию мутации (isPending, isError, etc.)
 * и функции mutate для вызова API.
 *
 * Обработчики onSuccess и onError передаются непосредственно в
 * компонент при вызове mutate, что делает хук более универсальным.
 */
export const useUpdateMasterProfile = () => {
    return useMutation<unknown, Error, UpdateMasterProfileDto>({
        mutationKey: ['update-master-profile'],
        mutationFn: updateMasterProfile,
    });
};
