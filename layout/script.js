'use strict';

/**
 * Метод устанавливает необходимые по условию атрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    const actions = {
        1: (elem, td) => {
            const age = Number(td.textContent);
            if (age < 18) {
                elem.style.textDecoration = 'line-through';
            }
        },
        2: (elem, td) => {
            if (td.textContent == 'f') {
                elem.classList.toggle('female', true);
            } else {
                elem.classList.toggle('male', true)
            }
        },
        3: (elem, td) => {
            if (td.dataset.role == 'regular') {
                elem.classList.toggle('regular', true);
            } else if (td.dataset.role == 'admin') {
                elem.classList.toggle('admin', true)
            } else if (!td.hasAttribute('data-role')) {
                elem.hidden = true;
            }
        }
    }

    for (let tr of table.rows) {
        Array.from(tr.cells).forEach((td, index) => {
            const fn = actions[index];
            if (typeof fn === 'function') {
                fn(tr, td);
            }
        });
    }
}
