(() => {
  "use strict";

  const $inputTask = document.getElementById("js-input-task");
  const $addTaskBtn = document.getElementById("js-addTask-trigger");
  const $addTaskTarget = document.getElementById("js-addTask-target");

  // 削除ボタンを押したときの処理を実行する関数
  const removeTask = ($removeBtn) => {
    // 削除ボタンの親要素であるli要素を取得する
    const $targetTask = $removeBtn.closest("li");
    // ul要素の子要素であるli要素を削除する
    $addTaskTarget.removeChild($targetTask);
  };
  
  const doneTask = ($doneBtn) => {
    const $targetTask = $doneBtn.closest("li");
    if ($targetTask.className === "text-decoration-line-through") {
      $targetTask.classList.remove("text-decoration-line-through");
    } else {
      $targetTask.classList.add("text-decoration-line-through");
    }
  };

  // inputにテキストを入力して登録ボタンを押したときの処理を実行する関数
  const addTask = (task) => {
    const $listItem = document.createElement("li");
    const $removeBtn = document.createElement("button");
    const $doneBtn = document.createElement("button");

    $removeBtn.classList.add(
      "btn",
      "btn-outline-danger",
      "btn-sm",
      "ms-3",
      "mt-1"
    );
    $removeBtn.innerText = "削除";
    $removeBtn.addEventListener("click", () => {
      removeTask($removeBtn);
    });

    $doneBtn.classList.add("btn", "btn-outline-secondary", "btn-sm", "ms-2", "mt-1");
    $doneBtn.innerText = "完了";
    $doneBtn.addEventListener("click", () => {
      doneTask($doneBtn);
    });

    $listItem.innerText = task;
    $listItem.appendChild($removeBtn);
    $listItem.appendChild($doneBtn);
    $addTaskTarget.appendChild($listItem);
  };

  // タスクボタンを押したときの処理
  $addTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const task = $inputTask.value;
    if (task !== "") {
      addTask(task);
      $inputTask.value = "";
    }
  });

})();
