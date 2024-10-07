// 4. Пересечение двух массивов
// Реализуйте функцию intersection, которая принимает два массива чисел и возвращает массив чисел, присутствующих в первом и во втором массивах.

// Ошибки, которые должны быть обработаны:

// Не переданы два аргумента. Код ошибки INVALID_ARGUMENTS_COUNT.
// Хотя бы один из аргументов функции не массив. Код ошибки INVALID_ARGUMENT.
// Хотя бы один из элементов массива не типа number. Код ошибки INVALID_ELEMENT_IN_ARRAY.
// Примеры использования:

// intersection([1], [2]);            // []
// intersection([1, 2], [3, 2, 1]);   // [1, 2]
// intersection([1, 1], [1, 1]);      // [1]
// intersection([1, 2, 1], [1]);      // [1]
// intersection([], []);              // []
// intersection()                     // ошибка с кодом INVALID_ARGUMENTS_COUNT
// intersection([], '[]')             // ошибка с кодом INVALID_ARGUMENT
// intersection([], [1, '2'])         // ошибка с кодом INVALID_ELEMENT_IN_ARRAY
