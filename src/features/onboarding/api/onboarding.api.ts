import api from '@/shared/api/http';

// #region --- Типы и интерфейсы ---

// TODO: Этот тип должен быть расширен по мере добавления полей
export interface UpdateMasterProfileDto {
    // На данный момент поля не определены, так как они собираются динамически
    // на разных шагах онбординга. Этот тип будет расширяться.
    [key: string]: any;
}

// #endregion

/**
 * "Чистая" асинхронная функция для отправки данных профиля мастера на сервер.
 * Она не зависит от React или React Query и может быть использована где угодно.
 *
 * @param data - Объект с данными профиля мастера.
 * @returns - Промис с ответом от сервера.
 */
export const updateMasterProfile = (data: UpdateMasterProfileDto): Promise<unknown> => {
    // TODO: Заменить на реальный эндпоинт, когда он будет готов
    console.log('Отправка данных на /api/master/profile:', data);

    // Симулируем задержку сети для демонстрации спиннера
    return new Promise(resolve => setTimeout(() => {
        // Симулируем успешный ответ
        resolve({ success: true, message: 'Профиль успешно обновлен' });
        // Для симуляции ошибки можно использовать:
        // reject(new Error('Ошибка сервера при обновлении профиля'));
    }, 1500));

    // --- РЕАЛЬНЫЙ КОД ДЛЯ ЗАПРОСА ---
    /*
    return api.patch('/master/profile', data);
    */
};
