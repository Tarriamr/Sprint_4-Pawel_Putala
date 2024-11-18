const $newTaskTitle = document.querySelector(`#newTaskTitle`);
const $buttonAddTask = document.querySelector(`#buttonAddTask`);
const $elementUl = document.querySelector(`#tasks`);

const newButton = function (parent, buttonName, buttonClickFunction) {
    const $createButton = document.createElement(`button`);
    $createButton.textContent = buttonName;
    $createButton.style.margin = `2px 2px 2px 4px`;
    $createButton.onclick = buttonClickFunction;
    parent.append($createButton);
}

const newLi = function (task) {
    const $createLi = document.createElement(`li`);
    const $createInput = document.createElement(`input`);
    let $createSpan = document.createElement(`span`);
    $createInput.placeholder = 'Dodaj lub usuń zadanie.'
    $createInput.style.display = `none`;
    $createSpan.textContent = task;
    $createLi.append($createInput, $createSpan);
    newButton($createLi, `Edytuj`, editLi);
    newButton($createLi, `Zatwierdź zmiany`, saveLi);
    newButton($createLi, `Usuń`, deleteLi);
    $elementUl.appendChild($createLi);
    const buttons = $elementUl.lastElementChild.querySelectorAll(`button`)
    buttons[1].style.display = `none`;
}

const inputChecker = function (taskSource) {
    if (taskSource.value.trim() === ``) {
        alert(`Nazwa zadania nie może być pusta.`);
        taskSource.value = ``;
        return false;
    } else {
        return true;
    }
}

const editLi = function () {
    const elements = this.parentElement.children;
    elements[0].style.display = ``;
    elements[0].value = elements[1].textContent;
    elements[1].textContent = ``;
    elements[1].style.display = `none`
    elements[2].style.display = `none`;
    elements[3].style.display = ``;
}

const saveLi = function () {
    const elements = this.parentElement.children;
    if (inputChecker(elements[0])) {
        elements[1].textContent = elements[0].value;
        elements[1].style.display = ``;
        elements[0].value = ``;
        elements[0].style.display = `none`;
        elements[2].style.display = ``;
        elements[3].style.display = `none`;
    }
}

const deleteLi = function () {
    this.parentElement.remove();
}

$buttonAddTask.onclick = function () {
    if (inputChecker($newTaskTitle)) {
        newLi($newTaskTitle.value.trim());
        $newTaskTitle.value = ``;
        $newTaskTitle.placeholder = `Dodaj nowe zadanie`;
    }
}
