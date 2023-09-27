$(document).ready(function () {
    $("#addTask").on("click", function () {
        const taskText = $("#taskInput").val();
        if (taskText !== "") {
            const listItem = $("<li>").text(taskText);
            const deleteButton = $("<button>").text("Delete").addClass("delete");
            listItem.append(deleteButton);
            $("#taskList").append(listItem);
            $("#taskInput").val(""); // Clear input

        }
    });





    // delete button 




    $("#taskList").on("click", ".delete", function () {
        $(this).parent().remove();
    });


    // example button

    // $("#jitendra").on("click", ".example", function () {
    //     $(this).parent().hide();
    // });


});


